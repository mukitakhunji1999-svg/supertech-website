"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const overlayClass =
  "bg-[linear-gradient(105deg,rgba(245,250,255,0.94)_0%,rgba(245,250,255,0.78)_38%,rgba(217,236,255,0.45)_72%,rgba(255,255,255,0.2)_100%)]";

const SLIDES = [
  {
    id: 1,
    tag: "Pump engineering · Fluid systems",
    title: "Industrial Pump Solutions",
    sub:
      "End-to-end hydraulic selection, duty-point matching and export-ready documentation for infrastructure, agriculture and process industries.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80",
    alt: "Industrial pump engineering facility",
    primary: { label: "Explore products", href: "/products" as const },
    secondary: { label: "Request quotation", href: "/contact" as const }
  },
  {
    id: 2,
    tag: "Technical authority",
    title: "Water Engineering Excellence",
    sub:
      "Integrated fluid management: pumping, distribution, control and electrical coordination — engineered for reliability and lifecycle cost clarity.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80",
    alt: "Water engineering and industrial piping",
    primary: { label: "Technical resources", href: "/resources" as const },
    secondary: { label: "Contact engineering", href: "/contact" as const }
  },
  {
    id: 3,
    tag: "Manufacturing discipline",
    title: "Export-Grade Manufacturing",
    sub:
      "Traceable processes, inspection gates and packaging protocols aligned with international procurement expectations and multimodal logistics.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    alt: "Precision manufacturing and quality control",
    primary: { label: "Export capabilities", href: "/#export" as const },
    secondary: { label: "Our standards", href: "/about" as const }
  },
  {
    id: 4,
    tag: "Public sector & EPC",
    title: "Government & Infrastructure Supply",
    sub:
      "Structured technical submissions, schedule discipline and post-award engineering support for tenders, SPVs and large-scale water projects.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    alt: "Infrastructure and government project supply",
    primary: { label: "Tender & RFQ desk", href: "/contact" as const },
    secondary: { label: "Industries served", href: "/#industries" as const }
  }
];

export function HomeHero() {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((x) => (x + 1) % SLIDES.length), []);
  const prev = useCallback(() => setI((x) => (x - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = window.setInterval(next, 7500);
    return () => window.clearInterval(t);
  }, [next]);

  const slide = SLIDES[i]!;

  return (
    <section className="relative min-h-[min(88vh,820px)] overflow-hidden bg-[#d9ecff]" aria-label="Featured">
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-[opacity,visibility] duration-[850ms] ease-out",
            idx === i ? "z-[1] opacity-100 visible" : "z-0 invisible opacity-0 pointer-events-none"
          )}
          aria-hidden={idx !== i}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={cn(
                "absolute -inset-[8%] h-[116%] w-[116%] max-w-none",
                idx === i && "animate-ken-burns"
              )}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className={cn("absolute inset-0", overlayClass)} aria-hidden />
        </div>
      ))}

      <div className="container relative z-[2] flex min-h-[min(88vh,820px)] items-center py-12 pb-28 md:py-16 md:pb-32">
        <div className="max-w-[560px]">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">{slide.tag}</p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-navy-700">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-[520px] text-[1.05rem] leading-relaxed text-gray-600">{slide.sub}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="font-display h-auto rounded-xl border-0 bg-gradient-to-br from-primary-700 to-sky-500 px-5 py-2.5 text-[0.8125rem] font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] hover:from-primary-800 hover:to-sky-600 hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98]"
            >
              <Link href={slide.primary.href}>{slide.primary.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-display h-auto rounded-xl border border-primary-700/25 bg-white/95 px-5 py-2.5 text-[0.8125rem] font-bold text-primary-700 shadow-sm backdrop-blur-sm hover:border-primary-600 hover:bg-primary-50 active:scale-[0.98]"
            >
              <Link href={slide.secondary.href}>{slide.secondary.label}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-[5] flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-700/20 bg-white/90 text-primary-700 shadow-sm transition hover:border-primary-400 hover:shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Slides">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === i}
                onClick={() => setI(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  idx === i ? "w-8 bg-primary-700" : "w-2.5 bg-primary-300/90 hover:bg-primary-500"
                )}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-700/20 bg-white/90 text-primary-700 shadow-sm transition hover:border-primary-400 hover:shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
