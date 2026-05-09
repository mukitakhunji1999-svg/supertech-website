"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LeadSchema = z.object({
  type: z.string().min(1),
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  phone: z.string().min(8, "Enter a valid phone number"),
  company: z.string().optional().or(z.literal("")),
  country: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Add a short requirement message"),
  sourceUrl: z.string().optional().or(z.literal(""))
});

export type LeadFormValues = z.infer<typeof LeadSchema>;

export function LeadForm({
  type,
  title = "Send inquiry",
  subtitle = "Share your requirement. We will respond quickly.",
  defaultMessage = ""
}: {
  type: "contact" | "rfq" | "distributor" | "tender" | "brochure" | "callback";
  title?: string;
  subtitle?: string;
  defaultMessage?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      type,
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      city: "",
      message: defaultMessage,
      sourceUrl: typeof window !== "undefined" ? window.location.href : ""
    }
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset({ ...values, name: "", email: "", phone: "", company: "", message: defaultMessage });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
      <div className="text-lg font-black text-navy-700">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{subtitle}</div>

      <form className="mt-6 grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
        <input type="hidden" value={type} {...form.register("type")} />

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <Input placeholder="Full name" {...form.register("name")} />
            {form.formState.errors.name ? (
              <div className="mt-1 text-xs text-red-600">{form.formState.errors.name.message}</div>
            ) : null}
          </div>
          <div>
            <Input placeholder="Phone / WhatsApp" {...form.register("phone")} />
            {form.formState.errors.phone ? (
              <div className="mt-1 text-xs text-red-600">{form.formState.errors.phone.message}</div>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <Input placeholder="Email (optional)" {...form.register("email")} />
            {form.formState.errors.email ? (
              <div className="mt-1 text-xs text-red-600">{form.formState.errors.email.message}</div>
            ) : null}
          </div>
          <Input placeholder="Company (optional)" {...form.register("company")} />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Input placeholder="Country (optional)" {...form.register("country")} />
          <Input placeholder="City (optional)" {...form.register("city")} />
        </div>

        <div>
          <Textarea placeholder="Requirement (duty point, head, flow, application, destination)" {...form.register("message")} />
          {form.formState.errors.message ? (
            <div className="mt-1 text-xs text-red-600">{form.formState.errors.message.message}</div>
          ) : null}
        </div>

        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit inquiry"}
        </Button>

        {status === "success" ? (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 font-medium">
            Inquiry received. Our team will contact you shortly.
          </div>
        ) : null}
        {status === "error" ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
            Something went wrong. Please try again or contact us via phone/WhatsApp.
          </div>
        ) : null}
      </form>
    </div>
  );
}

