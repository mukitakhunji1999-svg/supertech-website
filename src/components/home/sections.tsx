import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, BadgeCheck, Building2, Factory, Globe2, Quote, Shield, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allCategories } from "@/lib/products/product-groups";
import { partImages } from "@/lib/media/parts";

/* ─── Counter strip ─────────────────────────────────────────── */
export function HomeCounterStrip() {
  const stats = [
    { n: "20+", label: "Product Categories" },
    { n: "500+", label: "SKUs & Variants" },
    { n: "8", label: "Export Markets" },
    { n: "100%", label: "B2B Industrial" },
    { n: "50+", label: "Government Projects" },
    { n: "1500+", label: "Happy Clients" }
  ];
  return (
    <div className="bg-primary-700 text-white">
      <div className="container py-5">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black">{s.n}</div>
              <div className="text-xs text-primary-200 mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Product categories grid ───────────────────────────────── */
export function HomeProductCategories() {
  const top = allCategories.slice(0, 12);
  return (
    <section className="section-padded bg-slate-50/50">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Our products</p>
            <h2 className="section-title mt-2">A complete industrial portfolio</h2>
            <p className="section-lede">
              Pumps · Motors · Solar pumping · Valves · Panels · Pipes &amp; Cables · Spare parts
            </p>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {top.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`} className="card-soft group flex flex-col p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary-50 text-navy-800">
                <Factory className="h-4 w-4" />
              </div>
              <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-navy-700 transition-colors group-hover:text-navy-800">
                {c.name}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-800">{c.intro}</p>
              <span className="explore-link mt-4">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-5 py-2.5 font-display text-sm font-semibold text-white hover:bg-primary-800"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Manufacturing excellence ──────────────────────────────── */
export function HomeManufacturingExcellence() {
  const items = [
    { icon: Factory, title: "Precision Manufacturing", desc: "Process-driven assembly with performance and safety validation at every stage." },
    { icon: BadgeCheck, title: "Quality Inspection", desc: "Incoming and in-process checks aligned to export procurement expectations." },
    { icon: Shield, title: "Export Packing", desc: "Protection-first packing engineered for long-distance shipping and container handling." },
    { icon: Wrench, title: "Serviceability", desc: "Design choices focused on maintenance, spares availability, and lifecycle reliability." }
  ];
  return (
    <section className="section-white">
      <div className="container py-14 md:py-20">
        <div className="max-w-4xl">
            <div className="text-xs font-black tracking-widest text-navy-800 uppercase mb-2">Manufacturing Excellence</div>
            <h2 className="text-2xl font-black text-navy-700 md:text-3xl leading-snug">
              Built for Global Duty Cycles, Government Tenders & EPC Execution
            </h2>
            <p className="mt-4 text-slate-800 leading-relaxed">
              From raw material control to final testing, SUPERTECH WATER SOLUTION follows an export-grade manufacturing
              discipline: consistent processes, traceable documentation, and serviceability — engineered for
              infrastructure, industrial, and government buyers.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {items.map((i) => (
                <div key={i.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                    <i.icon className="h-4 w-4 text-navy-800" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-700">{i.title}</div>
                    <div className="text-xs text-slate-800 mt-0.5 leading-relaxed">{i.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild>
                <Link href="/about">About SUPERTECH</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quality">Quality Policy</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Export section ────────────────────────────────────────── */
export function HomeExportSection() {
  const markets = [
    { flag: "🇮🇳", name: "India", sub: "Pan-India distribution" },
    { flag: "🇦🇪", name: "UAE", sub: "Dubai · Abu Dhabi · Sharjah" },
    { flag: "🇸🇦", name: "Saudi Arabia", sub: "Infrastructure & agri" },
    { flag: "🇶🇦", name: "Qatar", sub: "EPC & government supply" },
    { flag: "🇴🇲", name: "Oman", sub: "Industrial & agri" },
    { flag: "🇰🇼", name: "Kuwait", sub: "Utilities & infra" },
    { flag: "🇧🇭", name: "Bahrain", sub: "Project-based supply" },
    { flag: "🌍", name: "Africa", sub: "Export project supply" }
  ];
  return (
    <section className="section-padded border-y border-slate-100 bg-white">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="eyebrow">Global reach</p>
          <h2 className="section-title mt-2">India · Middle East · Africa export markets</h2>
          <p className="section-lede mx-auto">
            Export-ready documentation, stable supply chain and project-focused selection support for procurement
            teams across GCC and Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {markets.map((m) => (
            <Link
              key={m.name}
              href="/locations"
              className="group flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <span className="text-2xl leading-none">{m.flag}</span>
              <div className="mt-1.5 font-display text-sm font-semibold text-navy-700">{m.name}</div>
              <div className="text-[11px] leading-tight text-slate-800">{m.sub}</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/rfq"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-700 px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            Request export quotation
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            View location pages
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─────────────────────────────────────────── */
export function HomeWhyChooseUs() {
  const items = [
    { icon: Building2, title: "Government & EPC Ready", desc: "Structured tender submissions, technical schedules, and RFQ workflows for large procurement teams." },
    { icon: Award, title: "Export-Grade Reliability", desc: "Materials, QC checkpoints, and documentation aligned to international buyer expectations." },
    { icon: Globe2, title: "Global Dispatch Support", desc: "Optimized packing, lead times, and export coordination for GCC and Africa projects." },
    { icon: Shield, title: "Long-Life Engineering", desc: "Designed for performance confidence: stable hydraulics, durable materials, and service-friendly assembly." }
  ];
  return (
    <section className="section-gray">
      <div className="container py-14 md:py-20">
        <div className="text-center mb-10">
          <div className="text-xs font-black tracking-widest text-navy-800 uppercase mb-2">Why Choose SUPERTECH</div>
          <h2 className="text-2xl font-black text-navy-700 md:text-3xl">Premium Industrial Engineering. Built for Long Life.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <Card key={i.title} className="text-center p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                <i.icon className="h-6 w-6 text-navy-800" />
              </div>
              <CardTitle className="text-center mb-2">{i.title}</CardTitle>
              <CardDescription className="text-center">{i.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Parts showcase ────────────────────────────────────────── */
export function HomePartsShowcase() {
  return (
    <section className="section-white">
      <div className="container py-14 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black tracking-widest text-navy-800 uppercase mb-2">Spare Parts & Accessories</div>
            <h2 className="text-2xl font-black text-navy-700 md:text-3xl">Genuine Spare Parts for Lifecycle Value</h2>
            <p className="mt-2 text-sm text-slate-800 max-w-2xl">
              Impellers, diffusers, shafts, bushes, cable joints and accessories — supplied for serviceability, EPC maintenance and export projects.
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex shrink-0">
            <Link href="/products/spare-parts">Browse Spare Parts <ArrowRight className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partImages.slice(0, 8).map((img) => (
            <div key={img.src} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card hover:shadow-card-hover transition-shadow">
              <div className="card-img-wrap aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-[11px] font-black tracking-widest text-navy-800 uppercase mb-1">{img.tag}</div>
                <div className="text-sm font-semibold text-navy-700">{img.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────── */
export function HomeTestimonials() {
  const items = [
    { name: "EPC Procurement Team, GCC", role: "Infrastructure Project", text: "Documentation quality and response speed were excellent. Selection support helped finalize the right configuration quickly for our tender." },
    { name: "Infrastructure Contractor, India", role: "Government Supply", text: "Stable performance and professional coordination. The team understands tender requirements and project timelines very well." },
    { name: "Export Buyer, Africa", role: "Agricultural Irrigation", text: "Packing quality and shipment coordination were outstanding. Reliable delivery and clear datasheets make procurement easy." }
  ];
  return (
    <section className="section-gray">
      <div className="container py-14 md:py-20">
        <div className="text-center mb-10">
          <div className="text-xs font-black tracking-widest text-navy-800 uppercase mb-2">Client Testimonials</div>
          <h2 className="text-2xl font-black text-navy-700 md:text-3xl">Trusted by Projects & Procurement Teams</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="p-6">
              <Quote className="h-6 w-6 text-primary-300 mb-3" />
              <p className="text-sm text-slate-800 leading-relaxed mb-4">{t.text}</p>
              <div>
                <div className="text-sm font-bold text-navy-700">{t.name}</div>
                <div className="text-xs text-navy-800 font-medium">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────── */
export function HomeFAQ() {
  const faqs = [
    { q: "Do you supply for government departments and tenders?", a: "Yes. We support tender-style documentation, technical schedules, and procurement workflows for government and public-sector buyers across India and export markets." },
    { q: "Do you export to UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain?", a: "Yes. We support export coordination and product selection for all GCC markets along with Africa project exports." },
    { q: "Can you share brochures and technical datasheets?", a: "Yes. We provide brochures, datasheets, and technical tables for product selection. Request via our Resources section or RFQ form." },
    { q: "Do you support EPC contractors with selection and RFQ?", a: "Yes. Share duty points, water source details, voltage, and installation constraints to receive optimized selection recommendations from our team." },
    { q: "What is the typical lead time for export orders?", a: "Lead times vary by product and quantity. Contact us with your order details for a specific delivery schedule aligned to your project timeline." }
  ];
  return (
    <section className="section-padded bg-white">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title mt-2">Frequently asked questions</h2>
            <p className="section-lede">
              Quick answers for procurement teams, EPC contractors, government buyers and export customers.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              Talk to our team
            </Link>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white px-5"
              >
                <AccordionTrigger className="font-display text-[0.95rem] font-semibold text-navy-700 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[13.5px] leading-relaxed text-slate-800">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ─── Industries strip ──────────────────────────────────────── */
export function HomeIndustriesStrip() {
  const industries = [
    { icon: "🌾", name: "Agriculture", desc: "Irrigation, borewell and solar pumping at scale." },
    { icon: "💧", name: "Water treatment", desc: "Process pumping, chemical dosing and panel integration." },
    { icon: "🏭", name: "Industrial plants", desc: "Utilities, transfer and booster skids with OEM support." },
    { icon: "🏛️", name: "Government projects", desc: "Tender documentation and compliance-first dispatch." },
    { icon: "🛤️", name: "Infrastructure", desc: "Metro, township and highway corridor water systems." },
    { icon: "🚿", name: "Irrigation", desc: "Canal-fed and pressurised distribution networks." },
    { icon: "🔥", name: "Fire fighting", desc: "Hydrant and sprinkler pump packages — layout support." },
    { icon: "☀️", name: "Solar projects", desc: "PV arrays, structures and pumping integration." }
  ];
  return (
    <section id="industries" className="section-padded scroll-mt-24 border-t border-slate-100 bg-white">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Industries served</p>
          <h2 className="section-title mt-2">Vertical expertise across fluid and electrical domains</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <article key={i.name} className="card-soft p-5">
              <div className="mb-2 text-2xl leading-none">{i.icon}</div>
              <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-navy-700">{i.name}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-800">{i.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust & compliance strip ──────────────────────────────── */
export function HomeTrustStrip() {
  const items = [
    {
      title: "Government & tender supply",
      body: "Structured technical submissions, schedules, and post-award support for public-sector and EPC procurement.",
      href: "/government-supply",
      cta: "Government supply"
    },
    {
      title: "Quality system discipline",
      body: "Inspection gates, traceable documentation, and export-oriented packing protocols aligned to industrial buyer expectations.",
      href: "/quality",
      cta: "Quality policy"
    },
    {
      title: "Export lanes & logistics",
      body: "GCC and Africa project coordination with documentation-first dispatch planning from Gujarat, India.",
      href: "/pump-exporter-india",
      cta: "Export hub"
    },
    {
      title: "Technical resource center",
      body: "Brochures, datasheets, manuals, curves, and tender-oriented downloads — searchable and RFQ-linked.",
      href: "/resources",
      cta: "Browse resources"
    }
  ];
  return (
    <section className="section-white border-y border-primary-700/10">
      <div className="container py-14 md:py-16">
        <div className="mb-10 text-center">
          <div className="mb-2 text-xs font-black uppercase tracking-widest text-navy-800">Trust & capability</div>
          <h2 className="text-2xl font-black text-navy-700 md:text-3xl">Built for industrial procurement, not retail impulse buys</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-800">
            SUPERTECH WATER SOLUTION focuses on B2B reliability: documentation, export readiness, and engineering-led selection for pumps, motors, solar systems, valves, panels, pipes, and cables.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((x) => (
            <Card key={x.title} className="flex h-full flex-col border-primary-100 shadow-card">
              <CardHeader>
                <CardTitle className="text-base">{x.title}</CardTitle>
                <CardDescription className="leading-relaxed">{x.body}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button asChild variant="outline" size="sm" className="border-primary-300">
                  <Link href={x.href}>
                    {x.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────────── */
export function HomeCtaBanner() {
  return (
    <section className="bg-navy-700">
      <div className="container py-14 md:py-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-300">
              Ready for your project?
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-tight text-white">
              Talk to our engineering desk
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300">
              Share your duty point, water source, head, discharge, voltage and country. We respond with recommended
              product options and an export-ready quotation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:shrink-0">
            <Link
              href="/rfq"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:bg-slate-100"
            >
              Request quotation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-transparent px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
