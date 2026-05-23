"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { productGroups } from "@/lib/products/product-groups";
import { cn } from "@/lib/cn";

type NavItem = { href: string; label: string; hasMenu?: boolean };

const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products", hasMenu: true },
  { href: "/#technical", label: "Resources" },
  { href: "/#blog", label: "Blog" },
  { href: "/#industries", label: "Industries" },
  { href: "/#export", label: "Export" },
  { href: "/#contact", label: "Contact" }
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[100]">
        {/* ─── Slim utility strip (hidden when scrolled) ───────────────── */}
        <div
          className={cn(
            "hidden border-b border-slate-200 bg-white text-xs text-slate-500 transition-[max-height,opacity] duration-300 sm:block",
            scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
          )}
        >
          <div className="container flex h-10 items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium transition-colors hover:text-navy-700"
              >
                {siteConfig.contact.email}
              </a>
              {siteConfig.contact.phones.slice(0, 1).map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-navy-700"
                >
                  <Phone className="h-3 w-3" />
                  {p}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium text-emerald-700">Government supplier</span>
              <Link
                href="/#contact"
                className="font-semibold text-primary-700 transition-colors hover:text-primary-800"
              >
                Export inquiry →
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Main nav ─────────────────────────────────────────────────── */}
        <header
          className={cn(
            "border-b transition-[background-color,border-color] duration-200",
            scrolled
              ? "border-slate-200 bg-white/90 backdrop-blur"
              : "border-transparent bg-white"
          )}
        >
          <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
            {/* Brand */}
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="flex shrink-0 items-center gap-2.5"
            >
              <Image
                src={siteConfig.logoPath}
                alt=""
                width={200}
                height={56}
                className="h-9 w-auto object-contain sm:h-10"
                priority
              />
              <span className="hidden font-display text-[0.95rem] font-bold tracking-tight text-navy-700 sm:inline">
                Supertech
                <span className="ml-1 font-medium text-slate-400">Water Solution</span>
              </span>
            </Link>

            {/* Center nav */}
            <nav
              className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
              aria-label="Primary"
            >
              {primaryNav.map((item) =>
                item.hasMenu ? (
                  <div key={item.href} className="group relative">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-700"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-1 w-[min(56rem,calc(100vw-2rem))] -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_20px_48px_-20px_rgba(15,39,68,0.2)]">
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                          {productGroups.map((g) => (
                            <div key={g.slug}>
                              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                                {g.name}
                              </p>
                              <ul className="space-y-0.5">
                                {g.categories.slice(0, 8).map((cat) => (
                                  <li key={cat.slug}>
                                    <Link
                                      href={`/products/${cat.slug}`}
                                      className="block rounded-md px-2 py-1.5 text-[13px] text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-700"
                                    >
                                      {cat.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs text-slate-500">
                          <Link
                            href="/products"
                            className="font-semibold text-primary-700 transition-colors hover:text-primary-800"
                          >
                            View full catalogue →
                          </Link>
                          <span>Pump engineering · Export grade</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-700"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/search"
                className="hidden h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-50 hover:text-navy-700 md:flex"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="hidden h-9 items-center rounded-md bg-primary-700 px-4 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800 md:inline-flex"
              >
                Get quote
              </Link>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-md text-navy-700 hover:bg-slate-100 lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="border-t border-slate-200 bg-white lg:hidden">
              <nav className="container max-h-[75vh] space-y-0.5 overflow-y-auto py-4">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-full items-center justify-center rounded-md bg-primary-700 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
                  >
                    Request quotation
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Spacer for fixed header — matches new heights */}
      <div className="h-16 shrink-0 sm:h-[6.5rem]" aria-hidden="true" />
    </>
  );
}
