import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Request Quotation (RFQ) — Pumps, Motors, Solar, Export",
  description:
    "Request a quotation from SUPERTECH WATER SOLUTION for pumps, motors, solar pumping systems, valves, and panels. Export-ready quotations for India, Middle East and Africa."
};

export default function RFQPage() {
  return (
    <>
      <PageHero
        eyebrow="RFQ"
        title="Request a Quotation with Selection Support"
        subtitle="Share your duty point, voltage, and destination country for an accurate configuration-specific quotation and documentation pack."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request Quotation" }]}
      />

      <section className="section-gray">
        <div className="container py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <Card>
                <CardHeader>
                  <CardTitle>Fast RFQ Format</CardTitle>
                  <CardDescription>Include these details for the most accurate quotation.</CardDescription>
                </CardHeader>
                <div className="px-6 pb-5">
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "Product required (e.g., borewell submersible, solar pumping, control panel)",
                      "Duty point: flow + head (include friction losses if known)",
                      "Voltage / phase and daily operating hours",
                      "Installation: borewell / openwell / sump, depth, discharge size",
                      "Destination: city / country, packaging & documentation requirements"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Inquiry Types</CardTitle>
                  <CardDescription>Looking for something specific?</CardDescription>
                </CardHeader>
                <div className="px-6 pb-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/distributor">Distributor Inquiry</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/government-supply">Government Tender</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources/brochures">Brochure Download</Link>
                  </Button>
                </div>
              </Card>
            </div>

            <LeadForm
              type="rfq"
              title="Request Quotation"
              subtitle="Share duty point and destination for selection + pricing."
              defaultMessage={"Requirement:\n- Product category:\n- Flow (LPM/LPH/m3/h):\n- Head (meter):\n- Voltage/phase:\n- Borewell/openwell/sump details:\n- Destination country/city:"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
