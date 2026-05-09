"use client";

import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";

export function HomeQuoteSection() {
  return (
    <section id="quote" className="scroll-mt-[5.5rem] sm:scroll-mt-[8rem] section-tint">
      <div className="container py-14 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-2 text-xs font-black uppercase tracking-widest text-primary-700">Quote builder</div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-700 md:text-3xl">
            Request a configuration-specific quotation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Share duty point, voltage, installation context, and destination. Our team responds with selection notes
            and export-ready pricing. For a guided layout, open the{" "}
            <Link href="/rfq" className="font-semibold text-primary-700 underline-offset-2 hover:underline">
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
