import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Users, ArrowRight, MapPin } from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import JsonLd, { getArticleSchema, getBreadcrumbListSchema } from "../../../components/JsonLd";
import { getAllInsights, getInsightBySlug } from "../../../data/seo/insights";
import { siteConfig } from "../../../data/seo/site";

export async function generateStaticParams() {
  const articles = getAllInsights();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Lucid8 Technologies",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: {
      canonical: `/insights/${slug}`
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDesc,
      url: `${siteConfig.url}/insights/${slug}`,
      siteName: siteConfig.name,
      type: "article",
      authors: [article.author]
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDesc
    }
  };
}

export default async function InsightDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllInsights();
  const relatedArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
    { name: article.title, url: `/insights/${article.slug}` }
  ];

  return (
    <div className="relative">
      {/* JSON-LD Structured Data */}
      <JsonLd
        schema={[
          getArticleSchema({
            title: article.title,
            description: article.metaDesc,
            url: `/insights/${article.slug}`,
            datePublished: article.date,
            author: article.author,
            category: article.category
          }),
          getBreadcrumbListSchema(breadcrumbItems)
        ]}
      />

      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Back Link */}
        <div className="pt-8 pb-4">
          <Link
            href="/insights"
            className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back to all publications</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="py-8 space-y-6 border-b border-slate-800/80">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-350 leading-relaxed font-medium">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1.5 text-brand-cyan" />
              {article.author}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5 text-brand-purple" />
              {article.date}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-amber-400" />
              {article.readingTime}
            </span>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 space-y-12">
          {article.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              {sec.sectionTitle && (
                <h2 className="text-xl sm:text-2xl font-bold text-white font-jakarta">
                  {sec.sectionTitle}
                </h2>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-350 leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.bullets && (
                <ul className="space-y-2.5 pt-2">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm sm:text-base text-slate-350">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-3 mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* Related Services & Locations Cross-Linking */}
        {(article.relatedServices || article.relatedLocations) && (
          <div className="p-6 bg-[#0a0a0a]/30 border border-slate-800/80 rounded-2xl my-8 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-jakarta">
              Explore Related Services &amp; Locations
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {article.relatedServices?.map((srv, idx) => (
                <Link
                  key={idx}
                  href={`/services/${srv.slug}`}
                  className="bg-slate-900 border border-slate-800 hover:border-brand-cyan/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-cyan transition-colors"
                >
                  {srv.name} Service →
                </Link>
              ))}

              {article.relatedLocations?.map((loc, idx) => (
                <Link
                  key={idx}
                  href={`/locations/${loc.slug}`}
                  className="bg-slate-900 border border-slate-800 hover:border-brand-purple/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-purple transition-colors flex items-center"
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  {loc.name} Hub →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-8 p-8 bg-[#0a0a0a]/20 border border-slate-800 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-jakarta">
            Ready to engineer your next software or AI solution?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Partner with Lucid8&apos;s engineers to architect custom software, build high-speed web/mobile platforms, and deploy intelligent AI automation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
            >
              Consult with Lucid8 Engineers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20read%20your%20article%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-200 border border-slate-800 hover:bg-slate-800/30"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white font-jakarta">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="p-6 bg-[#0a0a0a]/25 border border-slate-800/80 rounded-xl space-y-2 hover:border-brand-purple/40 transition-colors block"
                >
                  <span className="text-xs font-semibold text-brand-purple">{rel.category}</span>
                  <h4 className="text-base font-bold text-white font-jakarta leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
