import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadForm } from "@/components/forms/lead-form";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { IndustrialPageContent } from "@/lib/seo/industrial-pages-types";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

export function IndustrialSeoPage({ data }: { data: IndustrialPageContent }) {
  const url = `${siteConfig.url}${data.path}`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: data.h1, url }
  ];

  return (
    <>
      <PageHero
        eyebrow="Industrial SEO resource"
        title={data.h1}
        subtitle={data.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industrial guides" }
        ]}
      />
      <JsonLd id={`ld-breadcrumb-${data.path}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id={`ld-faq-${data.path}`} data={faqSchema(data.faqs)} />

      <article className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            {data.sections.map((s) => (
              <section key={s.h2} className="mb-12">
                <h2 className="mb-4 text-xl font-black tracking-tight text-navy-700 md:text-2xl">{s.h2}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <section className="mx-auto mt-6 max-w-3xl rounded-xl border border-primary-100 bg-primary-50/60 p-6">
            <h2 className="text-lg font-black text-navy-700">Industry applications</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              {data.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="mx-auto mt-10 max-w-3xl">
            <h2 className="text-lg font-black text-navy-700">Related pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.internalLinks.map((l) => (
                <Button key={l.href} asChild variant="outline" size="sm" className="border-primary-200 bg-white">
                  <Link href={l.href}>{l.label}</Link>
                </Button>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-14 max-w-3xl">
            <h2 className="mb-4 text-lg font-black text-navy-700">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqs.map((f) => (
                <AccordionItem key={f.question} value={f.question}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mx-auto mt-14 max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-card">
            <h2 className="text-lg font-black text-navy-700">Technical inquiry</h2>
            <p className="mt-2 text-sm text-gray-600">
              Share duty points, destination, and tender references. Our team routes RFQs to engineering and export coordination.
            </p>
            <div className="mt-6">
              <LeadForm
                type="rfq"
                title="Project inquiry"
                subtitle="Attach tender clauses if applicable."
                defaultMessage={`Page: ${data.path}\n\nRequirement:\n- Application:\n- Flow / head:\n- Voltage:\n- Destination:\n`}
              />
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
