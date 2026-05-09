"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { products, type Product } from "@/lib/products/catalog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const storageKey = "stw.compare";

function toMap(items: Product[]) {
  const rows = new Map<string, Array<{ label: string; value: string }>>();
  for (const p of items) {
    for (const r of p.specifications) {
      const key = r.label;
      const existing = rows.get(key) ?? [];
      existing.push({ label: p.name, value: r.value });
      rows.set(key, existing);
    }
  }
  return rows;
}

export function ProductComparison() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
    if (!saved) return;
    try {
      const ids = JSON.parse(saved);
      if (Array.isArray(ids)) setSelected(ids.filter((x) => typeof x === "string"));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, JSON.stringify(selected));
  }, [selected]);

  const candidates = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products.slice(0, 24);
    return products.filter((p) => `${p.name} ${p.shortDescription}`.toLowerCase().includes(query)).slice(0, 30);
  }, [q]);

  const selectedProducts = useMemo(
    () => selected.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[],
    [selected]
  );

  const specRows = useMemo(() => toMap(selectedProducts), [selectedProducts]);

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(0, 4)));
  }

  return (
    <div className="grid gap-8">
      <div>
        <p className="text-sm text-gray-500 mb-3">Select up to 4 products to compare specifications side-by-side.</p>
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search product to add..." className="max-w-xl" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {candidates.map((p) => {
          const active = selected.includes(p.id);
          return (
            <Card key={p.id} className={active ? "border-primary-400 ring-2 ring-primary-100" : undefined}>
              <CardHeader>
                <CardTitle className="text-base">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-500">{p.shortDescription}</div>
                <Button type="button" variant={active ? "default" : "outline"} onClick={() => toggle(p.id)} className="w-full">
                  {active ? "Selected ✓" : "Add to Compare"}
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={`/products/${p.categorySlug}/${p.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-1">Comparison</div>
            <div className="text-xl font-black text-navy-700">Specification Comparison</div>
          </div>
          <Button type="button" variant="outline" onClick={() => setSelected([])}>Clear All</Button>
        </div>

        {selectedProducts.length ? (
          <>
            <div className="mb-4 flex flex-wrap gap-2">
              {selectedProducts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected((prev) => prev.filter((x) => x !== p.id))}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 transition hover:bg-primary-100"
                >
                  {p.name} <X className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>

            <div className="overflow-auto rounded-xl border border-gray-200">
              <table className="min-w-[720px] w-full text-left text-sm">
                <thead className="bg-primary-700 text-xs font-black tracking-wider text-primary-100">
                  <tr>
                    <th className="px-4 py-3">Specification</th>
                    {selectedProducts.map((p) => (
                      <th key={p.id} className="px-4 py-3">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {Array.from(specRows.entries()).map(([label], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-navy-700">{label}</td>
                      {selectedProducts.map((p) => {
                        const v = p.specifications.find((r) => r.label === label)?.value ?? "—";
                        return <td key={p.id + label} className="px-4 py-3 text-gray-600">{v}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-500">
            Add products above to generate a comparison table. For procurement, share duty point and destination via RFQ for configuration-level matching.
          </div>
        )}
      </section>
    </div>
  );
}
