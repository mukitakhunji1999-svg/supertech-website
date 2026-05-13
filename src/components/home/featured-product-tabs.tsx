"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { featuredProductTabs } from "@/lib/media/featured-product-tabs";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeFeaturedProductTabs() {
  const [active, setActive] = useState(0);
  const tab = featuredProductTabs[active]!;

  return (
    <section
      id="products"
      className="scroll-mt-[5.5rem] border-y border-primary-700/10 bg-white sm:scroll-mt-[8rem]"
    >
      <div className="container py-[clamp(3.5rem,8vw,6rem)]">
        {/* Matches .section-head + .eyebrow from index / supertech.css */}
        <div className="mb-10 max-w-[720px]">
          <p className="mb-2.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary-700">
            Featured products
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.35rem)] font-extrabold leading-snug tracking-[-0.02em] text-navy-700">
            Premium product architecture — engineered for specification clarity
          </h2>
        </div>

        {/* Matches .product-tabs + .tab-btn */}
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Product families">
          {featuredProductTabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.06em] transition-all duration-[250ms]",
                i === active
                  ? "border-transparent bg-gradient-to-br from-primary-700 to-primary-500 text-white shadow-[0_8px_24px_rgba(15,108,189,0.25)]"
                  : "border-primary-700/12 bg-white text-gray-600 shadow-sm hover:border-primary-400 hover:text-navy-700 hover:shadow-md"
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
              transition={{ duration: 0.32, ease }}
              className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]"
            >
              {tab.items.map((item, idx) => (
                <motion.article
                  key={`${tab.id}-${item.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.42, ease }}
                  className="group overflow-hidden rounded-[22px] border border-[rgba(15,108,189,0.12)] bg-white shadow-[0_8px_32px_rgba(15,39,68,0.08)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-[rgba(15,108,189,0.22)] hover:shadow-[0_20px_48px_rgba(15,108,189,0.14)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(145deg,#d9ecff_0%,#eef6ff_100%)]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-[transform] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="px-[1.35rem] pb-6 pt-5">
                    <h3 className="font-display text-[1.05rem] font-bold leading-tight text-navy-700">{item.title}</h3>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-gray-600 line-clamp-3">{item.description}</p>
                    <Link
                      href={item.href}
                      className="mt-3 inline-flex items-center gap-1 font-display text-[0.8rem] font-bold text-primary-700 transition-[gap,color] duration-200 hover:gap-1.5 hover:text-primary-800"
                    >
                      {item.ctaLabel} <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary-700 to-primary-500 px-6 py-3 font-display text-[0.8125rem] font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] transition hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98]"
          >
            View full product catalogue <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
