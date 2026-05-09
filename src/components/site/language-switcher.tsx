"use client";

import { useEffect, useState } from "react";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n";

const storageKey = "stw.locale";

export function LanguageSwitcher({ className }: { className?: string }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
    if (isLocale(saved)) setLocale(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <label className={className}>
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none transition hover:bg-slate-50 focus:border-brand-500/60"
        aria-label="Language selector"
        title="Language selector (Arabic-ready)"
      >
        {locales.map((l) => (
          <option key={l} value={l} className="bg-white text-slate-900">
            {l.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}

