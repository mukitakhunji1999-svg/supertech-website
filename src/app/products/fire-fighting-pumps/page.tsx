import type { Metadata } from "next";
import { FamilyHubPage } from "@/components/products/family-hub-page";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Fire Fighting & Booster Pump Selection | Project RFQ Engineering",
  description:
    "Pressure booster and fire-duty pumping contexts require correct head, electrical protection, and standards alignment — SUPERTECH WATER SOLUTION supports RFQ-based engineering from Ahmedabad.",
  path: "/products/fire-fighting-pumps",
  keywords: ["fire fighting pump supplier", "booster pump manufacturer India", "hydrant pump RFQ"]
});

export default function FireFightingPumpsFamilyPage() {
  return <FamilyHubPage family="fire-fighting-pumps" />;
}
