"use client";

import { useEffect, useMemo, useState } from "react";

export function BlogArticleChrome({
  toc,
  children
}: {
  toc: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>(toc[0]?.id ?? null);

  const ids = useMemo(() => new Set(toc.map((t) => t.id)), [toc]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const p = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));

      let current: string | null = null;
      for (const t of toc) {
        const el = document.getElementById(t.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = t.id;
      }
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.target.id && ids.has(e.target.id)) {
            setActive(e.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );
    for (const t of toc) {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [toc, ids]);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-0.5 bg-primary-100"
        aria-hidden
      >
        <div className="h-full bg-primary-700 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div>{children}</div>
        {toc.length > 0 ? (
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-card">
              <div className="text-xs font-black uppercase tracking-widest text-primary-700">On this page</div>
              <ul className="mt-3 space-y-2">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className={`block rounded-md px-2 py-1 transition ${
                        active === t.id ? "bg-primary-50 font-semibold text-primary-800" : "text-gray-600 hover:text-primary-700"
                      }`}
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}
      </div>
    </>
  );
}
