import React from "react";
import type { Metadata } from "next";
import { MessageSquare, Mail, Shield, ShieldCheck } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact an Expert | Lucid8 Technologies",
  description: "Connect with Lucid8 Technologies. Ask questions, discuss software projects, request security audits, or chat with us on WhatsApp.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Start a Conversation
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Partner with Lucid8's consulting engineers to audit systems, design artificial intelligence frameworks, optimize cloud architecture, and build custom web/mobile platforms.
          </p>
        </div>

        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          
          {/* Left panel: Info & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 bg-[#0a0a0a]/25 border border-slate-805/80 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white font-jakarta">Contact Details</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Choose the channel that fits your timeline. We respond to emails and WhatsApp messages within 24 business hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp Card */}
                <div className="bg-[#000000] border border-slate-850 p-5 rounded-xl space-y-3 group hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center space-x-3 text-emerald-400">
                    <MessageSquare className="w-5 h-5 fill-emerald-400/10" />
                    <span className="text-sm font-bold font-jakarta">WhatsApp Lead Direct</span>
                  </div>
                  <p className="text-xs text-slate-450">
                    Ideal for rapid consultations, pricing checks, and initial scheduling discussions.
                  </p>
                  <div>
                    <a
                      href="https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20would%2520like%2520to%2520discuss%2520a%2520project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center"
                    >
                      <span>Start a Conversation on WhatsApp</span>
                      <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-[#000000] border border-slate-850 p-5 rounded-xl space-y-3 group hover:border-brand-blue/30 transition-colors">
                  <div className="flex items-center space-x-3 text-brand-blue">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-bold font-jakarta">Corporate Inbox</span>
                  </div>
                  <p className="text-xs text-slate-455">
                    Submit RFPs, engineering checklists, job requests, or general partnership outlines.
                  </p>
                  <div>
                    <a
                      href="mailto:lucid8global@gmail.com?subject=Project%20Inquiry%20to%20Lucid8%20Technologies"
                      className="text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors flex items-center"
                    >
                      <span>Send an Email</span>
                      <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-[#0a0a0a]/15 border border-slate-850 p-6 rounded-2xl flex items-start space-x-3 text-slate-400">
              <ShieldCheck className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-jakarta block">Privacy Assured</span>
                <p className="text-xs text-slate-450 leading-relaxed">
                  We process inquiries securely. Your email, documents, and database plans are protected under privacy guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right panel: Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}

// Small helper inside contact page for clean rendering
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
