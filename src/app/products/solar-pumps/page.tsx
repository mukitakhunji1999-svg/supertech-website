import type { Metadata } from "next";
import { FamilyHubPage } from "@/components/products/family-hub-page";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Pump Supplier | Solar-Compatible & Solar System Components",
  description:
    "Solar pumping systems and solar-compatible pumps for agriculture and remote supply — engineering, documentation, and export from SUPERTECH WATER SOLUTION, Gujarat.",
  path: "/products/solar-pumps",
  keywords: ["solar pump supplier India", "solar pumping systems", "solar agriculture pump exporter"]
});

export default function SolarPumpsFamilyPage() {
  return <FamilyHubPage family="solar-pumps" />;
}
