"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allCategories } from "@/lib/products/product-groups";
import { products } from "@/lib/products/catalog";

type SearchItem =
  | { kind: "category"; title: string; description: string; href: string }
  | { kind: "product"; title: string; description: string; href: string };

export function ProductSearch() {
  const [q, setQ] = useState("");

  const items: SearchItem[] = useMemo(() => {
    const categoryItems: SearchItem[] = allCategories.map((c) => ({
      kind: "category",
      title: c.name,
      description: c.intro,
      href: `/products/${c.slug}`
    }));
    const productItems: SearchItem[] = products.map((p) => ({
      kind: "product",
      title: p.name,
      description: p.shortDescription,
      href: `/products/${p.categorySlug}/${p.slug}`
    }));
    return [...categoryItems, ...productItems];
  }, []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items.slice(0, 24);
    const scored = items
      .map((it) => {
        const hay = `${it.title} ${it.description}`.toLowerCase();
        const score = hay.includes(query) ? 10 : 0;
        const score2 = it.title.toLowerCase().includes(query) ? 20 : 0;
        return { it, score: score + score2 };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);
    return scored.map((x) => x.it);
  }, [q, items]);

  return (
    <div className="grid gap-4">
      <div className="relative max-w-2xl">
        <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} className="pl-11" placeholder="Search pumps, motors, solar, valves, panels..." />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((r) => (
          <Link key={r.href} href={r.href}>
            <Card className="h-full hover:border-primary-300">
              <CardHeader>
                <div className="text-xs font-black tracking-widest text-primary-700 uppercase">{r.kind}</div>
                <CardTitle className="mt-2">{r.title}</CardTitle>
                <CardDescription>{r.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

