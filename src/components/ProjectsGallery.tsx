"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowRight, 
  Search, 
  Code2, 
  Activity, 
  Database, 
  Cpu, 
  Shield, 
  Cloud, 
  Layers, 
  CheckCircle2,
  Sparkles,
  SlidersHorizontal
} from "lucide-react";
import { Project, projectCategories, ProjectCategory } from "../data/projects";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface ProjectsGalleryProps {
  initialProjects: Project[];
}

export default function ProjectsGallery({ initialProjects }: ProjectsGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.sector.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Fintech":
        return <Database className="w-3.5 h-3.5 text-brand-cyan" />;
      case "Healthcare":
        return <Activity className="w-3.5 h-3.5 text-emerald-400" />;
      case "AI & ML":
        return <Sparkles className="w-3.5 h-3.5 text-amber-400" />;
      case "Web Apps":
        return <Cpu className="w-3.5 h-3.5 text-brand-blue" />;
      case "Cybersecurity":
        return <Shield className="w-3.5 h-3.5 text-red-400" />;
      case "Cloud & DevOps":
        return <Cloud className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Live":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/70 border border-emerald-800/60 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
            Live Deployment
          </span>
        );
      case "In Development":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-950/70 border border-amber-800/60 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5" />
            In Active Build
          </span>
        );
      case "Completed":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900 border border-slate-700 text-slate-300">
            <CheckCircle2 className="w-3 h-3 mr-1 text-slate-400" />
            Delivered
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-10">
      {/* Controls Bar: Categories & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
                selectedCategory === category
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20 border border-brand-cyan/40"
                  : "bg-[#0a0a0a] text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
              }`}
            >
              {category !== "All" && getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full bg-[#0a0a0a] border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results Meta */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-300">{filteredProjects.length}</span> {filteredProjects.length === 1 ? "project" : "projects"}
          {selectedCategory !== "All" && (
            <span> in <span className="text-brand-cyan font-medium">{selectedCategory}</span></span>
          )}
        </div>
        {(selectedCategory !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs text-brand-blue hover:text-brand-cyan transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0a0a0a]/40 border border-slate-800/90 hover:border-brand-blue/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5"
            >
              {/* Card Top / Header */}
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {project.sector}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(project.status)}
                    <span className="text-xs font-mono text-slate-500">{project.year}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors font-jakarta leading-snug">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-xs font-medium text-brand-blue">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5 py-3 px-3.5 bg-slate-950/60 border border-slate-900 rounded-xl">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xs font-extrabold text-brand-cyan font-jakarta">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Bottom / Tech & Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-5">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-black border border-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-350 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="bg-black border border-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-500 font-mono">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                        title="View Code Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.caseStudySlug && (
                      <Link
                        href={`/case-studies/${project.caseStudySlug}`}
                        className="text-xs font-semibold text-slate-400 hover:text-brand-cyan transition-colors"
                      >
                        Case Study
                      </Link>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors ml-auto"
                  >
                    <span>View Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-[#0a0a0a]/30 border border-dashed border-slate-800 rounded-2xl space-y-4">
          <SlidersHorizontal className="w-10 h-10 text-slate-600 mx-auto" />
          <h4 className="text-base font-bold text-white font-jakarta">No projects found</h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            No projects match the selected category &quot;{selectedCategory}&quot; {searchQuery ? `or query "${searchQuery}"` : ""}. Try adjusting your filter parameters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-brand-blue hover:opacity-90 transition-opacity"
          >
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
}
