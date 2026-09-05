import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ShieldAlert, CheckCircle2, Activity, Shield 
} from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";

interface IndustryData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  securityConsiderations: string[];
  testingRequirements: string[];
  opportunities: string[];
}

const industriesMap: Record<string, IndustryData> = {
  fintech: {
    title: "Financial Technology (Fintech)",
    metaTitle: "Fintech Software & Security Solutions | Lucid8",
    metaDesc: "Discover Lucid8's fintech solutions: secure transaction engines, compliant ledger configurations, and API integrations for finance platforms.",
    tagline: "High-security transaction frameworks, ledger architectures, and regulatory alignment.",
    intro: "Lucid8 assists financial institutions, card managers, and banking applications in building robust technical platforms. We design secure ledger transactions, optimize backend architectures for sub-second responses, and enforce security policies to protect account balances.",
    challenges: [
      "Rigid regulatory policies delaying product updates.",
      "High vulnerability to credential hijacking and API tampering.",
      "Unsynchronized, slow ledger updates causing double-spends."
    ],
    solutions: [
      "Integrating security protocols into development pipelines.",
      "Enforcing multi-tier JWT validations, encryption-at-rest, and security groups.",
      "Designing atomic transaction databases and distributed locks."
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS Aurora", "Vulnerability Scanner"],
    securityConsiderations: [
      "Strict OWASP verification for public endpoints.",
      "Data tokenization protecting sensitive card numbers.",
      "Enforcing SSL/TLS tunnels for all database connections."
    ],
    testingRequirements: [
      "Rigorous API checking under high concurrency loads.",
      "Automated transaction regression suites.",
      "Negative testing with invalid transaction parameters."
    ],
    opportunities: [
      "Transitioning legacy financial architectures to AWS microservices.",
      "Leveraging AI analytics to detect transaction anomalies."
    ]
  },
  healthcare: {
    title: "Healthcare Technology",
    metaTitle: "HIPAA Compliant Healthcare Software | Lucid8",
    metaDesc: "Lucid8 builds HIPAA-aligned telehealth services, diagnostic tools, and secure data storage systems for healthcare providers.",
    tagline: "HIPAA-compliant platforms, medical apps, and secure data storage.",
    intro: "We build secure systems for clinics, telehealth organizations, and diagnostic laboratories. Lucid8 prioritizes patient privacy and data protection, ensuring all software conforms to HIPAA guidelines while offering smooth user experiences.",
    challenges: [
      "Accidental leakage of protected health information (PHI).",
      "Fragmented doctor-patient messaging systems.",
      "Unresponsive telehealth video configurations."
    ],
    solutions: [
      "Configuring encrypted file storage and database fields.",
      "Building unified, secure WebRTC chat interfaces.",
      "Optimizing media stream pipelines for web and mobile devices."
    ],
    technologies: ["Node.js", "React", "Next.js", "WebSockets", "Encrypted MongoDB"],
    securityConsiderations: [
      "Strict data access tracking logs.",
      "Automatic session timeouts on medical portals.",
      "Full PHI encryption during transfer and storage."
    ],
    testingRequirements: [
      "Verifying WebRTC video stream quality across devices.",
      "Testing portal access permissions for doctor and patient roles.",
      "Simulating server connection losses during active medical chats."
    ],
    opportunities: [
      "Automating patient triage workflows using secure AI assistants.",
      "Integrating diagnostic imaging files with cloud storage."
    ]
  },
  education: {
    title: "Education Technology (Edtech)",
    metaTitle: "Edtech Software Development & LMS Solutions | Lucid8",
    metaDesc: "Scale your digital learning platforms. Lucid8 builds LMS architectures, video portals, and AI education helpers for modern Edtech.",
    tagline: "Learning management systems, digital portals, and AI assistance.",
    intro: "Lucid8 designs learning management engines, student trackers, and interactive portals. We focus on scalability to manage high user traffic during online classes and exam cycles, delivering fast and reliable educational platforms.",
    challenges: [
      "High server load and database crashes during exam schedules.",
      "Slow video load speeds in remote regions with weak connections.",
      "Difficulties tracking student progress across large cohorts."
    ],
    solutions: [
      "Implementing auto-scaling server configurations.",
      "Configuring Content Delivery Networks (CDNs) for global video caching.",
      "Designing clean dashboard widgets and progress tracking databases."
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis Caching", "AWS CloudFront", "Flutter"],
    securityConsiderations: [
      "Protecting student account details from public access.",
      "Securing academic exam files with restricted access keys.",
      "Sanitizing forum and messaging inputs to prevent scripting attacks."
    ],
    testingRequirements: [
      "Load testing portals to verify performance under high traffic.",
      "Cross-browser testing on legacy tablets and mobile viewports.",
      "Verifying quiz question generators work correctly."
    ],
    opportunities: [
      "Using AI to analyze student progress and tailor learning content.",
      "Automating grading tasks for multiple-choice exams."
    ]
  },
  ecommerce: {
    title: "E-Commerce Solutions",
    metaTitle: "Scalable E-Commerce Software Architectures | Lucid8",
    metaDesc: "Boost online sales with Lucid8's e-commerce architectures: optimized checkouts, inventory syncing, and custom search integrations.",
    tagline: "High-performance checkouts, search engines, and inventory sync.",
    intro: "We engineer fast e-commerce architectures designed to improve conversion rates and streamline online shopping. Lucid8 focuses on payment security, quick search indexing, and real-time inventory tracking to deliver reliable retail platforms.",
    challenges: [
      "Slow page speeds causing cart abandonment.",
      "Inaccurate inventory levels leading to duplicate orders.",
      "Unoptimized checkout pages driving away customers."
    ],
    solutions: [
      "Server-side pre-rendering and static page caching via Next.js.",
      "Integrating real-time database locks for stock updates.",
      "Simplifying checkout steps with secure payment integrations."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Stripe API"],
    securityConsiderations: [
      "Securing payment integrations using Tokenized APIs (PCI compliance).",
      "Protecting user accounts with rate-limited login pages.",
      "Running security scans on public search inputs."
    ],
    testingRequirements: [
      "Simulating peak shopping traffic to test cart stability.",
      "Verifying successful payment webhooks and order updates.",
      "Testing discount code calculations across cart combinations."
    ],
    opportunities: [
      "Implementing AI recommendations to increase order values.",
      "Automating order fulfillment updates across shipping systems."
    ]
  },
  startups: {
    title: "Startup Technology",
    metaTitle: "MVP Development & Technical Architecture for Startups | Lucid8",
    metaDesc: "Launch your product quickly. Lucid8 builds fast-to-market MVPs, cloud setups, and scalable codebases to support startup growth.",
    tagline: "Fast-to-market MVPs, cloud configurations, and rapid scaling.",
    intro: "Lucid8 partners with startups to build and launch Minimum Viable Products (MVPs) quickly. We write clean, modular code to ensure your system can scale organically as you secure users and funding, preventing costly refactoring down the line.",
    challenges: [
      "Limited development budgets requiring fast launch times.",
      "Inflexible technical setups slowing down feature changes.",
      "Unoptimized cloud architectures leading to high early hosting costs."
    ],
    solutions: [
      "Focusing on core user features for a clean, rapid MVP launch.",
      "Using modular frameworks that allow easy product changes.",
      "Configuring cost-efficient, auto-scaling cloud environments."
    ],
    technologies: ["Flutter", "Next.js", "Node.js", "PostgreSQL", "GitHub Actions"],
    securityConsiderations: [
      "Securing customer data with strong password encryption.",
      "Setting up basic firewalls and access controls on early servers.",
      "Preventing API key exposure in public client applications."
    ],
    testingRequirements: [
      "Verifying core user registration and payment flows.",
      "Automating critical build validation checks to support fast updates.",
      "Manual usability testing to ensure a smooth user interface."
    ],
    opportunities: [
      "Automating customer support workflows using AI chatbots.",
      "Setting up product analytics dashboards to track user engagement."
    ]
  },
  enterprises: {
    title: "Enterprise Solutions",
    metaTitle: "Enterprise Software Modernization & Integrations | Lucid8",
    metaDesc: "Modernize legacy systems, migrate workflows to the cloud, and connect administrative platforms with Lucid8's enterprise software consulting.",
    tagline: "Legacy modernization, secure microservices, and internal workflows.",
    intro: "We help enterprises modernize legacy systems, transition to secure cloud environments, and integrate administrative tools. Lucid8 focuses on modular design to improve system flexibility and maintain business continuity during technical updates.",
    challenges: [
      "Outdated legacy codebases blocking modern integrations.",
      "High server maintenance costs for local hosting setups.",
      "Fragmented database systems preventing real-time reporting."
    ],
    solutions: [
      "Refactoring monolith architectures into modular APIs.",
      "Migrating local server configurations to scalable cloud setups.",
      "Building unified databases for real-time analysis."
    ],
    technologies: ["Next.js", "Spring Boot", "AWS Services", "Docker", "PostgreSQL"],
    securityConsiderations: [
      "Restricting database access using role-based permissions.",
      "Setting up secure system logs to track database modifications.",
      "Encrypting database backups and server communications."
    ],
    testingRequirements: [
      "Running data validation checks during database migrations.",
      "Testing system rollbacks to handle unexpected cutover issues.",
      "Evaluating cloud configurations for performance bottlenecks."
    ],
    opportunities: [
      "Automating document management and administrative tasks.",
      "Leveraging AI to identify operational bottlenecks."
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(industriesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesMap[slug];

  if (!industry) {
    return { title: "Sector Not Found" };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDesc,
    alternates: {
      canonical: `/industries/${slug}`
    }
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesMap[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Background Dots Accent */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Target Sector Solutions</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {industry.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-350 font-medium leading-relaxed max-w-3xl border-l-2 border-brand-purple pl-4">
            {industry.tagline}
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl pt-2">
            {industry.intro}
          </p>
        </div>

        {/* Industry Challenges & Lucid8 Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-t border-slate-800/60">
          {/* Sector Challenges */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
              <ShieldAlert className="w-5 h-5 text-brand-purple mr-2" />
              <span>Sector Challenges</span>
            </h2>
            <ul className="space-y-4">
              {industry.challenges.map((chal, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-400 bg-[#0a0a0a]/20 border border-slate-850 p-4 rounded-xl">
                  <span className="text-brand-purple font-bold mr-3 mt-0.5">0{idx + 1}</span>
                  <span className="leading-relaxed">{chal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lucid8 Technical Solutions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-jakarta flex items-center">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2" />
              <span>Lucid8 Technical Solutions</span>
            </h2>
            <ul className="space-y-4">
              {industry.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-300 bg-brand-purple/5 border border-brand-purple/15 p-4 rounded-xl">
                  <span className="text-brand-cyan font-bold mr-3 mt-0.5">✓</span>
                  <span className="leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Requirements and Considerations (Security / Testing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-slate-800/60">
          {/* Security Considerations */}
          <div className="bg-slate-950/40 border border-slate-850 p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-white font-jakarta flex items-center">
              <Shield className="w-5 h-5 text-brand-cyan mr-2" />
              <span>Security Considerations</span>
            </h3>
            <ul className="space-y-2.5">
              {industry.securityConsiderations.map((sec, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-2.5 mt-2 flex-shrink-0" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing Requirements */}
          <div className="bg-slate-950/40 border border-slate-850 p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-white font-jakarta flex items-center">
              <Activity className="w-5 h-5 text-brand-purple mr-2" />
              <span>Testing & Quality Requirements</span>
            </h3>
            <ul className="space-y-2.5">
              {industry.testingRequirements.map((tst, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-2.5 mt-2 flex-shrink-0" />
                  <span>{tst}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech matrix and digital opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-slate-800/60">
          {/* Tech stack */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-jakarta">Target Technology Matrix</h3>
            <p className="text-xs text-slate-450">
              We apply validated tools to deploy solutions for this sector:
            </p>
            <div className="flex flex-wrap gap-2">
              {industry.technologies.map((tech, idx) => (
                <span key={idx} className="bg-[#0a0a0a] border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Digital opportunities */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-jakarta">Digital Opportunities</h3>
            <ul className="space-y-4">
              {industry.opportunities.map((opp, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-400">
                  <span className="text-brand-cyan font-bold mr-3">0{idx + 1}</span>
                  <span className="leading-relaxed">{opp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="mt-16 p-8 bg-[#0a0a0a]/20 border border-slate-800 rounded-2xl text-center space-y-6">
          <h3 className="text-xl font-bold text-white font-jakarta">Ready to optimize technology for your industry?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Partner with our consulting engineers to discuss customized project roadmaps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all"
            >
              Consult with an Expert
            </Link>
            <a
              href={`https://wa.me/918281184608?text=Hello%20Lucid8%2C%20I%20would%20like%20to%20discuss%2520technical%20solutions%20for%2520the%2520${slug}%2520industry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-200 border border-slate-800 hover:bg-slate-800/30"
            >
              Inquire via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
