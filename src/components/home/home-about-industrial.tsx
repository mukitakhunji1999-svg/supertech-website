import type { ReactNode } from "react";
import { RevealSection } from "@/components/home/reveal";
import { SectionHead } from "@/components/home/section-head";

const cards: { title: string; body: ReactNode; wide?: boolean }[] = [
  {
    title: "Company overview",
    body:
      "SUPERTECH WATER SOLUTION is a manufacturer and exporter specialising in pumps, valves, pipes, electrical panels, cables, solar PV modules and industrial spare parts — serving agriculture, water treatment, infrastructure and government programmes."
  },
  {
    title: "Mission & vision",
    body: (
      <>
        <strong className="font-semibold text-navy-700">Mission:</strong> deliver export-grade products
        with transparent engineering data and responsive after-sales support.
        <br />
        <strong className="font-semibold text-navy-700">Vision:</strong> be the reference supplier for
        fluid and power integration projects across domestic and international corridors.
      </>
    )
  },
  {
    title: "Manufacturing strength",
    body:
      "Controlled assembly environments, calibrated test benches, segregated warehousing and OEM-ready packaging lines — engineered for traceability and throughput."
  },
  {
    title: "Technical expertise",
    body:
      "Hydraulic curves, NPSH awareness, motor–pump matching, panel harmonics and cable derating — our desk speaks the language of consulting engineers and procurement leads."
  },
  {
    title: "Infrastructure",
    body:
      "Receiving inspection, in-process checkpoints, final verification, export crating and dispatch bays coordinated with freight forward partners."
  },
  {
    title: "Export capability",
    body:
      "Commercial invoices, packing lists, COO where applicable, sea and air freight readiness, and schedule buffers aligned to port cut-offs."
  },
  {
    title: "Quality standards",
    body:
      "Material certificates, stage inspections, test records and corrective-action traceability — structured for audits, EPC quality plans and government evaluation committees.",
    wide: true
  }
];

export function HomeAboutIndustrial() {
  return (
    <RevealSection id="about" className="section-padded scroll-mt-24 bg-white">
      <div className="container">
        <SectionHead
          eyebrow="About SUPERTECH WATER SOLUTION"
          title="Pump engineering experts · Industrial fluid management specialists"
          lede="We position every engagement as a technical partnership: from duty-point definition through material selection, electrical coordination and field-proven reliability."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`card-soft p-6 ${c.wide ? "xl:col-span-3" : ""}`}
            >
              <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-navy-700">
                {c.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-slate-500">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
