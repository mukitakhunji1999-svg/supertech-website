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
  },
  // ── Manufacturer / OEM datasheets ────────────────────────────────────────
  {
    key: "ball-valves-datasheet",
    title: "Ball Valves — Datasheet",
    description:
      "Materials of construction, pressure / temperature ratings and dimensional tables for SUPERTECH ball valves.",
    filePath: "/datasheets/ball-valves.pdf"
  },
  {
    key: "butterfly-valve-datasheet",
    title: "Butterfly Valve — Datasheet",
    description:
      "Body / disc / seat materials, lever and gear operated options, pressure ratings and face-to-face dimensions.",
    filePath: "/datasheets/butterfly-valve.pdf"
  },
  {
    key: "gate-valve-datasheet",
    title: "Gate Valve — Datasheet",
    description:
      "Rising / non-rising stem, OS&Y options, body MOC, end connections and dimensional tables for SUPERTECH gate valves.",
    filePath: "/datasheets/gate-valve.pdf"
  },
  {
    key: "solar-pv-module-datasheet",
    title: "Solar PV Module — TOPCon 570/600 Wp Datasheet",
    description:
      "Cosmic TOPCon solar PV module datasheet — 570 / 600 Wp, electrical characteristics, mechanical drawings and warranty terms.",
    filePath: "/datasheets/cosmic-topcon-solar-pv-570-600wp.pdf"
  }
];

export function getBrochure(key: string) {
  // If two entries share a key, prefer the one with a real filePath (manual datasheet
  // entries should override the auto-generated, file-less product brochures).
  const matches = brochures.filter((b) => b.key === key);
  return matches.find((b) => !!b.filePath) ?? matches[0];
}

