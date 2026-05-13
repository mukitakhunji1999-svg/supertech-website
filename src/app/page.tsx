import type { Metadata } from "next";
import { HomeFeaturedProductTabs } from "@/components/home/featured-product-tabs";
import { HomeHero } from "@/components/home/hero";
import { HomeAboutIndustrial } from "@/components/home/home-about-industrial";
import { HomeBlogPreview } from "@/components/home/home-blog-preview";
import { HomeContactTeaser } from "@/components/home/home-contact-teaser";
import { HomeExportCapabilities } from "@/components/home/home-export-capabilities";
import { HomeIndustrialTrust } from "@/components/home/home-industrial-trust";
import { HomeTechnicalPreview } from "@/components/home/home-technical-preview";
import { HomeTestimonialsSlider } from "@/components/home/home-testimonials-slider";
import { HomeQuoteSection } from "@/components/home/quote-section";
import {
  HomeCtaBanner,
  HomeExportSection,
  HomeFAQ,
  HomeIndustriesStrip,
  HomeProductCategories
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
      <HomeIndustrialTrust />
      <HomeAboutIndustrial />
      <HomeFeaturedProductTabs />
      <HomeTechnicalPreview />
      <HomeBlogPreview />
      <HomeQuoteSection />
      <HomeIndustriesStrip />
      <HomeExportCapabilities />
      <HomeExportSection />
      <HomeProductCategories />
      <HomeTestimonialsSlider />
      <HomeContactTeaser />
      <HomeFAQ />
      <HomeCtaBanner />
      <WhatsAppFloat />
    </>
  );
}
