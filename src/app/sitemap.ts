import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { allCategories } from "@/lib/products/product-groups";
import { products } from "@/lib/products/catalog";
import { locations } from "@/lib/locations/locations";
import { blogCategories, blogPosts } from "@/lib/blog/posts";
import { brochures } from "@/lib/resources/brochures";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/products",
    "/compare",
    "/locations",
    "/blog",
    "/contact",
    "/rfq",
    "/search",
    "/industries",
    "/quality",
    "/government-supply",
    "/distributor",
    "/resources/brochures",
    "/resources/datasheets",
    "/privacy",
    "/terms"
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7
  }));

  for (const c of allCategories) {
    entries.push({
      url: `${base}/products/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    });
  }

  for (const p of products) {
    entries.push({
      url: `${base}/products/${p.categorySlug}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    });
  }

  for (const l of locations) {
    entries.push({
      url: `${base}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    });
  }

  for (const c of blogCategories) {
    entries.push({
      url: `${base}/blog/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6
    });
  }

  for (const p of blogPosts) {
    entries.push({
      url: `${base}/blog/${p.categorySlug}/${p.slug}`,
      lastModified: p.publishedAt,
      changeFrequency: "monthly",
      priority: 0.6
    });
  }

  for (const b of brochures) {
    entries.push({
      url: `${base}/resources/brochures/${b.key}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4
    });
  }

  return entries;
}

