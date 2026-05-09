import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { SpecTable } from "@/components/products/spec-table";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { allCategories } from "@/lib/products/product-groups";
import { getProductBySlug, getProductsByCategory, products } from "@/lib/products/catalog";
import { generateProductLongform } from "@/lib/seo/longform";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  const cat = allCategories.find((c) => c.slug === params.category);
  if (!product || !cat) return {};
  const title = `${product.name} | ${cat.name} Manufacturer & Exporter`;
  const description = `${siteConfig.name} — ${cat.name} manufacturer and exporter for India, Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) and Africa. Features, applications, specifications, FAQs and downloads for ${product.name}.`;
  return {
    title,
    description,
    alternates: { canonical: `/products/${cat.slug}/${product.slug}` },
    openGraph: { title, description },
    twitter: { title, description }
  };
}

export default function ProductDetailPage({ params }: { params: { category: string; slug: string } }) {
  const cat = allCategories.find((c) => c.slug === params.category);
  const product = getProductBySlug(params.slug);
  if (!cat || !product || product.categorySlug !== cat.slug) return notFound();

  const longform = generateProductLongform(product);
  const related = getProductsByCategory(cat.slug).filter((p) => p.slug !== product.slug).slice(0, 6);

  const faqs = [
    {
      question: `Is ${product.name} available for export to UAE and Saudi Arabia?`,
      answer: "Yes. We support export-ready supply with documentation and selection support for UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and Africa project markets."
    },
    {
      question: "How do I get the correct configuration and quotation?",
      answer: "Share your duty point (flow and head), voltage/phase, installation details and destination country via the RFQ form. Our team will recommend the correct configuration and provide a quotation."
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

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Products", url: `${siteConfig.url}/products` },
    { name: cat.name, url: `${siteConfig.url}/products/${cat.slug}` },
    { name: product.name, url: `${siteConfig.url}/products/${cat.slug}/${product.slug}` }
  ];

  return (
    <>
      <PageHero
        eyebrow={cat.name}
        title={product.name}
        subtitle={product.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: cat.name, href: `/products/${cat.slug}` },
          { label: product.name }
        ]}
      />
      <JsonLd id="ld-breadcrumbs" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-faq" data={faqSchema(faqs)} />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left: details */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex gap-3">
                <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
                <Button asChild variant="outline"><Link href="/resources/brochures">Download Brochures</Link></Button>
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
                    <CardTitle>Key Features</CardTitle>
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

              {/* FAQ */}
              <div className="mt-8">
                <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-4">FAQs</div>
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

            {/* Right: spec + CTA */}
            <div className="lg:col-span-5 space-y-4">
              <SpecTable rows={product.specifications} />
              <Card className="p-5">
                <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Export Support</div>
                <div className="text-sm text-gray-600 mb-5">
                  Share country, duty point and installation details for accurate selection and quotation.
                </div>
                <div className="grid gap-3">
                  <Button asChild><Link href="/rfq">Start RFQ</Link></Button>
                  <Button asChild variant="outline"><Link href="/locations">Location Pages</Link></Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical content */}
      <section className="section-white">
        <div className="container py-12 md:py-16">
          <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Technical Content</div>
          <h2 className="text-2xl font-black text-navy-700 md:text-3xl mb-8">
            {product.seo.primaryKeyword} — Complete Technical Overview
          </h2>
          <div className="space-y-5">
            {longform.map((s) => (
              <article key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
                <h3 className="text-base font-bold text-navy-700 mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section-gray">
          <div className="container py-12 md:py-16">
            <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Related Products</div>
            <h2 className="text-2xl font-black text-navy-700 md:text-3xl mb-7">More in {cat.name}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${cat.slug}/${p.slug}`}>
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
      )}
    </>
  );
}
