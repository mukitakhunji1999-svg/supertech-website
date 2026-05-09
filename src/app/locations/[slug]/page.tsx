import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allCategories } from "@/lib/products/product-groups";
import { getLocation, locations } from "@/lib/locations/locations";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = getLocation(params.slug);
  if (!l) return {};
  const title = `Industrial Pump Supplier & Exporter in ${l.name}`;
  const description = `${siteConfig.name} is a premium pump manufacturer and exporter serving ${l.name}, ${l.country}. Explore submersible pumps, borewell pumps, solar pumps, industrial pumps, valves, pipes, cables and control panels — export-ready documentation for EPC and government procurement.`;
  return { title, description, alternates: { canonical: `/locations/${l.slug}` } };
}

export default function LocationLandingPage({ params }: { params: { slug: string } }) {
  const l = getLocation(params.slug);
  if (!l) return notFound();

  const keywordBlocks = [
    `Submersible pump supplier in ${l.name}`,
    `Borewell pump manufacturer in ${l.name}`,
    `Solar pump supplier in ${l.name}`,
    `Industrial pump exporter serving ${l.country}`,
    `Control panel manufacturer for ${l.name} projects`
  ];

  return (
    <>
      <PageHero
        eyebrow={l.country}
        title={`Premium Industrial Pump Supplier in ${l.name}`}
        subtitle={l.heroLine}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Export Markets", href: "/locations" },
          { label: l.name }
        ]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-8 flex gap-3">
            <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
            <Button asChild variant="outline"><Link href="/products">Browse Products</Link></Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {keywordBlocks.map((k) => (
              <Card key={k}>
                <CardHeader>
                  <CardTitle className="text-base">{k}</CardTitle>
                  <CardDescription>
                    Export-ready supply for EPC and government buyers with documentation-first quotation support.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container py-12 md:py-16">
          <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Products Available</div>
          <h2 className="text-2xl font-black text-navy-700 md:text-3xl mb-7">
            Complete Industrial Product Range for {l.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allCategories.slice(0, 8).map((c) => (
              <Link key={c.slug} href={`/products/${c.slug}`}>
                <Card className="h-full hover:border-primary-300">
                  <CardHeader>
                    <CardTitle className="text-sm">{c.name}</CardTitle>
                    <CardDescription className="text-xs line-clamp-2">{c.intro}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="rounded-xl border border-primary-100 bg-primary-50 p-8">
            <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Export Documentation</div>
            <h2 className="text-xl font-black text-navy-700 md:text-2xl mb-3">
              Serving {l.name} Procurement Teams with Export-Ready Quotations
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl leading-relaxed mb-6">
              {l.heroLine} Our team provides export-ready quotations, technical schedules, and duty-point-specific
              product selection for procurement teams in {l.name}. Contact us for EPC, government tender, and export
              project supply.
            </p>
            <Button asChild><Link href="/rfq">Start Export Inquiry</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
