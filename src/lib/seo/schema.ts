import type { Product } from "@/lib/products/catalog";
import { siteConfig } from "@/lib/site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoPath}`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phones,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    },
    areaServed: siteConfig.markets,
    brand: [
      { "@type": "Brand", name: siteConfig.name },
      { "@type": "Brand", name: siteConfig.brandLine }
    ],
    knowsAbout: [
      "submersible pumps",
      "borewell pumps",
      "solar pumping systems",
      "industrial pumps",
      "control panels",
      "uPVC column pipes",
      "submersible cables",
      "industrial valves"
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    image: `${siteConfig.url}${siteConfig.logoPath}`,
    "@id": `${siteConfig.url}/#localbusiness`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phones,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ahmedabad, Gujarat",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380000",
      addressCountry: "IN"
    },
    areaServed: siteConfig.markets.map((m) => ({ "@type": "AdministrativeArea", name: m })),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    }
  };
}

export function productSchema(product: Product, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.id,
    category: product.categorySlug,
    brand: { "@type": "Brand", name: siteConfig.name },
    url: pageUrl,
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/rfq`,
      priceCurrency: "INR",
      availability: "https://schema.org/OnlineOnly",
      seller: { "@type": "Organization", name: siteConfig.legalName }
    }
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.logoPath}` }
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    keywords: input.keywords?.join(", ")
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url
    }))
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };
}

