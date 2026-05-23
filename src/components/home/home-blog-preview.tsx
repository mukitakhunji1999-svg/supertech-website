import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { RevealSection } from "@/components/home/reveal";
import { SectionHead } from "@/components/home/section-head";

const topics = [
  {
    title: "Pump efficiency in real plants",
    desc: "Operating near BEP, trimming impellers vs. VFD economics, and system curve matching for stable duty."
  },
  {
    title: "Industrial water system design",
    desc: "Balancing redundancy, N+1 pumping, header hydraulics and electrical selectivity."
  },
  {
    title: "Predictive pump maintenance",
    desc: "Thermography, alignment checks, lubrication regimes and seal monitoring for uptime SLAs."
  },
  {
    title: "Valve selection for pumping stations",
    desc: "NRV placement, surge considerations, isolation philosophy and actuator sizing."
  },
  {
    title: "Industrial automation panels",
    desc: "PLC architectures, harmonic mitigation and fieldbus options for modern skids."
  },
  {
    title: "Water management strategy",
    desc: "Demand profiling, storage staging and energy recovery opportunities in distribution loops."
  }
];

export function HomeBlogPreview() {
  return (
    <RevealSection id="blog" className="section-padded scroll-mt-24 bg-white">
      <div className="container">
        <SectionHead
          eyebrow="Engineering blog"
          title="Insights for technical buyers and project engineers"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <article key={t.title} className="card-soft p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                <Newspaper className="h-4 w-4" />
              </div>
              <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-navy-700">
                {t.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{t.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-2.5 font-display text-sm font-semibold text-navy-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Open engineering blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
