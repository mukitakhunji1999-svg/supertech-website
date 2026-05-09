import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Datasheets & Technical Tables",
  description:
    "Technical datasheets and selection resources for SUPERTECH WATER SOLUTION products: pumps, motors, solar pumping systems, valves, panels, pipes and cables."
};

export default function DatasheetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Datasheets & Technical Tables"
        subtitle="Need a configuration-specific datasheet for tender or EPC submission? Use RFQ to receive selection-ready tables."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Datasheets" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-7 flex gap-3">
            <Button asChild><Link href="/rfq">Request RFQ + Datasheet</Link></Button>
            <Button asChild variant="outline"><Link href="/products">Explore Products</Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Pump Datasheets", d: "Duty-point selection tables, configuration packs, and application notes." },
              { t: "Motor Datasheets", d: "Electrical and protection recommendations for project installations." },
              { t: "Panel Datasheets", d: "Starter/VFD/controller documentation for procurement and commissioning." },
              { t: "Pipes & Cables", d: "Sizing guidance and technical references for reliable installations." },
              { t: "Valves", d: "Isolation and non-return valve technical references for system protection." },
              { t: "Solar Systems", d: "Controller/PV/module and system design references for field reliability." }
            ].map((x) => (
              <Card key={x.t}>
                <CardHeader>
                  <CardTitle>{x.t}</CardTitle>
                  <CardDescription>{x.d}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
