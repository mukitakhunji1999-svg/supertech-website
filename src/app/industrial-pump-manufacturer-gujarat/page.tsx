import type { Metadata } from "next";
import { IndustrialSeoPage } from "@/components/seo/industrial-seo-page";
import { industrialPumpManufacturerGujarat } from "@/lib/seo/landings/industrial-pump-manufacturer-gujarat";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: industrialPumpManufacturerGujarat.title,
  description: industrialPumpManufacturerGujarat.description,
  path: industrialPumpManufacturerGujarat.path,
  keywords: [
    "industrial pump manufacturer Gujarat",
    "pump manufacturer Ahmedabad",
    "EPC pump supplier India",
    "industrial water pump exporter"
  ]
});

export default function Page() {
  return <IndustrialSeoPage data={industrialPumpManufacturerGujarat} />;
}
