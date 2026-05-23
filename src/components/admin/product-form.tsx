"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { ArrowLeft, ImagePlus, Save } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Product, ProductTab } from "@/lib/admin/db";
import type { ProductFormState } from "@/app/admin/(protected)/products/actions";

type Props = {
  mode: "create" | "edit";
  tabs: ProductTab[];
  initial?: Product;
  action: (state: ProductFormState, formData: FormData) => Promise<ProductFormState>;
};

const initialState: ProductFormState = {};

export function ProductForm({ mode, tabs, initial, action }: Props) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const [previewSrc, setPreviewSrc] = useState<string | null>(initial?.imageSrc ?? null);

  return (
    <form action={formAction} className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 transition hover:gap-1.5 hover:text-slate-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to products
          </Link>
          <h1 className="mt-1.5 font-display text-2xl font-extrabold text-slate-900">
            {mode === "create" ? "Add new product" : `Edit · ${initial?.title}`}
          </h1>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 px-5 py-2.5 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] transition hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Saving…" : (
            <>
              <Save className="h-4 w-4" /> Save product
            </>
          )}
        </button>
      </header>

      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Left: main fields */}
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
          <Field
            label="Product ID (URL slug)"
            help="Letters, numbers and hyphens. e.g. submersible-pumps"
            error={state.fieldErrors?.id}
          >
            <input
              type="text"
              name="id"
              defaultValue={initial?.id ?? ""}
              required
              readOnly={mode === "edit"}
              placeholder="my-new-product"
              className={inputClass(state.fieldErrors?.id)}
            />
          </Field>

          <Field label="Title" error={state.fieldErrors?.title}>
            <input
              type="text"
              name="title"
              defaultValue={initial?.title ?? ""}
              required
              maxLength={120}
              placeholder="Submersible pumps"
              className={inputClass(state.fieldErrors?.title)}
            />
          </Field>

          <Field label="Description" error={state.fieldErrors?.description}>
            <textarea
              name="description"
              defaultValue={initial?.description ?? ""}
              required
              maxLength={500}
              rows={3}
              placeholder="Short, descriptive copy (1-2 sentences)…"
              className={inputClass(state.fieldErrors?.description)}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Category" error={state.fieldErrors?.tabId}>
              <select
                name="tabId"
                defaultValue={initial?.tabId ?? tabs[0]?.id}
                required
                className={inputClass(state.fieldErrors?.tabId)}
              >
                {tabs.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Display order" help="Lower numbers show first" error={state.fieldErrors?.order}>
              <input
                type="number"
                name="order"
                defaultValue={initial?.order ?? 100}
                required
                min={0}
                max={9999}
                className={inputClass(state.fieldErrors?.order)}
              />
            </Field>
          </div>

          <Field
            label="Link target"
            help="Where the 'View more' button takes visitors (e.g. /products/submersible-pumps)"
            error={state.fieldErrors?.href}
          >
            <input
              type="text"
              name="href"
              defaultValue={initial?.href ?? "/products"}
              required
              maxLength={300}
              placeholder="/products/example"
              className={inputClass(state.fieldErrors?.href)}
            />
          </Field>

          <Field label="Image alt text" help="Used by screen readers and SEO" error={state.fieldErrors?.imageAlt}>
            <input
              type="text"
              name="imageAlt"
              defaultValue={initial?.imageAlt ?? ""}
              maxLength={160}
              placeholder="Defaults to title if blank"
              className={inputClass(state.fieldErrors?.imageAlt)}
            />
          </Field>
        </div>

        {/* Right: image */}
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-slate-800">Product image</h2>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            {previewSrc ? (
              <Image
                src={previewSrc}
                alt="Preview"
                fill
                className="object-cover"
                sizes="320px"
                unoptimized={previewSrc.startsWith("data:")}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-800">
                <ImagePlus className="h-8 w-8" />
                <span className="text-xs">No image yet</span>
              </div>
            )}
          </div>
          <input type="hidden" name="imageSrc" value={initial?.imageSrc ?? ""} />
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-800">
              Upload new image
            </span>
            <input
              type="file"
              name="imageFile"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => setPreviewSrc(String(reader.result));
                reader.readAsDataURL(file);
              }}
              className="block w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:font-semibold file:text-navy-800 hover:file:bg-blue-100"
            />
            <span className="mt-1.5 block text-xs text-slate-800">JPG / PNG / WEBP / GIF · max 5 MB</span>
          </label>
          {state.fieldErrors?.imageSrc && (
            <p className="text-sm font-medium text-red-700">{state.fieldErrors.imageSrc}</p>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  help,
  error,
  children
}: {
  label: string;
  help?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {help && !error && <span className="mt-1 block text-xs text-slate-800">{help}</span>}
      {error && <span className="mt-1 block text-xs font-medium text-red-700">{error}</span>}
    </label>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:ring-2",
    error
      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
      : "border-slate-300 focus:border-blue-500 focus:ring-blue-200"
  );
}
