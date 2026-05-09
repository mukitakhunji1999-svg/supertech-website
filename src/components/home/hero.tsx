"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const SLIDES = [
  {
    id: 1,
    title: "Industrial Pump Solutions",
    sub:
      "Hydraulic selection, duty-point engineering and export documentation for EPC contractors, infrastructure programmes and B2B buyers across India, Middle East and Africa.",
    tag: "Pump engineering · Fluid systems",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80",
    alt: "Industrial pump and precision components"
  },
  {
    id: 2,
    title: "Water Engineering Excellence",
    sub:
      "Integrated fluid management: pumping, distribution, electrical coordination and control — engineered for reliability and lifecycle cost clarity.",
    tag: "Technical authority",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80",
    alt: "Industrial water engineering and piping"
  },
  {
    id: 3,
    title: "Export-Grade Manufacturing",
    sub:
      "Traceable processes, inspection gates and packaging protocols aligned with international procurement and multimodal logistics.",
    tag: "Manufacturing discipline",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    alt: "Manufacturing and quality control environment"
  },
  {
    id: 4,
    title: "Government & Infrastructure Supply",
    sub:
      "Structured technical submissions, schedule discipline and post-award engineering support for tenders, SPVs and large-scale water projects.",
    tag: "Public sector & EPC",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    alt: "Infrastructure and construction project context"
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

  const slide = SLIDES[i];

  return (
    <section className="relative min-h-[min(88vh,52rem)] overflow-hidden bg-primary-100">
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            idx === i ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"
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
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary-50/95 via-white/85 to-primary-100/70"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-primary-50/40" aria-hidden />
        </div>
      ))}

      <div className="container relative z-[2] flex min-h-[min(88vh,52rem)] flex-col justify-center py-16 md:py-24">
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary-700">{slide.tag}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-700 sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">{slide.sub}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="font-display shadow-md">
            <Link href="/products">Explore products</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-300 bg-white/90 font-display backdrop-blur-sm">
            <Link href="/rfq">Request quotation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-300 bg-white/90 font-display backdrop-blur-sm">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {["Export quality", "Government supplier", "Technical support", "Fast dispatch"].map((b) => (
            <span
              key={b}
              className="rounded-full border border-primary-200/80 bg-white/80 px-3 py-1 text-xs font-semibold text-navy-700 shadow-sm backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-8 border-t border-primary-700/10 pt-8">
          {[
            { n: "20+", l: "Product categories" },
            { n: "900+", l: "Variants & SKUs" },
            { n: "35+", l: "Export lanes" },
            { n: "B2B", l: "Industrial focus" }
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-extrabold text-primary-700">{s.n}</div>
              <div className="text-xs font-medium uppercase tracking-wider text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[3] border-t border-primary-700/10 bg-white/80 backdrop-blur-md">
        <div className="container flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <Link href="/" className="hover:text-primary-700">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 opacity-40" />
            <span className="text-navy-700">{siteConfig.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white text-primary-700 shadow-sm transition hover:border-primary-400 hover:shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    idx === i ? "w-8 bg-primary-700" : "w-2.5 bg-primary-300/80 hover:bg-primary-400"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white text-primary-700 shadow-sm transition hover:border-primary-400 hover:shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
