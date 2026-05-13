import type { ReactNode } from "react";
import { RevealSection } from "@/components/home/reveal";

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
        <strong>Mission:</strong> deliver export-grade products with transparent engineering data and responsive
        after-sales support.
        <br />
        <strong>Vision:</strong> be the reference supplier for fluid and power integration projects across domestic and
        international corridors.
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
    <RevealSection
      id="about"
      className="section-tint scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20"
    >
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">
            About SUPERTECH WATER SOLUTION
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Pump engineering experts · Industrial fluid management specialists
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-gray-600">
            We position every engagement as a technical partnership: from duty-point definition through material
            selection, electrical coordination and field-proven reliability.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`rounded-[22px] border border-primary-700/10 bg-white p-7 shadow-card transition duration-300 hover:border-primary-700/20 hover:shadow-card-hover ${
                c.wide ? "xl:col-span-3" : ""
              }`}
            >
              <h3 className="font-display text-[1.05rem] font-bold text-navy-700">{c.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-gray-600">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
