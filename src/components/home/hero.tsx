"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const HERO_SLIDES = [
  {
    bg: "bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800",
    tag: "India's Export-Grade Industrial Pump Manufacturer",
    title: "Premium Pumps, Motors & Solar Pumping Solutions",
    sub: "Engineered for government projects, EPC contractors, infrastructure companies, agricultural irrigation, and global B2B buyers across India, Middle East & Africa.",
    img: "/images/parts/IMG20250828132148.png"
  },
  {
    bg: "bg-gradient-to-br from-navy-900 via-primary-900 to-navy-800",
    tag: "Export Ready · GCC · Africa",
    title: "World-Class Industrial Pump Supply for GCC & Africa Markets",
    sub: "Submersible pumps, borewell pumps, solar pumping systems, valves, panels, cables and accessories — export documentation ready.",
    img: "/images/parts/IMG20250828132213.png"
  },
  {
    bg: "bg-gradient-to-br from-primary-900 via-navy-900 to-navy-950",
    tag: "SUPERTECH KAIZEN · Quality First",
    title: "Government-Grade Manufacturing. Procurement-Confident Supply.",
    sub: "Supporting government tenders, EPC submissions, and bulk procurement with structured documentation, traceable QC, and export-ready dispatch.",
    img: "/images/parts/IMG20250828132235.png"
  }
];

export function HomeHero() {
  // Use first slide as static hero (no client-side state for SSG perf)
  const slide = HERO_SLIDES[0];

  return (
    <section className={`relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center ${slide.bg}`}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${slide.img}')` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-hero opacity-30" />

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            {slide.tag}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {slide.title}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-white/80 md:text-lg leading-relaxed"
          >
            {slide.sub}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-primary-50 shadow font-bold">
              <Link href="/rfq">
                Request Quotation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href="/products">
                Explore Products <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {[
              { n: "20+", label: "Product Categories" },
              { n: "8+", label: "Export Markets" },
              { n: "500+", label: "Product Variants" },
              { n: "B2B", label: "Industrial Focus" }
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.n}</div>
                <div className="text-xs text-white/65 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom breadcrumb bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container py-2.5 flex items-center gap-2 text-xs text-white/60 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/80">{siteConfig.name}</span>
        </div>
      </div>
    </section>
  );
}
