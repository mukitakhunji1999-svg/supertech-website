import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, FileText } from "lucide-react";
import { PerformanceTable } from "@/components/products/performance-table";
import type { TechnicalSpec } from "@/lib/products/technical-specs";

type Props = {
  spec: TechnicalSpec;
};

export function TechnicalSpecsView({ spec }: Props) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container py-14 md:py-20">
        {/* Heading */}
        <div className="mb-8">
          <p className="eyebrow">Technical data sheet</p>
          <h2 className="section-title mt-2">{spec.title}</h2>
          <p className="section-lede max-w-3xl">{spec.summary}</p>
        </div>

        {/* Drawing + at-a-glance specs */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
              Schematic drawing
            </p>
            {spec.drawingSrc ? (
              <div className="relative aspect-[4/9] w-full overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-blue-50/40">
                <Image
                  src={spec.drawingSrc}
                  alt={spec.drawingAlt ?? "Pump schematic"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-contain p-4"
                />
              </div>
            ) : (
              <div className="grid aspect-[4/9] place-items-center rounded-xl bg-slate-50 text-sm text-slate-400">
                Drawing not available
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
              Operating specifications
            </p>
            <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {spec.operatingSpecs.map((row) => (
                <div key={row.label} className="border-b border-dashed border-slate-200 pb-2 last:border-b-0">
                  <dt className="font-display text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {row.label}
                  </dt>
                  <dd className="mt-0.5 text-[13.5px] leading-snug text-navy-700">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/rfq"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                <FileText className="h-3.5 w-3.5" />
                Get quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/resources/datasheets"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <Download className="h-3.5 w-3.5" />
                Datasheets
              </Link>
            </div>
          </div>
        </div>

        {/* Applications + Salient features */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary-700">Applications</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {spec.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-slate-700">
                  <span className="mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
              Salient features
            </p>
            <ul className="space-y-2">
              {spec.salientFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-slate-700">
                  <span className="mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Construction (materials of construction) */}
        <div className="mb-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
            Materials of construction
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {spec.construction.map((section) => (
              <div key={section.title} className="rounded-2xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50/70 px-5 py-3">
                  <p className="font-display text-[13.5px] font-semibold text-navy-700">{section.title}</p>
                </div>
                <table className="w-full text-[13px]">
                  <tbody>
                    {section.rows.map((r) => (
                      <tr key={r.component} className="border-b border-slate-100 last:border-b-0">
                        <th
                          scope="row"
                          className="w-1/3 px-4 py-2.5 text-left align-top font-display text-[12px] font-semibold text-slate-600"
                        >
                          {r.component}
                        </th>
                        <td className="px-4 py-2.5 align-top text-slate-700">{r.material}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Performance tables */}
        <div className="mb-6">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
            Performance charts
          </p>
          <h3 className="font-display text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
            Head vs. discharge — by series
          </h3>
          <p className="mt-1 text-[13px] text-slate-500">
            Approximate performance reference. For project duty point matching, share head, flow, voltage, and site
            details via RFQ.
          </p>
        </div>

        <div className="grid gap-5">
          {spec.performance.map((t, i) => (
            <PerformanceTable key={`${t.title}-${i}`} table={t} />
          ))}
        </div>

        {spec.footnotes && spec.footnotes.length > 0 && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            {spec.footnotes.map((f, i) => (
              <p key={i} className="text-[12.5px] leading-relaxed text-amber-900">
                {f}
              </p>
            ))}
          </div>
        )}

        {/* Bottom CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="min-w-[200px] flex-1">
            <p className="font-display text-base font-semibold text-navy-700">Need a configuration for your site?</p>
            <p className="mt-0.5 text-[13px] text-slate-500">
              Share your head, flow, voltage, and destination for an exact match and quotation.
            </p>
          </div>
          <Link
            href="/rfq"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            <FileText className="h-3.5 w-3.5" />
            Request quotation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Talk to engineering
          </Link>
        </div>
      </div>
    </section>
  );
}
