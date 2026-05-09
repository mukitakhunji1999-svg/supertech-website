import type { Metadata } from "next";
import { ResourceHub } from "@/components/resources/resource-hub";
import { PageHero } from "@/components/site/page-hero";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Technical Resource Center — Brochures, Datasheets, Manuals",
  description:
    "Searchable technical resource center for SUPERTECH WATER SOLUTION: brochures, datasheets, manuals, pump curves, and tender-oriented downloads with RFQ support.",
  path: "/resources",
  keywords: [
    "pump datasheet download",
    "industrial pump brochure",
    "tender pump documents",
    "pump curves technical"
  ]
});

export default function ResourcesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical resource center"
        subtitle="Filter downloadable and RFQ-oriented technical assets across pumps, motors, solar, valves, panels, pipes, and cables."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />
      <ResourceHub />
    </>
  );
}
