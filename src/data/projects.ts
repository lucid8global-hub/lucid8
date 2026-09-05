// export interface ProjectMetric {
//   label: string;
//   value: string;
// }

// export interface Project {
//   id: string;
//   slug: string;
//   title: string;
//   tagline: string;
//   category: "Web Apps" | "AI & ML" | "Fintech" | "Healthcare" | "Cloud & DevOps" | "Cybersecurity";
//   sector: string;
//   description: string;
//   fullDescription: string;
//   featured: boolean;
//   status: "Live" | "In Development" | "Beta" | "Case Study" | "Completed";
//   year: string;
//   client?: string;
//   liveUrl?: string;
//   demoUrl?: string;
//   githubUrl?: string;
//   caseStudySlug?: string;
//   technologies: string[];
//   metrics: ProjectMetric[];
//   highlights: string[];
//   challenges?: string[];
//   solutions?: string[];
//   accentColor?: string;
// }


// export const projectsData: Project[] = [
//   {
//     id: "proj-1",
//     slug: "secure-fintech-ledger-middleware",
//     title: "Secure Distributed Fintech Ledger Middleware",
//     tagline: "High-concurrency ledger database and real-time transaction reconciliation platform",
//     category: "Fintech",
//     sector: "Financial Services",
//     description: "A high-throughput ledger database and middleware engine designed for instant payment reconciliation, ACID-compliant ledger recording, and multi-tenant isolation.",
//     fullDescription: "Built for enterprise financial operations, this distributed transaction middleware processes simultaneous multi-party payment settlement flows with zero ledger parity mismatches. It features distributed locking using Redis, automatic tokenized security audits, and optimized sub-100ms database response times under high concurrency loads.",
//     featured: true,
//     status: "Live",
//     year: "2025",
//     client: "Global FinTech Operations",
//     liveUrl: "https://demo.lucid8.in/fintech-ledger",
//     demoUrl: "https://demo.lucid8.in/fintech-ledger",
//     githubUrl: "https://github.com/lucid8-technologies/fintech-ledger-middleware",
//     caseStudySlug: "distributed-transaction-middleware",
//     technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS Aurora", "OWASP Security"],
//     metrics: [
//       { label: "Query Latency", value: "<85ms" },
//       { label: "Stress Test Accuracy", value: "100% ACID" },
//       { label: "Throughput", value: "15k req/sec" }
//     ],
//     highlights: [
//       "Zero-downtime distributed locking mechanism for concurrent balances",
//       "Parameterized database operations immune to SQL injection vectors",
//       "Automated balance reconciliation with audit trails",
//       "Containerized microservice architecture with auto-scaling"
//     ],
//     challenges: [
//       "Simultaneous API transfer calls causing balance synchronization errors during peak traffic.",
//       "Database locks blocking standard queries, leading to unacceptable request latency.",
//       "Regulatory compliance requiring immutable ledger audit logging."
//     ],
//     solutions: [
//       "Implemented distributed Redis locking with non-blocking failovers.",
//       "Optimized connection pool topologies and partition indexes on AWS Aurora.",
//       "Built an automated tamper-evident transaction journal with cryptography checks."
//     ],
//     accentColor: "from-amber-500/20 to-amber-700/10"
//   },
//   {
//     id: "proj-2",
//     slug: "hipaa-telehealth-scheduling-core",
//     title: "HIPAA Telehealth Booking & Live Messaging Engine",
//     tagline: "End-to-end encrypted medical scheduling, consultation engine, and WebRTC streaming",
//     category: "Healthcare",
//     sector: "Digital Health",
//     description: "A HIPAA-aligned telehealth booking, patient consultation management, and real-time WebRTC audio/video communication platform.",
//     fullDescription: "Engineered to eliminate double-booking and secure sensitive patient data (PHI), this telehealth scheduling platform delivers sub-second calendar synchronization across clinics, role-based practitioner portals, and peer-to-peer encrypted consultation streams.",
//     featured: true,
//     status: "Live",
//     year: "2025",
//     client: "HealthSync Networks",
//     liveUrl: "https://demo.lucid8.in/telehealth-core",
//     demoUrl: "https://demo.lucid8.in/telehealth-core",
//     caseStudySlug: "telehealth-scheduling-core",
//     technologies: ["Next.js", "TypeScript", "Node.js", "WebSockets", "MongoDB", "WebRTC", "Playwright"],
//     metrics: [
//       { label: "HIPAA Audit", value: "Compliant" },
//       { label: "Scheduling Sync", value: "Real-time" },
//       { label: "Stream Latency", value: "<150ms" }
//     ],
//     highlights: [
//       "End-to-end data encryption for all patient consultation notes and records",
//       "Real-time WebSocket calendar sync preventing double-booking across time zones",
//       "Adaptive bitrate video streaming optimized for lower bandwidth mobile connections",
//       "Automated CI/CD security and accessibility test coverage"
//     ],
//     challenges: [
//       "Accidental leakage of protected health information (PHI) in log aggregations.",
//       "High appointment drop-off caused by latency in cross-device calendar updates.",
//       "Variable mobile network quality during live patient-doctor video sessions."
//     ],
//     solutions: [
//       "Implemented column-level database encryption and sanitized audit logging pipelines.",
//       "Engineered bidirectional WebSocket state management for calendar updates.",
//       "Configured adaptive WebRTC simulcast with automatic network degradation fallback."
//     ],
//     accentColor: "from-emerald-500/20 to-teal-700/10"
//   },
//   {
//     id: "proj-3",
//     slug: "ai-predictive-analytics-copilot",
//     title: "Enterprise AI Predictive Intelligence & Copilot",
//     tagline: "Natural language business intelligence dashboard and real-time revenue forecast models",
//     category: "AI & ML",
//     sector: "Enterprise Software",
//     description: "An AI-powered decision support platform transforming complex enterprise databases into predictive revenue forecasts and automated data queries via natural language.",
//     fullDescription: "This platform empowers executive teams to query vast transactional databases using conversational AI. It combines custom fine-tuned LLM agents with vector embeddings and predictive time-series models to output accurate financial projections, inventory recommendations, and anomaly detection.",
//     featured: true,
//     status: "Live",
//     year: "2026",
//     client: "Nexus Enterprise Systems",
//     liveUrl: "https://demo.lucid8.in/ai-copilot",
//     demoUrl: "https://demo.lucid8.in/ai-copilot",
//     technologies: ["Python", "FastAPI", "React", "Next.js", "PyTorch", "Pinecone", "TailwindCSS"],
//     metrics: [
//       { label: "Query Accuracy", value: "98.4%" },
//       { label: "Analysis Speed", value: "3.2x faster" },
//       { label: "Data Volume", value: "10M+ rows" }
//     ],
//     highlights: [
//       "Natural language to SQL conversion with security sandboxing",
//       "Predictive demand and revenue forecasting with confidence scoring",
//       "Role-based access control safeguarding executive financial reports",
//       "Interactive data visualizations and one-click PDF export reports"
//     ],
//     challenges: [
//       "LLM hallucinations when interpreting complex nested SQL schemas.",
//       "High latency when querying multi-million row datasets for real-time visualization."
//     ],
//     solutions: [
//       "Created a schema verification sandbox that validates SQL queries against a strict AST parser.",
//       "Integrated Redis caching and pre-computed analytical views for rapid aggregations."
//     ],
//     accentColor: "from-purple-500/20 to-indigo-700/10"
//   },
//   {
//     id: "proj-4",
//     slug: "nextjs-high-concurrency-ecommerce-engine",
//     title: "High-Performance Modern E-Commerce Platform",
//     tagline: "Ultra-fast headless commerce platform with sub-second page loads and dynamic inventory",
//     category: "Web Apps",
//     sector: "Retail & E-Commerce",
//     description: "A headless e-commerce store architecture built with Next.js App Router, edge computing, dynamic cart state management, and multi-currency payment checkout.",
//     fullDescription: "Designed for high conversion and flash-sale resilience, this platform handles high simultaneous checkout spikes while delivering sub-second Largest Contentful Paint (LCP) times worldwide through global edge caching and optimized image pipelines.",
//     featured: false,
//     status: "Live",
//     year: "2025",
//     client: "Apex Lifestyle Brands",
//     liveUrl: "https://demo.lucid8.in/ecommerce-engine",
//     demoUrl: "https://demo.lucid8.in/ecommerce-engine",
//     technologies: ["Next.js", "React", "TypeScript", "Stripe API", "TailwindCSS", "Edge Functions", "Redis"],
//     metrics: [
//       { label: "Lighthouse Score", value: "99/100" },
//       { label: "Cart Conversion", value: "+28%" },
//       { label: "Page Load Time", value: "0.4s" }
//     ],
//     highlights: [
//       "Edge-rendered dynamic product listing pages with instant filtering",
//       "Stripe Elements checkout with frictionless Apple Pay & Google Pay integration",
//       "Optimized responsive image assets with automatic WebP/AVIF compression",
//       "Real-time inventory decrementing to prevent overselling during flash events"
//     ],
//     challenges: [
//       "Slow initial load times on traditional monolithic platforms hurting checkout conversion.",
//       "Race conditions leading to stock overselling during flash promotions."
//     ],
//     solutions: [
//       "Migrated to Next.js Incremental Static Regeneration (ISR) and Edge Middleware.",
//       "Built an atomic inventory decrement service backed by Redis in-memory locks."
//     ],
//     accentColor: "from-blue-500/20 to-cyan-700/10"
//   },
//   {
//     id: "proj-5",
//     slug: "zero-trust-cloud-gateway",
//     title: "Zero-Trust Cloud Access & Security Gateway",
//     tagline: "Identity-aware access proxy with automated vulnerability scanning and threat defense",
//     category: "Cybersecurity",
//     sector: "Cloud Security",
//     description: "A zero-trust identity verification gateway that protects distributed microservices with continuous authorization, mutual TLS (mTLS), and live intrusion prevention.",
//     fullDescription: "Built for organizations modernizing their perimeter security, this gateway inspects all ingress traffic, enforces hardware-backed multi-factor authentication, and blocks suspicious API payloads before they reach internal microservice clusters.",
//     featured: false,
//     status: "Completed",
//     year: "2025",
//     client: "CyberShield Systems",
//     liveUrl: "https://demo.lucid8.in/security-gateway",
//     githubUrl: "https://github.com/lucid8-technologies/zero-trust-gateway",
//     technologies: ["Go", "Kubernetes", "Envoy Proxy", "mTLS", "OAuth2/OIDC", "Prometheus", "Grafana"],
//     metrics: [
//       { label: "Threat Mitigation", value: "99.9%" },
//       { label: "Inspection Overhead", value: "<5ms" },
//       { label: "Cert Compliance", value: "SOC 2" }
//     ],
//     highlights: [
//       "Identity-aware proxy routing with context-driven access policies",
//       "Automated mutual TLS certificate rotation for internal communications",
//       "Live telemetry dashboards tracking unauthorized attempt patterns",
//       "Granular rate limiting and bot mitigation rules"
//     ],
//     challenges: [
//       "High CPU overhead when performing deep payload inspection at scale.",
//       "Complex certificate renewal processes causing unexpected service disconnects."
//     ],
//     solutions: [
//       "Optimized Envoy WebAssembly filters in Go for lightweight inline inspection.",
//       "Built automated Cert-Manager workflows in Kubernetes with pre-expiration alerts."
//     ],
//     accentColor: "from-red-500/20 to-amber-700/10"
//   },
//   {
//     id: "proj-6",
//     slug: "automated-devops-cloud-orchestrator",
//     title: "Automated Multi-Cloud CI/CD & DevOps Orchestrator",
//     tagline: "Infrastructure-as-Code pipeline with automated rollback and cost monitoring",
//     category: "Cloud & DevOps",
//     sector: "Infrastructure & DevOps",
//     description: "An automated multi-environment deployment platform utilizing Terraform and GitHub Actions to deploy immutable container clusters across AWS and GCP.",
//     fullDescription: "This infrastructure orchestration tool allows engineering teams to spin up isolated preview environments in under 3 minutes, automatically run penetration and load tests, and manage cloud expenditure through automated cluster scaling.",
//     featured: false,
//     status: "Completed",
//     year: "2025",
//     client: "InfraScale Global",
//     liveUrl: "https://demo.lucid8.in/devops-orchestrator",
//     githubUrl: "https://github.com/lucid8-technologies/cloud-orchestrator",
//     technologies: ["Terraform", "AWS ECS", "GCP Cloud Run", "GitHub Actions", "Docker", "Node.js"],
//     metrics: [
//       { label: "Deployment Time", value: "-75%" },
//       { label: "Cloud Spend Saved", value: "32%" },
//       { label: "Preview Spin-up", value: "<3 mins" }
//     ],
//     highlights: [
//       "Immutable infrastructure pipelines with automated canary releases",
//       "Automatic teardown of inactive staging environments to minimize cost",
//       "Integrated vulnerability checking during Docker build stages",
//       "Centralized log stream aggregator with alert webhooks"
//     ],
//     challenges: [
//       "Frequent deployment failures due to configuration drift between staging and production.",
//       "Rising unused cloud compute costs during non-business hours."
//     ],
//     solutions: [
//       "Enforced 100% Infrastructure-as-Code via Git-managed Terraform modules.",
//       "Deployed automated cron scaling policies shutting down idle dev clusters."
//     ],
//     accentColor: "from-cyan-500/20 to-blue-700/10"
//   }
// ];

// export const projectCategories = [
//   "All",
//   "Web Apps",
//   "AI & ML",
//   "Fintech",
//   "Healthcare",
//   "Cloud & DevOps",
//   "Cybersecurity"
// ] as const;

// export type ProjectCategory = typeof projectCategories[number];

// export function getAllProjects(): Project[] {
//   return projectsData;
// }

// export function getFeaturedProjects(): Project[] {
//   return projectsData.filter((project) => project.featured);
// }

// export function getProjectBySlug(slug: string): Project | undefined {
//   return projectsData.find((project) => project.slug === slug);
// }

// export function getProjectsByCategory(category: string): Project[] {
//   if (category === "All") return projectsData;
//   return projectsData.filter((project) => project.category === category);
// }











export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category:
    | "Web Apps"
    | "E-Commerce"
    | "E-Learning"
    | "Events & Ticketing"
    | "IT & Software";
  sector: string;
  description: string;
  fullDescription: string;
  featured: boolean;
  status: "Live" | "In Development" | "Beta" | "Case Study" | "Completed";
  year: string;
  client?: string;
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
  technologies: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  challenges?: string[];
  solutions?: string[];
  accentColor?: string;
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "reddx-thrifty",
    title: "ReddX Thrifty",
    tagline: "Multi-vendor e-commerce marketplace for online thrift shopping",
    category: "E-Commerce",
    sector: "Retail & E-Commerce",
    description:
      "A multi-vendor e-commerce marketplace developed with WordPress, bringing multiple sellers and products together in one online shopping platform.",
    fullDescription:
      "ReddX Thrifty is a multi-vendor e-commerce marketplace built with WordPress. The platform provides an online marketplace experience where multiple vendors can showcase and sell their products through a centralized shopping platform.",
    featured: true,
    status: "Live",
    year: "2026",
    liveUrl: "https://reddxthrifty.com/",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    metrics: [],
    highlights: [
      "Multi-vendor marketplace architecture",
      "Online product catalog and shopping experience",
      "Vendor-focused marketplace functionality",
      "Responsive e-commerce experience",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-rose-500/20 to-orange-700/10",
  },

  {
    id: "proj-2",
    slug: "oxyfied",
    title: "Oxyfied",
    tagline: "Modern e-learning platform for online education",
    category: "E-Learning",
    sector: "Education & E-Learning",
    description:
      "A modern e-learning platform developed with Next.js for delivering online courses and digital learning experiences.",
    fullDescription:
      "Oxyfied is an e-learning platform built with Next.js, designed to provide a modern digital learning experience. The platform provides an online environment for delivering courses and educational content to learners.",
    featured: true,
    status: "Live",
    year: "2026",
    liveUrl: "https://oxyfied.com/",
    technologies: ["Next.js", "React", "TypeScript"],
    metrics: [],
    highlights: [
      "Modern e-learning platform",
      "Online course delivery",
      "Responsive learner experience",
      "Built with Next.js and React",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-blue-500/20 to-cyan-700/10",
  },

  {
    id: "proj-3",
    slug: "moonglade-event-ticket-booking",
    title: "Moonglade Event Ticket Booking",
    tagline: "Event ticket booking and management platform",
    category: "Events & Ticketing",
    sector: "Events & Entertainment",
    description:
      "An event ticket booking system developed with React and Node.js for online event discovery and ticket bookings.",
    fullDescription:
      "Moonglade is an event ticket booking platform built with React and Node.js. The system provides an online experience for users to discover events and book tickets through a dedicated web-based ticketing platform.",
    featured: true,
    status: "Live",
    year: "2026",
    liveUrl: "https://ticket.moonglade.live/",
    technologies: ["React", "Node.js"],
    metrics: [],
    highlights: [
      "Online event ticket booking",
      "Event-focused web experience",
      "React-based frontend",
      "Node.js backend",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-purple-500/20 to-indigo-700/10",
  },

  {
    id: "proj-4",
    slug: "aivr4u-solutions",
    title: "AI-VR4U Solutions",
    tagline: "Professional IT software startup website",
    category: "IT & Software",
    sector: "IT & Software",
    description:
      "A professional corporate website developed with React.js for an IT software startup.",
    fullDescription:
      "AI-VR4U Solutions is a professional IT software startup website developed using React.js. The website provides the company with a modern digital presence for presenting its technology-focused services and solutions.",
    featured: false,
    status: "Live",
    year: "2026",
    liveUrl: "https://www.aivr4usolutions.com/",
    technologies: ["React.js"],
    metrics: [],
    highlights: [
      "Professional corporate website",
      "Modern React.js frontend",
      "Technology-focused digital presence",
      "Responsive web experience",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-emerald-500/20 to-teal-700/10",
  },

  {
    id: "proj-5",
    slug: "visionx",
    title: "VisionX",
    tagline: "Modern IT software startup website",
    category: "IT & Software",
    sector: "IT & Software",
    description:
      "A modern corporate website developed with React.js for an IT software startup.",
    fullDescription:
      "VisionX is an IT software startup website developed using React.js. The website provides a professional digital presence for the company and presents its software and technology-focused offerings.",
    featured: false,
    status: "Live",
    year: "2026",
    liveUrl: "https://visionx.org.in/",
    technologies: ["React.js"],
    metrics: [],
    highlights: [
      "Professional IT startup website",
      "Modern React.js implementation",
      "Software and technology-focused presentation",
      "Responsive corporate web experience",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-cyan-500/20 to-blue-700/10",
  },
];

export const projectCategories = [
  "All",
  "Web Apps",
  "E-Commerce",
  "E-Learning",
  "Events & Ticketing",
  "IT & Software",
] as const;

export type ProjectCategory = typeof projectCategories[number];

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") {
    return projectsData;
  }

  return projectsData.filter((project) => project.category === category);
}