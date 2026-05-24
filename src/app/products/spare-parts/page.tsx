import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { sparePartImages } from "@/lib/products/spare-parts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pump & Motor Spare Parts — Impellers, Diffusers, Bowls, Couplings & More",
  description:
    "Genuine OEM spare parts for V3, V4, V6 and SP series submersible pump sets and motors — impellers, diffusers, bowls, housings, couplings, bushes, seals, NRVs and motor rewinding consumables. SUPERTECH WATER SOLUTION."
};

const seriesChipStyle: Record<string, string> = {
  V3: "bg-sky-50 text-sky-800 border-sky-200",
  V4: "bg-blue-50 text-blue-800 border-blue-200",
  V6: "bg-indigo-50 text-indigo-800 border-indigo-200",
  SP: "bg-amber-50 text-amber-800 border-amber-200",
  Universal: "bg-slate-50 text-slate-700 border-slate-200"
};

export default function SparePartsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Pump & Motor Spare Parts"
        subtitle="Genuine OEM spare parts for V3, V4, V6 and SP series submersible pump sets — impellers, diffusers, bowls, housings, couplings, bushes, seals, NRVs and motor rewinding consumables."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Spare Parts" }
        ]}
      />

      {/* Intro / CTA strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container py-8 md:py-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow">Lifecycle support</p>
              <h2 className="mt-1 font-display text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
                Keep your pump sets running — original spares, dispatched fast
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                Every part below is manufactured to original SUPERTECH tolerances and inspected before
                dispatch. Share your pump model / serial number and the part you need — we&apos;ll confirm
                fitment and ship from our Ahmedabad facility.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/rfq" className="inline-flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" /> Request spare part
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${siteConfig.contact.phones[0]}`} className="inline-flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> Call sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spare parts grid */}
      <section className="section-gray">
        <div className="container py-12 md:py-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
                Complete spare parts catalogue
              </h2>
              <p className="mt-1 text-sm text-slate-800">
                {sparePartImages.length} parts across pump bowls, impellers, couplings, housings, sealing &amp; motor consumables.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sparePartImages.map((part) => (
              <div
                key={part.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-white to-slate-50">
                  <Image
                    src={part.src}
                    alt={part.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                  {part.series && part.series !== "Universal" && (
                    <span
                      className={`absolute left-3 top-3 rounded-full border px-2 py-0.5 font-display text-[10px] font-bold tracking-wide ${
                        seriesChipStyle[part.series] ?? seriesChipStyle.Universal
                      }`}
                    >
                      {part.series}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-navy-700">
                    {part.name}
                  </h3>
                  {part.description && (
                    <p className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-slate-700">
                      {part.description}
                    </p>
                  )}
                  <Link
                    href={`/rfq?part=${encodeURIComponent(part.name)}`}
                    className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-navy-800 transition-colors hover:text-primary-700"
                  >
                    Enquire <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-white">
        <div className="container py-12 md:py-16">
          <div className="rounded-xl border border-primary-100 bg-primary-50 p-8">
            <div className="mb-2 text-xs font-black uppercase tracking-widest text-navy-800">
              Bulk spares for service teams
            </div>
            <h2 className="mb-3 text-xl font-black text-navy-700 md:text-2xl">
              Service-dealer & EPC spare parts kits
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-800">
              Service dealers and EPC contractors can request bundled spare parts kits keyed to V3, V4, V6 or
              SP installations. Share your fleet inventory and we&apos;ll structure a stocking plan that keeps
              your turnaround time short.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/rfq">Get RFQ Support</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/distributor">Become a service dealer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
