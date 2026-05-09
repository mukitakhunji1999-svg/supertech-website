import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { SpecTable } from "@/components/products/spec-table";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Product } from "@/lib/products/catalog";
import type { ProductCategory } from "@/lib/products/product-groups";
import { generateProductLongform } from "@/lib/seo/longform";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

export type BreadcrumbItem = { label: string; href?: string };

export function ProductDetailView({
  product,
  category,
  related,
  breadcrumbs,
  jsonLdBreadcrumbs,
  canonicalProductUrl,
  displayTitle,
  heroEyebrow
}: {
  product: Product;
  category: ProductCategory;
  related: Product[];
  breadcrumbs: BreadcrumbItem[];
  jsonLdBreadcrumbs: Array<{ name: string; url: string }>;
  /** Full absolute URL for Product schema @id */
  canonicalProductUrl: string;
  displayTitle?: string;
  heroEyebrow?: string;
}) {
  const titleText = displayTitle ?? product.name;
  const longform = generateProductLongform(product);

  const faqs = [
    {
      question: `Is ${product.name} available for export to UAE and Saudi Arabia?`,
      answer:
        "Yes. We support export-ready supply with documentation and selection support for UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and Africa project markets."
    },
    {
      question: "How do I get the correct configuration and quotation?",
      answer:
        "Share your duty point (flow and head), voltage/phase, installation details and destination country via the RFQ form. Our team will recommend the correct configuration and provide a quotation."
    },
    {
      question: "Do you provide technical datasheets and brochures?",
      answer: "Yes. We provide brochures, datasheets and selection tables. Request downloads via our resources pages or RFQ submission."
    },
    {
      question: "Do you support government tenders and EPC submissions?",
      answer: "Yes. We support tender-style documentation, technical schedules and procurement workflows for government and EPC buyers."
    }
  ];

  return (
    <>
      <PageHero
        eyebrow={heroEyebrow ?? category.name}
        title={titleText}
        subtitle={product.shortDescription}
        breadcrumbs={breadcrumbs}
      />
      <JsonLd id="ld-breadcrumbs" data={breadcrumbSchema(jsonLdBreadcrumbs)} />
      <JsonLd id="ld-faq" data={faqSchema(faqs)} />
      <JsonLd id="ld-product" data={productSchema(product, canonicalProductUrl)} />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/rfq">Request quotation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`https://wa.me/${siteConfig.social.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                    WhatsApp sales
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/resources/brochures">Brochures</Link>
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Applications</CardTitle>
                    <CardDescription>Project and industry usage examples.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      {product.applications.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Key features</CardTitle>
                    <CardDescription>Built for export-grade reliability.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <div className="mb-4 text-xs font-black uppercase tracking-widest text-primary-700">FAQs</div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((f) => (
                    <AccordionItem key={f.question} value={f.question}>
                      <AccordionTrigger>{f.question}</AccordionTrigger>
                      <AccordionContent>{f.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <SpecTable rows={product.specifications} />
              <Card className="p-5">
                <div className="mb-2 text-xs font-black uppercase tracking-widest text-primary-700">Datasheet</div>
                <p className="mb-4 text-sm text-gray-600">
                  Configuration-specific datasheets and pump curves are shared on request with RFQ for tender and EPC submissions.
                </p>
                <div className="grid gap-3">
                  <Button asChild>
                    <Link href="/resources/datasheets">Technical resources</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/locations">Export & locations</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container py-12 md:py-16">
          <div className="mb-2 text-xs font-black uppercase tracking-widest text-primary-700">Technical content</div>
          <h2 className="mb-8 text-2xl font-black text-navy-700 md:text-3xl">
            {product.seo.primaryKeyword} — technical overview
          </h2>
          <div className="space-y-5">
            {longform.map((s) => (
              <article key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
                <h3 className="mb-2 text-base font-bold text-navy-700">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-gray">
          <div className="container py-12 md:py-16">
            <div className="mb-2 text-xs font-black uppercase tracking-widest text-primary-700">Related products</div>
            <h2 className="mb-7 text-2xl font-black text-navy-700 md:text-3xl">More in {category.name}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${category.slug}/${p.slug}`}>
                  <Card className="h-full hover:border-primary-300">
                    <CardHeader>
                      <CardTitle>{p.name}</CardTitle>
                      <CardDescription>{p.shortDescription}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
