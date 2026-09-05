import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Users, Sparkles } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getAllInsights } from "../../data/seo/insights";
import { siteConfig } from "../../data/seo/site";

export const metadata: Metadata = {
  title: "Software & AI Insights, Guides & Analysis | Lucid8 Technologies",
  description: "Read in-depth engineering articles on custom software development, AI automation, SaaS costs, e-learning platforms, web development, and cybersecurity in Kerala and Bangalore.",
  alternates: {
    canonical: "/insights"
  },
  openGraph: {
    title: "Software & AI Insights, Guides & Analysis | Lucid8 Technologies",
    description: "Read in-depth engineering articles on custom software development, AI automation, SaaS costs, e-learning platforms, web development, and cybersecurity.",
    url: `${siteConfig.url}/insights`,
    siteName: siteConfig.name,
    type: "website"
  }
};

export default function InsightsPage() {
  const articles = getAllInsights();

  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Engineering Knowledge &amp; Analysis</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Software &amp; AI Engineering Insights
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Practical guides, cost analyses, architecture breakdowns, and technology insights for founders, CTOs, and business leaders building software and AI systems in Kerala, Bangalore, and globally.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {articles.map((art) => (
            <Link
              key={art.slug}
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
