"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { featuredProductTabs } from "@/lib/media/featured-product-tabs";

export function HomeFeaturedProductTabs() {
  const [active, setActive] = useState(0);
  const tab = featuredProductTabs[active]!;

  return (
    <section
      id="products"
      className="scroll-mt-[5.5rem] border-y border-primary-700/10 bg-white sm:scroll-mt-[8rem]"
    >
      <div className="container py-14 md:py-20">
        <div className="mb-10 max-w-3xl md:mx-auto md:text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">Featured products</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Premium product architecture — engineered for specification clarity
          </h2>
        </div>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Product families">
          {featuredProductTabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={cn(
                "rounded-full border px-4 py-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.06em] transition-all duration-200",
                i === active
                  ? "border-transparent bg-gradient-to-br from-primary-700 to-sky-500 text-white shadow-[0_8px_24px_rgba(15,108,189,0.25)]"
                  : "border-primary-700/12 bg-white text-gray-500 hover:border-primary-300 hover:text-navy-700"
              )}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-label={tab.label}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]"
            >
              {tab.items.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[22px] border border-primary-700/10 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary-50 to-sky-50">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="space-y-2 px-5 pb-6 pt-5">
                    <h3 className="font-display text-[1.05rem] font-bold text-navy-700">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">{item.description}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 pt-1 font-display text-[0.8rem] font-bold text-primary-700 hover:text-primary-800"
                    >
                      {item.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="font-display shadow-md">
            <Link href="/products">
              View full product catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
