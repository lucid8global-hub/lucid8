import React from "react";
import type { Metadata } from "next";
import { Shield, Eye, Target, Zap, Layout, Code, Activity } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Lucid8 Technologies",
  description: "Learn about Lucid8's mission, vision, and core engineering philosophy, built on security-by-design, custom code architecture, and high-performance quality standards.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Corporate Profile</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Engineering the Future of Secure and Intelligent Technologies
          </h1>
          <p className="text-base sm:text-lg text-slate-450 leading-relaxed max-w-3xl">
            Lucid8 is an engineering-first technology solutions organization. We partner with enterprises, growing mid-market companies, and technology startups to construct high-performance digital systems.
          </p>
        </div>

        {/* Who We Are & What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-t border-slate-800/60">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-jakarta">Who We Are</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We are a team of software architects, artificial intelligence engineers, cybersecurity consultants, and quality testers. Lucid8 was established to bridge the gap between complex technical demands and clean, maintainable, secure software delivery. We operate globally, ensuring client systems conform to high security frameworks and performance expectations.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-jakarta">What We Do</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Lucid8 delivers end-to-end technical engineering. Our expertise spans custom enterprise software development, robust web and mobile app implementation, artificial intelligence integrations (including computer vision and machine learning), defensive cybersecurity consulting, and thorough quality engineering.
            </p>
          </div>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {/* Mission */}
          <div className="bg-[#0a0a0a]/20 border border-slate-800 p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-jakarta">Our Mission</h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              To empower global organizations by building software architectures that are inherently secure, highly scalable, and business-focused, removing technical debt and building foundations for stable growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#0a0a0a]/20 border border-slate-800 p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-jakarta">Our Vision</h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              To be the trusted global engineering and consulting partner of choice for complex enterprise solutions, recognized for technical discipline, security enforcement, and quality assurance.
            </p>
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="py-16 border-t border-slate-800/60 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Technical Rigor</span>
            <h2 className="text-3xl font-bold text-white tracking-tight font-jakarta">Our Engineering Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Security by Design",
                desc: "We analyze code for security risks from day one. Threat mitigation, role-based authorization, data encryption, and vulnerability checking are fully embedded inside our delivery pipelines.",
                icon: <Shield className="w-5 h-5 text-brand-cyan" />
              },
              {
                title: "Quality First",
                desc: "We do not release code without testing. We integrate manual unit validations, automated integration scripts, and performance stress runs to guarantee high reliability under actual user traffic.",
                icon: <Zap className="w-5 h-5 text-amber-400" />
              },
              {
                title: "Technology Approach",
                desc: "We favor stable, maintainable libraries and clean design patterns. We prevent technical debt by selecting standard architectures that are easily reviewable and scale organically.",
                icon: <Layout className="w-5 h-5 text-brand-blue" />
              },
              {
                title: "Process Transparency",
                desc: "We maintain Git workflows, modular structures, and clear task lists. Our clients receive clear updates, fully structured code, and comprehensive deployment runbooks.",
                icon: <Code className="w-5 h-5 text-brand-purple" />
              }
            ].map((phil, idx) => (
              <div key={idx} className="space-y-3 p-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  {phil.icon}
                </div>
                <h4 className="text-base font-bold text-white font-jakarta">{phil.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{phil.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process timeline */}
        <div className="py-16 border-t border-slate-800/60 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Operational Stages</span>
            <h2 className="text-3xl font-bold text-white tracking-tight font-jakarta">Standard Operational Timeline</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { step: "01", name: "Discover", desc: "Detailed requirements gathering and stakeholder consultation." },
              { step: "02", name: "Architect", desc: "Modeling modular workflows, security paths, and database setups." },
              { step: "03", name: "Build", desc: "Coding using TypeScript, Next.js, Java, Python, and Flutter." },
              { step: "04", name: "Test", desc: "Functional validations, regression tests, and API checking." },
              { step: "05", name: "Secure", desc: "Vulnerability analysis, input validations, and pen-testing." },
              { step: "06", name: "Deploy", desc: "CI/CD execution, environment config, and live monitoring." }
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-950/40 border border-slate-800/60 p-5 rounded-xl space-y-3">
                <div className="text-2xl font-black text-brand-cyan/20 font-mono">{p.step}</div>
                <h4 className="text-sm font-bold text-white font-jakarta">{p.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
