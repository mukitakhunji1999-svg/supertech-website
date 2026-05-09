import { products } from "@/lib/products/catalog";

export type Brochure = {
  key: string;
  title: string;
  description: string;
  // relative path under /public
  filePath?: string;
};

export const brochures: Brochure[] = [
  ...products
    .filter((p) => !!p.brochureKey)
    .map((p) => ({
      key: p.brochureKey!,
      title: `${p.name} Brochure`,
      description: `Download brochure and technical tables for ${p.name}.`,
      filePath: undefined as string | undefined
    })),
  {
    key: "stainless-steel-submersible-series",
    title: "Stainless Steel Submersible Pumps — Series Brochure",
    description:
      "Series brochure and selection support for stainless steel submersible pumps (export-ready documentation).",
    filePath: undefined
  },
  {
    key: "submersible-motor-series",
    title: "Submersible Motors — Series Brochure",
    description: "Series brochure and technical BOM overview for submersible motors (50/60 Hz).",
    filePath: undefined
  },
  {
    key: "company-profile",
    title: "Company Profile",
    description: "SUPERTECH WATER SOLUTION company profile and export capability.",
    filePath: undefined
  }
];

export function getBrochure(key: string) {
  return brochures.find((b) => b.key === key);
}

