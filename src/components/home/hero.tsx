"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { heroSlides, type HeroSlideConfig } from "@/lib/media/hero-slides";

const accentGlow: Record<HeroSlideConfig["accent"], string> = {
  blue: "from-primary-500/35 via-primary-300/20 to-transparent",
  cyan: "from-sky-400/35 via-cyan-300/20 to-transparent",
  amber: "from-amber-400/35 via-orange-300/20 to-transparent",
  green: "from-emerald-400/35 via-emerald-300/20 to-transparent"
};

const slideEase = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((x) => (x + 1) % heroSlides.length), []);
  const prev = useCallback(() => setI((x) => (x - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const t = window.setInterval(next, 7500);
    return () => window.clearInterval(t);
  }, [next]);

  const slide = heroSlides[i]!;

  return (
    <section
      aria-label="Featured"
      className="relative isolate overflow-hidden bg-[radial-gradient(120%_120%_at_0%_0%,#eaf4ff_0%,#f5faff_45%,#ffffff_100%)]"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary-300/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[24rem] w-[24rem] rounded-full bg-sky-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(15,108,189,0.05) 60%, rgba(15,108,189,0.10) 100%)"
        }}
      />

      <div className="container relative z-[2] grid min-h-[min(86vh,760px)] grid-cols-1 items-center gap-10 py-12 pb-28 md:py-16 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Left — copy */}
        <div className="max-w-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${slide.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: slideEase }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-700/15 bg-white/80 px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary-700 shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-600" aria-hidden />
                {slide.tag}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-navy-800">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-[540px] text-[1.05rem] leading-relaxed text-gray-600">{slide.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="font-display h-auto rounded-xl border-0 bg-gradient-to-br from-primary-700 to-sky-500 px-6 py-3 text-[0.85rem] font-bold text-white shadow-[0_10px_28px_rgba(15,108,189,0.32)] hover:from-primary-800 hover:to-sky-600 hover:shadow-[0_14px_36px_rgba(15,108,189,0.42)] active:scale-[0.98]"
                >
                  <Link href={slide.primary.href}>{slide.primary.label}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-display h-auto rounded-xl border border-primary-700/25 bg-white/95 px-6 py-3 text-[0.85rem] font-bold text-primary-700 shadow-sm backdrop-blur-sm hover:border-primary-600 hover:bg-primary-50 active:scale-[0.98]"
                >
                  <Link href={slide.secondary.href}>{slide.secondary.label}</Link>
                </Button>
              </div>

              {/* Trust pills */}
              <div className="mt-9 flex flex-wrap gap-2 text-[0.72rem] font-semibold text-navy-700">
                {["Export quality", "Government supplier", "Engineering support", "Fast dispatch"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-primary-700/10 bg-white/85 px-3 py-1 shadow-sm backdrop-blur-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — product visual */}
        <div className="relative mx-auto flex w-full max-w-[600px] items-center justify-center lg:mx-0 lg:justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${slide.id}`}
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.6, ease: slideEase }}
              className="relative w-full"
            >
              {/* Colored halo behind product */}
              <div
                aria-hidden
                className={cn(
                  "absolute inset-x-4 -inset-y-4 -z-[1] rounded-[28px] bg-gradient-to-br blur-2xl",
                  accentGlow[slide.accent]
                )}
              />
              <div className="relative overflow-hidden rounded-[26px] border border-white/60 bg-gradient-to-br from-white via-white/95 to-primary-50/60 p-3 shadow-[0_30px_60px_-30px_rgba(15,108,189,0.55)] backdrop-blur-md sm:p-4">
                <div
                  className={cn(
                    "relative w-full overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#f5faff_0%,#ffffff_50%,#eaf3ff_100%)]",
                    slide.aspectClass
                  )}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    priority={slide.id === 1}
                    sizes="(max-width: 1024px) 90vw, 600px"
                    className={
                      slide.imageFit === "cover"
                        ? "object-cover"
                        : "object-contain"
                    }
                    style={
                      slide.imageFit === "cover"
                        ? { objectPosition: slide.imagePosition ?? "center" }
                        : undefined
                    }
                  />
                </div>
              </div>

              {/* Image caption (below card so it never covers the product) */}
              <div className="mt-3 flex items-center justify-center gap-2 px-2">
                <span className="rounded-full border border-primary-700/10 bg-white/90 px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary-700 shadow-sm backdrop-blur">
                  {slide.imageAlt}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[5] flex justify-center px-4 sm:bottom-8">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-primary-700/10 bg-white/90 px-3 py-2 shadow-[0_10px_30px_-10px_rgba(15,108,189,0.35)] backdrop-blur-md sm:gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition hover:bg-primary-100 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Slides">
            {heroSlides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={idx === i}
                onClick={() => setI(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  idx === i ? "w-9 bg-primary-700" : "w-2.5 bg-primary-300 hover:bg-primary-500"
                )}
                aria-label={`Slide ${idx + 1}: ${s.title}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition hover:bg-primary-100 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
