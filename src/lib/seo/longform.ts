import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/lib/products/catalog";
import { allCategories } from "@/lib/products/product-groups";

function words(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function paragraph(base: string, extra: string[]) {
  return [base, ...extra].join(" ");
}

export function generateProductLongform(product: Product) {
  const category = allCategories.find((c) => c.slug === product.categorySlug);
  const geo = [
    "India",
    "Ahmedabad",
    "Gujarat",
    "UAE",
    "Dubai",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Africa"
  ];

  const primary = product.seo.primaryKeyword;
  const secondary = product.seo.secondaryKeywords.slice(0, 8);
  const categoryName = category?.name ?? product.categorySlug;

  const sections: { title: string; body: string }[] = [
    {
      title: "Overview",
      body: paragraph(
        `${product.name} from ${siteConfig.name} is engineered for B2B procurement where reliability, documentation, and lifecycle cost matter.`,
        [
          `This ${categoryName} portfolio is built for government departments, EPC contractors, infrastructure companies, industrial plants, agricultural duty cycles, water treatment operators, and export buyers.`,
          `If you are searching for ${primary}, this page is designed to help you evaluate performance, installation fit, and compliance readiness.`,
          `We support projects across ${geo.join(", ")}.`
        ]
      )
    },
    {
      title: "Applications & industries served",
      body: paragraph(
        `Industrial procurement teams typically select ${product.name} based on duty point, source conditions, water quality, voltage, and installation constraints.`,
        [
          `Common applications include ${product.applications.join(", ")}.`,
          `Industries served include infrastructure, municipal utilities, agriculture and irrigation, industrial manufacturing plants, builders and developers, and EPC project environments.`,
          `For export projects, selection is aligned to spares availability, site serviceability, and documentation quality.`
        ]
      )
    },
    {
      title: "Key features designed for procurement confidence",
      body: paragraph(
        `${siteConfig.name} focuses on consistent engineering fundamentals that matter in real installations: stable hydraulics, durable materials, robust electrical protection, and service-friendly assembly.`,
        [
          `Key highlights include: ${product.features.join("; ")}.`,
          `Our export-focused approach emphasizes predictable performance and clearer documentation for faster tender evaluation and RFQ comparison.`
        ]
      )
    },
    {
      title: "Technical specifications (selection-ready)",
      body: paragraph(
        `Technical selection is most accurate when duty point is defined (head, discharge, flow rate) along with installation parameters.`,
        [
          `This product family supports configuration-based selection. Typical specification references for procurement may include power, head, capacity, pipe sizing, voltage range, material options, and protection requirements.`,
          `If you need a customized datasheet for tender submission, request it via RFQ with your duty point and country.`
        ]
      )
    },
    {
      title: "Export-ready documentation and support",
      body: paragraph(
        `For GCC and Africa markets, procurement teams often require consistent data presentation and professional submission quality.`,
        [
          `We support RFQ workflows with technical tables, brochure packs, application notes, and documentation aligned to EPC and government procurement.`,
          `This is built for buyers targeting keywords like ${secondary.join(", ")}.`,
          `Our team can assist with product comparison, recommended configuration, and supply planning.`
        ]
      )
    },
    {
      title: "How to specify your requirement (RFQ template)",
      body: paragraph(
        `To receive the fastest and most accurate quotation, share a structured requirement.`,
        [
          `Minimum recommended RFQ fields: application (agriculture / industrial / utility), water source (borewell, openwell, sump), duty point (flow + head), discharge size, voltage and phase, expected daily operating hours, installation depth (if any), and destination country.`,
          `For projects in UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, and Africa, also share preferred packing, labeling, and required documentation format.`
        ]
      )
    },
    {
      title: "Quality philosophy (SUPERTECH KAIZEN)",
      body: paragraph(
        `SUPERTECH KAIZEN drives continuous improvement across manufacturing discipline, inspection checkpoints, and export packing.`,
        [
          `The result is procurement confidence: stable supply, consistent performance, and clearer technical communication.`,
          `For tender environments, this reduces ambiguity and shortens evaluation time.`
        ]
      )
    },
    {
      title: "Serviceability, spares, and lifecycle value",
      body: paragraph(
        `Industrial buyers evaluate more than purchase price — they evaluate downtime risk and lifecycle support.`,
        [
          `We design product families with maintainability in mind: clear spares mapping, service access where practical, and compatibility across common configurations.`,
          `When required, we can align spares packs for export projects and EPC commissioning timelines.`
        ]
      )
    },
    {
      title: "Procurement FAQ",
      body: paragraph(
        `If you are comparing suppliers for ${primary}, focus on documentation clarity, performance transparency, and after-sales readiness.`,
        [
          `Ask for the exact configuration matching your duty point, request a technical table for comparison, and ensure the supplier can support export packing and lead times.`,
          `Our team supports these workflows for India and export markets.`
        ]
      )
    }
  ];

  // Ensure word count target by adding a compact "SEO expansion" section when needed.
  let content = sections;
  const total = content.reduce((acc, s) => acc + words(s.body), 0);
  if (total < 1500) {
    const filler = Array.from({ length: 8 }).map((_, i) => ({
      title: `Engineering notes ${i + 1}`,
      body: paragraph(
        `For ${product.name} selection, align hydraulic performance with real site conditions: friction losses, suction characteristics (if applicable), voltage stability, and environmental factors.`,
        [
          `Export projects frequently benefit from a standardized documentation pack and a clear configuration naming structure for procurement teams.`,
          `When targeting procurement teams in ${geo.slice(0, 8).join(", ")}, include the duty point and intended application so the quotation is technically precise and directly comparable.`,
          `This helps buyers searching for ${primary} and related keywords such as ${secondary.join(", ")}.`
        ]
      )
    }));
    content = [...content, ...filler];
  }

  return content;
}

