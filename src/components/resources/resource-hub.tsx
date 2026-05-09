"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { brochures } from "@/lib/resources/brochures";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "brochure", label: "Brochures" },
  { id: "datasheet", label: "Datasheets" },
  { id: "tender", label: "Tender packs" },
  { id: "curve", label: "Pump curves" }
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const EXTRA = [
  {
    id: "datasheets-hub",
    title: "Datasheets & technical tables",
    href: "/resources/datasheets",
    filter: "datasheet" as const,
    tags: ["datasheet", "selection", "tables"],
    description: "Category-wise datasheet guidance and RFQ-based configuration tables."
  },
  {
    id: "brochures-hub",
    title: "Brochure library",
    href: "/resources/brochures",
    filter: "brochure" as const,
    tags: ["brochure", "pdf", "marketing-technical"],
    description: "Brochure pages mapped to product and series documentation."
  },
  {
    id: "tender-rfq",
    title: "Tender document workflow",
    href: "/government-supply",
    filter: "tender" as const,
    tags: ["tender", "government", "epc"],
    description: "Government supply orientation and documentation expectations."
  },
  {
    id: "curves-rfq",
    title: "Pump curves on request",
    href: "/rfq",
    filter: "curve" as const,
    tags: ["curve", "performance", "rfq"],
    description: "Configuration-specific curves shared with structured RFQ submissions."
  }
];

export function ResourceHub() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<FilterId>("all");

  const brochureCards = useMemo(
    () =>
      brochures.map((b) => ({
        id: b.key,
        title: b.title,
        href: `/resources/brochures/${b.key}`,
        filter: "brochure" as const,
        tags: ["brochure", "download", b.key],
        description: b.description
      })),
    []
  );

  const items = useMemo(() => [...EXTRA, ...brochureCards], [brochureCards]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((it) => {
      if (filter !== "all" && it.filter !== filter) return false;
      if (!term) return true;
      const blob = `${it.title} ${it.description} ${it.tags.join(" ")}`.toLowerCase();
      return blob.includes(term);
    });
  }, [items, q, filter]);

  return (
    <section className="section-gray">
      <div className="container py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Input
            placeholder="Search resources (e.g., submersible, solar, datasheet, tender)…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="max-w-xl bg-white"
          />
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                filter === f.id
                  ? "border-primary-700 bg-primary-700 text-white"
                  : "border-gray-200 bg-white text-navy-700 hover:border-primary-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => (
            <Link key={it.id} href={it.href} className="group block">
              <Card className="h-full transition hover:border-primary-300 hover:shadow-card-hover">
                <CardHeader>
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary-700">{it.filter}</div>
                  <CardTitle className="text-base group-hover:text-primary-700">{it.title}</CardTitle>
                  <CardDescription>{it.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
