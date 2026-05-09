import type { Metadata } from "next";
import { FamilyHubPage } from "@/components/products/family-hub-page";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Submersible Pump Manufacturer & Exporter | Borewell & Openwell",
  description:
    "SUPERTECH WATER SOLUTION — submersible pump family: borewell, openwell, and stainless steel configurations engineered in Ahmedabad for India, GCC, and Africa export projects.",
  path: "/products/submersible-pumps",
  keywords: [
    "submersible pump manufacturer",
    "borewell pump supplier",
    "openwell submersible pump",
    "stainless steel submersible pump exporter"
  ]
});

export default function SubmersiblePumpsFamilyPage() {
  return <FamilyHubPage family="submersible-pumps" />;
}
