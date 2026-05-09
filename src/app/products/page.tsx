import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { productGroups } from "@/lib/products/product-groups";

export const metadata: Metadata = {
  title: "Industrial Products — Pumps, Motors, Solar, Valves, Panels",
  description:
    "SUPERTECH WATER SOLUTION product range: submersible pumps, borewell pumps, solar pumping, motors, valves, pipes, cables, panels, and spare parts — manufactured and exported for India, Middle East & Africa."
};

export default function ProductsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Complete Industrial Portfolio for Global Projects"
        subtitle="Export-ready product families with technical specifications, applications, FAQs, datasheets, and related products — built for government, EPC, and export buyers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <div className="section-gray">
        <div className="container py-14 md:py-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-8">
            <h2 className="text-xl font-black text-navy-700">Browse by Category</h2>
            <Button asChild size="sm">
              <Link href="/search">Search Products</Link>
            </Button>
          </div>

          <div className="grid gap-10">
            {productGroups.map((g) => (
              <section key={g.slug} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-card">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
                  <div>
                    <div className="text-xs font-black tracking-widest text-primary-700 uppercase">{g.name}</div>
                    <h3 className="text-lg font-black text-navy-700 mt-1">{g.name}</h3>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/rfq">Get RFQ Support</Link>
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {g.categories.map((c) => (
                    <Link key={c.slug} href={`/products/${c.slug}`} className="group block">
                      <div className="rounded-xl border border-gray-200 p-4 transition hover:border-primary-300 hover:shadow-card-hover bg-gray-50 hover:bg-white">
                        <div className="text-sm font-bold text-navy-700 group-hover:text-primary-700 transition-colors mb-1">{c.name}</div>
                        <div className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{c.intro}</div>
                        <span className="explore-link text-xs">Explore <ArrowRight className="h-3 w-3" /></span>
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
