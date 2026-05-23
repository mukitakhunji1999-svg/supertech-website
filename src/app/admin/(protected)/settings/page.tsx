import { getSiteSettings } from "@/lib/admin/db";
import { SettingsForm } from "@/components/admin/settings-form";
import { updateSettingsAction } from "./actions";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();
  return <SettingsForm initial={settings} action={updateSettingsAction} />;
}
