"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RevealSection } from "@/components/home/reveal";
import { SectionHead } from "@/components/home/section-head";

const trustPills: { title: string; sub: string }[] = [
  { title: "Export quality", sub: "Documentation, packing & repeatability" },
  { title: "Government supplier", sub: "Tender-aligned workflows" },
  { title: "Engineering expertise", sub: "Hydraulic & electrical selection" },
  { title: "Industrial projects", sub: "EPC & OEM programme support" },
  { title: "Technical support", sub: "Commissioning & lifecycle advisory" },
  { title: "Fast dispatch", sub: "Slotted production & logistics" }
];

const stats: { end: number; label: string; suffix?: string }[] = [
  { end: 18, label: "Years focus", suffix: "+" },
  { end: 1200, label: "SKU breadth", suffix: "+" },
  { end: 35, label: "Export corridors" },
  { end: 500, label: "Projects supplied", suffix: "+" }
];

function useAnimatedCount(end: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const ctrl = animate(0, end, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest))
    });
    return () => ctrl.stop();
  }, [active, end]);
  return value;
}

function StatCell({
  end,
  label,
  suffix,
  active
}: {
  end: number;
  label: string;
  suffix?: string;
  active: boolean;
}) {
  const n = useAnimatedCount(end, active);
  return (
    <div className="border-l border-slate-200 px-5 first:border-l-0 first:pl-0 sm:px-6">
      <div className="font-display text-3xl font-bold tracking-tight text-primary-700 md:text-4xl">
        {n}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}

export function HomeIndustrialTrust() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-80px" });

  return (
    <RevealSection className="section-padded scroll-mt-24 bg-slate-50/50">
      <div ref={ref} className="container">
        <SectionHead
          eyebrow="Why procurement teams choose us"
          title="Trust built on technical depth and dispatch discipline"
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustPills.map((t) => (
            <div
              key={t.title}
              className="group rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-primary-200 hover:bg-blue-50/40"
            >
              <strong className="font-display block text-[0.95rem] font-semibold tracking-tight text-navy-700 transition-colors group-hover:text-primary-800">
                {t.title}
              </strong>
              <span className="mt-1 block text-[13px] leading-relaxed text-slate-600">{t.sub}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/40 px-6 py-7 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((s) => (
            <StatCell key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
