import { RevealSection } from "@/components/home/reveal";

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
    <RevealSection id="export" className="section-tint scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">Export</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Global logistics · International standards · OEM supply
          </h2>
        </div>

        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-primary-700/10 bg-white px-6 py-5 shadow-card"
            >
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-primary-700 to-sky-400 shadow-[0_0_12px_rgba(46,144,250,0.55)]"
                aria-hidden
              />
              <div>
                <strong className="font-display block text-[0.95rem] font-bold text-navy-700">{item.title}</strong>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
