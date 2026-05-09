import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export type PageMetaInput = {
  title: string;
  description: string;
  /** Path only, e.g. /about */
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Absolute URL or site-relative path (e.g. /media/hero.jpg) */
  ogImage?: string | null;
};

/**
 * Consistent enterprise metadata: canonical, Open Graph, Twitter, robots inherit from layout.
 */
export function buildPageMetadata(input: PageMetaInput): Metadata {
  const url = new URL(input.path, siteConfig.url).toString();
  const ogUrl =
    input.ogImage != null && input.ogImage !== ""
      ? input.ogImage.startsWith("http")
        ? input.ogImage
        : new URL(input.ogImage, siteConfig.url).toString()
      : null;

  const og: Metadata["openGraph"] = {
    type: input.openGraphType ?? "website",
    url,
    siteName: siteConfig.name,
    title: input.title,
    description: input.description
  };
  if (ogUrl) {
    og.images = [{ url: ogUrl, width: 1200, height: 630, alt: siteConfig.name }];
  }

  const tw: Metadata["twitter"] = {
    card: "summary_large_image",
    title: input.title,
    description: input.description
  };
  if (ogUrl) {
    tw.images = [ogUrl];
  }

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: input.path },
    openGraph: og,
    twitter: tw
  };
}
