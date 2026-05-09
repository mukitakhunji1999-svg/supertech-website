import type { Metadata } from "next";
import { IndustrialSeoPage } from "@/components/seo/industrial-seo-page";
import { pumpExporterIndia } from "@/lib/seo/landings/pump-exporter-india";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: pumpExporterIndia.title,
  description: pumpExporterIndia.description,
  path: pumpExporterIndia.path,
  keywords: [
    "pump exporter India",
    "pump supplier UAE",
    "GCC pump exporter",
    "Africa pump project supply",
    "industrial pump export documentation"
  ]
});

export default function Page() {
  return <IndustrialSeoPage data={pumpExporterIndia} />;
}
