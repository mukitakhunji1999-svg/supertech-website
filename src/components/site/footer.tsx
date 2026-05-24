import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { productGroups } from "@/lib/products/product-groups";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-700/10 bg-white text-navy-700">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3 sm:gap-4">
              <Image
                src={siteConfig.logoPath}
                alt=""
                width={96}
                height={96}
                className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
              />
              <span className="font-display bg-gradient-to-r from-primary-700 via-primary-600 to-navy-800 bg-clip-text text-base font-extrabold leading-tight tracking-tight text-transparent sm:text-lg md:text-xl">
                {siteConfig.name}
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-800">
              Premium manufacturer and exporter of pumps, motors, solar pumping systems, valves, pipes, cables, panels,
              and accessories. Built for India, Middle East, and Africa.
            </p>
            <div className="space-y-2.5 text-sm text-slate-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-800" />
                <span>{siteConfig.contact.location}</span>
              </div>
              {siteConfig.contact.phones.map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-navy-800" />
                  <a href={`tel:${p}`} className="transition-colors hover:text-navy-800">
                    {p}
                  </a>
                </div>
              ))}
              {siteConfig.contact.emails.map((mail, idx) => (
                <div key={mail} className="flex items-center gap-2.5">
                  {idx === 0 ? (
                    <Mail className="h-4 w-4 shrink-0 text-navy-800" />
                  ) : (
                    <span className="h-4 w-4 shrink-0" aria-hidden />
                  )}
                  <a href={`mailto:${mail}`} className="break-all transition-colors hover:text-navy-800">
                    {mail}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-navy-800">Products</div>
            <div className="space-y-2 text-sm">
              {productGroups.slice(0, 6).map((g) => (
                <Link key={g.slug} href="/products" className="block text-slate-800 transition-colors hover:text-navy-800">
                  {g.name}
                </Link>
              ))}
              <Link href="/products" className="mt-2 block font-semibold text-navy-800 hover:text-navy-900">
                Browse all →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-navy-800">Company</div>
            <div className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/quality", label: "Quality Policy" },
                { href: "/government-supply", label: "Government Supply" },
                { href: "/industries", label: "Industries Served" },
                { href: "/distributor", label: "Distributor Inquiry" },
                { href: "/compare", label: "Compare Products" },
                { href: "/blog", label: "Blog" },
                { href: "/resources", label: "Technical resources" },
                { href: "/callback", label: "Request callback" }
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-slate-800 transition-colors hover:text-navy-800">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-navy-800">Export markets</div>
            <div className="mb-5 grid grid-cols-2 gap-2 text-sm">
              {siteConfig.markets.map((m) => (
                <Link key={m} href="/locations" className="text-slate-800 transition-colors hover:text-navy-800">
                  {m}
                </Link>
              ))}
            </div>
            <Link
              href="/rfq"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              Request a quotation
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-primary-50/50">
        <div className="container flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-800 sm:flex-row">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-navy-800">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-navy-800">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-navy-800">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
