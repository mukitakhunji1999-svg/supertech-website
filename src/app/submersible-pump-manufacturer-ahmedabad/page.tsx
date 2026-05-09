import type { Metadata } from "next";
import { IndustrialSeoPage } from "@/components/seo/industrial-seo-page";
import { submersiblePumpManufacturerAhmedabad } from "@/lib/seo/landings/submersible-pump-manufacturer-ahmedabad";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: submersiblePumpManufacturerAhmedabad.title,
  description: submersiblePumpManufacturerAhmedabad.description,
  path: submersiblePumpManufacturerAhmedabad.path,
  keywords: [
    "submersible pump manufacturer Ahmedabad",
    "borewell pump manufacturer Gujarat",
    "stainless steel submersible pump exporter",
    "openwell submersible pump supplier"
  ]
});

export default function Page() {
  return <IndustrialSeoPage data={submersiblePumpManufacturerAhmedabad} />;
}
