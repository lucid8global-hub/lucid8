export interface ServiceCapability {
  name: string;
  desc: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  intro: string;
  h1: string;
  challenges: string[];
  solutions: string[];
  capabilities: ServiceCapability[];
  technologies: string[];
  process: string[];
  benefits: string[];
  securityConsiderations?: string[];
  testingConsiderations: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; slug: string }[];
  ctaText: string;
  serviceCategory: "Software Engineering" | "Artificial Intelligence" | "Web & Mobile" | "SaaS & Products" | "Cybersecurity & Quality";
}

export const servicesData: Record<string, ServiceData> = {
  "software-development": {
    slug: "software-development",
    title: "Software Development",
    h1: "Software Development Company in Kerala & Bangalore",
    metaTitle: "Software Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 is a software development company in Kerala and Bangalore building custom business software, enterprise applications, APIs, SaaS platforms, and backend systems.",
    tagline: "Custom software development, enterprise applications, and scalable backend architectures for growing businesses.",
    intro: "Lucid8 Technologies is a dedicated software development company serving enterprises, fast-growing businesses, and technology startups across Kerala and Bangalore. We engineer bespoke business software, scalable microservices, secure API gateways, and multi-tenant architectures. Our engineering-first methodology eliminates technical debt and builds resilient systems ready for long-term growth.",
    serviceCategory: "Software Engineering",
    challenges: [
      "Monolithic, legacy systems slowing down operational workflows and market responsiveness.",
      "High database latency and server resource strain under high user concurrency.",
      "Fragmented, off-the-shelf software tools that resist custom integration requirements."
    ],
    solutions: [
      "Modular microservices and decoupled service layers engineered with Node.js, Spring Boot, and TypeScript.",
      "Optimized query architectures, connection pooling, and multi-tier Redis caching.",
      "Documented REST and GraphQL API gateways engineered for frictionless third-party integration."
    ],
    capabilities: [
      { name: "Custom Business Software", desc: "Tailored enterprise solutions matching exact workflow requirements and data governance rules." },
      { name: "Enterprise SaaS Platforms", desc: "Multi-tenant architectures with role-based access control, billing hooks, and high concurrency." },
      { name: "API & Backend Systems", desc: "High-throughput REST and GraphQL endpoints backed by robust PostgreSQL and MySQL schemas." },
      { name: "Software Integration & Middleware", desc: "Connecting CRMs, ERPs, payment gateways, and third-party tools through reliable event pipelines." }
    ],
    technologies: ["TypeScript", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS"],
    process: [
      "Requirements gathering, technical scoping, and concurrency benchmarks definition.",
      "Database schema modeling, system architecture blueprints, and API contract design.",
      "Iterative sprint development with continuous automated testing and code reviews.",
      "Automated CI/CD deployment to staging and cloud production environments."
    ],
    benefits: [
      "Software completely tailored to your unique operational and business requirements.",
      "High-speed execution with reduced server latency and optimized resource usage.",
      "Clean, modular codebase that your internal team or partners can easily maintain."
    ],
    securityConsiderations: [
      "Automated dependency scanning during build steps to mitigate known CVEs.",
      "Strict parameter sanitization, input validation, and token-based session verification.",
      "Role-Based Access Control (RBAC) enforced across all backend controllers."
    ],
    testingConsiderations: [
      "Continuous automated unit test execution for business logic.",
      "Integration testing mapping critical database and API workflows.",
      "Synthetic traffic benchmarks to validate performance under peak loads."
    ],
    faqs: [
      {
        question: "Why should businesses in Kerala and Bangalore choose custom software over off-the-shelf software?",
        answer: "Off-the-shelf software often forces businesses into rigid workflows and recurring licensing costs. Custom software developed by Lucid8 is built around your specific business processes, integrates seamlessly with your existing stack, and scales without arbitrary user or feature restrictions."
      },
      {
        question: "How does Lucid8 ensure software security and scalability?",
        answer: "We follow security-by-design principles, implementing OWASP security controls, strict input validation, least-privilege access rules, and automated vulnerability scanning. For scalability, we utilize modular service boundaries, database connection pooling, and cloud caching layers."
      },
      {
        question: "What engagement models do you offer for software development?",
        answer: "We offer end-to-end full-lifecycle development for new systems, dedicated engineering sprints for active products, and modernizations for legacy enterprise codebases."
      }
    ],
    relatedServices: [
      { name: "Custom Software", slug: "custom-software" },
      { name: "AI Development", slug: "ai-development" },
      { name: "SaaS Development", slug: "saas-development" },
      { name: "Web Development", slug: "web-development" }
    ],
    ctaText: "Discuss Your Software Project"
  },

  "ai-development": {
    slug: "ai-development",
    title: "AI Development",
    h1: "AI Development Company in Kerala & Bangalore",
    metaTitle: "AI Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 is an AI development company in Kerala and Bangalore building Generative AI, AI agents, chatbots, machine learning models, and automated business workflows.",
    tagline: "Generative AI, autonomous agents, machine learning pipelines, and intelligent business automation.",
    intro: "Lucid8 Technologies delivers cutting-edge artificial intelligence and machine learning solutions for modern businesses across Kerala, Bangalore, and global markets. From Generative AI applications and custom AI agents to machine learning classifiers, computer vision pipelines, and intelligent chatbots, we help enterprises transform raw operational data into actionable automated intelligence.",
    serviceCategory: "Artificial Intelligence",
    challenges: [
      "Manual, repetitive operational tasks draining team bandwidth and driving up overhead.",
      "Enterprise data locked in silos without predictive intelligence or automated insights.",
      "Generic AI wrappers failing to meet domain-specific accuracy, security, and compliance standards."
    ],
    solutions: [
      "Tailored AI agents and workflow automation connecting business tools and databases.",
      "Fine-tuned machine learning models and predictive analytics containers running on FastAPI and Python.",
      "Secure retrieval-augmented generation (RAG) pipelines safeguarding proprietary company knowledge."
    ],
    capabilities: [
      { name: "Generative AI & LLM Applications", desc: "Custom RAG systems, document intelligence tools, and enterprise knowledge search engines." },
      { name: "Autonomous AI Agents", desc: "Multi-agent workflows executing complex, multi-step business and data operations automatically." },
      { name: "Intelligent AI Chatbots", desc: "Context-aware customer service and lead engagement bots with CRM and database integrations." },
      { name: "Machine Learning & Predictive Models", desc: "Classification, demand forecasting, anomaly detection, and custom computer vision algorithms." }
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "TensorFlow", "OpenAI / Anthropic APIs", "LangChain", "Vector Databases", "Docker"],
    process: [
      "Business workflow analysis and AI viability evaluation against real data samples.",
      "Data preprocessing, pipeline extraction, and vector index architecture setup.",
      "Model fine-tuning, prompt engineering, and agent orchestration development.",
      "Deployment in secure, containerized cloud environments with monitoring and guardrails."
    ],
    benefits: [
      "Automate repetitive operational tasks with high precision and measurable ROI.",
      "Deliver instant, intelligent customer interactions with 24/7 autonomous agents.",
      "Maintain complete control over proprietary company data and privacy compliance."
    ],
    securityConsiderations: [
      "Zero training on proprietary client data; complete isolation of internal documents.",
      "Prompt injection mitigation, input sanitization, and output validation filters.",
      "Role-based access controls on all internal knowledge embeddings."
    ],
    testingConsiderations: [
      "Evaluation benchmarks testing model response accuracy and hallucination rates.",
      "Concurrency stress testing on model inference microservices.",
      "Regression datasets verifying prompt and pipeline stability."
    ],
    faqs: [
      {
        question: "How can businesses in Kerala and Bangalore leverage AI automation?",
        answer: "Companies can automate document processing, invoice reconciliation, customer support inquiries, lead qualification, inventory forecasting, and internal reporting by integrating custom AI agents and models with their existing software systems."
      },
      {
        question: "What is the difference between an AI agent and a traditional chatbot?",
        answer: "Traditional chatbots follow pre-scripted rule paths and can only answer basic queries. AI agents possess reasoning capabilities, understand context, and can execute actions across software tools—such as querying databases, triggering API actions, and processing documents autonomously."
      },
      {
        question: "How do you ensure enterprise data privacy when building AI applications?",
        answer: "We use private, containerized cloud models, strict access permissions, and enterprise agreements with zero data-retention clauses, ensuring your sensitive business records are never exposed to public training sets."
      }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Custom Software", slug: "custom-software" },
      { name: "SaaS Development", slug: "saas-development" },
      { name: "Web Development", slug: "web-development" }
    ],
    ctaText: "Explore AI Solutions for Your Business"
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    h1: "Web Development Company in Kerala & Bangalore",
    metaTitle: "Web Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 is a web development company in Kerala and Bangalore building high-performance web applications, responsive websites, and client portals with Next.js & React.",
    tagline: "High-performance web applications, responsive business websites, and interactive client portals.",
    intro: "Lucid8 Technologies engineers high-performance web applications and modern websites for forward-thinking businesses in Kerala and Bangalore. Leveraging modern frameworks like Next.js, React, and TypeScript, we build web solutions optimized for Core Web Vitals, enterprise security, mobile responsiveness, and high conversion.",
    serviceCategory: "Web & Mobile",
    challenges: [
      "Slow page speeds and poor Core Web Vitals dragging down search engine rankings.",
      "Rigid CMS websites that are difficult to customize and scale as traffic increases.",
      "Inconsistent user experiences across desktop, tablet, and mobile browsers."
    ],
    solutions: [
      "Server-side rendering (SSR) and static generation (SSG) with Next.js for lightning-fast loads.",
      "Modern component architectures built with React, TypeScript, and clean CSS.",
      "Fully responsive, mobile-first design system ensuring seamless usability on all devices."
    ],
    capabilities: [
      { name: "Web Applications & Dashboards", desc: "Interactive client portals, SaaS interfaces, and internal analytics dashboards." },
      { name: "High-Performance Corporate Websites", desc: "SEO-optimized, fast-loading digital web presences built for brand credibility." },
      { name: "Custom E-Commerce Frontends", desc: "Sub-second shopping journeys, seamless cart flows, and multi-gateway checkout." },
      { name: "Progressive Web Apps (PWAs)", desc: "Web applications that provide app-like speed, offline readiness, and push notifications." }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"],
    process: [
      "User journey mapping, wireframing, and responsive UI/UX interface design.",
      "Next.js App Router setup with semantic HTML and optimized asset structures.",
      "API integration, state management, and edge performance optimization.",
      "Cross-device validation, accessibility auditing, and production launch."
    ],
    benefits: [
      "Superior search engine visibility with optimized Core Web Vitals scores.",
      "Lightning-fast page load times that improve customer engagement and conversion rates.",
      "Modular components that make updating content and features effortless."
    ],
    securityConsiderations: [
      "Content Security Policy (CSP), Cross-Origin protections, and HTTPS enforcement.",
      "Sanitized client-side form submissions and CSRF protection on API routes."
    ],
    testingConsiderations: [
      "Automated Lighthouse audits checking performance, accessibility, best practices, and SEO.",
      "Cross-browser testing across Chrome, Safari, Firefox, and Edge on mobile and desktop."
    ],
    faqs: [
      {
        question: "Why does Lucid8 recommend Next.js for web application development?",
        answer: "Next.js provides the perfect balance of React developer speed, server-side rendering for optimal SEO, built-in asset optimization, and edge computing capabilities, resulting in web applications that load in under a second."
      },
      {
        question: "Are your web applications fully mobile responsive?",
        answer: "Yes, every web project we build is designed mobile-first and rigorously tested across smartphones, tablets, laptops, and desktop screens."
      }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Mobile App Development", slug: "mobile-app-development" },
      { name: "E-Commerce Development", slug: "ecommerce-development" },
      { name: "Custom Software", slug: "custom-software" }
    ],
    ctaText: "Start Your Web Project"
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    h1: "Mobile App Development Company in Kerala & Bangalore",
    metaTitle: "Mobile App Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 is a mobile app development company in Kerala and Bangalore building iOS, Android, and cross-platform Flutter applications with secure backends.",
    tagline: "Native and cross-platform mobile apps for iOS and Android with fluid performance.",
    intro: "Lucid8 Technologies delivers mobile app development services for businesses across Kerala and Bangalore. Utilizing Google's Flutter framework and native development practices, we build feature-rich, visually appealing iOS and Android applications backed by high-speed APIs, offline sync, and robust security.",
    serviceCategory: "Web & Mobile",
    challenges: [
      "High costs and timeline overhead of building and maintaining separate iOS and Android codebases.",
      "Sluggish performance and jerky animations in web-wrapper mobile applications.",
      "Insecure local data storage exposing customer sessions and sensitive information."
    ],
    solutions: [
      "Unified Flutter codebase sharing up to 90% of business logic across iOS and Android.",
      "Native compiled widget rendering at 60-120 frames per second for smooth interactions.",
      "Hardware-backed encryption using iOS Keychain and Android Keystore for secure credential storage."
    ],
    capabilities: [
      { name: "Cross-Platform Mobile Apps", desc: "High-performance Flutter applications deployed simultaneously to App Store and Google Play." },
      { name: "Payment & API Integration", desc: "Seamless integration with Stripe, Razorpay, UPI, and custom REST backend endpoints." },
      { name: "Offline-First Data Sync", desc: "Local SQLite and Hive database caching with automated background synchronization." },
      { name: "Push Notifications & Messaging", desc: "Targeted push notification campaigns and real-time updates via Firebase FCM." }
    ],
    technologies: ["Flutter", "Dart", "Firebase", "SQLite", "iOS SDK", "Android SDK", "Node.js"],
    process: [
      "User experience blueprinting, screen flows, and interactive mobile prototype creation.",
      "Widget architecture implementation and reactive state management configuration.",
      "Backend REST/GraphQL API integration and offline database configuration.",
      "Physical device testing, store submission preparation, and deployment to Google Play & App Store."
    ],
    benefits: [
      "Lower development and maintenance costs with a single, high-performance codebase.",
      "Native-grade fluid transitions, fast load times, and intuitive mobile ergonomics.",
      "Rapid time-to-market across both Apple App Store and Google Play Store."
    ],
    securityConsiderations: [
      "End-to-end TLS payload encryption for all API communications.",
      "Biometric authentication (FaceID / Fingerprint) and encrypted local databases."
    ],
    testingConsiderations: [
      "Testing across multiple physical iOS and Android device models and OS versions.",
      "Network fluctuation simulation and offline mode recovery validation."
    ],
    faqs: [
      {
        question: "Why choose Flutter for mobile application development?",
        answer: "Flutter compiles directly to native ARM machine code, offering native speed and smooth animations while enabling a single codebase for both iOS and Android, cutting initial build and long-term maintenance costs significantly."
      },
      {
        question: "Do you assist with publishing apps to the Apple App Store and Google Play?",
        answer: "Yes, our team handles the entire store submission process, including metadata configuration, icon packaging, signing certificates, and compliance checks."
      }
    ],
    relatedServices: [
      { name: "Web Development", slug: "web-development" },
      { name: "Software Development", slug: "software-development" },
      { name: "Custom Software", slug: "custom-software" }
    ],
    ctaText: "Discuss Your Mobile App Project"
  },

  "custom-software": {
    slug: "custom-software",
    title: "Custom Software Development",
    h1: "Custom Software Development Company in Kerala & Bangalore",
    metaTitle: "Custom Software Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 provides custom software development in Kerala and Bangalore building tailored enterprise tools, automated business systems, and specialized platforms.",
    tagline: "Tailored business software, enterprise tools, and automated platforms engineered for your exact needs.",
    intro: "Lucid8 Technologies specializes in custom software development for enterprises, growing companies, and startups across Kerala, Bangalore, and international markets. When off-the-shelf software falls short, we design, build, and deploy bespoke applications engineered around your distinct operational requirements, workflows, and security standards.",
    serviceCategory: "Software Engineering",
    challenges: [
      "Commercial off-the-shelf software lacking crucial features or demanding costly workarounds.",
      "Disjointed spreadsheets and manual processes causing errors, delays, and lost revenue.",
      "Vendor lock-in and unpredictable per-seat pricing eating into company margins."
    ],
    solutions: [
      "100% custom-built software architectures completely owned by your company.",
      "Automated business workflows replacing tedious manual data entry and handoffs.",
      "Modular system designs that grow alongside your team, transactions, and business model."
    ],
    capabilities: [
      { name: "Tailored Business Portals", desc: "Custom operational dashboards, inventory management, and client collaboration portals." },
      { name: "Enterprise Workflow Automation", desc: "Connecting internal tools, automating approval chains, and unifying business data." },
      { name: "Custom ERP & CRM Solutions", desc: "Bespoke customer management and resource planning platforms tailored to your business rules." },
      { name: "Legacy System Modernization", desc: "Refactoring legacy codebases into secure, modular, cloud-ready applications." }
    ],
    technologies: ["Node.js", "TypeScript", "React", "Next.js", "Java", "PostgreSQL", "Docker", "AWS"],
    process: [
      "In-depth discovery of business processes, bottlenecks, and technical requirements.",
      "Software architecture design, database schema planning, and interactive UX prototypes.",
      "Agile development sprints with regular demos and milestone deliverables.",
      "Deployment, data migration, staff onboarding, and ongoing support."
    ],
    benefits: [
      "Complete ownership of your software, data, and intellectual property.",
      "Optimized operational efficiency with zero unnecessary software bloat.",
      "Scalable infrastructure designed for seamless future feature expansions."
    ],
    securityConsiderations: [
      "Granular role-based permissions, data encryption at rest and in transit, and comprehensive audit logs."
    ],
    testingConsiderations: [
      "End-to-end scenario testing mirroring day-to-day business operations."
    ],
    faqs: [
      {
        question: "How much does custom software development cost in Kerala and Bangalore?",
        answer: "The cost depends on scope, feature complexity, third-party integrations, and performance requirements. We provide transparent, milestone-based pricing and scoping consultations to outline clear estimates before development starts."
      },
      {
        question: "Who owns the code and intellectual property of the custom software?",
        answer: "You own 100% of the custom source code, documentation, and intellectual property upon project completion and handover."
      }
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "SaaS Development", slug: "saas-development" },
      { name: "AI Development", slug: "ai-development" }
    ],
    ctaText: "Plan Your Custom Software"
  },

  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    h1: "SaaS Development Company in Kerala & Bangalore",
    metaTitle: "SaaS Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 is a SaaS development company in Kerala and Bangalore building multi-tenant SaaS platforms, cloud software, subscription billing, and scalable APIs.",
    tagline: "Scalable multi-tenant SaaS products, subscription platforms, and high-concurrency cloud architectures.",
    intro: "Lucid8 Technologies provides end-to-end SaaS development services for founders, startups, and enterprises in Kerala and Bangalore. We architect, engineer, and deploy secure, multi-tenant Software-as-a-Service applications with subscription billing, role-based access, automated provisioning, and scalable cloud backends.",
    serviceCategory: "SaaS & Products",
    challenges: [
      "Designing multi-tenant database architectures that prevent tenant data leakage.",
      "Managing complex subscription tiers, billing cycles, prorations, and tax compliance.",
      "Scaling cloud infrastructure smoothly as user onboarding accelerates."
    ],
    solutions: [
      "Robust tenant isolation patterns using shared-schema or database-per-tenant strategies.",
      "Automated Stripe and Razorpay billing integrations handling recurring subscriptions seamlessly.",
      "Auto-scaling cloud infrastructure on AWS and Vercel optimized for predictable unit economics."
    ],
    capabilities: [
      { name: "Multi-Tenant SaaS Architectures", desc: "Secure data isolation, customizable tenant settings, and centralized admin management." },
      { name: "Subscription & Billing Engine", desc: "Automated recurring payments, usage-based metering, tier upgrades, and invoice generation." },
      { name: "User Management & RBAC", desc: "Single sign-on (SSO), multi-factor authentication, team invites, and granular role permissions." },
      { name: "Public APIs & Webhook Systems", desc: "Developer-friendly API endpoints and webhook delivery systems for ecosystem expansion." }
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Docker", "AWS"],
    process: [
      "SaaS product scoping, tenant data model architecture, and UI/UX design.",
      "Core application engineering, authentication setup, and billing flow implementation.",
      "Multi-tenant security validation, load testing, and edge caching configuration.",
      "Beta launch, user telemetry setup, and continuous feature iteration."
    ],
    benefits: [
      "Accelerated time-to-market for your SaaS minimum viable product (MVP) and v1 release.",
      "Engineered from day one for high uptime, multi-tenant security, and reliable scale.",
      "Intuitive customer onboarding and self-serve subscription workflows."
    ],
    securityConsiderations: [
      "Strict tenant boundary verification across every database query and API handler.",
      "Automated token rotation, rate-limiting, and encryption for stored credentials."
    ],
    testingConsiderations: [
      "Cross-tenant isolation tests verifying zero data bleed between accounts.",
      "Subscription lifecycle simulation testing renewals, cancellations, and card failure retries."
    ],
    faqs: [
      {
        question: "How do you ensure multi-tenant security in SaaS applications?",
        answer: "We enforce tenant-level row isolation, parameter checks on every database query, and strict role-based access control, preventing any possibility of cross-account data exposure."
      },
      {
        question: "Can Lucid8 build an MVP for our SaaS startup?",
        answer: "Yes, we specialize in building scalable, production-grade SaaS MVPs that allow founders to validate product-market fit quickly while maintaining a clean codebase that scales without rewriting."
      }
    ],
    relatedServices: [
      { name: "Custom Software", slug: "custom-software" },
      { name: "Software Development", slug: "software-development" },
      { name: "AI Development", slug: "ai-development" }
    ],
    ctaText: "Build Your SaaS Product"
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    h1: "E-Commerce Development Company in Kerala & Bangalore",
    metaTitle: "E-Commerce Development Company in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 is an e-commerce development company in Kerala and Bangalore building custom online stores, multi-vendor marketplaces, and WooCommerce platforms.",
    tagline: "Custom online stores, multi-vendor marketplaces, and fast-converting e-commerce platforms.",
    intro: "Lucid8 Technologies delivers custom e-commerce development services for retail brands, D2C companies, and marketplace startups across Kerala and Bangalore. From high-speed Next.js headless storefronts to specialized multi-vendor marketplaces (such as our work on ReddX Thrifty) and custom WooCommerce implementations, we build secure, conversion-optimized shopping platforms.",
    serviceCategory: "SaaS & Products",
    challenges: [
      "Slow store load times causing high shopping cart abandonment rates.",
      "Managing complex inventory sync, multi-vendor payouts, and logistics integrations.",
      "Checkout friction and payment gateway drop-offs on mobile devices."
    ],
    solutions: [
      "Optimized storefront architectures delivering sub-second page transitions and rapid search.",
      "Custom multi-vendor dashboards with automated commission splits and inventory tracking.",
      "Frictionless mobile checkouts with UPI, credit cards, net banking, and international payments."
    ],
    capabilities: [
      { name: "Multi-Vendor Marketplaces", desc: "Independent vendor dashboards, catalog management, commission tracking, and payout automation." },
      { name: "Custom E-Commerce Storefronts", desc: "Bespoke shopping experiences designed for brand identity, speed, and conversion." },
      { name: "Payment & Shipping Integrations", desc: "Razorpay, Stripe, Cashfree, Shiprocket, and custom courier API integrations." },
      { name: "Inventory & Order Management", desc: "Real-time stock level synchronization, automated invoice generation, and order tracking." }
    ],
    technologies: ["Next.js", "React", "WordPress / WooCommerce", "PHP", "Node.js", "PostgreSQL", "Razorpay API"],
    process: [
      "Product catalog modeling, checkout flow design, and store UI/UX prototyping.",
      "Storefront engineering, payment gateway configuration, and inventory sync setup.",
      "Multi-vendor portal testing, security auditing, and speed optimization.",
      "Payment gateway live verification and store launch."
    ],
    benefits: [
      "High-speed shopping experience that drives conversion rates and repeat purchases.",
      "Scalable infrastructure capable of handling high traffic spikes during sales events.",
      "Complete flexibility in pricing, promotions, shipping rules, and marketplace features."
    ],
    securityConsiderations: [
      "PCI-DSS compliant payment flows, webhook signature verification, and customer data encryption."
    ],
    testingConsiderations: [
      "End-to-end checkout simulations across all supported payment methods.",
      "Inventory race-condition tests during simultaneous high-volume orders."
    ],
    faqs: [
      {
        question: "Can Lucid8 build a multi-vendor marketplace similar to ReddX Thrifty?",
        answer: "Yes, we have proven experience building multi-vendor e-commerce marketplaces (including ReddX Thrifty), featuring separate vendor portals, centralized catalogs, and automated payout management."
      },
      {
        question: "Which e-commerce platforms and technologies do you develop with?",
        answer: "We develop custom modern storefronts using Next.js/React for ultra-fast performance, as well as robust WooCommerce/PHP solutions for content-rich and marketplace stores."
      }
    ],
    relatedServices: [
      { name: "Web Development", slug: "web-development" },
      { name: "Software Development", slug: "software-development" },
      { name: "SaaS Development", slug: "saas-development" }
    ],
    ctaText: "Launch Your E-Commerce Store"
  },

  "e-learning-development": {
    slug: "e-learning-development",
    title: "E-Learning Platform Development",
    h1: "E-Learning Platform Development in Kerala & Bangalore",
    metaTitle: "E-Learning Platform Development in Kerala & Bangalore | Lucid8",
    metaDesc: "Lucid8 develops modern e-learning platforms, Learning Management Systems (LMS), and educational portals in Kerala and Bangalore with Next.js and React.",
    tagline: "Modern e-learning platforms, custom LMS solutions, and interactive online education portals.",
    intro: "Lucid8 Technologies engineers modern e-learning platforms, Learning Management Systems (LMS), and online course portals for educational institutions, edtech startups, and corporate training teams across Kerala and Bangalore. As proven by our work on platforms like Oxyfied, we build intuitive, responsive learning environments designed for seamless course delivery, student engagement, and progress tracking.",
    serviceCategory: "SaaS & Products",
    challenges: [
      "Clunky, outdated LMS interfaces that discourage student engagement and course completion.",
      "Slow video streaming and lesson loading on mobile and low-bandwidth connections.",
      "Difficulty managing instructor payouts, student assessments, and automated certifications."
    ],
    solutions: [
      "Modern, responsive learning portals built with Next.js, React, and TypeScript.",
      "Optimized video delivery, interactive quizzes, and automated progress checkpoints.",
      "Automated enrollment workflows, secure payment gateways, and verifiable digital certificates."
    ],
    capabilities: [
      { name: "Custom LMS Platforms", desc: "Course curriculum builders, lesson modules, quiz engines, and instructor management." },
      { name: "Student Progress & Analytics", desc: "Real-time engagement tracking, completion metrics, and performance reports." },
      { name: "Interactive Video & Content Delivery", desc: "Secure video streaming, downloadable resources, and audio/text modules." },
      { name: "Certification & Assessment Systems", desc: "Automated quiz grading, score tracking, and instant PDF certificate generation." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS S3 / CloudFront", "Razorpay / Stripe"],
    process: [
      "Curriculum structure mapping, learner journey design, and instructor dashboard planning.",
      "Course player implementation, quiz logic coding, and video asset delivery configuration.",
      "Payment integration, certificate generator coding, and role-based access checks.",
      "Multi-device testing, video streaming benchmark validation, and platform launch."
    ],
    benefits: [
      "Modern, distraction-free learning experience that increases course completion rates.",
      "Complete control over course pricing, student data, and educational assets.",
      "Flawless responsiveness on mobile phones, tablets, and desktop computers."
    ],
    securityConsiderations: [
      "Protected video URLs, content download restrictions, and secure student authentication."
    ],
    testingConsiderations: [
      "Video playback compatibility checks across slow 3G/4G networks.",
      "Quiz evaluation accuracy and certificate rendering verification."
    ],
    faqs: [
      {
        question: "Can you build a custom e-learning platform like Oxyfied?",
        answer: "Yes, we built Oxyfied using Next.js and React, and we have deep expertise developing modern digital learning platforms with course catalogs, student dashboards, and responsive lesson players."
      },
      {
        question: "How do you handle video streaming on e-learning platforms?",
        answer: "We integrate cloud storage and content delivery networks (CDNs) with adaptive video streaming, ensuring fast buffer-free playback even on slower mobile connections."
      }
    ],
    relatedServices: [
      { name: "Web Development", slug: "web-development" },
      { name: "Software Development", slug: "software-development" },
      { name: "SaaS Development", slug: "saas-development" }
    ],
    ctaText: "Build Your E-Learning Platform"
  },

  // Retained engineering services for backward compatibility
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Engineering",
    h1: "AI & Machine Learning Engineering Solutions",
    metaTitle: "AI & Machine Learning Engineering Solutions | Lucid8",
    metaDesc: "Leverage artificial intelligence, computer vision models, and predictive analytics pipelines built by Lucid8's data engineers.",
    tagline: "Predictive analytics, computer vision, and data pipelines.",
    intro: "Lucid8 is an AI engineering provider. We build custom data processing models, predictive analytics structures, and computer vision pipelines. Rather than relying on generic AI wrappers, we train and fine-tune classifiers, integrate specialized model pipelines, and optimize systems for performance.",
    serviceCategory: "Artificial Intelligence",
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
      { name: "AI Development", slug: "ai-development" },
      { name: "Software Development", slug: "software-development" }
    ],
    ctaText: "Discuss Your AI Project"
  },

  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity Strategy & Consulting",
    h1: "Enterprise Cybersecurity Consulting Services",
    metaTitle: "Enterprise Cybersecurity Consulting Services | Lucid8",
    metaDesc: "Protect your corporate software architecture, configure cloud networks, and establish secure SDLC processes with Lucid8's security consultants.",
    tagline: "Defensive architecture planning, threat mitigation, and secure SDLC.",
    intro: "Lucid8 delivers professional, defensive cybersecurity consulting designed to shield enterprise systems from attack. We audit existing network configurations, restructure authentication systems, and help teams integrate security validations early in their software development lifecycle (SDLC).",
    serviceCategory: "Cybersecurity & Quality",
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
    slug: "security-testing",
    title: "Vulnerability & Security Testing",
    h1: "Web Application & API Security Testing",
    metaTitle: "Web Application & API Security Testing | Lucid8",
    metaDesc: "Audit your web systems and API endpoints against OWASP threats. Lucid8 runs credential tests, validates inputs, and delivers detailed fix reports.",
    tagline: "Web application audits, API pen-testing, and OWASP review.",
    intro: "Lucid8 conducts focused web application and API security audits. We evaluate endpoints against the OWASP Top 10 vulnerabilities, review input sanitization behaviors, test authorization levels, and deliver detailed reports to help development teams fix issues quickly.",
    serviceCategory: "Cybersecurity & Quality",
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
    slug: "software-testing",
    title: "Software Testing & Quality Engineering",
    h1: "Software Testing & QA Automation Services",
    metaTitle: "Software Testing & QA Automation Services | Lucid8",
    metaDesc: "Ensure zero-bug releases with Lucid8's Quality Engineering. We build automation test suites, API test scripts, and perform functional testing.",
    tagline: "Manual regressions, API validations, and QA automation.",
    intro: "Lucid8 delivers structured Quality Engineering to ensure application reliability. We construct automated test pipelines, validate API outputs under heavy loads, and run manual regressions to identify issues before they reach production.",
    serviceCategory: "Cybersecurity & Quality",
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
    slug: "api-backend-development",
    title: "API & Backend Systems",
    h1: "Scalable API & Backend Development Services",
    metaTitle: "Scalable API & Backend Development Services | Lucid8",
    metaDesc: "Get custom database architectures, fast API endpoints, and scalable microservices engineered by Lucid8. Secure and optimized backend code.",
    tagline: "Secure database design, microservices, and OAuth integrations.",
    intro: "Lucid8 designs high-performance backend systems and APIs. We build secure database architectures, implement microservices, and optimize query patterns to ensure rapid page loads and reliable application performance.",
    serviceCategory: "Software Engineering",
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
    slug: "cloud-devops",
    title: "Cloud & DevOps Engineering",
    h1: "Cloud Solutions & DevOps Automation",
    metaTitle: "Cloud Solutions & DevOps Automation | Lucid8",
    metaDesc: "Automate your software deployment pipeline, manage AWS resources, and monitor server configurations with Lucid8's DevOps engineers.",
    tagline: "CI/CD automations, infrastructure-as-code, and AWS scaling.",
    intro: "Lucid8 delivers DevOps automation to streamline software delivery. We write clean infrastructure-as-code scripts, build automated CI/CD pipelines, and configure cloud environments to ensure reliability and scalability.",
    serviceCategory: "Software Engineering",
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
    slug: "automation-solutions",
    title: "Business Automation Solutions",
    h1: "Process & Workflow Automation Solutions",
    metaTitle: "Process & Workflow Automation Solutions | Lucid8",
    metaDesc: "Automate repetitive business workflows and connect systems using custom integration scripts and AI tools developed by Lucid8.",
    tagline: "Workflows automation, script setups, and data pipelines.",
    intro: "Lucid8 builds custom integration scripts, data processing pipelines, and automation tools. We connect disparate software platforms to automate manual tasks, reducing errors and improving operational efficiency.",
    serviceCategory: "Artificial Intelligence",
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
      { name: "AI Development", slug: "ai-development" },
      { name: "Digital Transformation", slug: "digital-transformation" }
    ],
    ctaText: "Design an Automation Solution"
  },

  "digital-transformation": {
    slug: "digital-transformation",
    title: "Digital Transformation",
    h1: "Legacy Modernization & Digital Transformation",
    metaTitle: "Legacy Modernization & Digital Transformation | Lucid8",
    metaDesc: "Modernize your business software, migrate applications to the cloud, and update legacy processes with Lucid8's consulting services.",
    tagline: "Modernizing legacy structures and designing digital strategies.",
    intro: "Lucid8 partners with businesses to modernize legacy applications, migrate workflows to secure cloud environments, and implement data-driven systems. We help companies align their technical capabilities with modern business requirements.",
    serviceCategory: "Software Engineering",
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

export function getAllServices(): ServiceData[] {
  return Object.values(servicesData);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData[slug];
}
