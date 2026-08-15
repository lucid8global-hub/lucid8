import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar, Users } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Insights & Technical Analysis | Lucid8 Technologies",
  description: "Read technical articles on cybersecurity, AI, software engineering, cloud architecture, API design, and QA testing written by Lucid8's engineers.",
  alternates: {
    canonical: "/insights"
  }
};

const insightsList = [
  {
    title: "Why Secure Software Development Matters for Modern Businesses",
    category: "Cybersecurity",
    slug: "secure-software-development",
    author: "Lucid8 Engineering Group",
    date: "Aug 12, 2026",
    readingTime: "5 min read",
    summary: "Exploring the financial and structural risks of post-release vulnerability patches and the benefits of integrating security tools directly into the development cycle."
  },
  {
    title: "How AI Is Transforming Business Automation",
    category: "AI & Innovation",
    slug: "ai-business-automation",
    author: "Lucid8 AI Specialists",
    date: "Aug 08, 2026",
    readingTime: "6 min read",
    summary: "Moving beyond simple chatbots: integrating predictive analytics, classification systems, and machine learning models to streamline operational workflows."
  },
  {
    title: "Web Application Security Best Practices",
    category: "Security Testing",
    slug: "web-app-security-best-practices",
    author: "Lucid8 Auditing Unit",
    date: "Jul 29, 2026",
    readingTime: "8 min read",
    summary: "A practical guide to securing web inputs, enforcing cross-origin parameters, sanitizing forms, and protecting customer session tokens."
  },
  {
    title: "Why Software Testing Should Start Early",
    category: "Software Testing",
    slug: "software-testing-early-start",
    author: "Lucid8 Quality Engineers",
    date: "Jul 15, 2026",
    readingTime: "5 min read",
    summary: "How shifting testing left helps teams identify bugs early, reduce overall development costs, and speed up product launch schedules."
  },
  {
    title: "Building Scalable Web Applications with Modern Architecture",
    category: "Software Engineering",
    slug: "building-scalable-web-applications",
    author: "Lucid8 Core Architects",
    date: "Jul 02, 2026",
    readingTime: "7 min read",
    summary: "Key architectural decisions for modern web applications: server-side rendering, caching layers, and decoupled API microservices."
  },
  {
    title: "API Security Fundamentals",
    category: "API & Backend",
    slug: "api-security-fundamentals",
    author: "Lucid8 Backend Engineers",
    date: "Jun 18, 2026",
    readingTime: "6 min read",
    summary: "How to protect public-facing APIs from data scraping, parameter manipulation, rate breaches, and unauthorized access."
  },
  {
    title: "Cloud Security Best Practices",
    category: "Cloud & DevOps",
    slug: "cloud-security-best-practices",
    author: "Lucid8 DevOps Unit",
    date: "Jun 04, 2026",
    readingTime: "7 min read",
    summary: "Setting up secure cloud environments: isolating networks, managing access controls, and auditing database ports on AWS."
  },
  {
    title: "The Role of AI in Software Testing",
    category: "AI & Software Testing",
    slug: "ai-role-software-testing",
    author: "Lucid8 Innovation Team",
    date: "May 20, 2026",
    readingTime: "6 min read",
    summary: "Leveraging machine learning algorithms to automate test path generation, analyze logs, and identify potential bugs during code changes."
  }
];

export default function InsightsPage() {
  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Company Insights</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Technical Publications & Articles
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Read B2B articles and engineering analysis on cybersecurity strategy, AI models, custom software, and quality testing. Written for technology leaders and architects.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {insightsList.map((art, idx) => (
            <Link
              key={idx}
              href={`/insights/${art.slug}`}
              className="group flex flex-col justify-between bg-[#0a0a0a]/20 border border-slate-800/80 rounded-2xl p-6 hover:border-brand-purple/40 hover:bg-[#0a0a0a]/40 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-300 h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-brand-purple font-semibold">{art.category}</span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {art.readingTime}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-purple transition-colors font-jakarta leading-snug">
                    {art.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-4 mt-6 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1" />
                  {art.author.replace("Lucid8 ", "")}
                </span>
                <span className="text-brand-purple font-bold flex items-center group-hover:text-brand-cyan transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
