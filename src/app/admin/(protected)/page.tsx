import Link from "next/link";
import { ArrowRight, Boxes, Settings, Sparkles } from "lucide-react";
import { getProductsData, getSiteSettings } from "@/lib/admin/db";

export default async function AdminDashboardPage() {
  const [data, settings] = await Promise.all([getProductsData(), getSiteSettings()]);
  const totalProducts = data.products.length;
  const byTab = data.tabs.map((t) => ({
    label: t.label,
    count: data.products.filter((p) => p.tabId === t.id).length
  }));

  return (
    <div className="space-y-8">
      <header>
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Admin dashboard</p>
        <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome back
        </h1>
        <p className="mt-1.5 text-sm text-slate-600">
          Manage products, hero slides and site settings from one place.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <DashCard
          icon={<Boxes className="h-5 w-5" />}
          label="Total products"
          value={String(totalProducts)}
          href="/admin/products"
          cta="Manage products"
        />
        <DashCard
          icon={<Sparkles className="h-5 w-5" />}
          label="Categories"
          value={String(data.tabs.length)}
          href="/admin/products"
          cta="View categories"
        />
        <DashCard
          icon={<Settings className="h-5 w-5" />}
          label="Brand"
          value={settings.name.split(" ")[0] ?? "Brand"}
          href="/admin/settings"
          cta="Edit settings"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 font-display text-lg font-extrabold text-slate-900">Products by category</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {byTab.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <span className="font-medium text-slate-700">{t.label}</span>
              <span className="rounded-full bg-white px-2.5 py-0.5 text-sm font-bold text-blue-700 shadow-sm">
                {t.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <p className="font-bold">Heads up — production saves</p>
        <p className="mt-1 leading-relaxed">
          This admin panel currently writes changes to JSON files on disk. That works perfectly when
          you run the site locally with <code className="rounded bg-white px-1 py-0.5 font-mono">npm run dev</code>.
          Vercel&apos;s production filesystem is read-only, so to save changes on the live site we&apos;ll
          need to swap the storage backend to a hosted database (Supabase / Neon / Vercel Postgres).
          The data layer is already abstracted in <code className="rounded bg-white px-1 py-0.5 font-mono">src/lib/admin/db.ts</code> —
          it&apos;s a small, isolated change when you&apos;re ready.
        </p>
      </section>
    </div>
  );
}

function DashCard({
  icon,
  label,
  value,
  href,
  cta
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(15,108,189,0.10)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
        <span className="rounded-lg bg-blue-50 p-2 text-blue-700">{icon}</span>
      </div>
      <span className="font-display text-3xl font-extrabold text-slate-900">{value}</span>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition group-hover:gap-1.5">
        {cta} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
