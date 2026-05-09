import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryFilters } from "@/components/products/category-filters";
import { allCategories } from "@/lib/products/product-groups";
import { getProductsByCategory } from "@/lib/products/catalog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return allCategories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const cat = allCategories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} Manufacturer & Exporter`,
    description: `${siteConfig.name} is a premium ${cat.name} manufacturer and exporter for India, Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) and Africa export markets.`
  };
}

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const cat = allCategories.find((c) => c.slug === params.category);
  if (!cat) return notFound();
  const items = getProductsByCategory(cat.slug);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={cat.name}
        subtitle={cat.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: cat.name }
        ]}
      />

      <section className="section-gray">
        <div className="container py-14 md:py-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild><Link href="/rfq">Request Quotation</Link></Button>
            <Button asChild variant="outline"><Link href="/contact">Talk to Sales</Link></Button>
          </div>

          {items.length ? (
            <CategoryFilters categorySlug={cat.slug} items={items} />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/rfq">
                <Card className="h-full transition hover:border-primary-300">
                  <CardHeader>
                    <CardTitle>{cat.name} Selection Support</CardTitle>
                    <CardDescription>Request selection and RFQ support for your duty point.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="section-white">
        <div className="container py-12 md:py-16">
          <div className="rounded-xl border border-primary-100 bg-primary-50 p-8">
            <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-2">Export Markets</div>
            <h2 className="text-xl font-black text-navy-700 md:text-2xl mb-3">
              {cat.name} for India, UAE, Saudi Arabia & Export Markets
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
              This category hub supports procurement teams searching for "{cat.name.toLowerCase()} manufacturer",
              "{cat.name.toLowerCase()} exporter from India", and location-specific queries across GCC and Africa.
              Use the RFQ form to share duty point and destination country for accurate selection and quotation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link href="/rfq">Get RFQ Support</Link></Button>
              <Button asChild variant="outline"><Link href="/locations">Browse Location Pages</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
