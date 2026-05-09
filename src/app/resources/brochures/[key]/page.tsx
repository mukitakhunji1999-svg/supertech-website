import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrochure, brochures } from "@/lib/resources/brochures";

export function generateStaticParams() {
  return brochures.map((b) => ({ key: b.key }));
}

export function generateMetadata({ params }: { params: { key: string } }): Metadata {
  const b = getBrochure(params.key);
  if (!b) return {};
  return { title: b.title, description: b.description, alternates: { canonical: `/resources/brochures/${b.key}` } };
}

export default function BrochureDownloadPage({ params }: { params: { key: string } }) {
  const b = getBrochure(params.key);
  if (!b) return notFound();

  return (
    <>
      <PageHero
        eyebrow="Brochure"
        title={b.title}
        subtitle={b.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Brochures", href: "/resources/brochures" },
          { label: b.title }
        ]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <Card>
                <CardHeader>
                  <CardTitle>How Downloads Work</CardTitle>
                  <CardDescription>
                    Submit your details to receive the brochure pack and selection support for your project.
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="flex flex-wrap gap-3">
                <Button asChild><Link href="/rfq">Need Pricing? Request RFQ</Link></Button>
                <Button asChild variant="outline"><Link href="/contact">Contact Sales</Link></Button>
              </div>
              <p className="text-xs text-gray-400">
                Note: Place PDF brochures in <code className="text-gray-600">public/brochures/</code> and map the file path in <code className="text-gray-600">src/lib/resources/brochures.ts</code>.
              </p>
            </div>

            <LeadForm
              type="brochure"
              title="Request Brochure Download"
              subtitle="We'll share the brochure and help you select the correct configuration."
              defaultMessage={`Brochure requested: ${b.title}\n\nPlease share:\n- Application\n- Duty point (flow & head)\n- Voltage/phase\n- Destination country`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
