import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { RevealSection } from "@/components/home/reveal";
import { SectionHead } from "@/components/home/section-head";

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
    <RevealSection id="technical" className="section-padded scroll-mt-24 bg-slate-50/50">
      <div className="container">
        <SectionHead
          eyebrow="Technical resources"
          title="Knowledge assets that reinforce pump engineering authority"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <article key={r.title} className="card-soft p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary-50 text-navy-800">
                <FileText className="h-4 w-4" />
              </div>
              <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-navy-700">
                {r.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-800">{r.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            Browse resource library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
