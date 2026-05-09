"use client";

import { useEffect, useMemo, useState } from "react";
import { currencies, currencyStorageKey, isCurrencyCode } from "@/lib/currency";

export function CurrencySwitcher({ className }: { className?: string }) {
  const [code, setCode] = useState<(typeof currencies)[number]["code"]>("USD");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(currencyStorageKey) : null;
    if (isCurrencyCode(saved)) setCode(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(currencyStorageKey, code);
  }, [code]);

  const label = useMemo(() => currencies.find((c) => c.code === code)?.label ?? "Export (USD)", [code]);

  return (
    <label className={className}>
      <span className="sr-only">Currency</span>
      <select
        value={code}
        onChange={(e) => setCode(e.target.value as typeof code)}
        className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none transition hover:bg-slate-50 focus:border-brand-500/60"
        aria-label="Currency selector"
        title={label}
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code} className="bg-white text-slate-900">
            {c.symbol} {c.code}
          </option>
        ))}
      </select>
    </label>
  );
}

