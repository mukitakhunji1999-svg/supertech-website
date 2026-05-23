import Image from "next/image";
import Link from "next/link";
import { Edit, Plus, Trash2 } from "lucide-react";
import { getProductsByTab } from "@/lib/admin/db";
import { deleteProductAction } from "./actions";

export default async function AdminProductsPage() {
  const tabs = await getProductsByTab();
  const total = tabs.reduce((acc, t) => acc + t.items.length, 0);

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Products</p>
          <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-slate-900">
            {total} product{total === 1 ? "" : "s"}
          </h1>
          <p className="mt-1.5 text-sm text-slate-600">
            Add, edit and remove products. Changes appear instantly on the homepage.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 px-4 py-2.5 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] transition hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" /> Add product
        </Link>
      </header>

      <div className="space-y-8">
        {tabs.map((tab) => (
          <section key={tab.id}>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="font-display text-lg font-extrabold text-slate-900">{tab.label}</h2>
              <span className="text-sm text-slate-500">
                {tab.items.length} item{tab.items.length === 1 ? "" : "s"}
              </span>
            </div>
            {tab.items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-500">
                No products in this category yet.{" "}
                <Link href={`/admin/products/new?tab=${tab.id}`} className="font-semibold text-blue-700 hover:underline">
                  Add the first one →
                </Link>
              </div>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tab.items.map((p) => (
                  <li
                    key={p.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(15,108,189,0.10)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      {p.imageSrc && (
                        <Image
                          src={p.imageSrc}
                          alt={p.imageAlt || p.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition group-hover:scale-105"
                        />
                      )}
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
                        #{p.order}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-base font-bold text-slate-900">{p.title}</h3>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-600">{p.description}</p>
                      <p className="mt-1.5 truncate text-[11px] font-mono text-slate-500">{p.id}</p>
                      <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                        <Link
                          href={`/admin/products/${p.id}/edit`}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Edit className="h-3.5 w-3.5" /> Edit
                        </Link>
                        <form action={deleteProductAction}>
                          <input type="hidden" name="id" value={p.id} />
                          <button
                            type="submit"
                            className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-50"
                            aria-label={`Delete ${p.title}`}
                          >
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
