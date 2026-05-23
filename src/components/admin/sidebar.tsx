"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Boxes, LayoutDashboard, LogOut, Settings, ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, match: (p: string) => p === "/admin" },
  { href: "/admin/products", label: "Products", icon: Boxes, match: (p: string) => p.startsWith("/admin/products") },
  { href: "/admin/settings", label: "Site Settings", icon: Settings, match: (p: string) => p.startsWith("/admin/settings") }
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 flex h-dvh w-60 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex items-center gap-2.5 border-b border-slate-200 px-5 py-4">
        <Image src="/logo.png" alt="SUPERTECH" width={36} height={36} className="h-9 w-9 object-contain" />
        <div className="flex flex-col leading-tight">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">Admin</span>
          <span className="font-display text-sm font-extrabold text-slate-900">SUPERTECH</span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {nav.map((item) => {
          const active = item.match(pathname);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-1 border-t border-slate-200 p-3">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
        >
          <ExternalLink className="h-4 w-4" /> View website
        </Link>
        <form action="/admin/logout" method="post">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
