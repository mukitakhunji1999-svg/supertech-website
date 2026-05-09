import type { IndustrialPageContent } from "@/lib/seo/industrial-pages-types";
import { borewellPumpSupplierIndia } from "@/lib/seo/landings/borewell-pump-supplier-india";
import { industrialPumpManufacturerGujarat } from "@/lib/seo/landings/industrial-pump-manufacturer-gujarat";
import { industrialValveManufacturer } from "@/lib/seo/landings/industrial-valve-manufacturer";
import { pumpExporterIndia } from "@/lib/seo/landings/pump-exporter-india";
import { solarPumpSupplierIndia } from "@/lib/seo/landings/solar-pump-supplier-india";
import { submersiblePumpManufacturerAhmedabad } from "@/lib/seo/landings/submersible-pump-manufacturer-ahmedabad";

export const industrialLandingPages: IndustrialPageContent[] = [
  submersiblePumpManufacturerAhmedabad,
  industrialPumpManufacturerGujarat,
  borewellPumpSupplierIndia,
  pumpExporterIndia,
  industrialValveManufacturer,
  solarPumpSupplierIndia
];

export const industrialLandingByPath = Object.fromEntries(industrialLandingPages.map((p) => [p.path, p]));
