import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Database, Activity, CheckCircle2, AlertTriangle, Shield } from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";

interface CaseStudyData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  sector: string;
  summary: string;
  challenges: string[];
  architecture: string[];
  results: string[];
  technologies: string[];
}

const caseStudiesMap: Record<string, CaseStudyData> = {
  "distributed-transaction-middleware": {
    title: "Secure Distributed Transaction Middleware",
    metaTitle: "Case Study: Distributed Transaction Middleware | Lucid8",
    metaDesc: "Read the technical breakdown of our secure transaction middleware architecture built for high concurrency and ACID compliance.",
    sector: "Fintech",
    summary: "A high-volume transactional engine built to handle ledger entries, balance reconciliations, and lock database connections safely during simultaneous API calls.",
    challenges: [
      "Simultaneous API transfer calls causing balance synchronization errors.",
      "Database locks blocking database queries, resulting in request timeouts.",
      "Insecure parameter inputs creating vulnerabilities to SQL injection attacks."
    ],
    architecture: [
      "We implemented distributed locks using Redis to ensure sequential updates.",
      "We optimized the PostgreSQL database schema and connection pool size to handle peak concurrency.",
      "We wrote query logic using parameterized inputs and conducted security scans."
    ],
    results: [
      "Zero ledger parity mismatches during stress testing.",
      "Optimized query speeds to under 100 milliseconds for standard balance checks.",
      "Successful deployment of automatic token validation and logging across all backend servers."
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS Aurora"]
  },
  "telehealth-scheduling-core": {
    title: "Scalable Telehealth Scheduling Core",
    metaTitle: "Case Study: Telehealth Booking & Messaging Core | Lucid8",
    metaDesc: "Explore the architecture of our HIPAA-aligned telehealth booking and video communication scheduling core.",
    sector: "Healthcare",
    summary: "A secure telehealth application scheduling core designed for calendar booking, real-time message sync, and WebRTC streaming.",
    challenges: [
      "Accidental leakage of protected health information (PHI) via system logs.",
      "Unsynchronized, slow calendar calendars causing duplicate doctor appointments.",
      "Unreliable video stream connections on mobile networks."
    ],
    architecture: [
      "We configured database-level encryption to protect sensitive client tables.",
      "We built real-time WebSocket controllers to synchronize booking calendars instantly.",
      "We set up automated API test suites to verify system functionality across updates."
    ],
    results: [
      "Full HIPAA compliance verified through secure database configurations.",
      "Elimination of double-booking errors.",
      "Stable video and messaging performance on mobile viewports."
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "WebSockets", "MongoDB", "Playwright"]
  }
};

export async function generateStaticParams() {
  return Object.keys(caseStudiesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesMap[slug];

  if (!study) {
    return { title: "Project Not Found" };
  }

  return {
    title: study.metaTitle,
    description: study.metaDesc,
    alternates: {
      canonical: `/case-studies/${slug}`
    }
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesMap[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Case Study Breakdown</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{study.sector}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {study.title}
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            {study.summary}
          </p>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-t border-slate-800/60">
          {/* Challenges */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
              <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
              <span>Target Challenges</span>
            </h2>
            <ul className="space-y-4">
              {study.challenges.map((chal, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-400 bg-slate-950/20 border border-slate-900 p-4 rounded-xl">
                  <span className="text-amber-500 font-bold mr-3 mt-0.5">0{idx + 1}</span>
                  <span className="leading-relaxed">{chal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
              <span>Engineering Solutions</span>
            </h2>
            <ul className="space-y-4">
              {study.architecture.map((arch, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-300 bg-brand-blue/5 border border-brand-blue/15 p-4 rounded-xl">
                  <span className="text-brand-cyan font-bold mr-3 mt-0.5">✓</span>
                  <span className="leading-relaxed">{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results Block */}
        <div className="py-16 border-t border-slate-800/60 space-y-8">
          <h2 className="text-2xl font-bold text-white font-jakarta">Architectural Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((res, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-2">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block">Outcome 0{idx + 1}</span>
                <p className="text-sm text-slate-355 leading-relaxed">{res}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-slate-800/60">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white font-jakarta">Technologies Integrated</h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0a0a0a]/10 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center space-y-4">
            <h4 className="text-base font-bold text-white font-jakarta">Have a similar architectural challenge?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              We help companies transition from legacy bottlenecks to clean, secure systems. Connect with our engineering consultants to evaluate options.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
