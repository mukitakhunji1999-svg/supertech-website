"use client";

import { useActionState, useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SiteSettings } from "@/lib/admin/db";
import type { SettingsFormState } from "@/app/admin/(protected)/settings/actions";

type Props = {
  initial: SiteSettings;
  action: (state: SettingsFormState, formData: FormData) => Promise<SettingsFormState>;
};

const initialState: SettingsFormState = {};

export function SettingsForm({ initial, action }: Props) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const [phones, setPhones] = useState<string[]>(initial.phones.length ? initial.phones : [""]);

  return (
    <form action={formAction} className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-navy-800">Site settings</p>
          <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Contact &amp; brand
          </h1>
          <p className="mt-1.5 text-sm text-slate-800">
            These details are used across the website footer, contact page and structured SEO data.
          </p>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 px-5 py-2.5 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,108,189,0.28)] transition hover:shadow-[0_12px_32px_rgba(15,108,189,0.38)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Saving…" : (
            <>
              <Save className="h-4 w-4" /> Save changes
            </>
          )}
        </button>
      </header>

      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.error}
        </div>
      )}
      {state.ok && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Settings saved.
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-slate-800">Brand</h2>
          <Field label="Business name" error={state.fieldErrors?.name}>
            <input
              type="text"
              name="name"
              defaultValue={initial.name}
              required
              className={inputClass(state.fieldErrors?.name)}
            />
          </Field>
          <Field label="Tagline" error={state.fieldErrors?.tagline}>
            <input
              type="text"
              name="tagline"
              defaultValue={initial.tagline}
              required
              className={inputClass(state.fieldErrors?.tagline)}
            />
          </Field>
          <Field label="Office address" error={state.fieldErrors?.address}>
            <textarea
              name="address"
              defaultValue={initial.address}
              rows={2}
              required
              className={inputClass(state.fieldErrors?.address)}
            />
          </Field>
        </div>

        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-slate-800">Contact</h2>
          <Field label="Public email" error={state.fieldErrors?.email}>
            <input
              type="email"
              name="email"
              defaultValue={initial.email}
              required
              className={inputClass(state.fieldErrors?.email)}
            />
          </Field>
          <Field label="WhatsApp number" help="With country code (e.g. +917573979525)" error={state.fieldErrors?.whatsapp}>
            <input
              type="text"
              name="whatsapp"
              defaultValue={initial.whatsapp}
              required
              className={inputClass(state.fieldErrors?.whatsapp)}
            />
          </Field>

          <div>
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Phone numbers</span>
            <div className="space-y-2">
              {phones.map((value, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    name="phones"
                    defaultValue={value}
                    placeholder="+91-1234567890"
                    className={inputClass(state.fieldErrors?.phones)}
                  />
                  {phones.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setPhones((p) => p.filter((_, i) => i !== idx))}
                      className="rounded-md border border-slate-200 bg-white p-2 text-red-600 transition hover:bg-red-50"
                      aria-label="Remove phone"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))}
              {phones.length < 5 && (
                <button
                  type="button"
                  onClick={() => setPhones((p) => [...p, ""])}
                  className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-blue-300 hover:text-navy-800"
                >
                  <Plus className="h-3.5 w-3.5" /> Add another phone
                </button>
              )}
            </div>
            {state.fieldErrors?.phones && (
              <span className="mt-1 block text-xs font-medium text-red-700">{state.fieldErrors.phones}</span>
            )}
          </div>
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
