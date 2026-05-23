import Image from "next/image";
import { redirect } from "next/navigation";
import { isAuthenticated, createSession, verifyPassword } from "@/lib/admin/auth";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Sign in · SUPERTECH Admin",
  robots: { index: false }
};

async function loginAction(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    redirect("/admin/login?error=1");
  }
  await createSession();
  redirect("/admin");
}

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAuthenticated()) redirect("/admin");
  const sp = await searchParams;
  const hasError = sp.error === "1";

  return (
    <div className="grid min-h-dvh place-items-center bg-[radial-gradient(120%_120%_at_50%_30%,#eaf4ff_0%,#f5faff_45%,#ffffff_100%)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_48px_rgba(15,108,189,0.12)]">
        <div className="mb-6 flex items-center gap-3">
          <Image src={siteConfig.logoPath} alt="SUPERTECH" width={48} height={48} className="h-12 w-12 object-contain" />
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Admin Console</p>
            <h1 className="font-display text-lg font-extrabold text-slate-900">SUPERTECH WATER SOLUTION</h1>
          </div>
        </div>
        <form action={loginAction} className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-slate-700">Admin password</span>
            <input
              autoFocus
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </label>
          {hasError && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 px-4 py-2.5 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] transition hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98]"
          >
            Sign in
          </button>
          <p className="text-center text-xs text-slate-500">
            The password is set via the <code className="rounded bg-slate-100 px-1 py-0.5 font-mono">ADMIN_PASSWORD</code> environment variable.
          </p>
        </form>
      </div>
    </div>
  );
}
