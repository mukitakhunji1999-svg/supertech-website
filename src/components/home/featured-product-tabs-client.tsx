"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { SectionHead } from "./section-head";

export type FeaturedItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type FeaturedTab = {
  id: string;
  label: string;
  items: FeaturedItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeFeaturedProductTabsClient({ tabs }: { tabs: FeaturedTab[] }) {
  const safeTabs = tabs.length > 0 ? tabs : [{ id: "empty", label: "Products", items: [] }];
  const [active, setActive] = useState(0);
  const tab = safeTabs[Math.min(active, safeTabs.length - 1)]!;
  const total = safeTabs.reduce((sum, t) => sum + t.items.length, 0);

  return (
    <section
      id="products"
      className="section-padded scroll-mt-24 border-y border-slate-100 bg-gradient-to-b from-white via-white to-blue-50/30"
    >
      <div className="container">
        <SectionHead
          eyebrow="Featured products"
          title="Engineered for specification clarity"
          lede={`Browse ${total} products across pumps, valves, pipes, panels, cables and solar systems.`}
        />

        {/* ── Tabs: text-only with animated underline ──────────────────── */}
        <div
          className="mb-8 flex flex-wrap gap-1 border-b border-slate-200"
          role="tablist"
          aria-label="Product families"
        >
          {safeTabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative cursor-pointer px-4 py-2.5 font-display text-sm font-medium tracking-tight transition-colors",
                i === active
                  ? "text-primary-700"
                  : "text-slate-500 hover:text-navy-700"
              )}
            >
              {t.label}
              {i === active && (
                <motion.span
                  layoutId="active-tab-underline"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary-700"
                  transition={{ duration: 0.3, ease }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Card grid ────────────────────────────────────────────────── */}
        <div role="tabpanel" aria-label={tab.label}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {tab.items.length === 0 && (
                <p className="col-span-full rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center text-sm text-slate-500">
                  No products in this category yet.
                </p>
              )}
              {tab.items.map((item) => (
                <article
                  key={`${tab.id}-${item.title}`}
                  className="card-soft group flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-blue-50/60">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-semibold tracking-tight text-navy-700">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      aria-label={`View more about ${item.title}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-[gap,color] duration-200 hover:gap-1.5 hover:text-primary-800"
                    >
                      View more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            View full product catalogue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
