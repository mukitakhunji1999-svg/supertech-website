import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Quality Policy & Manufacturing Standards",
  description:
    "Quality policy and export-grade manufacturing approach by SUPERTECH WATER SOLUTION. Documentation-first processes built for EPC, government and export procurement."
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality Built for Export Markets"
        subtitle="SUPERTECH KAIZEN is our continuous improvement approach: process discipline, traceable checks, and documentation clarity for procurement confidence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality Policy" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-7 flex gap-3">
            <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
            <Button asChild variant="outline"><Link href="/resources/datasheets">Get Datasheets</Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Incoming Inspection", d: "Material checks and traceability aligned to consistent production output." },
              { t: "In-Process Checkpoints", d: "Quality checkpoints designed to prevent variation and rework." },
              { t: "Final Verification", d: "Selection-ready documentation and performance validation readiness." },
              { t: "Export Packing", d: "Protection-first packaging and dispatch discipline for long-distance shipments." },
              { t: "Documentation Packs", d: "Brochures, datasheets, technical tables, and RFQ templates for buyers." },
              { t: "Continuous Improvement", d: "SUPERTECH KAIZEN keeps refining process stability and buyer experience." }
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
