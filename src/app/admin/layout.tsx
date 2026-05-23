import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · SUPERTECH",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-dvh bg-slate-100 text-slate-900">{children}</div>;
}
