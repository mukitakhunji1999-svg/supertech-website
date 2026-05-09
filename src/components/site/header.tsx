"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Search, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { productGroups } from "@/lib/products/product-groups";
import { cn } from "@/lib/cn";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-2 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-primary-100/80 hover:text-primary-700"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[100]">
        {/* Top strip */}
        <div className="hidden bg-gradient-to-r from-primary-700 via-primary-800 to-primary-600 text-white sm:block">
          <div className="container flex h-10 items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium hover:text-primary-100">
                {siteConfig.contact.email}
              </a>
              <span className="hidden text-primary-200/80 md:inline">|</span>
              {siteConfig.contact.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="inline-flex items-center gap-1 hover:text-primary-100">
                  <Phone className="h-3 w-3" />
                  {p}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                Government supplier
              </span>
              <Link href="/contact" className="font-semibold text-primary-100 hover:text-white">
                Export inquiry →
              </Link>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <header
          className={cn(
            "border-b border-primary-700/10 transition-[background,box-shadow] duration-300",
            scrolled ? "bg-white/95 shadow-nav backdrop-blur-md" : "bg-primary-50/90 backdrop-blur-sm"
          )}
        >
          <div className="container flex h-[4.5rem] items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-200/80 bg-gradient-to-br from-primary-100 to-white font-display text-lg font-black text-primary-700 shadow-sm">
                S
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-extrabold tracking-wide text-navy-700">SUPERTECH</div>
                <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-700">Water Solution</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-primary-100/80 hover:text-primary-700"
                >
                  Products <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-[min(56rem,calc(100vw-2rem)))] -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="glass-panel max-h-[min(70vh,520px)] overflow-y-auto rounded-2xl p-5">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {productGroups.map((g) => (
                        <div key={g.slug}>
                          <div className="mb-2 px-1 font-display text-[10px] font-bold uppercase tracking-widest text-primary-700">{g.name}</div>
                          <div className="space-y-0.5">
                            {g.categories.slice(0, 8).map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/products/${cat.slug}`}
                                className="block rounded-lg px-2 py-1.5 text-sm text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-primary-700/10 pt-3">
                      <Link href="/products" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                        Full catalogue →
                      </Link>
                      <span className="text-xs text-gray-400">Pump engineering · Export grade</span>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink href="/resources">Technical Resources</NavLink>
              <NavLink href="/blog">Blogs</NavLink>
              <Link
                href="/#quote"
                className="rounded-lg px-2 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-primary-100/80 hover:text-primary-700"
              >
                Quote Builder
              </Link>
              <NavLink href="/industries">Industries</NavLink>
              <NavLink href="/locations">Export</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/search"
                className="hidden h-10 w-10 items-center justify-center rounded-lg border border-primary-700/10 bg-white text-gray-500 transition-colors hover:border-primary-300 hover:text-primary-700 md:flex"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Link>
              <Button asChild size="sm" className="hidden font-display md:inline-flex">
                <Link href="/rfq">
                  <Send className="h-3.5 w-3.5" />
                  Get quote
                </Link>
              </Button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-700/10 bg-white text-navy-700 lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="border-t border-primary-700/10 bg-white lg:hidden">
              <div className="container max-h-[70vh] space-y-1 overflow-y-auto py-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/products", label: "Products" },
                  { href: "/resources", label: "Technical Resources" },
                  { href: "/blog", label: "Blogs" },
                  { href: "/#quote", label: "Quote Builder" },
                  { href: "/industries", label: "Industries" },
                  { href: "/locations", label: "Export" },
                  { href: "/contact", label: "Contact" }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-navy-700 hover:bg-primary-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button asChild className="w-full font-display">
                    <Link href="/rfq" onClick={() => setMobileOpen(false)}>
                      Request quotation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacer for fixed header stack */}
      <div className="h-[4.5rem] shrink-0 sm:h-[7rem]" aria-hidden="true" />
    </>
  );
}
