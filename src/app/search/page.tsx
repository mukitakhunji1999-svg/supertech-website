import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ProductSearch } from "@/components/search/product-search";

export const metadata: Metadata = {
  title: "Search — Products & Categories",
  description: "Search SUPERTECH WATER SOLUTION products, categories and SEO landing pages."
};

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Smart Product Search"
        subtitle="Search categories and products. For fastest selection, use RFQ with duty point and destination country."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="max-w-2xl">
            <ProductSearch />
          </div>
        </div>
      </section>
    </>
  );
}
