import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Government Supply & Tender Support",
  description:
    "Government supply and tender support by SUPERTECH WATER SOLUTION. Pumps, motors, solar pumping systems, valves, pipes, cables and control panels with documentation-first procurement support."
};

export default function GovernmentSupplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Supply"
        title="Tender-Ready Documentation & Procurement Support"
        subtitle="Built for public departments and EPC procurement: structured technical schedules, configuration clarity, and responsive RFQ workflows."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Government Supply" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { t: "Technical Schedules", d: "Selection-ready tables and structured documentation for tender evaluation." },
                { t: "Procurement Clarity", d: "Configuration-specific quotations aligned to duty point and installation." },
                { t: "Project Coordination", d: "EPC-friendly communication, packing, lead times, and submission support." },
                { t: "Lifecycle Value", d: "Serviceability-first engineering and spares mapping support." }
              ].map((x) => (
                <Card key={x.t}>
                  <CardHeader>
                    <CardTitle>{x.t}</CardTitle>
                    <CardDescription>{x.d}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <LeadForm
              type="tender"
              title="Government / Tender Inquiry"
              subtitle="Share tender details for technical submission support."
              defaultMessage={"Please share:\n- Department / EPC name\n- Tender reference / due date\n- Product scope (pumps/motors/solar/panels/pipes/cables)\n- Duty point / technical schedule\n- Destination location"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
