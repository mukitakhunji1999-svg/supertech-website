import { Check } from "lucide-react";
import { RevealSection } from "@/components/home/reveal";
import { SectionHead } from "@/components/home/section-head";

const items: { title: string; body: string }[] = [
  {
    title: "Global logistics orchestration",
    body:
      "Air and sea freight coordination, Incoterms clarity, packing lists and export documentation aligned to destination customs expectations."
  },
  {
    title: "Export packaging engineering",
    body:
      "Vapour barrier discipline, shock mitigation, crate marking and container load optimisation for long-haul integrity."
  },
  {
    title: "International standards alignment",
    body: "Material specs, test certificates and inspection protocols structured for international QA teams."
  },
  {
    title: "OEM & private programme supply",
    body: "Controlled labelling, carton artwork governance and volume ramp pathways."
  }
];

export function HomeExportCapabilities() {
  return (
    <RevealSection id="export" className="section-padded scroll-mt-24 bg-white">
      <div className="container">
        <SectionHead
          eyebrow="Export"
          title="Global logistics · International standards · OEM supply"
        />

        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-slate-300"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-700"
                aria-hidden
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <div>
                <strong className="font-display block text-[0.95rem] font-semibold tracking-tight text-navy-700">
                  {item.title}
                </strong>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
