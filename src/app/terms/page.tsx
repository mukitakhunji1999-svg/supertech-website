import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for SUPERTECH WATER SOLUTION website."
};

export default function TermsPage() {
  return (
    <div className="section-gray min-h-screen">
      <div className="container py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-3">Legal</div>
          <h1 className="text-3xl font-black text-navy-700 mb-6">Terms of Use</h1>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed bg-white rounded-xl border border-gray-200 p-8 shadow-card">
            <p>
              The content on this website is provided for procurement and informational purposes. Product specifications and availability
              may vary by configuration and market. Final confirmation is provided through quotation and documentation packs.
            </p>
            <p>
              By submitting an inquiry, you authorize SUPERTECH WATER SOLUTION to contact you using the details provided to respond to your request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
