"use client";

import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";

export function HomeQuoteSection() {
  return (
    <section id="quote" className="section-padded scroll-mt-24 bg-slate-50/50">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Quote builder</p>
          <h2 className="section-title mt-2">Request a configuration-specific quotation</h2>
          <p className="section-lede mx-auto">
            Share duty point, voltage, installation context, and destination. Our team responds with selection notes
            and export-ready pricing. For a guided layout, open the{" "}
            <Link href="/rfq" className="font-semibold text-navy-800 underline-offset-2 hover:underline">
              full RFQ page
            </Link>
            .
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <LeadForm
            type="rfq"
            title="Quick RFQ"
            subtitle="Include flow, head, voltage, and destination for the fastest response."
            defaultMessage={
              "Requirement:\n- Product category:\n- Flow (LPM/LPH/m3/h):\n- Head (meter):\n- Voltage/phase:\n- Borewell/openwell/sump details:\n- Destination country/city:"
            }
          />
        </div>
      </div>
    </section>
  );
}
