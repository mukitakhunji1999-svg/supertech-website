import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/products/product-detail-view";
import { allCategories } from "@/lib/products/product-groups";
import { getProductBySlug, getProductsByCategory } from "@/lib/products/catalog";
import { productFamilies, type ProductFamilyKey } from "@/lib/products/product-families";
import { buildPageMetadata } from "@/lib/seo/page-metadata";
import { siteConfig } from "@/lib/site-config";

export function familyLineStaticParams(family: ProductFamilyKey) {
  return Object.keys(productFamilies[family].lineItems).map((slug) => ({ slug }));
}

export function familyLineMetadata(family: ProductFamilyKey, slug: string): Metadata {
  const item = productFamilies[family].lineItems[slug];
  const product = item ? getProductBySlug(item.productSlug) : undefined;
  const cat = product ? allCategories.find((c) => c.slug === product.categorySlug) : undefined;
  if (!item || !product || !cat) return {};
  const path = `/products/${family}/${slug}`;
  const title = `${item.displayTitle ?? product.name} | ${productFamilies[family].name}`;
  const description = `${item.label}. ${product.shortDescription} ${siteConfig.name} — industrial manufacturer & exporter, Ahmedabad Gujarat.`;
  return buildPageMetadata({
    title,
    description,
    path,
    keywords: [product.seo.primaryKeyword, ...product.seo.secondaryKeywords]
  });
}

export function FamilyLineProductPage({ family, slug }: { family: ProductFamilyKey; slug: string }) {
  const item = productFamilies[family].lineItems[slug];
  const product = item ? getProductBySlug(item.productSlug) : undefined;
  const cat = product ? allCategories.find((c) => c.slug === product.categorySlug) : undefined;
  if (!item || !product || !cat) return notFound();

  const related = getProductsByCategory(cat.slug).filter((p) => p.slug !== product.slug).slice(0, 6);
  const canonicalProductUrl = `${siteConfig.url}/products/${family}/${slug}`;

  return (
    <ProductDetailView
      product={product}
      category={cat}
      related={related}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: productFamilies[family].name, href: `/products/${family}` },
        { label: item.displayTitle ?? product.name }
      ]}
      jsonLdBreadcrumbs={[
        { name: "Home", url: siteConfig.url },
        { name: "Products", url: `${siteConfig.url}/products` },
        { name: productFamilies[family].name, url: `${siteConfig.url}/products/${family}` },
        { name: item.displayTitle ?? product.name, url: canonicalProductUrl }
      ]}
      canonicalProductUrl={canonicalProductUrl}
      displayTitle={item.displayTitle}
      heroEyebrow={productFamilies[family].name}
    />
  );
}
