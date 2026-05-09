import type { Metadata } from "next";
import Link from "next/link";
import { brochures } from "@/lib/resources/brochures";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Brochures & Technical Resources",
  description:
    "Download brochures and technical resources from SUPERTECH WATER SOLUTION. Pumps, motors, solar pumping systems, panels, pipes, cables and valves."
};

export default function BrochuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Brochure Downloads"
        subtitle="Brochures, datasheets, and selection tables for procurement evaluation. Request via the RFQ form or direct download."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Brochures" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-7 flex gap-3">
            <Button asChild><Link href="/rfq">Request Full Documentation Pack</Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brochures.map((b) => (
              <Link key={b.key} href={`/resources/brochures/${b.key}`}>
                <Card className="h-full hover:border-primary-300">
                  <CardHeader>
  
                    <CardTitle className="text-sm">{b.title}</CardTitle>
                    <CardDescription>{b.description}</CardDescription>
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
