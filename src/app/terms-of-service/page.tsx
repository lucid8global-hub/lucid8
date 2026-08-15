import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | Lucid8 Technologies",
  description: "Read the website terms of service for Lucid8 Technologies. Access guidelines and corporate website conditions.",
  alternates: {
    canonical: "/terms-of-service"
  }
};

export default function TermsOfServicePage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Breadcrumbs />

        <div className="py-12 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-jakarta">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">Last updated: August 15, 2026</p>
        </div>

        <div className="space-y-8 text-slate-350 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">1. Agreement to Terms</h2>
            <p>
              By accessing our website (<a href="https://lucid8.in" className="text-brand-cyan hover:underline">lucid8.in</a>), you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">2. Website Use</h2>
            <p>
              You agree to use this website solely for lawful purposes, such as reviewing our engineering capabilities, exploring case studies, and submitting project inquiries. You must not attempt to disrupt website operations or submit malicious inputs through our forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">3. Intellectual Property</h2>
            <p>
              All content on this website—including code, text, graphics, and logos—is the property of Lucid8 Technologies and is protected by copyright laws. You may not copy or reproduce any content without our prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">4. Consultations & Services</h2>
            <p>
              Submitting an inquiry through our contact forms or WhatsApp links coordinates a preliminary technical discussion. General consulting feedback provided during these calls is informational and does not constitute a binding contract. Full engineering engagements require a separate signed Master Services Agreement (MSA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-jakarta">5. Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be posted to this page with an updated modification date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
