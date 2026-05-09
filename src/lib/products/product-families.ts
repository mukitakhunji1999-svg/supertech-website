import { slugify } from "@/lib/seo/slugify";

export const PRODUCT_FAMILY_KEYS = [
  "submersible-pumps",
  "centrifugal-pumps",
  "solar-pumps",
  "fire-fighting-pumps"
] as const;

export type ProductFamilyKey = (typeof PRODUCT_FAMILY_KEYS)[number];

export type FamilyLineItem = {
  productSlug: string;
  label: string;
  /** Optional marketing title on product detail */
  displayTitle?: string;
};

function ssSlug(model: string) {
  return slugify(`stainless-steel-submersible-pump-${model}`);
}

export const productFamilies: Record<
  ProductFamilyKey,
  {
    name: string;
    summary: string;
    categorySlugs: string[];
    lineItems: Record<string, FamilyLineItem>;
  }
> = {
  "submersible-pumps": {
    name: "Submersible pumps",
    summary:
      "Borewell, openwell, and stainless steel submersible pumping engineered for agriculture, industry, and export projects from Ahmedabad, Gujarat.",
    categorySlugs: [
      "borewell-submersible-pumps",
      "openwell-submersible-pumps",
      "stainless-steel-pumps"
    ],
    lineItems: {
      "v4-5hp": {
        productSlug: ssSlug("10VP-162/4"),
        label: "Representative 4″ class stainless submersible configuration",
        displayTitle: "4″ class stainless steel submersible pump (duty-matched selection)"
      },
      "v6-10hp": {
        productSlug: ssSlug("10VP-162/10"),
        label: "Representative 6″ class high-stage stainless submersible configuration",
        displayTitle: "6″ class stainless steel submersible pump (high-head selection)"
      }
    }
  },
  "centrifugal-pumps": {
    name: "Centrifugal & surface pumps",
    summary:
      "Self-priming, end-suction style duty, and transfer pumping for utilities, commercial buildings, and industrial circulation — with RFQ-based selection.",
    categorySlugs: ["self-priming-pumps", "centrifugal-pumps", "monoblock-pumps", "horizontal-pumps"],
    lineItems: {
      "end-suction-5hp": {
        productSlug: "deluxe-series-self-priming-pump",
        label: "Self-priming centrifugal duty (compact commercial / domestic)",
        displayTitle: "Industrial self-priming centrifugal pump (5 HP class applications)"
      },
      "process-transfer-10hp": {
        productSlug: "powergold-series-self-priming-pump",
        label: "Self-priming transfer pump (irrigation & service water)",
        displayTitle: "Self-priming transfer pump (10 HP class peak reference)"
      }
    }
  },
  "solar-pumps": {
    name: "Solar pumps & solar pumping systems",
    summary:
      "Solar-compatible pumps and solar pumping system components for agriculture and remote water supply with export documentation support.",
    categorySlugs: [
      "solar-pumping-systems",
      "solar-controllers",
      "solar-pv-modules",
      "stainless-steel-pumps"
    ],
    lineItems: {
      "agricultural-solar-5hp": {
        productSlug: "stainless-steel-solar-pump",
        label: "Solar-compatible stainless pump for field irrigation",
        displayTitle: "Agricultural solar pumping (stainless solar-compatible pump)"
      },
      "commercial-solar-10hp": {
        productSlug: "stainless-steel-solar-pump",
        label: "Higher duty solar water movement (system sizing via RFQ)",
        displayTitle: "Commercial / utility solar pumping (configuration via RFQ)"
      }
    }
  },
  "fire-fighting-pumps": {
    name: "Fire fighting & pressure booster duty",
    summary:
      "Pressure boosting, hydrant support, and jockey-style pumping contexts rely on correct head, NPSH, and electrical protection — we support selection for NFPA-style enquiries via RFQ.",
    categorySlugs: ["pressure-booster-pumps", "centrifugal-pumps", "self-priming-pumps", "horizontal-pumps"],
    lineItems: {
      "jockey-booster-set": {
        productSlug: "powergold-series-self-priming-pump",
        label: "Booster / transfer baseline (full fire set engineering via RFQ)",
        displayTitle: "Fire fighting booster & transfer pump (project-based selection)"
      },
      "electric-hydrant-duty": {
        productSlug: "deluxe-series-self-priming-pump",
        label: "Electric-driven pressure support (head matched to site)",
        displayTitle: "Electric hydrant / sprinkler support pumping (RFQ engineering)"
      }
    }
  }
};

export function getFamilyLineItem(family: ProductFamilyKey, lineSlug: string): FamilyLineItem | undefined {
  return productFamilies[family].lineItems[lineSlug];
}
