import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Code, Cpu, Shield, ArrowRight, Layers 
} from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../data/seo/site";

export const metadata: Metadata = {
  title: "Software & AI Development Services | Lucid8 Technologies",
  description: "Explore Lucid8's core software engineering services: custom software, AI development, web applications, mobile apps, SaaS, e-commerce, LMS platforms, and cybersecurity.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Software & AI Development Services | Lucid8 Technologies",
    description: "Explore Lucid8's core software engineering services: custom software, AI development, web applications, mobile apps, SaaS, e-commerce, LMS platforms, and cybersecurity.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: "website"
  }
};

const serviceGroups = [
  {
    title: "Software & Product Engineering",
    desc: "Custom business software, SaaS architectures, enterprise tools, and database layers engineered for scalability and high throughput.",
    icon: <Code className="w-6 h-6 text-brand-blue" />,
    items: [
      { name: "Software Development", href: "/services/software-development", desc: "Custom business software, enterprise applications, and scalable backend systems in Kerala & Bangalore." },
      { name: "Custom Software", href: "/services/custom-software", desc: "Bespoke business platforms, operational portals, and workflow systems tailored to exact requirements." },
      { name: "SaaS Development", href: "/services/saas-development", desc: "Multi-tenant cloud architectures with subscription billing, user roles, and high concurrency." },
      { name: "API & Backend Development", href: "/services/api-backend-development", desc: "Secure database design, microservices, REST APIs, and OAuth integrations." }
    ]
  },
  {
    title: "Artificial Intelligence & Automation",
    desc: "Generative AI applications, autonomous agents, computer vision pipelines, and intelligent business process automation.",
    icon: <Cpu className="w-6 h-6 text-brand-cyan" />,
    items: [
      { name: "AI Development", href: "/services/ai-development", desc: "Generative AI, autonomous agents, custom chatbots, and intelligent business automation in Kerala & Bangalore." },
      { name: "AI & Machine Learning", href: "/services/ai-machine-learning", desc: "Data classification, predictive modeling, computer vision, and neural network applications." },
      { name: "Automation Solutions", href: "/services/automation-solutions", desc: "Workflows automation, script setups, data pipelines, and internal tools optimizations." },
      { name: "Digital Transformation", href: "/services/digital-transformation", desc: "Modernizing legacy structures, migrating systems, and designing data-driven strategies." }
    ]
  },
  {
    title: "Web & Mobile Applications",
    desc: "Sub-second client dashboards, high-converting storefronts, interactive learning portals, and native mobile apps.",
    icon: <Layers className="w-6 h-6 text-brand-purple" />,
    items: [
      { name: "Web Application Development", href: "/services/web-development", desc: "High-performance client dashboards, corporate sites, and modern Next.js web applications." },
      { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "Interactive iOS, Android, and cross-platform mobile apps written in Flutter." },
      { name: "E-Commerce Development", href: "/services/ecommerce-development", desc: "Multi-vendor marketplaces, custom online stores, and WooCommerce platforms." },
      { name: "E-Learning Platform Development", href: "/services/e-learning-development", desc: "Modern Learning Management Systems (LMS), video course delivery, and student portals." }
    ]
  },
  {
    title: "Cybersecurity, QA & Cloud Infrastructure",
    desc: "Defending digital assets, ensuring zero-bug releases, and automating reliable cloud deployment pipelines.",
    icon: <Shield className="w-6 h-6 text-amber-400" />,
    items: [
      { name: "Cybersecurity Consulting", href: "/services/cybersecurity", desc: "Defensive planning, risk assessments, secure SDLC setups, and compliance consulting." },
      { name: "Security & Penetration Testing", href: "/services/security-testing", desc: "Web app audits, API threat reviews, credential tests, and vulnerability reporting." },
      { name: "Software Testing & QA", href: "/services/software-testing", desc: "QA automation, manual regressions, API checking, and load stress validations." },
      { name: "Cloud & DevOps Engineering", href: "/services/cloud-devops", desc: "CI/CD automations, infrastructure-as-code scripts, and AWS scaling setups." }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Grid Pattern Background */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Area */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Engineering Divisions</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Software &amp; AI Service Architecture
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Lucid8 Technologies provides structured software development, AI solutions, web applications, mobile apps, SaaS, and cybersecurity engineering for businesses across Kerala, Bangalore, and global markets.
          </p>
        </div>

        {/* Group lists */}
        <div className="space-y-16 mt-8">
          {serviceGroups.map((group, idx) => (
            <div key={idx} className="border-t border-slate-800/80 pt-12 first:border-t-0 first:pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Column left - Group Header */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                    {group.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white font-jakarta">{group.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-sm">{group.desc}</p>
                </div>

                {/* Column right - Sub items Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {group.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="group block p-6 bg-[#0a0a0a]/20 border border-slate-800/80 rounded-xl hover:border-brand-blue/30 hover:bg-[#0a0a0a]/40 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300"
                    >
                      <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors font-jakarta">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="text-xs font-semibold text-brand-blue group-hover:text-brand-cyan flex items-center mt-4">
                        <span>View service capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Panel */}
        <div className="mt-20 p-8 bg-[#0a0a0a]/10 border border-slate-800 rounded-2xl text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white font-jakarta">Require a custom or cross-functional stack?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Our consulting engineers assemble dedicated project teams containing software architects, AI engineers, and cloud specialists to address complex technical goals.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all duration-300 shadow-lg shadow-brand-blue/20"
            >
              Consult with an Architect
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
