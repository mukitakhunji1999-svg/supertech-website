import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ProductComparison } from "@/components/products/comparison";

export const metadata: Metadata = {
  title: "Product Comparison — Evaluate Side-by-Side",
  description:
    "Compare SUPERTECH WATER SOLUTION products side-by-side for faster procurement evaluation: specifications, applications, and selection support for India, Middle East and Africa."
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Compare Products for RFQ Readiness"
        subtitle="Select up to 4 products for side-by-side specification comparison. Use the RFQ form to request a quotation for your shortlisted selection."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product Comparison" }]}
      />

      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <ProductComparison />
        </div>
      </section>
    </>
  );
}
