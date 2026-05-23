import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { StickyFilterBar } from "@/components/products/sticky-filter-bar";
import { productGroups } from "@/lib/products/product-groups";

export const metadata: Metadata = {
  title: "Industrial Products — Pumps, Motors, Solar, Valves, Panels",
  description:
    "SUPERTECH WATER SOLUTION product range: submersible pumps, borewell pumps, solar pumping, motors, valves, pipes, cables, panels, and spare parts — manufactured and exported for India, Middle East & Africa."
};

export default function ProductsIndexPage() {
  const groups = productGroups.map((g) => ({ slug: g.slug, name: g.name }));

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Complete Industrial Portfolio for Global Projects"
        subtitle="Export-ready product families with technical specifications, applications, FAQs, datasheets, and related products — built for government, EPC, and export buyers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <StickyFilterBar groups={groups} />

      <div className="bg-slate-50/50">
        <div className="container py-12 md:py-16">
          {/* Popular hubs — refined, less shouty */}
          <div className="mb-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/40 p-6 md:p-8">
            <p className="eyebrow">SEO-friendly family hubs</p>
            <h2 className="section-title mt-2">Popular product lines</h2>
            <p className="section-lede">
              Marketing URLs for RFQ and search — technical selection remains duty-point driven. Each hub links to
              catalogue categories and featured configurations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { href: "/products/submersible-pumps", label: "Submersible pumps" },
                { href: "/products/centrifugal-pumps", label: "Centrifugal & self-priming" },
                { href: "/products/solar-pumps", label: "Solar pumps" },
                { href: "/products/fire-fighting-pumps", label: "Fire / booster duty" }
              ].map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-primary-300 hover:bg-blue-50 hover:text-navy-800"
                >
                  {x.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="section-title">Browse by category</h2>
            <Link
              href="/rfq"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              <FileText className="h-3.5 w-3.5" />
              Get RFQ support
            </Link>
          </div>

          <div className="space-y-10">
            {productGroups.map((g) => (
              <section
                key={g.slug}
                id={`group-${g.slug}`}
                className="scroll-mt-44 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="eyebrow">{g.name}</p>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
                      {g.name}
                    </h3>
                  </div>
                  <Link
                    href="/rfq"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-display text-xs font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                  >
                    RFQ support
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {g.categories.map((c) => (
                    <Link key={c.slug} href={`/products/${c.slug}`} className="group block">
                      <div className="card-soft p-4">
                        <div className="font-display text-sm font-semibold tracking-tight text-navy-700 transition-colors group-hover:text-navy-800">
                          {c.name}
                        </div>
                        <div className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-slate-800">
                          {c.intro}
                        </div>
                        <span className="explore-link mt-3 text-xs">
                          Explore <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
