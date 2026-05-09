import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/products/product-detail-view";
import { allCategories } from "@/lib/products/product-groups";
import { getProductBySlug, getProductsByCategory, products } from "@/lib/products/catalog";
import { buildPageMetadata } from "@/lib/seo/page-metadata";
import { siteConfig } from "@/lib/site-config";

type ProductDetailParams = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({ params }: ProductDetailParams): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  const cat = allCategories.find((c) => c.slug === category);
  if (!product || !cat) return {};
  const title = `${product.name} | ${cat.name} Manufacturer & Exporter`;
  const description = `${siteConfig.name} — ${cat.name} manufacturer and exporter for India, Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) and Africa. Features, applications, specifications, FAQs and downloads for ${product.name}.`;
  return buildPageMetadata({
    title,
    description,
    path: `/products/${cat.slug}/${product.slug}`,
    keywords: [product.seo.primaryKeyword, ...product.seo.secondaryKeywords]
  });
}

export default async function ProductDetailPage({ params }: ProductDetailParams) {
  const { category, slug } = await params;
  const cat = allCategories.find((c) => c.slug === category);
  const product = getProductBySlug(slug);
  if (!cat || !product || product.categorySlug !== cat.slug) return notFound();

  const related = getProductsByCategory(cat.slug).filter((p) => p.slug !== product.slug).slice(0, 6);
  const canonicalProductUrl = `${siteConfig.url}/products/${cat.slug}/${product.slug}`;

  return (
    <ProductDetailView
      product={product}
      category={cat}
      related={related}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: cat.name, href: `/products/${cat.slug}` },
        { label: product.name }
      ]}
      jsonLdBreadcrumbs={[
        { name: "Home", url: siteConfig.url },
        { name: "Products", url: `${siteConfig.url}/products` },
        { name: cat.name, url: `${siteConfig.url}/products/${cat.slug}` },
        { name: product.name, url: canonicalProductUrl }
      ]}
      canonicalProductUrl={canonicalProductUrl}
    />
  );
}
