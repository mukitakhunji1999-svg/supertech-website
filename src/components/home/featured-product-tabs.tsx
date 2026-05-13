"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import { featuredProductTabs } from "@/lib/media/featured-product-tabs";

export function HomeFeaturedProductTabs() {
  const [active, setActive] = useState(0);
  const tab = featuredProductTabs[active]!;

  return (
    <section className="border-y border-primary-700/10 bg-white">
      <div className="container py-14 md:py-20">
        <div className="mb-10 text-center md:text-left">
          <div className="text-xs font-black uppercase tracking-widest text-primary-700">Featured products</div>
          <h2 className="mt-2 text-2xl font-black text-navy-700 md:text-3xl">
            Premium product architecture — engineered for specification clarity
          </h2>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2 border-b border-primary-700/10 pb-4"
          role="tablist"
          aria-label="Product families"
        >
          {featuredProductTabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold transition-colors",
                i === active
                  ? "bg-primary-700 text-white shadow-sm"
                  : "bg-primary-50 text-navy-700 hover:bg-primary-100"
              )}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-label={tab.label}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tab.items.map((item) => (
              <Card key={item.title} className="overflow-hidden border-gray-200 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="relative aspect-[4/3] border-b border-gray-100 bg-gray-50">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-navy-700">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800"
                  >
                    {item.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="font-display">
            <Link href="/products">
              View full product catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
