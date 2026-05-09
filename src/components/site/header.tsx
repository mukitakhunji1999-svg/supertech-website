"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone, Search, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { productGroups } from "@/lib/products/product-groups";
import { cn } from "@/lib/cn";

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-navy-700 hover:text-primary-700 transition-colors"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top strip */}
      <div className="bg-primary-700 text-white text-xs py-2 hidden sm:block">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {siteConfig.contact.phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="inline-flex items-center gap-1.5 hover:text-primary-200 transition-colors">
                <Phone className="h-3 w-3" />
                {p}
              </a>
            ))}
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary-200 transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4 text-primary-200 font-medium">
            <span>{siteConfig.contact.location}</span>
            <span>|</span>
            <a href={`https://wa.me/${siteConfig.social.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-nav border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700 text-white font-black text-lg select-none">
              S
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-wide text-navy-700">SUPERTECH</div>
              <div className="text-[10px] font-semibold text-primary-700 tracking-wider">WATER SOLUTION</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavItem href="/about">About</NavItem>

            {/* Products mega menu */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-primary-700 transition-colors focus:outline-none"
              >
                Products <ChevronDown className="h-3.5 w-3.5 text-gray-400 transition group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full mt-2 w-[1000px] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.13)]">
                  <div className="grid grid-cols-4 gap-4">
                    {productGroups.map((g) => (
                      <div key={g.slug}>
                        <div className="mb-2 px-2 text-[11px] font-black tracking-widest text-primary-700 uppercase">{g.name}</div>
                        <div className="space-y-0.5">
                          {g.categories.slice(0, 8).map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products/${cat.slug}`}
                              className="block rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-gray-100 pt-3 flex items-center justify-between">
                    <Link href="/products" className="text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors">
                      View all product categories →
                    </Link>
                    <span className="text-xs text-gray-400">India • Middle East • Africa</span>
                  </div>
                </div>
              </div>
            </div>

            <NavItem href="/industries">Industries</NavItem>
            <NavItem href="/locations">Export Markets</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>

            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/rfq">
                <Send className="h-3.5 w-3.5" />
                Get a Quote
              </Link>
            </Button>

            <button
              type="button"
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 space-y-1">
              {[
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/industries", label: "Industries" },
                { href: "/locations", label: "Export Markets" },
                { href: "/blog", label: "Blog" },
                { href: "/government-supply", label: "Government Supply" },
                { href: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-4 py-2.5 text-sm font-semibold text-navy-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <Button asChild className="w-full">
                  <Link href="/rfq" onClick={() => setMobileOpen(false)}>Request a Quotation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
