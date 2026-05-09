import type { Metadata } from "next";
import { IndustrialSeoPage } from "@/components/seo/industrial-seo-page";
import { solarPumpSupplierIndia } from "@/lib/seo/landings/solar-pump-supplier-india";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: solarPumpSupplierIndia.title,
  description: solarPumpSupplierIndia.description,
  path: solarPumpSupplierIndia.path,
  keywords: [
    "solar pump supplier India",
    "solar agriculture pump exporter",
    "solar pumping systems Gujarat",
    "solar water pump Middle East export"
  ]
});

export default function Page() {
  return <IndustrialSeoPage data={solarPumpSupplierIndia} />;
}
