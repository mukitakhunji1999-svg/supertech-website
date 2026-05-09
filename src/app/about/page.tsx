import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us — Premium Pump Manufacturer & Exporter",
  description:
    "SUPERTECH WATER SOLUTION — premium manufacturer, exporter, government supplier, and industrial solution provider for pumps, motors, solar pumping, valves, and accessories."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="SUPERTECH WATER SOLUTION"
        subtitle="Premium manufacturer and exporter of industrial pumps, motors, solar pumping systems, valves, pipes, cables, panels, and accessories — built for India, Middle East, and Africa markets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Identity cards */}
      <section className="section-gray">
        <div className="container py-14 md:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Manufacturer", d: "Production scalability and consistent quality across all product families." },
              { t: "Exporter", d: "GCC and Africa export-focused execution, packing, and logistics." },
              { t: "Government Supplier", d: "Tender-ready documentation and procurement support for public departments." },
              { t: "Industrial Solution Provider", d: "Selection support for EPC, infrastructure, and industrial plant projects." }
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

      {/* Vision mission */}
      <section className="section-white">
        <div className="container py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Vision & Mission</div>
              <h2 className="text-2xl font-black text-navy-700 md:text-3xl mb-4">
                Engineering Trust Through Performance, Documentation & Export-Grade Execution
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <span className="font-bold text-navy-700">Vision:</span> To become a global benchmark in water pumping
                  and industrial flow solutions across India, Middle East, and Africa.
                </p>
                <p>
                  <span className="font-bold text-navy-700">Mission:</span> Deliver premium, reliable products with
                  procurement confidence — clear specifications, consistent supply, and responsive service support.
                </p>
                <p>
                  <span className="font-bold text-navy-700">Quality Policy (SUPERTECH KAIZEN):</span> Maintain process
                  discipline, traceable checkpoints, and continuous improvement across manufacturing, inspection, and
                  export packing.
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
                <Button asChild variant="outline"><Link href="/contact">Contact Us</Link></Button>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-3">Export Markets</div>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.markets.map((m) => (
                    <div key={m} className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm font-semibold text-navy-700">
                      <span className="h-2 w-2 rounded-full bg-primary-500" />{m}
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-sm text-gray-500">
                  Share your project duty point, voltage, and installation constraints for optimised product selection.
                </div>
                <Button asChild className="mt-5 w-full"><Link href="/rfq">Start an Export Inquiry</Link></Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-gray">
        <div className="container py-14 md:py-16">
          <div className="text-center mb-10">
            <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Infrastructure</div>
            <h2 className="text-2xl font-black text-navy-700 md:text-3xl">Factory Setup & Capability</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Assembly & Testing", d: "Process-driven assembly with performance and safety validation readiness." },
              { t: "Quality Inspection", d: "Incoming and in-process checks aligned to export procurement expectations." },
              { t: "Packing & Dispatch", d: "Export-optimised packing with protection-first mindset." },
              { t: "Engineering Support", d: "Selection support and documentation for EPC and tender workflows." },
              { t: "Serviceability Design", d: "Maintenance-focused design choices and lifecycle reliability." },
              { t: "Continuous Improvement", d: "SUPERTECH KAIZEN for ongoing refinement and stability." }
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
