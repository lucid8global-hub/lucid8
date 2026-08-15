import React from "react";
import type { Metadata } from "next";
import { Shield, Zap, Cpu, Users, ArrowRight } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Careers & Culture | Lucid8 Technologies",
  description: "Join Lucid8's consulting engineering team. Explore open roles in software development, cybersecurity, and quality engineering.",
  alternates: {
    canonical: "/careers"
  }
};

const openRoles = [
  {
    title: "Senior Full-Stack Developer",
    division: "Software Engineering",
    location: "Remote / Hybrid (India)",
    requirements: "5+ years of experience with Next.js, Node.js, and PostgreSQL database performance tuning."
  },
  {
    title: "Cybersecurity Analyst & Tester",
    division: "Cybersecurity Strategy",
    location: "Remote / Hybrid (India)",
    requirements: "3+ years auditing web applications, running API penetration tests, and enforcing secure SDLC steps."
  },
  {
    title: "QA Automation Engineer",
    division: "Quality Engineering",
    location: "Remote / Hybrid (India)",
    requirements: "3+ years writing Playwright/Selenium test cases and integrating testing suites in GitHub Actions."
  }
];

export default function CareersPage() {
  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Join the Team</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Engineering-First Careers
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            We value technical discipline, code clarity, and security. We avoid quick templates, focusing on robust solutions that solve actual business challenges.
          </p>
        </div>

        {/* Culture & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-slate-800/60">
          {[
            {
              title: "Security by Design",
              desc: "We integrate security checks into developer workflows. Our team is trained to identify and patch security risks early.",
              icon: <Shield className="w-5 h-5 text-brand-cyan" />
            },
            {
              title: "Quality Engineering Focus",
              desc: "We write automated test suites and run performance stress checks to guarantee application reliability.",
              icon: <Zap className="w-5 h-5 text-amber-400" />
            },
            {
              title: "Modular Abstractions",
              desc: "We avoid technical debt by selecting standard architectures that are easily reviewable and scale organically.",
              icon: <Cpu className="w-5 h-5 text-brand-purple" />
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-white font-jakarta">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-405 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Job list */}
        <div className="py-16 border-t border-slate-800/60 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Active Openings</span>
            <h2 className="text-3xl font-bold text-white font-jakarta">Open Engineering Positions</h2>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0a0a]/10 border border-slate-800/60 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-blue/30 transition-colors duration-300"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{role.division}</span>
                    <span className="text-slate-700 hidden sm:inline">•</span>
                    <span className="text-xs text-brand-cyan font-semibold">{role.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-jakarta">{role.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{role.requirements}</p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="mailto:lucid8global@gmail.com?subject=Application%20for%20Position%3A%20Senior%20Full-Stack%2520Developer"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white rounded-lg transition-colors group"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speculative Application Block */}
        <div className="mt-12 p-8 bg-[#0a0a0a]/20 border border-slate-850 rounded-2xl text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-white font-jakarta">Don't see a matching position?</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We are always looking for skilled developers, cybersecurity analysts, and quality engineers. Send your resume and technical profile to <a href="mailto:lucid8global@gmail.com" className="text-brand-cyan hover:underline">lucid8global@gmail.com</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
