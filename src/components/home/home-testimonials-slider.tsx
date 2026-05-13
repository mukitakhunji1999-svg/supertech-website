"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealSection } from "@/components/home/reveal";
import { cn } from "@/lib/cn";

const slides = [
  {
    quote:
      "Hydraulic schedules were delivered with clarity — our consulting team signed off without a single revision cycle on pump selection.",
    cite: "— EPC procurement lead, water infrastructure"
  },
  {
    quote:
      "Export packing photos matched the packing list line-for-line — customs clearance was frictionless at destination.",
    cite: "— International trading house"
  },
  {
    quote: "Panel FAT was documented with rigour; commissioning on site tracked the approved IO list exactly.",
    cite: "— Industrial automation contractor"
  }
];

export function HomeTestimonialsSlider() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((x) => (x + 1) % slides.length), []);
  const prev = useCallback(() => setI((x) => (x - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = window.setInterval(next, 8000);
    return () => window.clearInterval(t);
  }, [next]);

  const slide = slides[i]!;

  return (
    <RevealSection id="testimonials" className="section-white scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">Testimonials</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            What technical buyers say
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-primary-700/10 bg-white shadow-card">
          <div className="flex items-stretch">
            <button
              type="button"
              onClick={prev}
              className="hidden shrink-0 border-r border-primary-700/10 bg-primary-50/50 px-3 text-primary-700 transition hover:bg-primary-100 sm:flex sm:items-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative min-h-[200px] flex-1 px-6 py-10 md:px-12 md:py-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-display text-lg font-medium leading-snug text-navy-800 md:text-xl">
                    “{slide.quote}”
                  </blockquote>
                  <cite className="mt-6 block text-sm font-semibold not-italic text-gray-600">{slide.cite}</cite>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={next}
              className="hidden shrink-0 border-l border-primary-700/10 bg-primary-50/50 px-3 text-primary-700 transition hover:bg-primary-100 sm:flex sm:items-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 border-t border-primary-700/10 bg-primary-50/30 py-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  idx === i ? "w-8 bg-primary-700" : "w-2.5 bg-primary-300 hover:bg-primary-500"
                )}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
