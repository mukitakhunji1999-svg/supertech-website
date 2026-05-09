import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Distributor Inquiry — Partner with SUPERTECH WATER SOLUTION",
  description:
    "Become a distributor for SUPERTECH WATER SOLUTION. Export-grade pumps, motors, solar pumping systems and industrial products for India, GCC and Africa markets."
};

export default function DistributorPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor"
        title="Distributor & Channel Partnerships"
        subtitle="Grow your business with SUPERTECH WATER SOLUTION: premium industrial products, reliable supply, and export documentation for India, GCC and Africa markets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Distributor Inquiry" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { t: "Premium Product Range", d: "20+ product categories covering pumps, motors, solar, valves, panels, pipes and cables." },
                { t: "Export Documentation", d: "Export-ready documentation, commercial invoices, and technical datasheets." },
                { t: "Selection Support", d: "Technical team available for product selection and duty point matching." },
                { t: "Competitive Supply", d: "Reliable lead times, competitive pricing, and minimum order flexibility." }
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
              type="distributor"
              title="Distributor Inquiry"
              subtitle="Tell us about your business and market."
              defaultMessage={"Please share:\n- Company name and location\n- Target market and sector\n- Product categories of interest\n- Approximate volume / frequency"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
