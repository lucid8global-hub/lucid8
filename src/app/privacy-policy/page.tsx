import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Lucid8 Technologies",
  description: "Learn how Lucid8 Technologies collects, uses, and protects customer inquiry details and project documentation.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Breadcrumbs />

        <div className="py-12 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-jakarta">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">Last updated: August 15, 2026</p>
        </div>

        <div className="space-y-8 text-slate-350 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">1. Overview</h2>
            <p>
              Lucid8 Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our website visitors and clients. This Privacy Policy describes how we collect, process, and secure the information you provide when using our website (<a href="https://lucid8.in" className="text-brand-cyan hover:underline">lucid8.in</a>) and our inquiry forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">2. Information Collection</h2>
            <p>
              We collect information directly from you when you submit a project inquiry or contact us via email or WhatsApp. This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Contact details, such as name, business email, and phone number.</li>
              <li>Company name and project background description.</li>
              <li>Project budget estimations and required service categories.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">3. How We Use Your Information</h2>
            <p>
              We process your details solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Review and respond to your project inquiries or job applications.</li>
              <li>Coordinate initial technical consultations and schedule developer calls.</li>
              <li>Maintain high security standards and prevent fraudulent submissions on our forms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">4. Data Security</h2>
            <p>
              We implement technical security measures, including TLS encryption during data transit and encrypted cloud database files, to protect your contact details from unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">5. Contact Us</h2>
            <p>
              If you have any questions regarding our privacy practices, please contact us at <a href="mailto:lucid8global@gmail.com" className="text-brand-cyan hover:underline">lucid8global@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
