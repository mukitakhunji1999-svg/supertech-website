import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/home/reveal";

const resources = [
  {
    title: "Pump selection guides",
    desc: "Duty-point methodology, NPSH awareness, parallel/series staging and motor sizing checkpoints."
  },
  {
    title: "Pump troubleshooting",
    desc: "Vibration signatures, cavitation indicators, bearing temperature trends and seal chamber diagnostics."
  },
  {
    title: "Installation manuals",
    desc: "Alignment, grouting, suction piping rules, electrical protection and commissioning sequences."
  },
  {
    title: "Technical documents",
    desc: "Performance curves, GA drawings, material certificates and FAT protocols on request."
  },
  {
    title: "Engineering charts",
    desc: "Head–flow envelopes, efficiency islands and power draw projections for tender schedules."
  },
  {
    title: "Efficiency & maintenance",
    desc: "BEP operation, energy audit hooks, lubrication intervals and predictive maintenance hooks."
  }
];

export function HomeTechnicalPreview() {
  return (
    <RevealSection
      id="technical"
      className="section-tint scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20"
    >
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">
            Technical resources
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Knowledge assets that reinforce pump engineering authority
          </h2>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {resources.map((r) => (
            <article
              key={r.title}
              className="rounded-[22px] border border-primary-700/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <h3 className="font-display text-[1.05rem] font-bold text-navy-700">{r.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-gray-600">{r.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 font-display text-sm font-bold text-white shadow-md transition hover:bg-primary-800"
          >
            Browse resource library <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
