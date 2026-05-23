"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin/auth";
import {
  deleteProduct,
  getProductsData,
  saveProductImage,
  upsertProduct,
  type Product
} from "@/lib/admin/db";

const productSchema = z.object({
  id: z
    .string()
    .min(1, "ID is required")
    .max(80)
    .regex(/^[a-z0-9-]+$/i, "ID must be letters, numbers and hyphens only"),
  tabId: z.string().min(1, "Category is required"),
  order: z.coerce.number().int().min(0).max(9999),
  title: z.string().min(1, "Title is required").max(120),
  description: z.string().min(1, "Description is required").max(500),
  imageSrc: z.string().min(1, "Image is required"),
  imageAlt: z.string().min(1).max(160),
  href: z.string().min(1, "Link is required").max(300)
});

export type ProductFormState = {
  ok?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof Product, string>>;
};

async function persistImage(formData: FormData, fallback: string, productId: string): Promise<string> {
  const file = formData.get("imageFile");
  if (file instanceof File && file.size > 0) {
    if (file.size > 5 * 1024 * 1024) throw new Error("Image must be 5MB or smaller.");
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) throw new Error("Image must be JPG / PNG / WEBP / GIF.");
    return saveProductImage(file, productId);
  }
  return fallback;
}

export async function createProductAction(
  _prev: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  await requireAdmin();

  const existingImage = String(formData.get("imageSrc") ?? "");
  const id = String(formData.get("id") ?? "").trim().toLowerCase();

  let imageSrc = existingImage;
  try {
    imageSrc = await persistImage(formData, existingImage, id || "product");
  } catch (e) {
    return { error: (e as Error).message };
  }

  const parsed = productSchema.safeParse({
    id,
    tabId: formData.get("tabId"),
    order: formData.get("order"),
    title: formData.get("title"),
    description: formData.get("description"),
    imageSrc,
    imageAlt: formData.get("imageAlt") || formData.get("title"),
    href: formData.get("href")
  });

  if (!parsed.success) {
    const fieldErrors: ProductFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof Product;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Please fix the highlighted fields.", fieldErrors };
  }

  const data = await getProductsData();
  if (data.products.some((p) => p.id === parsed.data.id)) {
    return { error: `A product with id "${parsed.data.id}" already exists. Pick a different ID.` };
  }

  await upsertProduct(parsed.data);
  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function updateProductAction(
  _prev: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "").trim().toLowerCase();
  const existingImage = String(formData.get("imageSrc") ?? "");

  let imageSrc = existingImage;
  try {
    imageSrc = await persistImage(formData, existingImage, id || "product");
  } catch (e) {
    return { error: (e as Error).message };
  }

  const parsed = productSchema.safeParse({
    id,
    tabId: formData.get("tabId"),
    order: formData.get("order"),
    title: formData.get("title"),
    description: formData.get("description"),
    imageSrc,
    imageAlt: formData.get("imageAlt") || formData.get("title"),
    href: formData.get("href")
  });

  if (!parsed.success) {
    const fieldErrors: ProductFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof Product;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Please fix the highlighted fields.", fieldErrors };
  }

  await upsertProduct(parsed.data);
  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProductAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  await deleteProduct(id);
  revalidatePath("/");
  revalidatePath("/admin/products");
}
