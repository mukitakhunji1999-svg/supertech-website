import type { Metadata } from "next";
import { HomeFeaturedProductTabs } from "@/components/home/featured-product-tabs";
import { HomeHero } from "@/components/home/hero";
import { HomeQuoteSection } from "@/components/home/quote-section";
import {
  HomeCounterStrip,
  HomeCtaBanner,
  HomeExportSection,
  HomeFAQ,
  HomeIndustriesStrip,
  HomeManufacturingExcellence,
  HomePartsShowcase,
  HomeProductCategories,
  HomeTestimonials,
  HomeTrustStrip,
  HomeWhyChooseUs
} from "@/components/home/sections";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export const metadata: Metadata = {
  title: "Premium Industrial Pump Manufacturer & Exporter | India · UAE · GCC · Africa",
  description:
    "SUPERTECH WATER SOLUTION — premium manufacturer and exporter of submersible pumps, borewell pumps, solar pumps, industrial pumps, motors, valves, pipes, cables, and control panels for India, Middle East & Africa."
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCounterStrip />
      <HomeQuoteSection />
      <HomeFeaturedProductTabs />
      <HomeProductCategories />
      <HomeManufacturingExcellence />
      <HomeExportSection />
      <HomePartsShowcase />
      <HomeWhyChooseUs />
      <HomeIndustriesStrip />
      <HomeTestimonials />
      <HomeTrustStrip />
      <HomeFAQ />
      <HomeCtaBanner />
      <WhatsAppFloat />
    </>
  );
}
