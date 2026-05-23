"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { cn } from "@/lib/cn";

type GroupRef = { slug: string; name: string };

type Props = {
  groups: GroupRef[];
};

export function StickyFilterBar({ groups }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  // Scroll-spy: highlight the chip whose section is currently in view
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const offset = (ref.current?.offsetHeight ?? 64) + 120;
      let current: string | null = null;
      for (const g of groups) {
        const el = document.getElementById(`group-${g.slug}`);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = g.slug;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [groups]);

  const onScrollTo = (slug: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(`group-${slug}`);
    if (!el) return;
    const offset = (ref.current?.offsetHeight ?? 64) + 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    window.location.assign(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div
      ref={ref}
      className="sticky top-16 z-30 border-y border-slate-200 bg-white/95 backdrop-blur sm:top-[6.5rem]"
    >
      <div className="container">
        <div className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:gap-4">
          {/* Category chips — horizontal scroll on mobile */}
          <nav
            className="-mx-1 flex gap-1.5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Product categories"
          >
            {groups.map((g) => {
              const isActive = active === g.slug;
              return (
                <a
                  key={g.slug}
                  href={`#group-${g.slug}`}
                  onClick={onScrollTo(g.slug)}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-1.5 font-display text-xs font-semibold tracking-tight transition-colors",
                    isActive
                      ? "border-primary-700 bg-primary-700 text-white"
                      : "border-slate-200 bg-white text-navy-700 hover:border-slate-300 hover:bg-slate-50"
                  )}
                >
                  {g.name}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:ml-auto">
            {/* Search */}
            <form onSubmit={onSubmitSearch} className="relative flex-1 lg:w-64 lg:flex-initial">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-800" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                aria-label="Search products"
                className="h-9 w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 text-sm text-navy-700 outline-none placeholder:text-slate-800 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              />
            </form>

            {/* Datasheet shortcut */}
            <Link
              href="/resources/datasheets"
              className="hidden h-9 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 font-display text-xs font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Datasheets
            </Link>

            {/* Quick inquiry — primary CTA */}
            <Link
              href="/rfq"
              className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary-700 px-3.5 font-display text-xs font-semibold text-white transition-colors hover:bg-primary-800"
            >
              <FileText className="h-3.5 w-3.5" />
              Quick inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
