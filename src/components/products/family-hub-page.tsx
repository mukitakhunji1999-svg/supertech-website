import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allCategories } from "@/lib/products/product-groups";
import { getProductsByCategory } from "@/lib/products/catalog";
import { productFamilies, type ProductFamilyKey } from "@/lib/products/product-families";

export function FamilyHubPage({ family }: { family: ProductFamilyKey }) {
  const f = productFamilies[family];
  const categories = allCategories.filter((c) => f.categorySlugs.includes(c.slug));
  const lineEntries = Object.entries(f.lineItems);

  return (
    <>
      <PageHero
        eyebrow="Product family"
        title={f.name}
        subtitle={f.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: f.name }
        ]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-navy-700">Featured configurations</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-600">
                Marketing-friendly URLs for RFQ and SEO. Technical sign-off is always duty-point matched to your project.
              </p>
            </div>
            <Button asChild>
              <Link href="/rfq">Request quotation</Link>
            </Button>
          </div>

          <div className="mb-14 grid gap-4 md:grid-cols-2">
            {lineEntries.map(([slug, item]) => (
              <Link key={slug} href={`/products/${family}/${slug}`} className="group block">
                <Card className="h-full transition hover:border-primary-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="mb-1 text-xs font-black uppercase tracking-widest text-primary-700">{slug.replace(/-/g, " ")}</div>
                    <CardTitle className="group-hover:text-primary-700">{item.displayTitle ?? item.label}</CardTitle>
                    <CardDescription>{item.label}</CardDescription>
                    <span className="explore-link mt-2 inline-flex text-sm">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <h2 className="mb-6 text-xl font-black text-navy-700">Related catalogue categories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const count = getProductsByCategory(c.slug).length;
              return (
                <Link key={c.slug} href={`/products/${c.slug}`} className="group block">
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-card transition hover:border-primary-300">
                    <div className="text-sm font-bold text-navy-700 group-hover:text-primary-700">{c.name}</div>
                    <p className="mt-2 line-clamp-3 text-xs text-gray-500">{c.intro}</p>
                    <div className="mt-2 text-xs font-semibold text-primary-700">{count ? `${count} SKU pages` : "RFQ selection"}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
