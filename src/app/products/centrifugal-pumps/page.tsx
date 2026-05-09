import type { Metadata } from "next";
import { FamilyHubPage } from "@/components/products/family-hub-page";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Centrifugal & Self-Priming Industrial Pumps | Transfer & Circulation",
  description:
    "Industrial centrifugal and self-priming pump family for water transfer, circulation, and utility duty — SUPERTECH WATER SOLUTION, Ahmedabad, export-ready documentation.",
  path: "/products/centrifugal-pumps",
  keywords: ["centrifugal pump manufacturer", "self priming pump supplier", "industrial water pump India"]
});

export default function CentrifugalPumpsFamilyPage() {
  return <FamilyHubPage family="centrifugal-pumps" />;
}
