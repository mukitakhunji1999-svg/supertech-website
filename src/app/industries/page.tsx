import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Industries Served — B2B Procurement & Export Projects",
  description:
    "Industries served by SUPERTECH WATER SOLUTION: government departments, EPC, infrastructure, agriculture, industrial plants, builders, water treatment companies, and export buyers."
};

export default function IndustriesPage() {
  const industries = [
    { t: "Government Departments", d: "Tender-ready workflows, documentation-first responses, and project-grade supply." },
    { t: "EPC Contractors", d: "Selection support, technical schedules, and coordination for project timelines." },
    { t: "Infrastructure Companies", d: "Reliable pumping solutions built for continuous duty and lifecycle value." },
    { t: "Agriculture Sector", d: "Irrigation and solar pumping solutions designed for efficiency and durability." },
    { t: "Industrial Plants", d: "Industrial pumping, valves, and panels engineered for stability and serviceability." },
    { t: "Builders & Developers", d: "Pressure boosting and water transfer solutions with professional documentation." },
    { t: "Water Treatment Companies", d: "Pumps, motors, panels and accessories for integrated water systems." },
    { t: "Export Buyers", d: "Export packing readiness and configuration clarity for GCC and Africa procurement." }
  ];

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for B2B Procurement & Projects"
        subtitle="SUPERTECH WATER SOLUTION serves procurement-driven industries with export-grade documentation and selection support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries Served" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-7 flex gap-3">
            <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
            <Button asChild variant="outline"><Link href="/products">Explore Products</Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((x) => (
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
