import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, AlertTriangle, 
  HelpCircle, MapPin 
} from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FAQ from "../../../components/FAQ";
import JsonLd, { getServiceSchema, getBreadcrumbListSchema } from "../../../components/JsonLd";
import { getAllServices, getServiceBySlug } from "../../../data/seo/services";
import { siteConfig } from "../../../data/seo/site";

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

// Generate dynamic metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Lucid8 Technologies",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `/services/${slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `${siteConfig.url}/services/${slug}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDesc
    }
  };
}

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` }
  ];

  return (
    <div className="relative">
      {/* JSON-LD Structured Data */}
      <JsonLd
        schema={[
          getServiceSchema({
            name: service.h1 || service.title,
            description: service.metaDesc,
            url: `/services/${service.slug}`,
            category: service.serviceCategory,
            areaServed: ["Kerala", "Kochi", "Kannur", "Kozhikode", "Thiruvananthapuram", "Thrissur", "Bangalore", "Indiranagar", "India"]
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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
            {service.serviceCategory} • Service Capability
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {service.h1 || service.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-350 font-medium leading-relaxed max-w-3xl border-l-2 border-brand-cyan pl-4">
            {service.tagline}
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl pt-2">
            {service.intro}
          </p>
        </div>

        {/* Regional Service Presence Strip */}
        <div className="py-6 px-6 bg-[#0a0a0a]/30 border border-slate-800/80 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0" />
            <span>
              Available for businesses in <strong className="text-slate-200">Kerala</strong> (Kochi, Kannur, Kozhikode, Trivandrum, Thrissur) & <strong className="text-slate-200">Bangalore</strong> (Indiranagar, Koramangala).
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs font-semibold">
            <Link href="/locations/kerala" className="text-brand-cyan hover:underline">Kerala Hub</Link>
            <span className="text-slate-600">•</span>
            <Link href="/locations/bangalore" className="text-brand-cyan hover:underline">Bangalore Hub</Link>
          </div>
        </div>

        {/* Core Layout Grid: Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-t border-slate-800/60">
          {/* Challenges */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
              <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
              <span>Target Business Challenges</span>
            </h2>
            <ul className="space-y-4">
              {service.challenges.map((chal, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-400 bg-slate-950/20 border border-slate-900 p-4 rounded-xl">
                  <span className="text-amber-500 font-bold mr-3 mt-0.5">0{idx + 1}</span>
                  <span className="leading-relaxed">{chal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lucid8 Solutions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2" />
              <span>Lucid8 Architectural Approach</span>
            </h2>
            <ul className="space-y-4">
              {service.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-300 bg-brand-blue/5 border border-brand-blue/15 p-4 rounded-xl">
                  <span className="text-brand-cyan font-bold mr-3 mt-0.5">✓</span>
                  <span className="leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Capabilities Sub-cards */}
        <div className="py-16 border-t border-slate-800/60 space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Core Specializations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">Service Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-2 hover:border-brand-blue/30 transition-colors">
                <h3 className="text-base font-bold text-white font-jakarta">{cap.name}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech and Process Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-slate-800/60">
          {/* Tech stack */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-jakarta">Target Technology Matrix</h3>
            <p className="text-xs text-slate-400">
              We leverage modern and validated tools to execute this service:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Delivery process */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-jakarta">Service Delivery Process</h3>
            <div className="relative border-l border-slate-800 ml-3 space-y-8">
              {service.process.map((step, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#000000] border border-brand-cyan flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  </div>
                  <h4 className="text-sm font-semibold text-white font-jakarta">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits & Considerations (Security / Testing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-slate-800/60">
          {/* Core Benefits */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-jakarta">Business Outcomes</h3>
            <ul className="space-y-2.5">
              {service.benefits.map((ben, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2.5 mt-2 flex-shrink-0" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Considerations */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-jakarta">Security Considerations</h3>
            {service.securityConsiderations ? (
              <ul className="space-y-2.5">
                {service.securityConsiderations.map((sec, idx) => (
                  <li key={idx} className="text-sm text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-2.5 mt-2 flex-shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Standard secure engineering parameters (data encryption, credential safety filters, parameter hygiene checks) are integrated into each build.
              </p>
            )}
          </div>

          {/* Quality Engineering / Testing */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-jakarta">Quality Assurance</h3>
            <ul className="space-y-2.5">
              {service.testingConsiderations.map((tst, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-2.5 mt-2 flex-shrink-0" />
                  <span>{tst}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="py-16 border-t border-slate-800/60 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta flex items-center">
                <HelpCircle className="w-6 h-6 mr-2 text-brand-cyan" />
                <span>Service FAQs</span>
              </h2>
            </div>
            <div className="max-w-4xl">
              <FAQ items={service.faqs} />
            </div>
          </div>
        )}

        {/* Related Services */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="py-16 border-t border-slate-800/60 space-y-6">
            <h3 className="text-lg font-bold text-white font-jakarta">Related Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/services/${rel.slug}`}
                  className="flex items-center justify-between p-4 bg-[#0a0a0a]/25 border border-slate-850 rounded-lg hover:border-brand-blue/30 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-350">{rel.name}</span>
                  <ArrowRight className="w-4 h-4 text-brand-blue" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA block */}
        <div className="mt-16 p-8 bg-[#0a0a0a]/20 border border-slate-800 rounded-2xl text-center space-y-6">
          <h3 className="text-xl font-bold text-white font-jakarta">Have a specific request regarding this service?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Connect with our engineering specialists on WhatsApp or submit a formal inquiry form to receive technical feedback.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
            >
              {service.ctaText}
            </Link>
            <a
              href={`https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-200 border border-slate-800 hover:bg-slate-800/30"
            >
              Consult via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
