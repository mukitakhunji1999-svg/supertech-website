import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { productGroups } from "@/lib/products/product-groups";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main footer */}
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700 text-white font-black text-lg select-none">S</div>
              <div>
                <div className="text-sm font-black tracking-wide text-white">SUPERTECH WATER SOLUTION</div>
                <div className="text-[10px] font-semibold text-primary-400 tracking-wider">SUPERTECH KAIZEN</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Premium manufacturer and exporter of pumps, motors, solar pumping systems, valves, pipes, cables, panels, and accessories. Built for India, Middle East, and Africa.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary-400 shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
              {siteConfig.contact.phones.map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary-400 shrink-0" />
                  <a href={`tel:${p}`} className="hover:text-white transition-colors">{p}</a>
                </div>
              ))}
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Products column */}
          <div className="lg:col-span-3">
            <div className="text-xs font-black tracking-widest text-gray-400 uppercase mb-4">Products</div>
            <div className="space-y-2 text-sm">
              {productGroups.slice(0, 6).map((g) => (
                <Link
                  key={g.slug}
                  href={`/products`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {g.name}
                </Link>
              ))}
              <Link href="/products" className="block text-primary-400 hover:text-primary-300 transition-colors font-semibold mt-2">
                Browse all →
              </Link>
            </div>
          </div>

          {/* Company + Markets */}
          <div className="lg:col-span-2">
            <div className="text-xs font-black tracking-widest text-gray-400 uppercase mb-4">Company</div>
            <div className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/quality", label: "Quality Policy" },
                { href: "/government-supply", label: "Government Supply" },
                { href: "/industries", label: "Industries Served" },
                { href: "/distributor", label: "Distributor Inquiry" },
                { href: "/compare", label: "Compare Products" },
                { href: "/blog", label: "Blog" }
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Export markets */}
          <div className="lg:col-span-3">
            <div className="text-xs font-black tracking-widest text-gray-400 uppercase mb-4">Export Markets</div>
            <div className="grid grid-cols-2 gap-2 text-sm mb-5">
              {siteConfig.markets.map((m) => (
                <Link
                  key={m}
                  href="/locations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {m}
                </Link>
              ))}
            </div>
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center w-full rounded-md bg-primary-700 text-white text-sm font-semibold px-5 py-3 hover:bg-primary-800 transition-colors"
            >
              Request a Quotation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700/60">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
