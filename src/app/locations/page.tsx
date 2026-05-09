import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations/locations";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Export Markets — India, UAE, GCC, Africa",
  description:
    "SUPERTECH WATER SOLUTION export-focused industrial pump supplier pages: India, Ahmedabad, Gujarat, UAE, Dubai, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain."
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export Markets"
        title="India, GCC & Africa Export Landing Pages"
        subtitle="Programmatic location pages designed for procurement discovery: supplier queries, exporter queries, tender and EPC support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Export Markets" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-7 flex gap-3">
            <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
            <Button asChild variant="outline"><Link href="/products">Browse Products</Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`}>
                <Card className="h-full hover:border-primary-300">
                  <CardHeader>
                    <CardTitle>{l.name}</CardTitle>
                    <CardDescription>{l.heroLine}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
