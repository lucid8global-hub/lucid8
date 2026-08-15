import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Database, Cpu, Activity } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Lucid8 Technologies",
  description: "Browse Lucid8's software architecture work, including secure transaction engines and HIPAA-aligned scheduling platforms.",
  alternates: {
    canonical: "/case-studies"
  }
};

const caseStudies = [
  {
    title: "Secure Distributed Transaction Middleware",
    slug: "distributed-transaction-middleware",
    sector: "Fintech",
    summary: "A high-concurrency ledger database system designed to support secure payment reconciliation and rate-limit API calls.",
    technologies: ["Java", "Spring Boot", "AWS Aurora", "Docker", "OWASP Testing"],
    focus: "Concurrency control, ACID compliance, and threat mitigation."
  },
  {
    title: "Scalable Telehealth Scheduling Core",
    slug: "telehealth-scheduling-core",
    sector: "Healthcare",
    summary: "A HIPAA-aligned booking and real-time telehealth messaging engine supporting instant doctor-patient communications.",
    technologies: ["Next.js", "TypeScript", "Node.js", "WebSockets", "MongoDB"],
    focus: "Data encryption-at-rest, WebRTC configuration, and role access."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Selected Architectures</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Engineering Case Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            We focus on clean code patterns, defensive security settings, and structured database operations. Read the technical breakdowns of our key architectures below.
          </p>
        </div>

        {/* Selected Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx} 
              className="bg-[#0a0a0a]/20 border border-slate-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{study.sector}</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-cyan">
                    {study.sector === "Fintech" ? <Database className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors font-jakarta">
                    {study.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Technical Focus</span>
                  <p className="text-xs text-slate-400">{study.focus}</p>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="bg-[#000000] border border-slate-800 px-2.5 py-1 rounded text-xs text-slate-350 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors"
                  >
                    <span>Read Architectural Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Future Cases Notification */}
        <div className="mt-16 p-8 border border-dashed border-slate-800 rounded-2xl text-center text-slate-500 text-xs sm:text-sm">
          <span>More case studies are currently undergoing security audits and will be published once cleared.</span>
        </div>

      </div>
    </div>
  );
}
