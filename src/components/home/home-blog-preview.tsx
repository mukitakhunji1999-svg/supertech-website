import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/home/reveal";

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
    <RevealSection id="blog" className="section-white scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">Engineering blog</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Insights for technical buyers and project engineers
          </h2>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {topics.map((t) => (
            <article
              key={t.title}
              className="rounded-[22px] border border-primary-700/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <h3 className="font-display text-[1.05rem] font-bold text-navy-700">{t.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-gray-600">{t.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-700 bg-white px-6 py-3 font-display text-sm font-bold text-primary-700 transition hover:bg-primary-50"
          >
            Open engineering blog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
