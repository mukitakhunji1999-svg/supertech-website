import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  className?: string;
}) {
  return (
    <section className={cn("relative bg-navy-900 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-grid-hero opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-primary-900/60" />
      <div className="container relative z-10 py-14 md:py-20">
        {eyebrow && (
          <div className="text-xs font-black tracking-widest text-primary-400 uppercase mb-3">{eyebrow}</div>
        )}
        <h1 className="text-3xl font-black text-white leading-tight md:text-4xl lg:text-5xl max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">{subtitle}</p>
        )}
      </div>
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="relative z-10 border-t border-white/10 bg-black/20">
          <div className="container py-2.5 flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
