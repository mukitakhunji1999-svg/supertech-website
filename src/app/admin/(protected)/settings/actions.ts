"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin/auth";
import { getSiteSettings, saveSiteSettings } from "@/lib/admin/db";

const settingsSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  tagline: z.string().min(1).max(200),
  email: z.string().email("Must be a valid email"),
  phones: z.array(z.string().min(5)).min(1, "At least one phone is required").max(5),
  whatsapp: z.string().min(5, "WhatsApp number is required"),
  address: z.string().min(1, "Address is required").max(240)
});

export type SettingsFormState = {
  ok?: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

export async function updateSettingsAction(
  _prev: SettingsFormState,
  formData: FormData
): Promise<SettingsFormState> {
  await requireAdmin();

  const phones = formData
    .getAll("phones")
    .map((v) => String(v).trim())
    .filter(Boolean);

  const parsed = settingsSchema.safeParse({
    name: formData.get("name"),
    tagline: formData.get("tagline"),
    email: formData.get("email"),
    phones,
    whatsapp: formData.get("whatsapp"),
    address: formData.get("address")
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Please fix the highlighted fields.", fieldErrors };
  }

  const current = await getSiteSettings();
  await saveSiteSettings({ ...current, ...parsed.data, updatedAt: new Date().toISOString() });

  revalidatePath("/");
  revalidatePath("/admin/settings");
  return { ok: true };
}
