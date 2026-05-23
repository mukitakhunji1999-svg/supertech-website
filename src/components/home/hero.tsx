"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { heroSlides } from "@/lib/media/hero-slides";

const trustHighlights = [
  "Government Supplier",
  "Engineering Support",
  "Fast Dispatch"
];

const slideEase = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((x) => (x + 1) % heroSlides.length), []);
  const prev = useCallback(() => setI((x) => (x - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const t = window.setInterval(next, 8000);
    return () => window.clearInterval(t);
  }, [next]);

  const slide = heroSlides[i]!;

  return (
    <section aria-label="Featured" className="relative isolate bg-white">
      {/* Subtle ambient backdrop — no blurry blobs, just a soft tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_60%)]"
      />

      <div className="container relative grid grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        {/* ─── Copy ──────────────────────────────────────────────────────── */}
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${slide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: slideEase }}
            >
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-800">
                <span className="h-px w-6 bg-primary-700" aria-hidden />
                {slide.tag}
              </span>

              <h1 className="mt-5 font-display text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy-700">
                {slide.title}
              </h1>

              <p className="mt-5 max-w-md text-[1rem] leading-[1.65] text-slate-800">
                {slide.sub}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={slide.primary.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
                >
                  {slide.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={slide.secondary.href}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:text-navy-800"
                >
                  {slide.secondary.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Trust check-pills — small, scannable credibility cues */}
          <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-medium text-navy-700">
            {trustHighlights.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-50 text-navy-800">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Visual ────────────────────────────────────────────────────── */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${slide.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.5, ease: slideEase }}
              className="relative"
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-blue-50",
                  slide.aspectClass
                )}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  priority={slide.id === 1}
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className={
                    slide.imageFit === "cover"
                      ? "object-cover"
                      : "object-contain p-2 sm:p-4"
                  }
                  style={
                    slide.imageFit === "cover"
                      ? { objectPosition: slide.imagePosition ?? "center" }
                      : undefined
                  }
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide controls — minimal, inline below visual */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  onClick={() => setI(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    idx === i ? "w-6 bg-primary-700" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  )}
                  aria-label={`Slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 transition-colors hover:border-slate-300 hover:text-navy-700"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 transition-colors hover:border-slate-300 hover:text-navy-700"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
