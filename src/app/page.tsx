import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Shield, Cpu, Code, Database, Cloud, Terminal, 
  Layers, Users, CheckCircle, Zap, Activity, BookOpen, MessageSquare, ExternalLink 
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { getFeaturedProjects } from "../data/projects";

// Real tech expertise categories
const techExpertise = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    techs: ["Node.js", "Express", "Java", "Spring Boot"]
  },
  {
    category: "Mobile",
    techs: ["Flutter", "Dart", "iOS (Swift)", "Android (Kotlin)"]
  },
  {
    category: "Database & Cache",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & Ops",
    techs: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    category: "AI & Data Science",
    techs: ["Python", "PyTorch", "TensorFlow", "Computer Vision"]
  },
  {
    category: "Cybersecurity",
    techs: ["OWASP Testing", "Vulnerability Assessment", "Secure SDLC", "Threat Modeling"]
  },
  {
    category: "Testing & QA",
    techs: ["Selenium", "Playwright", "Postman API", "JMeter Performance"]
  }
];

const processes = [
  { step: "01", name: "Discover", desc: "We study project goals, requirements, constraints, and business outcomes." },
  { step: "02", name: "Architect", desc: "Design secure, modular systems, cloud configurations, and database schemas." },
  { step: "03", name: "Build", desc: "Implement clean, reusable code using Git workflows and secure codings standards." },
  { step: "04", name: "Test", desc: "Continuous functional, performance, integration, and user-acceptance testing." },
  { step: "05", name: "Secure", desc: "OWASP vulnerability scanning, authorization reviews, and source code auditing." },
  { step: "06", name: "Deploy & Optimize", desc: "Release via CI/CD, monitor logs, analyze analytics, and scale infrastructures." }
];

const industries = [
  { name: "Fintech", desc: "Secure transaction processing, wallet systems, and regulatory alignment.", href: "/industries/fintech" },
  { name: "Healthcare", desc: "HIPAA-compliant platforms, medical apps, and diagnostics software.", href: "/industries/healthcare" },
  { name: "Education", desc: "LMS systems, digital class modules, and AI education helpers.", href: "/industries/education" },
  { name: "E-Commerce", desc: "Highly-scalable checkouts, recommendations, and inventory systems.", href: "/industries/ecommerce" },
  { name: "Startups", desc: "Fast-to-market MVPs, cloud setups, and rapid feature scaling.", href: "/industries/startups" },
  { name: "Enterprises", desc: "Legacy migration, secure microservices, and internal admin workflows.", href: "/industries/enterprises" }
];

const recentInsights = [
  {
    title: "Why Secure Software Development Matters for Modern Businesses",
    category: "Cybersecurity",
    slug: "secure-software-development",
    date: "Aug 12, 2026",
    readingTime: "5 min read"
  },
  {
    title: "How AI Is Transforming Business Automation",
    category: "AI & Innovation",
    slug: "ai-business-automation",
    date: "Aug 08, 2026",
    readingTime: "6 min read"
  },
  {
    title: "Web Application Security Best Practices",
    category: "Security Testing",
    slug: "web-app-security-best-practices",
    date: "Jul 29, 2026",
    readingTime: "8 min read"
  }
];

export default function Home() {
  return (
    <div className="relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-grid-pattern">
        {/* Abstract Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-3xl space-y-8 animate-fade-in-up">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center space-x-2 bg-[#0a0a0a] border border-slate-800 rounded-full px-3 py-1 text-xs text-brand-cyan font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Secure. Intelligent. Scalable.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-jakarta">
              Engineering Secure, <br />
              <span className="text-gradient">Intelligent & Scalable</span> <br />
              Digital Solutions
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Lucid8 helps businesses build secure software, leverage artificial intelligence, strengthen cybersecurity, and deliver reliable digital experiences.
            </p>
            

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-slate-300 border border-slate-800 hover:bg-slate-800/30 hover:text-white transition-colors duration-300"
              >
                Explore Our Services
              </Link>
              <a
                href="https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 hover:bg-brand-cyan/10 transition-colors duration-300"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-brand-cyan/20" />
                Talk to an Expert
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / CAPABILITIES STRIP */}
      <section className="bg-slate-950/80 border-y border-slate-800/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Core Architecture Pillars</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: "Software Engineering", icon: <Code className="w-5 h-5 text-brand-white" /> },
              { name: "AI & ML Integration", icon: <Cpu className="w-5 h-5 text-brand-white" /> },
              { name: "Cybersecurity Consulting", icon: <Shield className="w-5 h-5 text-brand-white" /> },
              { name: "Quality Engineering", icon: <Zap className="w-5 h-5 text-white-400" /> },
              { name: "Cloud & DevOps Ops", icon: <Cloud className="w-5 h-5 text-white-400" /> },
              { name: "Digital Transformation", icon: <Layers className="w-5 h-5 text-white-400" /> }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-slate-900/20 border border-slate-800/40 rounded-xl">
                <div className="mb-2">{pillar.icon}</div>
                <span className="text-xs font-semibold text-slate-300">{pillar.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT LUCID8 SECTION */}
      <section className="py-24 bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Engineering-First Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-jakarta">
                Delivering Secure, Quality Software Ecosystems
              </h2>
              <p className="text-slate-400 leading-relaxed text-base">
                Lucid8 is built upon a foundations of security by design, scalable codebase structures, and transparent workflows. We avoid template designs and shortcuts, ensuring that the software we construct supports high concurrency, protects user data, and delivers clear business outcomes.
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                Whether deploying advanced computer vision architectures, refactoring complex enterprise APIs, running pen-tests, or orchestrating cloud automation pipelines, our focus remains on high-end engineering.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-brand-cyan hover:text-brand-cyan/85"
                >
                  <span>Learn More About Lucid8</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-[#0a0a0a]/40 border border-slate-800 rounded-2xl p-8 space-y-6">
              <h3 className="text-lg font-bold text-white font-jakarta">Our Standard Metrics</h3>
              <div className="space-y-4">
                {[
                  { label: "Security-First Integration", val: "Continuous OWASP Code Reviews" },
                  { label: "AI Framework Focus", val: "Predictive Analytics & Computer Vision" },
                  { label: "Software Standards", val: "Clean Code & Automated Pipelines" },
                  { label: "Lead Contact Options", val: "Fast WhatsApp Consulting" }
                ].map((metric, idx) => (
                  <div key={idx} className="border-b border-slate-800/80 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-500 font-medium">{metric.label}</p>
                    <p className="text-sm font-bold text-slate-200 mt-1">{metric.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW GRID */}
      <section className="py-24 bg-slate-950/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Capability Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-jakarta">
              Explore Our Core Engineering Divisions
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Every major category features its own dedicated strategy, roadmap, and technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Custom Software Development"
              description="Enterprise system development, SaaS applications, custom architectures, and database structures."
              href="/services/software-development"
              icon={<Code className="w-5 h-5" />}
            />
            <ServiceCard 
              title="Web Application Development"
              description="High-performance client dashboards, web applications, and corporate digital layouts in Next.js."
              href="/services/web-development"
              icon={<Layers className="w-5 h-5" />}
            />
            <ServiceCard 
              title="Mobile Application Development"
              description="iOS, Android, and cross-platform mobile apps with secure APIs built using Flutter."
              href="/services/mobile-app-development"
              icon={<Activity className="w-5 h-5" />}
            />
            <ServiceCard 
              title="AI & Machine Learning"
              description="Predictive modeling, data classification pipelines, and advanced computer vision applications."
              href="/services/ai-machine-learning"
              icon={<Cpu className="w-5 h-5" />}
            />
            <ServiceCard 
              title="Cybersecurity Strategy"
              description="Defensive architecture consulting, vulnerability mitigations, and compliance strategies."
              href="/services/cybersecurity"
              icon={<Shield className="w-5 h-5" />}
            />
            <ServiceCard 
              title="Vulnerability Security Testing"
              description="OWASP application pen-testing, API security audits, and configuration validation reviews."
              href="/services/security-testing"
              icon={<Terminal className="w-5 h-5" />}
            />
            <ServiceCard 
              title="Software Testing & QA"
              description="Quality engineering, functional testing, API testing, and test automation frameworks."
              href="/services/software-testing"
              icon={<CheckCircle className="w-5 h-5" />}
            />
            <ServiceCard 
              title="Cloud & DevOps Engineering"
              description="AWS deployments, CI/CD automated release schedules, and infrastructure-as-code configurations."
              href="/services/cloud-devops"
              icon={<Cloud className="w-5 h-5" />}
            />
            <ServiceCard 
              title="API & Backend Systems"
              description="Fast, robust APIs, database structures, OAuth security integrations, and scalable microservices."
              href="/services/api-backend-development"
              icon={<Database className="w-5 h-5" />}
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white rounded-lg transition-colors"
            >
              <span>View All 11 Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TECH EXPERTISE GRID */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Modern Stack Integration</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-jakarta">
              Technology Stack Matrix
            </h2>
            <p className="text-slate-400 text-sm">
              We build solutions with industry-standard, robust technologies tailored for enterprise scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techExpertise.map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan font-jakarta">
                  {item.category}
                </h3>
                <ul className="space-y-2">
                  {item.techs.map((tech, techIdx) => (
                    <li key={techIdx} className="text-sm text-slate-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY LUCID8 */}
      <section className="py-24 bg-slate-950/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Why Partner With Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-jakarta">
              Enterprise Engineering Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering-First Approach",
                desc: "We prioritize write quality, system modularity, and readable code documentation over quick templates.",
                icon: <Code className="w-5 h-5 text-brand-blue" />
              },
              {
                title: "Security by Design",
                desc: "Security isn't a post-process; we integrate dependency scans, security checks, and threat mitigation early.",
                icon: <Shield className="w-5 h-5 text-brand-cyan" />
              },
              {
                title: "Scalable Architecture",
                desc: "Systems built to manage growing requests, database records, and concurrency loads cleanly.",
                icon: <Database className="w-5 h-5 text-brand-purple" />
              },
              {
                title: "Quality-Focused Delivery",
                desc: "Comprehensive testing workflows spanning manual user flows, unit tests, and automated regressions.",
                icon: <Zap className="w-5 h-5 text-amber-400" />
              },
              {
                title: "Modern Technology Stack",
                desc: "Leveraging performance frameworks like Next.js, robust DB systems, and responsive cloud providers.",
                icon: <Layers className="w-5 h-5 text-sky-400" />
              },
              {
                title: "Business-Oriented Solutions",
                desc: "We align code metrics with real user goals, speed optimizations, and corporate deliverables.",
                icon: <Users className="w-5 h-5 text-emerald-400" />
              }
            ].map((prop, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/10 border border-slate-800/60 p-6 rounded-xl space-y-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  {prop.icon}
                </div>
                <h3 className="text-base font-bold text-white font-jakarta">{prop.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS TIMELINE */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Structured Execution</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-jakarta">
              Our Software Delivery Process
            </h2>
            <p className="text-slate-400 text-sm">
              We apply systematic stages to ensure robust results from discovery to operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {processes.map((p, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-5 rounded-xl space-y-3 relative">
                <div className="text-2xl font-black text-brand-cyan/20 font-mono">{p.step}</div>
                <h3 className="text-sm font-bold text-white font-jakarta">{p.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES */}
      <section className="py-24 bg-slate-950/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Target Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-jakarta">
              Industries We Solve Challenges For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="group p-6 bg-[#0a0a0a]/40 border border-slate-850 rounded-xl hover:border-brand-purple/40 hover:bg-[#0a0a0a]/70 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors font-jakarta">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {ind.desc}
                </p>
                <div className="text-xs font-bold text-brand-purple flex items-center mt-4">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SELECTED WORK / PROJECTS */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Selected Projects</span>
              <h2 className="text-3xl font-bold text-white font-jakarta">Proven Architectures & Live Systems</h2>
            </div>
            <Link 
              href="/projects"
              className="text-sm font-semibold text-brand-cyan hover:underline flex items-center space-x-1"
            >
              <span>Explore all {getFeaturedProjects().length}+ portfolio projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getFeaturedProjects().map((proj) => (
              <div 
                key={proj.id} 
                className="bg-[#0a0a0a]/40 border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-brand-blue/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{proj.sector}</span>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                      {proj.status}
                    </span>
                  </div>
                  <Link href={`/projects/${proj.slug}`}>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors font-jakarta leading-snug">
                      {proj.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {proj.metrics && proj.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-slate-950/60 border border-slate-900 rounded-lg">
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-[11px] font-extrabold text-brand-cyan">{m.value}</div>
                          <div className="text-[9px] uppercase tracking-wider text-slate-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((t, tIdx) => (
                      <span key={tIdx} className="bg-black border border-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-350 font-mono">
                        {t}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="bg-black border border-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-500 font-mono">
                        +{proj.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-brand-cyan hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1" />
                        Live Demo
                      </a>
                    )}
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors ml-auto"
                    >
                      <span>Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INSIGHTS PREVIEW */}
      <section className="py-24 bg-slate-950/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Company Insights</span>
              <h2 className="text-3xl font-bold text-white font-jakarta">Articles & Technical Engineering Analysis</h2>
            </div>
            <Link 
              href="/insights"
              className="text-sm font-semibold text-brand-purple hover:underline flex items-center space-x-1"
            >
              <span>Read all publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentInsights.map((art, idx) => (
              <Link
                key={idx}
                href={`/insights/${art.slug}`}
                className="group flex flex-col justify-between bg-[#0a0a0a]/40 border border-slate-800/60 rounded-xl p-6 hover:border-brand-purple/40 hover:bg-[#0a0a0a]/70 transition-all duration-300 h-full"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-brand-purple">{art.category}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors font-jakarta leading-snug">
                    {art.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-6">
                  <span>{art.date}</span>
                  <span>{art.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-24 bg-[#000000] relative overflow-hidden bg-dot-pattern border-t border-slate-800/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-jakarta">
            Have a technology challenge? <br />
            <span className="text-gradient">Let's build the solution.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Partner with Lucid8's consulting engineers to audit systems, design artificial intelligence frameworks, optimize cloud architecture, and build custom web/mobile platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-black to-brand-cyan hover:opacity-95 transition-all duration-300"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-slate-300 border border-slate-800 hover:bg-slate-800/30 hover:text-white transition-colors duration-300"
            >
              Contact Lucid8
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
