"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Product } from "@/lib/products/catalog";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CategoryFilters({
  categorySlug,
  items
}: {
  categorySlug: string;
  items: Product[];
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;
    return items.filter((p) => {
      const hay = [
        p.name,
        p.shortDescription,
        p.applications.join(" "),
        p.features.join(" "),
        p.seo.primaryKeyword,
        p.seo.secondaryKeywords.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [items, q]);

  return (
    <div className="grid gap-6">
      <div className="relative max-w-2xl">
        <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-11"
          placeholder="Filter by model, application, feature, keyword..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/products/${categorySlug}/${p.slug}`}>
            <Card className="h-full transition hover:border-primary-300">
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.shortDescription}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {!filtered.length ? (
        <div className="text-sm text-gray-500">
          No matches. Try searching by application (e.g., irrigation), country (e.g., UAE), or product type (e.g., solar).
        </div>
      ) : null}
    </div>
  );
}

