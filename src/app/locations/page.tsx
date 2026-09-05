import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  MapPin, ArrowRight, Code, Cpu, Shield, MessageSquare 
} from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getAllLocations } from "../../data/seo/locations";
import { siteConfig } from "../../data/seo/site";

export const metadata: Metadata = {
  title: "Service Locations & Regional Hubs | Lucid8 Technologies",
  description: "Lucid8 provides custom software development, AI solutions, web applications, and mobile apps for businesses across Kerala (Kochi, Kannur, Kozhikode, Trivandrum, Thrissur) and Bangalore (Indiranagar).",
  alternates: {
    canonical: "/locations"
  },
  openGraph: {
    title: "Service Locations & Regional Hubs | Lucid8 Technologies",
    description: "Lucid8 provides custom software development, AI solutions, web applications, and mobile apps for businesses across Kerala and Bangalore.",
    url: `${siteConfig.url}/locations`,
    siteName: siteConfig.name,
    type: "website"
  }
};

export default function LocationsIndexPage() {
  const locations = getAllLocations();

  const keralaLocations = locations.filter(l => l.slug === "kerala" || l.parentRegion === "Kerala");
  const bangaloreLocations = locations.filter(l => l.slug === "bangalore" || l.parentRegion === "Bangalore");

  return (
    <div className="relative">
      {/* Background Grid Pattern */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-20 space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Regional Service Coverage</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            Software &amp; AI Development Service Locations
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Lucid8 Technologies collaborates with innovative startups, commercial enterprises, and growing businesses across key technology hubs in <strong className="text-white">Kerala</strong> and <strong className="text-white">Bangalore (Bengaluru)</strong>. Explore our dedicated location hubs below:
          </p>
        </div>

        {/* Kerala Region Grid */}
        <div className="py-12 border-t border-slate-800/80 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Primary Technology Corridor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">Kerala Hub &amp; Cities</h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Serving tech parks, commercial networks, and digital businesses across Kerala including Kochi, Kannur, Kozhikode, Thiruvananthapuram, and Thrissur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keralaLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col justify-between p-6 bg-[#0a0a0a]/30 border border-slate-800/80 rounded-2xl hover:border-brand-cyan/40 hover:bg-[#0a0a0a]/60 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan font-mono">
                      {loc.parentRegion ? `${loc.parentRegion} • ${loc.cityOrRegion}` : "Statewide Hub"}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors font-jakarta">
                    {loc.cityOrRegion}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {loc.tagline}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850 flex items-center justify-between text-xs font-semibold text-brand-cyan">
                  <span>Explore {loc.cityOrRegion} Services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bangalore Region Grid */}
        <div className="py-12 border-t border-slate-800/80 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Silicon Valley of India</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">Bangalore / Bengaluru Hub</h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Serving venture-backed startups, technology scale-ups, and enterprises in Bangalore, including Indiranagar, Koramangala, and HSR Layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bangaloreLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col justify-between p-7 bg-[#0a0a0a]/30 border border-slate-800/80 rounded-2xl hover:border-brand-purple/40 hover:bg-[#0a0a0a]/60 hover:shadow-lg hover:shadow-brand-purple/5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-mono">
                      {loc.parentRegion ? `${loc.parentRegion} • ${loc.cityOrRegion}` : "Metropolitan Hub"}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-500 group-hover:text-brand-purple transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors font-jakarta">
                    {loc.cityOrRegion}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {loc.tagline}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850 flex items-center justify-between text-xs font-semibold text-brand-purple">
                  <span>Explore {loc.cityOrRegion} Services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Location Collaboration Standards */}
        <div className="py-16 border-t border-slate-800/80">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Engagement Model</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              How We Collaborate With Regional Businesses
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We eliminate traditional agency bureaucracy by providing direct access to software architects and AI engineers with transparent milestone tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-brand-cyan">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-jakarta">Direct Engineering Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Work directly with seasoned software architects and full-stack engineers rather than non-technical account managers.
              </p>
            </div>

            <div className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-brand-purple">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-jakarta">Modern AI &amp; Software Stack</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Next.js, React, Flutter, Node.js, Spring Boot, Python, PyTorch, and AWS cloud architectures built for speed and security.
              </p>
            </div>

            <div className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-jakarta">Security by Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                OWASP compliance, strict data privacy, tokenized sessions, and automated testing integrated into every sprint.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-b from-[#0a0a0a] to-[#000000] border border-slate-800 rounded-2xl text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-jakarta">
            Ready to build with Lucid8 Technologies?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Connect with our team on WhatsApp or send a message through our contact portal to receive engineering feedback and project estimates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
            >
              Discuss Your Regional Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-slate-200 border border-slate-800 hover:bg-slate-800/30"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Consulting
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
