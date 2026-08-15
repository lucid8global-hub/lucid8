import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, Shield, CheckCircle2, AlertTriangle, 
  Cpu, Code, Settings, Database, Activity, HelpCircle 
} from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FAQ from "../../../components/FAQ";

// Define TypeScript structure for service data
interface ServiceData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  capabilities: { name: string; desc: string }[];
  technologies: string[];
  process: string[];
  benefits: string[];
  securityConsiderations?: string[];
  testingConsiderations: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; slug: string }[];
  ctaText: string;
}

// 11 Custom Service Datasets
const servicesMap: Record<string, ServiceData> = {
  "software-development": {
    title: "Custom Software Development",
    metaTitle: "Custom Software Development & Enterprise Solutions | Lucid8",
    metaDesc: "Get custom enterprise applications, SaaS platforms, and distributed software systems engineered by Lucid8. Built on scalable architectures and clean code patterns.",
    tagline: "Scalable backend code, SaaS structures, and robust custom applications.",
    intro: "Lucid8 designs bespoke software systems engineered for high concurrency, integration efficiency, and long-term modularity. We help businesses eliminate technical debt by mapping custom system specifications directly to modern software architectures.",
    challenges: [
      "Monolithic, legacy systems slowing down operational adjustments.",
      "High database CPU usage under peak concurrency limits.",
      "Inflexible codebases that resist third-party API integrations."
    ],
    solutions: [
      "Modular microservices decoupling functional layers.",
      "Optimized query plans, connection pooling, and multi-tier caching.",
      "Clean, documented API gateways designed for extensibility."
    ],
    capabilities: [
      { name: "Enterprise SaaS Platforms", desc: "Multi-tenant dashboards with robust authorization scopes." },
      { name: "SaaS & Core Architectures", desc: "Modular, cloud-ready configurations designed for horizontal scaling." },
      { name: "Internal Admin Middleware", desc: "Automating inventory, user roles, and ledger systems." },
      { name: "System Integration", desc: "Interfacing CRM, billing gateways, and ERP applications via clean endpoints." }
    ],
    technologies: ["Node.js", "Java", "Spring Boot", "TypeScript", "PostgreSQL", "Docker"],
    process: [
      "Establish functional requirements and concurrency metrics.",
      "Draft system layout schemas and database mappings.",
      "Continuous build validation under active test environments.",
      "CI/CD deployment to staging and production servers."
    ],
    benefits: [
      "Elimination of generic template restrictions.",
      "Reduced system latency and resource overhead.",
      "Highly maintainable codebase structure."
    ],
    securityConsiderations: [
      "Active dependency scanning during build steps.",
      "Strict parameter sanitization and token-based sessions.",
      "Role-Based Access Control (RBAC) enforced across all REST controllers."
    ],
    testingConsiderations: [
      "Continuous unit test runs.",
      "Automated integration checks mapping core user actions.",
      "Database load testing using synthetic traffic benchmarks."
    ],
    faqs: [
      { question: "How do you handle technical debt in custom software?", answer: "We enforce strict design reviews, code linting rules, and modular decoupling. This ensures developers can change subcomponents without breaking the broader system." },
      { question: "Can you modernize our existing database systems?", answer: "Yes. We design step-by-step schema migration strategies, verifying data parity using automated scripts to avoid downtime." }
    ],
    relatedServices: [
      { name: "API & Backend", slug: "api-backend-development" },
      { name: "Web Development", slug: "web-development" }
    ],
    ctaText: "Discuss Your Custom Software Project"
  },
  "web-development": {
    title: "Web Application Development",
    metaTitle: "Premium Web Application Development Services | Lucid8",
    metaDesc: "High-performance web applications built with Next.js, React, and TypeScript. Fully optimized for SEO, accessibility, and sub-second load times.",
    tagline: "High-performance client panels, e-commerce, and Next.js applications.",
    intro: "Lucid8 engineers premium web applications focused on performance, accessibility (WCAG compliance), and core SEO parameters. We avoid slow website builders, using fast component compilation and server-side rendering (SSR) setups to ensure swift customer journeys.",
    challenges: [
      "Slow initial load speeds resulting in dropped search rankings.",
      "Inaccessible UI elements blocking assistive screen readers.",
      "Poor mobile performance on slow network configurations."
    ],
    solutions: [
      "Server-side rendering and static page pre-generation via Next.js.",
      "Semantic HTML tags and comprehensive aria-label structures.",
      "Highly optimized asset bundles, image compression, and defer-scripts."
    ],
    capabilities: [
      { name: "Corporate Portals & Web Apps", desc: "Fast-loading, SEO-first layouts designed for global audiences." },
      { name: "Client Dashboards", desc: "Interactive data charts, CSV exports, and live reporting modules." },
      { name: "E-Commerce Core", desc: "Highly optimized checkout steps, secure billing inputs, and inventory synchronization." },
      { name: "Admin Panels", desc: "Bespoke content management consoles and database interfaces." }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Next.js Metadata", "PostCSS"],
    process: [
      "Design semantic UI/UX blueprints conforming to accessibility grids.",
      "Configure Next.js App Router folders and layout components.",
      "Integrate RESTful/GraphQL client fetch wrappers with error states.",
      "Publish pages optimizing Vercel edge configs and cache layers."
    ],
    benefits: [
      "Excellent core web vitals and speed indexes.",
      "Broader search engine crawl visibility.",
      "Optimized performance on mobile browsers."
    ],
    testingConsiderations: [
      "Automated Lighthouse compliance runs.",
      "Keyboard navigation checks and contrast ratio validation.",
      "Cross-browser render checks spanning Safari, Chrome, and Firefox."
    ],
    faqs: [
      { question: "Why do you use Next.js for web applications?", answer: "Next.js combines React developer ergonomics with server-side rendering, static export capabilities, and automatic asset optimizations, ensuring fast performance and excellent SEO." },
      { question: "Do you build custom administrative dashboards?", answer: "Yes, we construct secure dashboard platforms with detailed analytics, filterable data tables, and access controls." }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "API & Backend", slug: "api-backend-development" }
    ],
    ctaText: "Start Your Web App Project"
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    metaTitle: "Cross-Platform Mobile App Development (Flutter) | Lucid8",
    metaDesc: "Launch native iOS and Android applications utilizing Flutter. Lucid8 designs secure mobile platforms with offline capabilities, push notifications, and payment options.",
    tagline: "Native iOS and Android systems built with Flutter.",
    intro: "Lucid8 engineers robust mobile applications combining native performance with cross-platform efficiency. By building on Google's Flutter framework, we write single-codebase architectures that render smoothly on both iOS and Android, minimizing development budgets while keeping core features high.",
    challenges: [
      "High cost of maintaining separate iOS and Android native codebases.",
      "Slow, unresponsive screen transitions in web-view wrapper apps.",
      "Unsecured offline storage exposing user authorization keys."
    ],
    solutions: [
      "Flutter cross-platform rendering sharing up to 90% of business logic.",
      "Native compiled widget architectures rendering at 60-120 FPS.",
      "Secure key storage via platform-native keychain and keystore systems."
    ],
    capabilities: [
      { name: "Flutter Cross-Platform Apps", desc: "Universal binaries designed for simultaneous iOS/Android release." },
      { name: "Payment & API Interfacing", desc: "Integrating Stripe, Razorpay, and REST endpoints securely." },
      { name: "Local Database Operations", desc: "Offline data syncing with SQLite and Hive database layers." },
      { name: "Push Notification Pipelines", desc: "Contextual alerting setups using Firebase Cloud Messaging (FCM)." }
    ],
    technologies: ["Flutter", "Dart", "Firebase FCM", "SQLite", "iOS SDK", "Android SDK"],
    process: [
      "Mock user journeys and screen flows.",
      "Build Flutter widgets and setup state management patterns.",
      "Connect secure REST API endpoints with token handling.",
      "Test build binaries on physical phones prior to store deployment."
    ],
    benefits: [
      "Unified feature updates across iOS and Android.",
      "Fast UI load speeds and fluid scrolling animations.",
      "Robust security for local offline data files."
    ],
    testingConsiderations: [
      "Physical device compatibility checks.",
      "Memory leak profiling under continuous route transitions.",
      "Offline parity checks when client networks drop out."
    ],
    faqs: [
      { question: "Why do you use Flutter for mobile development?", answer: "Flutter compiles directly to native machine code, providing excellent performance while letting us maintain a single codebase for both platforms, lowering client costs." },
      { question: "How do you secure data on the user's phone?", answer: "We encrypt all local storage databases and save private keys within Apple Keychain or Android Keystore." }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "API & Backend", slug: "api-backend-development" }
    ],
    ctaText: "Discuss Your Mobile App Project"
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    metaTitle: "AI & Machine Learning Engineering Solutions | Lucid8",
    metaDesc: "Leverage artificial intelligence, computer vision models, and predictive analytics pipelines built by Lucid8's data engineers.",
    tagline: "Predictive analytics, computer vision, and data pipelines.",
    intro: "Lucid8 is an AI engineering provider. We build custom data processing models, predictive analytics structures, and computer vision pipelines. Rather than relying on generic AI wrappers, we train and fine-tune classifiers, integrate specialized model pipelines, and optimize systems for performance.",
    challenges: [
      "Massive databases of unorganized enterprise data generating zero value.",
      "High hosting costs for heavy, unoptimized deep learning frameworks.",
      "Poor model validation causing high rates of false-positive metrics."
    ],
    solutions: [
      "Targeted parsing, cleaning, and model preprocessing pipelines.",
      "Optimized execution containers, quantization, and specialized ONNX runtimes.",
      "Rigorous cross-validation datasets and strict parity tests."
    ],
    capabilities: [
      { name: "Computer Vision Systems", desc: "Image recognition, object counts, and video frame classifications." },
      { name: "Predictive Analytics", desc: "Regression pipelines forecasting customer choices or component failures." },
      { name: "Intelligent Classifiers", desc: "Categorizing incoming emails, reviews, and legal items automatically." },
      { name: "AI APIs Integrations", desc: "Constructing secure, high-speed API layers wrapping model inferences." }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-Learn", "FastAPI"],
    process: [
      "Audit raw client data files and evaluate model viability.",
      "Clean raw inputs and extract useful prediction features.",
      "Train model algorithms and execute validation trials.",
      "Deploy models within FastAPI microservices in cloud environments."
    ],
    benefits: [
      "High accuracy for business-specific prediction tasks.",
      "Automated analysis replacing slow, manual reviews.",
      "Modular, easily updatable model training cycles."
    ],
    testingConsiderations: [
      "Model inference latency checks under concurrency.",
      "Validation using test datasets to check precision and recall.",
      "Parity evaluations between CPU and GPU hosting environments."
    ],
    faqs: [
      { question: "What is your stance on custom AI model training?", answer: "We believe custom models trained on business-specific datasets outperform generic API wrappers in accuracy, cost efficiency, and data privacy." },
      { question: "How do you deploy heavy models efficiently?", answer: "We optimize models using quantization and host them in Docker containers using lightweight frameworks like FastAPI." }
    ],
    relatedServices: [
      { name: "Automation Solutions", slug: "automation-solutions" },
      { name: "Digital Transformation", slug: "digital-transformation" }
    ],
    ctaText: "Discuss Your AI Project"
  },
  "cybersecurity": {
    title: "Cybersecurity Strategy & Consulting",
    metaTitle: "Enterprise Cybersecurity Consulting Services | Lucid8",
    metaDesc: "Protect your corporate software architecture, configure cloud networks, and establish secure SDLC processes with Lucid8's security consultants.",
    tagline: "Defensive architecture planning, threat mitigation, and secure SDLC.",
    intro: "Lucid8 delivers professional, defensive cybersecurity consulting designed to shield enterprise systems from attack. We audit existing network configurations, restructure authentication systems, and help teams integrate security validations early in their software development lifecycle (SDLC).",
    challenges: [
      "Insecure developer configurations causing data leaks.",
      "Lack of centralized audit logs for tracking database changes.",
      "Legacy software libraries with active, unpatched CVE records."
    ],
    solutions: [
      "Enforcing strict Least-Privilege IAM rules across all components.",
      "Setting up secure audit trails using immutable log storage.",
      "Continuous software dependency scans and prompt version patching."
    ],
    capabilities: [
      { name: "Secure SDLC Consulting", desc: "Integrating automated vulnerability scanning into developer Git steps." },
      { name: "Cloud Infrastructure Hardening", desc: "Setting up private VPC boundaries and locking down SSH/API entryways." },
      { name: "Threat Vector Modeling", desc: "Analyzing application architectures to identify potential security holes." },
      { name: "Access Controls Restructuring", desc: "Implementing OAuth2 protocols and strong session management." }
    ],
    technologies: ["OWASP Frameworks", "VPC Security Groups", "IAM Roles", "Security Dependency Audits", "TLS Configurations"],
    process: [
      "Analyze current system architecture and identity assets.",
      "Audit cloud settings, source code libraries, and database privileges.",
      "Draft mitigation roadmaps highlighting critical structural risks.",
      "Support development teams as they patch identified vulnerabilities."
    ],
    benefits: [
      "Significantly reduced risk of system intrusion.",
      "Alignment with modern data privacy regulations.",
      "Fewer emergency security updates."
    ],
    testingConsiderations: [
      "Validating access limits across system resources.",
      "Simulating host network isolations.",
      "Checking configuration scripts for accidental credential exposures."
    ],
    faqs: [
      { question: "What is a Secure SDLC?", answer: "A Secure Software Development Lifecycle embeds security checks, dependency audits, and authorization testing directly into coding and deployment stages rather than treating security as a final step." },
      { question: "Do you handle security strategy for cloud setups?", answer: "Yes, we audit AWS IAM rules, private subnets, security groups, and database encryption settings to ensure infrastructure compliance." }
    ],
    relatedServices: [
      { name: "Security Testing", slug: "security-testing" },
      { name: "Software Testing", slug: "software-testing" }
    ],
    ctaText: "Discuss Security Consulting Options"
  },
  "security-testing": {
    title: "Vulnerability & Security Testing",
    metaTitle: "Web Application & API Security Testing | Lucid8",
    metaDesc: "Audit your web systems and API endpoints against OWASP threats. Lucid8 runs credential tests, validates inputs, and delivers detailed fix reports.",
    tagline: "Web application audits, API pen-testing, and OWASP review.",
    intro: "Lucid8 conducts focused web application and API security audits. We evaluate endpoints against the OWASP Top 10 vulnerabilities, review input sanitization behaviors, test authorization levels, and deliver detailed reports to help development teams fix issues quickly.",
    challenges: [
      "API endpoints vulnerable to parameter tampering and data leaks.",
      "SQL injection vectors in database input fields.",
      "Weak session handling allowing token reuse and session hijacking."
    ],
    solutions: [
      "Comprehensive verification of parameter controls and token validity.",
      "Enforcing parameterized queries and strict input filters.",
      "Using cryptographic tokens and enforcing session timeouts."
    ],
    capabilities: [
      { name: "OWASP Top 10 Auditing", desc: "Testing for SQL Injection, Cross-Site Scripting (XSS), and Broken Auth." },
      { name: "API Security Testing", desc: "Verifying authorization controls across endpoints." },
      { name: "Configuration Audits", desc: "Scanning server settings for open ports and default credentials." },
      { name: "Input Validation Tests", desc: "Testing how applications process unexpected payload patterns." }
    ],
    technologies: ["OWASP Testing Guide", "Burp Suite", "Postman Security", "Vulnerability Parsers", "Static Code Analyzers"],
    process: [
      "Define test boundaries and review application features.",
      "Map endpoints, user roles, and input structures.",
      "Execute targeted manual and automated security tests.",
      "Deliver detailed reports mapping vulnerability risks and fix instructions."
    ],
    benefits: [
      "Clear visibility into application vulnerability risks.",
      "Specific, actionable remediation instructions for developers.",
      "Improved data protection for customer accounts."
    ],
    testingConsiderations: [
      "Verifying input behaviors using unexpected data payloads.",
      "Testing token lifecycles and authorization checks.",
      "Evaluating parameter configurations on public forms."
    ],
    faqs: [
      { question: "How often should security testing be performed?", answer: "We recommend conducting comprehensive audits annually and running automated scans with every major code release." },
      { question: "Do you provide mitigation guidance?", answer: "Yes, our reports include clear, codebase-specific remediation instructions to help developers resolve issues." }
    ],
    relatedServices: [
      { name: "Cybersecurity", slug: "cybersecurity" },
      { name: "Software Testing", slug: "software-testing" }
    ],
    ctaText: "Request an API or App Audit"
  },
  "software-testing": {
    title: "Software Testing & Quality Engineering",
    metaTitle: "Software Testing & QA Automation Services | Lucid8",
    metaDesc: "Ensure zero-bug releases with Lucid8's Quality Engineering. We build automation test suites, API test scripts, and perform functional testing.",
    tagline: "Manual regressions, API validations, and QA automation.",
    intro: "Lucid8 delivers structured Quality Engineering to ensure application reliability. We construct automated test pipelines, validate API outputs under heavy loads, and run manual regressions to identify issues before they reach production.",
    challenges: [
      "System regressions introducing bugs with every code release.",
      "Slow, manual testing processes delaying deployment timelines.",
      "Performance bottlenecks causing app crashes under peak load."
    ],
    solutions: [
      "Automated test suites running on Playwright or Selenium.",
      "Integrating automated testing checks into CI/CD build steps.",
      "Load testing using simulated traffic runs to isolate bottlenecks."
    ],
    capabilities: [
      { name: "QA Automation Suites", desc: "Writing test scripts to validate core customer workflows." },
      { name: "API Output Validation", desc: "Verifying endpoint response times, headers, and status codes." },
      { name: "Manual Regressions", desc: "Testing edge cases and user flows manually." },
      { name: "Performance & Stress Testing", desc: "Evaluating application behavior under simulated high-user loads." }
    ],
    technologies: ["Playwright", "Selenium", "Postman", "JMeter", "GitHub Actions"],
    process: [
      "Review project requirements to define test coverage parameters.",
      "Design manual test cases and identify automation scenarios.",
      "Write automation test scripts and run validation checks.",
      "Provide detailed reports tracking test results and software metrics."
    ],
    benefits: [
      "Faster deployment cycles with automated build checks.",
      "Fewer bugs reaching end-users.",
      "Improved system stability under high traffic volumes."
    ],
    testingConsiderations: [
      "Running test suites across different browsers and viewport sizes.",
      "Verifying system error handling with invalid API payloads.",
      "Monitoring server CPU/memory usage during load tests."
    ],
    faqs: [
      { question: "Why should we automate our software testing?", answer: "Automating test runs provides rapid feedback on code changes, allowing teams to deploy updates quickly without manual testing bottlenecks." },
      { question: "Can you build test suites for existing web applications?", answer: "Yes, we construct custom test configurations for existing applications using modern frameworks like Playwright." }
    ],
    relatedServices: [
      { name: "Cybersecurity", slug: "cybersecurity" },
      { name: "Security Testing", slug: "security-testing" }
    ],
    ctaText: "Discuss QA Solutions"
  },
  "api-backend-development": {
    title: "API & Backend Systems",
    metaTitle: "Scalable API & Backend Development Services | Lucid8",
    metaDesc: "Get custom database architectures, fast API endpoints, and scalable microservices engineered by Lucid8. Secure and optimized backend code.",
    tagline: "Secure database design, microservices, and OAuth integrations.",
    intro: "Lucid8 designs high-performance backend systems and APIs. We build secure database architectures, implement microservices, and optimize query patterns to ensure rapid page loads and reliable application performance.",
    challenges: [
      "Slow database queries causing API timeout errors.",
      "Insecure API endpoints allowing unauthorized data access.",
      "Monolithic backends that are difficult to update and scale."
    ],
    solutions: [
      "Optimizing SQL queries, index layouts, and cache setups.",
      "Enforcing strict JWT verification and OAuth2 protocols.",
      "Refactoring monoliths into modular, containerized microservices."
    ],
    capabilities: [
      { name: "Custom API Design", desc: "Building fast, well-documented REST APIs." },
      { name: "Database Engineering", desc: "Designing schemas and optimizing performance in PostgreSQL and MySQL." },
      { name: "Secure Authentication Systems", desc: "Implementing JWT validation and multi-factor authorization systems." },
      { name: "Microservices Architectures", desc: "Decoupling systems into containerized service structures." }
    ],
    technologies: ["Node.js", "Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    process: [
      "Map data flows, endpoint paths, and database schemas.",
      "Build backend services and implement authentication checks.",
      "Optimize query performance and configure caching layers.",
      "Deploy backend containers to cloud hosting environments."
    ],
    benefits: [
      "Rapid API response times under high concurrency.",
      "Secure and reliable data storage operations.",
      "Scalable architecture that grows with user demand."
    ],
    testingConsiderations: [
      "Verifying API responses against target schemas.",
      "Testing JWT token validation and expiration behaviors.",
      "Running database query performance checks under load."
    ],
    faqs: [
      { question: "Which databases do you recommend for enterprise apps?", answer: "We favor PostgreSQL for complex relational databases and Redis for high-speed caching setups." },
      { question: "How do you secure public-facing API endpoints?", answer: "We implement rate limiting, validate all request inputs, and require secure tokens (JWT) for protected routes." }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Web Development", slug: "web-development" }
    ],
    ctaText: "Request a Backend Audit or Build"
  },
  "cloud-devops": {
    title: "Cloud & DevOps Engineering",
    metaTitle: "Cloud Solutions & DevOps Automation | Lucid8",
    metaDesc: "Automate your software deployment pipeline, manage AWS resources, and monitor server configurations with Lucid8's DevOps engineers.",
    tagline: "CI/CD automations, infrastructure-as-code, and AWS scaling.",
    intro: "Lucid8 delivers DevOps automation to streamline software delivery. We write clean infrastructure-as-code scripts, build automated CI/CD pipelines, and configure cloud environments to ensure reliability and scalability.",
    challenges: [
      "Slow, manual deployment processes prone to human error.",
      "Inconsistent environments causing bugs between staging and production.",
      "Overspending on cloud resources due to unoptimized architectures."
    ],
    solutions: [
      "Automating releases using GitHub Actions pipelines.",
      "Packaging applications in Docker containers for environment consistency.",
      "Optimizing cloud instance configurations and auto-scaling rules."
    ],
    capabilities: [
      { name: "CI/CD Pipeline Automation", desc: "Building automated build, test, and deployment workflows." },
      { name: "Infrastructure-as-Code", desc: "Writing configuration files to manage cloud resources." },
      { name: "Cloud Infrastructure Setup", desc: "Configuring secure subnets and load balancers on AWS." },
      { name: "System Monitoring", desc: "Setting up real-time logs and performance alerts." }
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "Terraform", "Nginx"],
    process: [
      "Audit existing deployment workflows and cloud configurations.",
      "Design target architecture topologies and write config files.",
      "Build automated CI/CD pipelines for code validation.",
      "Deploy monitoring tools and configure scaling guidelines."
    ],
    benefits: [
      "Faster, more reliable software deployment steps.",
      "Reduced cloud hosting overhead costs.",
      "Consistent application performance during traffic spikes."
    ],
    testingConsiderations: [
      "Verifying deployment scripts in isolated staging environments.",
      "Testing auto-scaling rules under simulated traffic load.",
      "Validating IAM security permissions and access limits."
    ],
    faqs: [
      { question: "What is Infrastructure-as-Code?", answer: "Infrastructure-as-Code manages server, network, and database resources using configuration files, ensuring reproducible setups and version-controlled environments." },
      { question: "How do you optimize cloud hosting costs?", answer: "We review resource usage, configure auto-scaling schedules, and shut down idle developer environments." }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "API & Backend", slug: "api-backend-development" }
    ],
    ctaText: "Optimize Your Cloud Infrastructure"
  },
  "automation-solutions": {
    title: "Business Automation Solutions",
    metaTitle: "Process & Workflow Automation Solutions | Lucid8",
    metaDesc: "Automate repetitive business workflows and connect systems using custom integration scripts and AI tools developed by Lucid8.",
    tagline: "Workflows automation, script setups, and data pipelines.",
    intro: "Lucid8 builds custom integration scripts, data processing pipelines, and automation tools. We connect disparate software platforms to automate manual tasks, reducing errors and improving operational efficiency.",
    challenges: [
      "Time-consuming, manual data transfer between business tools.",
      "Frequent human errors in spreadsheet and document workflows.",
      "Slow reporting cycles due to manual data aggregation processes."
    ],
    solutions: [
      "Connecting systems using automated API integrations.",
      "Writing secure scripts to automate document and data workflows.",
      "Building scheduled data parsers to compile reports automatically."
    ],
    capabilities: [
      { name: "Workflow Automations", desc: "Connecting CRMs, billing systems, and message queues." },
      { name: "Scheduled Data Pipelines", desc: "Building parsers to clean and move business data." },
      { name: "Custom Admin Tools", desc: "Creating dashboards to manage automated processes." },
      { name: "API Integration Services", desc: "Interfacing third-party platforms via secure endpoints." }
    ],
    technologies: ["Node.js", "Python", "REST APIs", "Webhooks", "JSON Parser"],
    process: [
      "Map manual workflows and identify automation opportunities.",
      "Design system integration paths and write script logic.",
      "Run validation tests using simulated datasets.",
      "Deploy automation scripts to cloud environments and monitor performance."
    ],
    benefits: [
      "Fewer errors in daily data entry processes.",
      "Significant time savings on repetitive administrative tasks.",
      "Faster business reporting and data insights."
    ],
    testingConsiderations: [
      "Verifying script error handling with missing data fields.",
      "Testing webhook connections under simulated high traffic.",
      "Checking API rate-limiting handling during data transfers."
    ],
    faqs: [
      { question: "Can you automate workflows between tools without APIs?", answer: "We favor APIs for reliability, but can build custom web-scraping or browser automation scripts when needed." },
      { question: "How do you verify data accuracy in automated runs?", answer: "We implement detailed error logging, schema validations, and alert notifications to flag anomalies immediately." }
    ],
    relatedServices: [
      { name: "AI & Machine Learning", slug: "ai-machine-learning" },
      { name: "Digital Transformation", slug: "digital-transformation" }
    ],
    ctaText: "Design an Automation Solution"
  },
  "digital-transformation": {
    title: "Digital Transformation",
    metaTitle: "Legacy Modernization & Digital Transformation | Lucid8",
    metaDesc: "Modernize your business software, migrate applications to the cloud, and update legacy processes with Lucid8's consulting services.",
    tagline: "Modernizing legacy structures and designing digital strategies.",
    intro: "Lucid8 partners with businesses to modernize legacy applications, migrate workflows to secure cloud environments, and implement data-driven systems. We help companies align their technical capabilities with modern business requirements.",
    challenges: [
      "Legacy software systems blocking new feature integrations.",
      "High maintenance costs for outdated local hosting environments.",
      "Fragmented data systems preventing real-time reporting."
    ],
    solutions: [
      "Refactoring monolith architectures into modular APIs.",
      "Migrating local server configurations to scalable cloud setups.",
      "Building centralized data architectures for unified reporting."
    ],
    capabilities: [
      { name: "Legacy System Modernization", desc: "Updating old software architectures with modern frameworks." },
      { name: "Cloud Migration Strategy", desc: "Planning and executing transitions to AWS." },
      { name: "Data Architecture Design", desc: "Unifying databases for real-time analysis." },
      { name: "Process Digitization", desc: "Automating manual business workflows." }
    ],
    technologies: ["Next.js", "Spring Boot", "AWS Services", "Docker Containers", "PostgreSQL"],
    process: [
      "Audit existing software systems, dependencies, and infrastructure.",
      "Create a modernization roadmap with clear migration phases.",
      "Refactor software, build APIs, and set up cloud environments.",
      "Verify data parity and execute cutover to the new systems."
    ],
    benefits: [
      "Faster feature updates with modern codebases.",
      "Lower long-term system maintenance costs.",
      "Unified data reporting for informed decision-making."
    ],
    testingConsiderations: [
      "Running data validation checks between old and new systems.",
      "Testing system rollbacks to handle unexpected cutover issues.",
      "Evaluating cloud configurations for performance bottlenecks."
    ],
    faqs: [
      { question: "What is legacy system modernization?", answer: "Legacy modernization updates outdated software codebases and architectures with modern frameworks to improve performance, security, and maintainability." },
      { question: "How do you prevent data loss during system migrations?", answer: "We run database schema parity scripts, perform validation audits, and maintain backups during the migration process." }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Cloud & DevOps", slug: "cloud-devops" }
    ],
    ctaText: "Discuss Your Modernization Roadmap"
  }
};

// Generate static params for the 11 services
export async function generateStaticParams() {
  return Object.keys(servicesMap).map((slug) => ({ slug }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `/services/${slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Background Grid Accent */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="py-12 md:py-16 space-y-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Service Capability</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-jakarta">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-350 font-medium leading-relaxed max-w-3xl border-l-2 border-brand-cyan pl-4">
            {service.tagline}
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl pt-2">
            {service.intro}
          </p>
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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Divisional Skills</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta">Service Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/20 border border-slate-800/80 p-6 rounded-xl space-y-2">
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
                Standard secure engineering parameters (data encryption, credential safety filters, parameter hygiene checks) are integrated.
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

        {/* Related Services */}
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

        {/* Bottom CTA block */}
        <div className="mt-16 p-8 bg-[#0a0a0a]/20 border border-slate-800 rounded-2xl text-center space-y-6">
          <h3 className="text-xl font-bold text-white font-jakarta">Have a specific request regarding this service?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Connect with our engineering specialists on WhatsApp or submit a formal inquiry form to receive technical feedback.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all"
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
