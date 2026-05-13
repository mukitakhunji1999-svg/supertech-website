"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RevealSection } from "@/components/home/reveal";

const trustPills: { title: string; sub: string }[] = [
  { title: "Export quality", sub: "Documentation, packing & repeatability" },
  { title: "Government supplier", sub: "Tender-aligned workflows" },
  { title: "Engineering expertise", sub: "Hydraulic & electrical selection" },
  { title: "Industrial projects", sub: "EPC & OEM programme support" },
  { title: "Technical support", sub: "Commissioning & lifecycle advisory" },
  { title: "Fast dispatch", sub: "Slotted production & logistics" }
];

const stats: { end: number; label: string }[] = [
  { end: 18, label: "Years focus" },
  { end: 1200, label: "SKU breadth" },
  { end: 35, label: "Export corridors" },
  { end: 500, label: "Projects supplied" }
];

function useAnimatedCount(end: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const ctrl = animate(0, end, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest))
    });
    return () => ctrl.stop();
  }, [active, end]);
  return value;
}

function StatCell({ end, label, active }: { end: number; label: string; active: boolean }) {
  const n = useAnimatedCount(end, active);
  return (
    <div className="rounded-2xl border border-primary-700/10 bg-white px-5 py-5 text-center shadow-card">
      <div className="font-display text-3xl font-extrabold text-primary-700">{n}</div>
      <div className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-gray-500">{label}</div>
    </div>
  );
}

export function HomeIndustrialTrust() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-80px" });

  return (
    <RevealSection className="section-white scroll-mt-[5.5rem] sm:scroll-mt-[8rem] py-14 md:py-20">
      <div ref={ref} className="container">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-700">
            Why procurement teams choose us
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Trust built on technical depth and dispatch discipline
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
          {trustPills.map((t) => (
            <div
              key={t.title}
              className="glass-panel rounded-2xl px-5 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <strong className="font-display block text-[0.95rem] font-bold text-navy-700">{t.title}</strong>
              <span className="mt-1.5 block text-[0.8rem] leading-snug text-gray-600">{t.sub}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCell key={s.label} end={s.end} label={s.label} active={active} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
