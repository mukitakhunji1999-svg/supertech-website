import type { Metadata } from "next";
import { IndustrialSeoPage } from "@/components/seo/industrial-seo-page";
import { borewellPumpSupplierIndia } from "@/lib/seo/landings/borewell-pump-supplier-india";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: borewellPumpSupplierIndia.title,
  description: borewellPumpSupplierIndia.description,
  path: borewellPumpSupplierIndia.path,
  keywords: [
    "borewell pump supplier India",
    "borewell submersible pump manufacturer",
    "deep well pump exporter",
    "agriculture borewell pump Gujarat"
  ]
});

export default function Page() {
  return <IndustrialSeoPage data={borewellPumpSupplierIndia} />;
}
