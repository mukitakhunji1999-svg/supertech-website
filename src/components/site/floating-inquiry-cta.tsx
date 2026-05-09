"use client";

import Link from "next/link";
import { MessageSquareText } from "lucide-react";

export function FloatingInquiryCta() {
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
