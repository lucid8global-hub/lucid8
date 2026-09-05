import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProjectsGallery from "../../components/ProjectsGallery";
import { getAllProjects } from "../../data/projects";
import { siteConfig } from "../../data/seo/site";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Software & AI Solutions | Lucid8 Technologies",
  description:
    "Explore software, AI, e-commerce, e-learning, event ticketing and custom web application projects developed by Lucid8 Technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Software & AI Solutions | Lucid8 Technologies",
    description:
      "Explore software, AI, e-commerce, e-learning, event ticketing and custom web application projects developed by Lucid8 Technologies.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Portfolio | Software & AI Solutions | Lucid8 Technologies",
    description:
      "Explore software, AI, e-commerce, e-learning, event ticketing and custom web application projects developed by Lucid8 Technologies.",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-cyan/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Featured Portfolio
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Our Projects &amp; Digital Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Explore software development, web applications, AI solutions, e-commerce marketplaces, e-learning platforms, event ticketing systems, and custom digital products developed by Lucid8 Technologies for businesses across Kerala, Bangalore, and global markets.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80 max-w-3xl">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-extrabold text-white font-jakarta">
                Production
              </div>
              <div className="text-xs text-slate-400">
                Live Platforms
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-cyan font-jakarta">
                Full-Stack
              </div>
              <div className="text-xs text-slate-400">
                Custom Systems
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-extrabold text-white font-jakarta">
                E-Commerce
              </div>
              <div className="text-xs text-slate-400">
                &amp; LMS Platforms
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-blue font-jakarta">
                Kerala &amp; BLR
              </div>
              <div className="text-xs text-slate-400">
                Regional Hubs
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Projects Gallery */}
        <div className="mt-8">
          <ProjectsGallery initialProjects={projects} />
        </div>

        {/* Other Projects CTA */}
        <div className="mt-16 relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-8 md:p-10">
          {/* Decorative background effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                More Projects &amp; Solutions
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
                Want to Know About Our Other Projects?
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                We’ve developed a wide range of websites, software solutions,
                and custom applications for different business needs. Contact
                us to learn more about our other projects, software, and
                applications.
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-[#0a0a0a] to-[#000000] p-8 md:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Have a custom requirement?
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              Ready to engineer your next software project?
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Whether you need to build a website, develop a custom software
              application, create an e-learning platform, build an e-commerce
              solution, or develop a specialized business application, our
              team is ready to help.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}