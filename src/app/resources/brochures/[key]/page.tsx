import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrochure, brochures } from "@/lib/resources/brochures";

type BrochureParams = { params: Promise<{ key: string }> };

export function generateStaticParams() {
  // Dedupe — the brochures array may contain duplicate keys (auto-generated
  // product brochure + manual datasheet entry that overrides it).
  const seen = new Set<string>();
  const params: Array<{ key: string }> = [];
  for (const b of brochures) {
    if (!seen.has(b.key)) {
      seen.add(b.key);
      params.push({ key: b.key });
    }
  }
  return params;
}

export async function generateMetadata({ params }: BrochureParams): Promise<Metadata> {
  const { key } = await params;
  const b = getBrochure(key);
  if (!b) return {};
  return { title: b.title, description: b.description, alternates: { canonical: `/resources/brochures/${b.key}` } };
}

export default async function BrochureDownloadPage({ params }: BrochureParams) {
  const { key } = await params;
  const b = getBrochure(key);
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
              {b.filePath ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Download Datasheet</CardTitle>
                    <CardDescription>
                      Open or save the official PDF datasheet for {b.title.replace(/ — .*$/, "")}.
                    </CardDescription>
                  </CardHeader>
                  <div className="flex flex-wrap gap-3 px-6 pb-6">
                    <Button asChild>
                      <a href={b.filePath} target="_blank" rel="noopener noreferrer" download>
                        Download PDF
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={b.filePath} target="_blank" rel="noopener noreferrer">
                        View in browser
                      </a>
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>How Downloads Work</CardTitle>
                    <CardDescription>
                      Submit your details to receive the brochure pack and selection support for your project.
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
              <div className="flex flex-wrap gap-3">
                <Button asChild><Link href="/rfq">Need Pricing? Request RFQ</Link></Button>
                <Button asChild variant="outline"><Link href="/contact">Contact Sales</Link></Button>
              </div>
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
