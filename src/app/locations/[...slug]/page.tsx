import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, ArrowRight, CheckCircle2, Cpu, Code, 
  Layers, HelpCircle, MessageSquare, Building2 
} from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FAQ from "../../../components/FAQ";
import JsonLd, { getLocalBusinessSchema, getBreadcrumbListSchema } from "../../../components/JsonLd";
import { getAllLocations, getLocationBySlug } from "../../../data/seo/locations";
import { siteConfig } from "../../../data/seo/site";

// Generate static params for all location routes (e.g. /locations/kerala, /locations/bangalore/indiranagar)
export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    slug: loc.slugSegments,
  }));
}

// Generate dynamic metadata for each location
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string[] }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const location = getLocationBySlug(slugPath);

  if (!location) {
    return {
      title: "Location Not Found | Lucid8 Technologies",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDesc,
    alternates: {
      canonical: `/locations/${slugPath}`
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDesc,
      url: `${siteConfig.url}/locations/${slugPath}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDesc
    }
  };
}

export default async function LocationDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string[] }> 
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const location = getLocationBySlug(slugPath);

  if (!location) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    ...(location.parentRegion && location.parentRegion.toLowerCase() !== location.cityOrRegion.toLowerCase()
      ? [{ name: location.parentRegion, url: `/locations/${location.parentRegion.toLowerCase()}` }]
      : []),
    { name: location.cityOrRegion, url: `/locations/${location.slug}` }
  ];

  return (
    <div className="relative">
      {/* JSON-LD Structured Data */}
      <JsonLd
        schema={[
          getLocalBusinessSchema({
            locationName: location.cityOrRegion,
            description: location.metaDesc,
            url: `/locations/${location.slug}`,
            parentRegion: location.parentRegion
          }),
          getBreadcrumbListSchema(breadcrumbItems)
        ]}
      />

      {/* Background Grid Accent */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              {location.parentRegion ? `${location.parentRegion} • ${location.cityOrRegion}` : "Regional Technology Hub"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {location.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-350 font-medium leading-relaxed max-w-3xl border-l-2 border-brand-cyan pl-4">
            {location.tagline}
          </p>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl pt-2">
            {location.intro}
          </p>
        </div>

        {/* Regional Context Box */}
        <div className="p-6 md:p-8 bg-[#0a0a0a]/40 border border-slate-800/80 rounded-2xl my-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
            <Building2 className="w-4 h-4 text-brand-purple" />
            <span>Local Business &amp; Technology Ecosystem</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {location.regionalContext}
          </p>
          <div className="text-xs text-slate-500 pt-1">
            {location.serviceAreaInfo}
          </div>
        </div>

        {/* 1. Software Development Services */}
        <div className="py-16 border-t border-slate-800/60 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Engineering Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              Software Development Services in {location.cityOrRegion}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              We design and construct modular, enterprise-grade software architectures tailored to the operational demands of businesses in {location.cityOrRegion}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.softwareServices.map((srv, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3 hover:border-brand-blue/30 transition-colors">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-brand-cyan">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white font-jakarta">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/services/software-development"
              className="inline-flex items-center text-xs font-bold text-brand-cyan hover:underline"
            >
              <span>Explore Custom Software Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* 2. AI Development Services */}
        <div className="py-16 border-t border-slate-800/60 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Intelligent Automation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              AI Development &amp; Automation in {location.cityOrRegion}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Empowering companies in {location.cityOrRegion} with Generative AI, autonomous agents, and machine learning pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.aiServices.map((srv, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3 hover:border-brand-purple/30 transition-colors">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-brand-purple">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white font-jakarta">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/services/ai-development"
              className="inline-flex items-center text-xs font-bold text-brand-purple hover:underline"
            >
              <span>Explore AI Development Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* 3. Web & Mobile Development */}
        <div className="py-16 border-t border-slate-800/60 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Digital Interfaces</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              Web &amp; Mobile App Development in {location.cityOrRegion}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.webMobileServices.map((srv, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white font-jakarta">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Industries Served */}
        <div className="py-16 border-t border-slate-800/60 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Domain Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              Industries We Serve in {location.cityOrRegion}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {location.industriesServed.map((ind, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/30 border border-slate-800/60 p-5 rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-white font-jakarta">{ind.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Real Project Spotlights */}
        {location.relevantProjects && location.relevantProjects.length > 0 && (
          <div className="py-16 border-t border-slate-800/60 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Proven Work</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
                  Featured Live Systems &amp; Projects
                </h2>
              </div>
              <Link href="/projects" className="text-xs font-semibold text-brand-cyan hover:underline flex items-center">
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.relevantProjects.map((proj, idx) => (
                <div key={idx} className="bg-[#0a0a0a]/30 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-brand-blue/40 transition-colors">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan font-mono">{proj.category}</span>
                    <h3 className="text-lg font-bold text-white font-jakarta">{proj.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-850">
                    <Link href={`/projects/${proj.slug}`} className="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors">
                      <span>Explore Project Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Why Choose Lucid8 */}
        <div className="py-16 border-t border-slate-800/60 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Engineering Value</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">
              Why Businesses in {location.cityOrRegion} Choose Lucid8
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-3">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-base font-bold text-white font-jakarta">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Localized FAQs */}
        {location.faqs && location.faqs.length > 0 && (
          <div className="py-16 border-t border-slate-800/60 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Questions &amp; Answers</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta flex items-center">
                <HelpCircle className="w-6 h-6 mr-2 text-brand-cyan" />
                <span>Frequently Asked Questions in {location.cityOrRegion}</span>
              </h2>
            </div>
            <div className="max-w-4xl">
              <FAQ items={location.faqs} />
            </div>
          </div>
        )}

        {/* 8. Nearby Locations Quick Links */}
        {location.nearbyLocations && location.nearbyLocations.length > 0 && (
          <div className="py-12 border-t border-slate-800/60 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Other Regional Hubs</span>
            <div className="flex flex-wrap gap-2.5">
              {location.nearbyLocations.map((nb, idx) => (
                <Link
                  key={idx}
                  href={nb.href}
                  className="bg-[#0a0a0a]/30 border border-slate-800 hover:border-brand-cyan/40 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <MapPin className="w-3 h-3 text-brand-cyan mr-1" />
                  <span>{nb.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 9. Bottom CTA Banner */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-b from-[#0a0a0a] to-[#000000] border border-slate-800 rounded-2xl text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-jakarta">
            Looking for a software or AI development partner in {location.cityOrRegion}?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Partner with Lucid8&apos;s engineers to architect custom software, develop high-speed web/mobile applications, and implement intelligent AI workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20am%20looking%20for%20software%20development%20services%20in%20${encodeURIComponent(location.cityOrRegion)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-slate-200 border border-slate-800 hover:bg-slate-800/30"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
