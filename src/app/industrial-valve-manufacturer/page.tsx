import type { Metadata } from "next";
import { IndustrialSeoPage } from "@/components/seo/industrial-seo-page";
import { industrialValveManufacturer } from "@/lib/seo/landings/industrial-valve-manufacturer";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: industrialValveManufacturer.title,
  description: industrialValveManufacturer.description,
  path: industrialValveManufacturer.path,
  keywords: [
    "industrial valve manufacturer India",
    "NRV valve supplier",
    "gate valve exporter Gujarat",
    "butterfly valve industrial supply"
  ]
});

export default function Page() {
  return <IndustrialSeoPage data={industrialValveManufacturer} />;
}
