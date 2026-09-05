import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Sparkles, 
  Activity, 
  Database, 
  Shield, 
  Cloud, 
  Cpu, 
  FileText, 
  Calendar, 
  Building2, 
  Share2 
} from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { getAllProjects, getProjectBySlug } from "../../../data/projects";

function GithubIcon({ className = "w-4 h-4 mr-2" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Lucid8 Technologies" };
  }

  return {
    title: `${project.title} | Project Showcase | Lucid8 Technologies`,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`
    }
  };
}

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Fintech":
        return <Database className="w-4 h-4 text-brand-cyan" />;
      case "Healthcare":
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case "AI & ML":
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case "Web Apps":
        return <Cpu className="w-4 h-4 text-brand-blue" />;
      case "Cybersecurity":
        return <Shield className="w-4 h-4 text-red-400" />;
      case "Cloud & DevOps":
        return <Cloud className="w-4 h-4 text-cyan-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero / Header */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </div>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">{project.sector}</span>
            <span className="text-slate-600">•</span>
            <div className="flex items-center space-x-1 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>{project.year}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {project.title}
          </h1>

          <p className="text-lg text-brand-cyan font-medium leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>

          {/* Action Links Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-lg shadow-brand-blue/20"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                View Code Repository
              </a>
            )}

            {project.caseStudySlug && (
              <Link
                href={`/case-studies/${project.caseStudySlug}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-brand-cyan hover:text-white bg-[#0a0a0a] border border-brand-cyan/30 hover:border-brand-cyan transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Read Architecture Case Study
              </Link>
            )}
          </div>
        </div>

        {/* Performance & Impact Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="py-8 border-y border-slate-800/80 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0a0a0a]/50 border border-slate-800/80 rounded-2xl p-6 text-center space-y-1 hover:border-brand-blue/30 transition-colors"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    {metric.label}
                  </span>
                  <div className="text-3xl font-extrabold text-white font-jakarta">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Grid: Highlights, Challenges, Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-10">
          
          {/* Left Column: Key Highlights & Technical Solutions */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Key Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
                  <Sparkles className="w-5 h-5 text-brand-cyan mr-2" />
                  <span>Key Architectural Capabilities</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#0a0a0a]/30 border border-slate-800/80 rounded-xl p-4 flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-1" />
                      <p className="text-sm text-slate-350 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges and Solutions */}
            {(project.challenges || project.solutions) && (
              <div className="space-y-8 pt-8 border-t border-slate-800/80">
                <h2 className="text-2xl font-bold text-white font-jakarta">
                  Engineering Challenges & Solutions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Challenges */}
                  {project.challenges && (
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1.5" />
                        Target Challenges
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((chal, idx) => (
                          <li key={idx} className="bg-amber-950/10 border border-amber-900/30 rounded-xl p-4 text-xs text-slate-350 leading-relaxed">
                            <span className="font-bold text-amber-400 block mb-1">Challenge 0{idx + 1}</span>
                            {chal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions */}
                  {project.solutions && (
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-1.5" />
                        Delivered Solutions
                      </h3>
                      <ul className="space-y-3">
                        {project.solutions.map((sol, idx) => (
                          <li key={idx} className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4 text-xs text-slate-350 leading-relaxed">
                            <span className="font-bold text-brand-cyan block mb-1">Solution 0{idx + 1}</span>
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Project Meta Sidebar & Technologies */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Metadata Card */}
            <div className="bg-[#0a0a0a]/50 border border-slate-800/90 rounded-2xl p-6 space-y-6">
              <h3 className="text-base font-bold text-white font-jakarta border-b border-slate-800 pb-3">
                Project Overview
              </h3>

              <div className="space-y-4 text-xs">
                {project.client && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Client / Domain:</span>
                    <span className="text-slate-300 font-semibold">{project.client}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Category:</span>
                  <span className="text-slate-300 font-semibold">{project.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Sector:</span>
                  <span className="text-slate-300 font-semibold">{project.sector}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Status:</span>
                  <span className="text-emerald-400 font-semibold">{project.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Release Year:</span>
                  <span className="text-slate-300 font-semibold">{project.year}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Technologies Integrated
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-black border border-slate-800 px-2.5 py-1 rounded text-xs text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-brand-blue hover:opacity-90 transition-opacity"
                >
                  Inquire About Similar Architecture
                </Link>
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                >
                  ← Back to All Projects
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Other Projects / Navigation */}
        {otherProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-jakarta">
                Explore Other Projects
              </h3>
              <Link
                href="/projects"
                className="text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors flex items-center"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="bg-[#0a0a0a]/30 border border-slate-800/80 hover:border-brand-blue/40 rounded-xl p-6 space-y-3 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{p.sector}</span>
                    <span className="text-xs text-brand-cyan font-semibold">{p.category}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors font-jakarta">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {p.description}
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
