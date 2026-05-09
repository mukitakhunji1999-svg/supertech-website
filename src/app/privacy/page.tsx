import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SUPERTECH WATER SOLUTION website."
};

export default function PrivacyPage() {
  return (
    <div className="section-gray min-h-screen">
      <div className="container py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-black tracking-widest text-primary-700 uppercase mb-3">Legal</div>
          <h1 className="text-3xl font-black text-navy-700 mb-6">Privacy Policy</h1>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed bg-white rounded-xl border border-gray-200 p-8 shadow-card">
            <p>
              SUPERTECH WATER SOLUTION collects inquiry details submitted via forms (such as name, phone, email, company and message)
              to respond to B2B requests for quotation, distributor inquiries, government supply inquiries and brochure requests.
            </p>
            <p>
              We do not sell personal information. We may use submitted information to contact you about your inquiry and to improve
              response quality for procurement workflows.
            </p>
            <p>
              For any privacy requests, please email us using the email address shown on the Contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
