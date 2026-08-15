import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Users, ArrowRight } from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";

interface ArticleData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  summary: string;
  content: {
    sectionTitle?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

const articlesMap: Record<string, ArticleData> = {
  "secure-software-development": {
    title: "Why Secure Software Development Matters for Modern Businesses",
    metaTitle: "Why Secure Software Development Matters | Lucid8 Insights",
    metaDesc: "Discover the financial and operational benefits of embedding security validations early in the software development lifecycle (SDLC).",
    category: "Cybersecurity",
    author: "Lucid8 Engineering Group",
    date: "Aug 12, 2026",
    readingTime: "5 min read",
    summary: "Integrating security checks early in the software lifecycle prevents data leaks and reduces long-term maintenance costs.",
    content: [
      {
        sectionTitle: "The High Cost of Post-Release Security Patches",
        paragraphs: [
          "Many organizations treat cybersecurity as a final step, executing security reviews only when software is ready for deployment. This approach introduces significant risks and delays, as patching security vulnerabilities in a completed codebase often requires extensive refactoring.",
          "Fixing security issues during the design or early coding phases is significantly more cost-effective than patching vulnerabilities in a live, production system. Shifting security left protects companies from data leaks and reduces development overhead."
        ]
      },
      {
        sectionTitle: "Core Steps for a Secure SDLC",
        paragraphs: [
          "Building secure software requires integrating automated security checks and validation tools directly into daily developer workflows.",
          "To establish a secure development lifecycle, we recommend focusing on three key areas:"
        ],
        bullets: [
          "Run automated dependency scans with every code commit to flag unpatched libraries.",
          "Perform static and dynamic security testing to identify code vulnerabilities before deployment.",
          "Require secure token validations (e.g., OAuth2, JWT) across all public API endpoints."
        ]
      },
      {
        sectionTitle: "Building a Defensive Coding Culture",
        paragraphs: [
          "Ultimately, secure software development depends on developer awareness. Teams should participate in security reviews and design codebases to follow least-privilege access rules by default.",
          "Integrating security validations into daily coding workflows allows companies to build resilient systems that protect client data and support long-term business goals."
        ]
      }
    ]
  },
  "ai-business-automation": {
    title: "How AI Is Transforming Business Automation",
    metaTitle: "How AI Is Transforming Business Automation | Lucid8 Insights",
    metaDesc: "Learn how businesses integrate machine learning and computer vision to automate workflows and improve operational efficiency.",
    category: "AI & Innovation",
    author: "Lucid8 AI Specialists",
    date: "Aug 08, 2026",
    readingTime: "6 min read",
    summary: "Move beyond simple chatbots: integrate predictive models and data pipelines to streamline daily business processes.",
    content: [
      {
        sectionTitle: "Moving Beyond Simple AI Chatbots",
        paragraphs: [
          "While public interest has focused on generative AI assistants, the real value of artificial intelligence for enterprises lies in custom workflow automation. By training classifiers and predictive models on business-specific datasets, companies can automate complex data analysis tasks.",
          "Lucid8 builds custom AI systems designed to extract information from documents, categorize support tickets, and predict equipment maintenance needs, reducing operational errors."
        ]
      },
      {
        sectionTitle: "Key Use Cases for Enterprise AI",
        paragraphs: [
          "Enterprise artificial intelligence applications are highly effective in three primary operational areas:"
        ],
        bullets: [
          "Computer Vision: Automating image checks, inventory counting, and quality control on assembly lines.",
          "Predictive Analytics: Analyzing past database trends to forecast supply requirements and customer demand.",
          "Data Extraction: Parsing incoming documents, invoices, and contracts to update record databases automatically."
        ]
      },
      {
        sectionTitle: "Data Safety and Privacy Standards",
        paragraphs: [
          "Implementing enterprise AI requires strict attention to data privacy. Businesses must ensure customer data is not used to train public models.",
          "Deploying isolated, containerized machine learning models in secure cloud environments allows companies to automate tasks while maintaining full control over sensitive data."
        ]
      }
    ]
  },
  "web-app-security-best-practices": {
    title: "Web Application Security Best Practices",
    metaTitle: "Web Application Security Best Practices | Lucid8 Insights",
    metaDesc: "Read our technical guide on protecting web applications from common threats: input sanitization, token management, and secure headers.",
    category: "Security Testing",
    author: "Lucid8 Auditing Unit",
    date: "Jul 29, 2026",
    readingTime: "8 min read",
    summary: "A practical guide to securing user inputs, managing credentials, and auditing web application setups.",
    content: [
      {
        sectionTitle: "Securing Public Input Fields",
        paragraphs: [
          "User-facing forms and API endpoints are common targets for web application attacks. Without validation, inputs can be exploited to run SQL injection or Cross-Site Scripting (XSS) scripts.",
          "All application inputs must be validated and sanitized on the server. Developers should use parameterized queries and secure ORM systems to prevent database exploits."
        ]
      },
      {
        sectionTitle: "Best Practices for Token and Session Security",
        paragraphs: [
          "Weak session management can allow attackers to hijack accounts. We recommend implementing three key measures to secure session tokens:"
        ],
        bullets: [
          "Configure cookies with Secure, HttpOnly, and SameSite attributes to block access from script tools.",
          "Set short expiration times on authentication tokens and use secure refresh tokens to renew access.",
          "Store session keys using platform-native secure storage or encrypted database systems."
        ]
      },
      {
        sectionTitle: "Implementing Security Headers",
        paragraphs: [
          "Configuring HTTP security headers (such as Content Security Policy) restricts the sources from which a browser can load scripts, protecting users from unauthorized script injection.",
          "Regular vulnerability scans and API reviews help teams identify and patch security risks before they can be exploited."
        ]
      }
    ]
  },
  "software-testing-early-start": {
    title: "Why Software Testing Should Start Early",
    metaTitle: "Why Software Testing Should Start Early | Lucid8 Insights",
    metaDesc: "Explore the benefits of shifting testing left to catch bugs early, reduce development overhead, and speed up releases.",
    category: "Software Testing",
    author: "Lucid8 Quality Engineers",
    date: "Jul 15, 2026",
    readingTime: "5 min read",
    summary: "Shifting testing left helps development teams identify bugs early, reducing refactoring costs and speeding up release schedules.",
    content: [
      {
        sectionTitle: "The Value of Shifting Testing Left",
        paragraphs: [
          "Shifting testing left means integrating quality assurance checks early in the software development lifecycle, rather than waiting for a completed codebase.",
          "Identifying software defects during early coding stages prevents bugs from propagating, reducing the time and cost required to deploy updates."
        ]
      },
      {
        sectionTitle: "Key Testing Layers",
        paragraphs: [
          "A reliable software testing strategy should span three core validation levels:"
        ],
        bullets: [
          "Unit Testing: Validating individual code functions and operations in isolation.",
          "API Integration Testing: Verifying correct data flows and error codes between systems.",
          "Automated Regression Testing: Running Playwright or Selenium scripts to check user workflows before release."
        ]
      },
      {
        sectionTitle: "Improving Release Quality",
        paragraphs: [
          "Integrating automated test runs into daily build pipelines ensures developers receive fast feedback on code changes.",
          "A structured quality engineering approach minimizes system regressions, improves reliability, and helps teams deliver better software."
        ]
      }
    ]
  },
  "building-scalable-web-applications": {
    title: "Building Scalable Web Applications with Modern Architecture",
    metaTitle: "Building Scalable Web Applications | Lucid8 Insights",
    metaDesc: "Learn how to build scalable web applications using server-side rendering, caching layers, and microservices.",
    category: "Software Engineering",
    author: "Lucid8 Core Architects",
    date: "Jul 02, 2026",
    readingTime: "7 min read",
    summary: "Key architectural decisions for modern web applications: server-side rendering, caching layers, and decoupled API microservices.",
    content: [
      {
        sectionTitle: "Designing for High Traffic",
        paragraphs: [
          "Scalability is a critical requirement for modern web applications. Systems must handle growing user bases and transaction volumes without performance degradation.",
          "Building scalable applications requires decoupling frontend interfaces from database and backend layers, using APIs to coordinate data flows."
        ]
      },
      {
        sectionTitle: "Core Scaling Strategies",
        paragraphs: [
          "We recommend focusing on three core areas to ensure web application scalability:"
        ],
        bullets: [
          "Server-Side Rendering (SSR): Utilizing SSR to pre-render page content, reducing client-side processing load.",
          "Distributed Caching: Using Redis to cache database queries and reduce server load.",
          "Microservices: Decoupling application features into containerized services that scale independently."
        ]
      },
      {
        sectionTitle: "Database Performance Tuning",
        paragraphs: [
          "Slow database queries are a common bottleneck in high-traffic applications. Optimizing index layouts, setting up read replicas, and caching data help ensure quick response times.",
          "Applying structured scaling patterns allows companies to build resilient systems that support business growth."
        ]
      }
    ]
  },
  "api-security-fundamentals": {
    title: "API Security Fundamentals",
    metaTitle: "API Security Fundamentals | Lucid8 Insights",
    metaDesc: "Read our technical guide on protecting API endpoints from data scraping, parameter manipulation, and rate breaches.",
    category: "API & Backend",
    author: "Lucid8 Backend Engineers",
    date: "Jun 18, 2026",
    readingTime: "6 min read",
    summary: "How to protect public-facing APIs from data scraping, parameter manipulation, rate breaches, and unauthorized access.",
    content: [
      {
        sectionTitle: "Securing Endpoint Gateways",
        paragraphs: [
          "APIs are the primary entryways to application databases, making them key targets for attackers. Unsecured endpoints can allow unauthorized access to sensitive company data.",
          "Securing APIs requires enforcing token-based authorization (such as OAuth2 or JWT) across all protected routes, validating user permissions with every request."
        ]
      },
      {
        sectionTitle: "Preventing Rate Breaches and Scraping",
        paragraphs: [
          "To protect API systems from abuse, we recommend implementing three key measures:"
        ],
        bullets: [
          "Rate Limiting: Setting request limits per IP address to block automated scraping tools.",
          "Input Validation: Sanitizing all request payloads to prevent SQL injection and buffer exploits.",
          "Logging & Monitoring: Setting up secure log tracking to identify and block suspicious request patterns."
        ]
      },
      {
        sectionTitle: "Data Encryption Standards",
        paragraphs: [
          "All API communications must be encrypted using TLS/HTTPS to protect data during transfer.",
          "Applying standard security controls helps organizations protect their API backends and secure client transactions."
        ]
      }
    ]
  },
  "cloud-security-best-practices": {
    title: "Cloud Security Best Practices",
    metaTitle: "Cloud Security Best Practices | Lucid8 Insights",
    metaDesc: "Learn how to secure your cloud environment: network isolation, access controls, and database configuration audits.",
    category: "Cloud & DevOps",
    author: "Lucid8 DevOps Unit",
    date: "Jun 04, 2026",
    readingTime: "7 min read",
    summary: "Setting up secure cloud environments: isolating networks, managing access controls, and auditing database ports on AWS.",
    content: [
      {
        sectionTitle: "Securing Cloud Infrastructure",
        paragraphs: [
          "As organizations transition to cloud platforms, securing cloud setups becomes a critical task. Misconfigured security rules and open database ports are common causes of data leaks.",
          "Securing cloud systems requires implementing a zero-trust model, restricting resource access permissions by default."
        ]
      },
      {
        sectionTitle: "Core Cloud Hardening Steps",
        paragraphs: [
          "We recommend focusing on three key areas to secure cloud setups:"
        ],
        bullets: [
          "Network Isolation: Setting up private Virtual Private Cloud (VPC) subnets for databases and internal applications.",
          "Identity & Access Management (IAM): Assigning database and server access permissions based on role requirements.",
          "Configuration Auditing: Setting up automated alerts to track and flag configuration changes."
        ]
      },
      {
        sectionTitle: "Encrypting Data at Rest",
        paragraphs: [
          "All cloud databases and storage buckets should be configured to encrypt data at rest, protecting sensitive information from physical storage access.",
          "Regular security audits help DevOps teams locate and resolve infrastructure vulnerabilities before they can be exploited."
        ]
      }
    ]
  },
  "ai-role-software-testing": {
    title: "The Role of AI in Software Testing",
    metaTitle: "The Role of AI in Software Testing | Lucid8 Insights",
    metaDesc: "Explore how machine learning algorithms automate test generation, log audits, and regression testing.",
    category: "AI & Software Testing",
    author: "Lucid8 Innovation Team",
    date: "May 20, 2026",
    readingTime: "6 min read",
    summary: "Leveraging machine learning algorithms to automate test path generation, analyze logs, and identify potential bugs during code changes.",
    content: [
      {
        sectionTitle: "Automating Quality Engineering",
        paragraphs: [
          "Traditional software testing relies on manually written test cases to validate application features. While effective, writing and updating tests for complex systems is a slow process.",
          "Integrating machine learning into testing workflows helps teams analyze code patterns and generate test scripts automatically, reducing manual QA workloads."
        ]
      },
      {
        sectionTitle: "Key AI Testing Applications",
        paragraphs: [
          "AI applications can improve software quality across three main testing areas:"
        ],
        bullets: [
          "Automated Test Path Generation: Analyzing application interfaces to write test scenarios automatically.",
          "Log Auditing: Analyzing system error logs to pinpoint the code changes that caused regressions.",
          "Visual Regression Testing: Using image recognition to flag unintended layout changes across screen sizes."
        ]
      },
      {
        sectionTitle: "Improving Test Reliability",
        paragraphs: [
          "Machine learning models can also analyze test runs to identify and update flaky tests, improving test suite reliability.",
          "Leveraging AI in QA workflows helps development teams maintain high software quality while accelerating release timelines."
        ]
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(articlesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesMap[slug];

  if (!article) {
    return { title: "Insight Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: {
      canonical: `/insights/${slug}`
    }
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMap[slug];

  if (!article) {
    notFound();
  }

  // Schema.org Article Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.metaDesc,
    "datePublished": "2026-08-15", // Default corporate release date
    "author": {
      "@type": "Organization",
      "name": "Lucid8 Technologies",
      "url": "https://lucid8.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lucid8 Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lucid8.in/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lucid8.in/insights/${slug}`
    }
  };

  return (
    <div className="relative">
      
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Grid Pattern Background */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Back Link */}
        <div className="pt-8">
          <Link
            href="/insights"
            className="inline-flex items-center text-xs font-semibold text-slate-450 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="py-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-y border-slate-800/60 py-4">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1.5" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              {article.readingTime}
            </span>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="space-y-12 text-slate-350 leading-relaxed text-sm sm:text-base">
          
          {/* Summary Quote */}
          <div className="border-l-2 border-brand-purple bg-[#0a0a0a]/25 p-5 rounded-r-xl">
            <p className="font-medium text-white italic">
              {article.summary}
            </p>
          </div>

          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              {sec.sectionTitle && (
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-jakarta pt-4">
                  {sec.sectionTitle}
                </h2>
              )}
              {sec.paragraphs.map((para, paraIdx) => (
                <p key={paraIdx}>{para}</p>
              ))}
              {sec.bullets && (
                <ul className="space-y-3 pl-6 list-disc pt-2">
                  {sec.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="text-slate-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>

        {/* Related Box / CTA */}
        <div className="mt-20 p-8 bg-[#0a0a0a]/20 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-md">
            <h4 className="text-base font-bold text-white font-jakarta">Have questions about this article?</h4>
            <p className="text-xs sm:text-sm text-slate-450 leading-relaxed">
              Connect with our technology consulting team to discuss your project requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-white to-brand-white hover:opacity-95 transition-all flex-shrink-0"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </div>
  );
}
