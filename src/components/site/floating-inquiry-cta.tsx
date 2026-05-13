"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquareText, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FloatingInquiryCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const tel = siteConfig.contact.phones[0]?.replace(/\D/g, "") ?? "";

  if (isHome) {
    return (
      <div
        className="fixed bottom-[min(24px,4vw)] left-4 right-4 z-[45] flex justify-center sm:left-1/2 sm:right-auto sm:-translate-x-1/2"
        role="region"
        aria-label="Quick actions"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary-700/10 bg-white/90 px-3 py-2 shadow-card-hover backdrop-blur-md">
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-700 to-sky-500 px-4 py-2 font-display text-[0.8125rem] font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] transition hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98]"
          >
            <MessageSquareText className="h-4 w-4 shrink-0" />
            Quote builder
          </Link>
          <Link
            href={`tel:${tel}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary-700/25 bg-white px-4 py-2 font-display text-[0.8125rem] font-bold text-primary-700 transition hover:border-primary-500 hover:bg-primary-50 active:scale-[0.98]"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Call
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/rfq"
      className="fixed bottom-6 left-4 z-40 flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2.5 text-sm font-bold text-primary-700 shadow-nav transition hover:border-primary-400 hover:shadow-card-hover md:left-8"
    >
      <MessageSquareText className="h-4 w-4 shrink-0" />
      <span className="max-w-[10rem] leading-tight md:max-w-none">RFQ</span>
    </Link>
  );
}
