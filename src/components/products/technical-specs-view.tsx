import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Download, FileText } from "lucide-react";
import { PerformanceTable } from "@/components/products/performance-table";
import type { TechnicalSpec } from "@/lib/products/technical-specs";
import { technicalSpecsList } from "@/lib/products/technical-specs";

type Props = {
  spec: TechnicalSpec;
};

export function TechnicalSpecsView({ spec }: Props) {
  const hasPerformance = !!spec.performance && spec.performance.length > 0;

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="container py-12 md:py-16">
        {/* Title */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <p className="eyebrow">Technical data sheet</p>
          <h1 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-navy-700 md:text-3xl">
            {spec.title}
          </h1>
          <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-slate-800">{spec.summary}</p>
        </div>

        {/* Drawing + sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-blue-50/40">
              {spec.drawingSrc ? (
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px]">
                  <Image
                    src={spec.drawingSrc}
                    alt={spec.drawingAlt ?? "Product schematic"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-contain p-4"
                  />
                </div>
              ) : (
                <div className="grid h-72 place-items-center text-sm text-slate-800">Drawing not available</div>
              )}
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-primary-700 px-4 py-2.5">
                <p className="font-display text-[11px] font-semibold uppercase tracking-widest text-white">
                  Our Products
                </p>
              </div>
              <nav className="max-h-[480px] overflow-y-auto">
                <ul>
                  {(() => {
                    const familyOrder: Array<NonNullable<typeof spec.family>> = [
                      "Pumps",
                      "Motors",
                      "Solar",
                      "Pipes & Cables",
                      "Valves",
                      "Panels"
                    ];
                    const items: React.ReactNode[] = [];
                    let lastFamily: string | undefined = undefined;
                    const sorted = [...technicalSpecsList].sort((a, b) => {
                      const ai = familyOrder.indexOf(a.family ?? "Pumps");
                      const bi = familyOrder.indexOf(b.family ?? "Pumps");
                      return ai - bi;
                    });
                    sorted.forEach((s) => {
                      const family = s.family ?? "Pumps";
                      if (family !== lastFamily) {
                        items.push(
                          <li
                            key={`fam-${family}`}
                            className="border-b border-slate-200 bg-slate-50 px-4 py-1.5"
                          >
                            <p className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-800">
                              {family}
                            </p>
                          </li>
                        );
                        lastFamily = family;
                      }
                      const isCurrent = s.key === spec.key;
                      const label =
                        s.shortLabel ?? s.title.replace(/ — .*/, "").replace(/ \(.*/, "");
                      items.push(
                        <li key={s.key} className="border-b border-slate-100 last:border-b-0">
                          <Link
                            href={s.productPath ?? "#"}
                            className={
                              "block px-4 py-2 text-[13px] leading-snug transition-colors " +
                              (isCurrent
                                ? "bg-blue-50 font-semibold text-navy-800"
                                : "text-navy-700 hover:bg-slate-50 hover:text-navy-800")
                            }
                          >
                            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary-700/70 align-middle" />
                            {label}
                          </Link>
                        </li>
                      );
                    });
                    return items;
                  })()}
                </ul>
              </nav>
            </div>

            {hasPerformance && (
              <a
                href="#performance-chart"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
              >
                <BarChart3 className="h-4 w-4" />
                Performance Chart
              </a>
            )}

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-700 px-3 py-2.5 font-display text-[13px] font-semibold text-white transition-colors hover:bg-primary-800"
              >
                <FileText className="h-3.5 w-3.5" />
                Get Quote
              </Link>
              <Link
                href="/resources/datasheets"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-display text-[13px] font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <Download className="h-3.5 w-3.5" />
                Datasheet
              </Link>
            </div>
          </aside>
        </div>

        {/* Characteristics table — Masco-style at-a-glance */}
        <section className="mt-12">
          <h2 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-navy-700">
            Characteristics
          </h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-[14px]">
              <tbody>
                {spec.characteristics.flatMap((row) =>
                  row.units.map((u, ui) => (
                    <tr
                      key={`${row.label}-${ui}`}
                      className="border-b border-slate-200 last:border-b-0"
                    >
                      {ui === 0 ? (
                        <th
                          rowSpan={row.units.length}
                          scope="row"
                          className="w-[34%] border-r border-slate-200 bg-slate-50/70 px-4 py-2.5 text-left align-middle font-display text-[13.5px] font-semibold text-navy-700"
                        >
                          {row.label}
                        </th>
                      ) : null}
                      <td className="w-[18%] border-r border-slate-200 px-4 py-2.5 text-[13px] text-slate-800">
                        {u.unit}
                      </td>
                      <td className="px-4 py-2.5 text-slate-800">{u.value}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Materials of construction — bullet lists per section (Masco style) */}
        <section className="mt-12">
          <div className="grid gap-8 md:grid-cols-2">
            {spec.construction.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-navy-700">
                  Material of Construction —{" "}
                  <span className="text-navy-800">
                    {section.title.replace(/details$/i, "").trim()}
                  </span>
                </h2>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {section.rows.map((r) => (
                    <li
                      key={r.component}
                      className="flex items-start gap-2 text-[13.5px] leading-relaxed text-slate-700"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      <span>
                        <span className="font-medium text-navy-700">{r.component}:</span> {r.material}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Salient features */}
        <section className="mt-12">
          <h2 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-navy-700">
            Salient Features
          </h2>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {spec.salientFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-slate-700">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Applications */}
        <section className="mt-12">
          <h2 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-navy-700">
            Applications
          </h2>
          <ul className="flex flex-wrap gap-2">
            {spec.applications.map((a) => (
              <li
                key={a}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[13px] text-navy-700"
              >
                {a}
              </li>
            ))}
          </ul>
        </section>

        {/* Optional operating specs (more detail) */}
        {spec.operatingSpecs && spec.operatingSpecs.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-navy-700">
              Operating Specifications
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <dl className="grid gap-x-8 gap-y-3 p-5 sm:grid-cols-2 md:grid-cols-3">
                {spec.operatingSpecs.map((row) => (
                  <div key={row.label} className="border-b border-dashed border-slate-200 pb-2 last:border-b-0">
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-wider text-slate-800">
                      {row.label}
                    </dt>
                    <dd className="mt-0.5 text-[13.5px] leading-snug text-navy-700">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* Performance charts (optional) */}
        {hasPerformance && (
          <section id="performance-chart" className="mt-14 scroll-mt-24">
            <div className="mb-4">
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-navy-700">
                Performance Chart — Head vs. Discharge
              </h2>
              <p className="mt-1 text-[13px] text-slate-800">
                Approximate performance reference. For project duty point matching, share head, flow, voltage, and
                site details via RFQ.
              </p>
            </div>
            <div className="grid gap-5">
              {spec.performance!.map((t, i) => (
                <PerformanceTable key={`${t.title}-${i}`} table={t} />
              ))}
            </div>
          </section>
        )}

        {/* Footnotes */}
        {spec.footnotes && spec.footnotes.length > 0 && (
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            {spec.footnotes.map((f, i) => (
              <p key={i} className="text-[12.5px] leading-relaxed text-amber-900">
                {f}
              </p>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/40 p-5">
          <div className="min-w-[200px] flex-1">
            <p className="font-display text-base font-semibold text-navy-700">Have a question? Drop us a line.</p>
            <p className="mt-0.5 text-[13px] text-slate-800">
              Share your duty point — head, flow, voltage, application — and our engineering team will match the
              right configuration.
            </p>
          </div>
          <Link
            href="/rfq"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            <FileText className="h-3.5 w-3.5" />
            Request quotation
            <ArrowRight className="h-3.5 w-3.5" />
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
