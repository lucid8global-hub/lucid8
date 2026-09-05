export interface LocationHighlight {
  title: string;
  desc: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string; // e.g. "kerala", "kochi", "kannur", "kozhikode", "thiruvananthapuram", "thrissur", "bangalore", "bangalore/indiranagar"
  slugSegments: string[]; // e.g. ["kerala"] or ["bangalore", "indiranagar"]
  cityOrRegion: string;
  parentRegion?: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  tagline: string;
  intro: string;
  regionalContext: string;
  softwareServices: { title: string; desc: string }[];
  aiServices: { title: string; desc: string }[];
  webMobileServices: { title: string; desc: string }[];
  industriesServed: { name: string; desc: string }[];
  relevantProjects: { title: string; slug: string; desc: string; category: string }[];
  whyChooseUs: LocationHighlight[];
  serviceAreaInfo: string;
  faqs: LocationFAQ[];
  nearbyLocations?: { name: string; href: string }[];
}

export const locationsData: Record<string, LocationData> = {
  "kerala": {
    slug: "kerala",
    slugSegments: ["kerala"],
    cityOrRegion: "Kerala",
    metaTitle: "Software & AI Development Company in Kerala | Lucid8 Technologies",
    metaDesc: "Lucid8 Technologies is a software and AI development company in Kerala building custom software, web applications, mobile apps, AI solutions, SaaS, and e-commerce platforms.",
    h1: "Software & AI Development Company in Kerala",
    tagline: "Engineering custom software, intelligent AI solutions, scalable web platforms, and mobile apps for businesses across Kerala.",
    intro: "Lucid8 Technologies provides end-to-end software development and AI engineering services for businesses, enterprises, and startups across Kerala. From Kochi and Kozhikode to Thiruvananthapuram, Thrissur, and Kannur, we engineer custom software architectures, modern Next.js web applications, Flutter mobile apps, Generative AI tools, and enterprise digital solutions.",
    regionalContext: "Kerala is rapidly emerging as a vibrant technology corridor, driven by premier IT hubs like Infopark Kochi, Cyberpark Kozhikode, and Technopark Thiruvananthapuram. Businesses across the state—from retail giants and healthcare providers to edtech pioneers and industrial exporters—rely on modern software engineering and AI automation to stay competitive in global markets.",
    softwareServices: [
      { title: "Custom Enterprise Software", desc: "Building bespoke management portals, inventory middleware, and automated internal systems tailored to Kerala business operations." },
      { title: "SaaS & Cloud Platforms", desc: "Multi-tenant cloud architectures designed for high concurrency, reliable data storage, and automated recurring billing." },
      { title: "API & Backend Engineering", desc: "High-performance RESTful and GraphQL backend endpoints built on Node.js, Spring Boot, and PostgreSQL." }
    ],
    aiServices: [
      { title: "AI Workflow Automation", desc: "Automating document analysis, invoice processing, customer inquiries, and lead qualification for businesses in Kerala." },
      { title: "Generative AI & LLM Systems", desc: "Enterprise retrieval-augmented generation (RAG) tools that enable secure search and reasoning over private business data." },
      { title: "Computer Vision & Predictive Models", desc: "Custom image classification, defect detection, and predictive demand models engineered with Python and PyTorch." }
    ],
    webMobileServices: [
      { title: "Next.js Web Applications", desc: "Sub-second load times, SEO-optimized structures, and responsive client dashboards for modern web users." },
      { title: "Flutter Cross-Platform Mobile Apps", desc: "Native-grade iOS and Android mobile apps with offline synchronization and secure UPI/card payments." }
    ],
    industriesServed: [
      { name: "Retail & E-Commerce", desc: "Multi-vendor marketplaces, high-speed storefronts, and automated inventory sync for retail brands." },
      { name: "Education & E-Learning", desc: "Modern LMS platforms with video course delivery, progress tracking, and automated certifications (e.g. Oxyfied)." },
      { name: "Events & Ticketing", desc: "Online event discovery, seat booking, and QR ticketing systems (e.g. Moonglade)." },
      { name: "Healthcare & Digital Health", desc: "Telehealth portals, appointment scheduling, and encrypted patient data systems." }
    ],
    relevantProjects: [
      { title: "ReddX Thrifty", slug: "reddx-thrifty", desc: "Multi-vendor e-commerce marketplace developed with WordPress and WooCommerce.", category: "E-Commerce" },
      { title: "Oxyfied", slug: "oxyfied", desc: "Modern digital e-learning platform built with Next.js and React for online education.", category: "E-Learning" },
      { title: "Moonglade", slug: "moonglade-event-ticket-booking", desc: "Event ticket booking platform developed with React and Node.js.", category: "Events & Ticketing" }
    ],
    whyChooseUs: [
      { title: "Clean, Scalable Engineering", desc: "We prioritize security-by-design and modular code architecture, avoiding rigid templates." },
      { title: "Transparent Collaboration", desc: "Direct communication with engineers, milestone-driven sprints, and regular demos." },
      { title: "Local Market Understanding", desc: "Deep familiarity with business workflows and payment integrations across Kerala and South India." }
    ],
    serviceAreaInfo: "Lucid8 Technologies provides remote and on-site engineering services to businesses throughout Kerala, actively collaborating with clients in Kochi, Kozhikode, Thiruvananthapuram, Thrissur, Kannur, and surrounding districts.",
    faqs: [
      {
        question: "How does Lucid8 partner with businesses in Kerala for software development?",
        answer: "We offer end-to-end technical execution—from discovery and architecture design to agile sprint development, security testing, and production deployment—with direct engineering communication via WhatsApp, video calls, and regular milestone reviews."
      },
      {
        question: "What technologies does Lucid8 use for building web and mobile applications?",
        answer: "We specialize in modern, high-performance technologies including Next.js, React, TypeScript, Flutter, Node.js, Spring Boot, Python, PostgreSQL, and AWS cloud infrastructure."
      },
      {
        question: "Can Lucid8 build an AI solution customized for our business in Kerala?",
        answer: "Yes, we build custom AI agents, automated workflow tools, predictive models, and Generative AI applications tailored to your specific business data and operational requirements."
      }
    ],
    nearbyLocations: [
      { name: "Kochi", href: "/locations/kochi" },
      { name: "Kannur", href: "/locations/kannur" },
      { name: "Kozhikode", href: "/locations/kozhikode" },
      { name: "Thiruvananthapuram", href: "/locations/thiruvananthapuram" },
      { name: "Thrissur", href: "/locations/thrissur" },
      { name: "Bangalore", href: "/locations/bangalore" }
    ]
  },

  "kochi": {
    slug: "kochi",
    slugSegments: ["kochi"],
    cityOrRegion: "Kochi",
    parentRegion: "Kerala",
    metaTitle: "Software & AI Development Company in Kochi | Lucid8",
    metaDesc: "Lucid8 is a software and AI development company serving businesses in Kochi and Infopark, building custom software, web applications, mobile apps, and AI solutions.",
    h1: "Software & AI Development Company in Kochi",
    tagline: "Delivering modern software engineering, AI automation, and cloud platforms for businesses in Kochi.",
    intro: "Lucid8 Technologies provides software development and AI engineering services for businesses, startups, and growing enterprises in Kochi. Whether you operate out of Infopark Kakkanad, SmartCity, or the broader commercial hub of Ernakulam, we build custom business software, Next.js web applications, Flutter mobile apps, and intelligent AI automation systems.",
    regionalContext: "As the commercial and technological capital of Kerala, Kochi hosts a flourishing ecosystem of technology parks including Infopark, SmartCity, and numerous incubators. Companies in Kochi across logistics, maritime, healthcare, tourism, retail, and financial services require modern software solutions to scale operations effectively.",
    softwareServices: [
      { title: "Custom Software for Kochi Businesses", desc: "Tailored enterprise management systems, supply chain portals, and internal workflows." },
      { title: "SaaS & Multi-Tenant Platforms", desc: "Cloud-native SaaS applications with subscription billing, granular roles, and high concurrency." },
      { title: "Scalable APIs & Microservices", desc: "Secure REST/GraphQL backend architectures connecting complex enterprise systems." }
    ],
    aiServices: [
      { title: "AI Automation for Operations", desc: "Automated document sorting, customer communication bots, and data extraction pipelines." },
      { title: "Generative AI & Private RAG", desc: "Custom LLM integrations allowing secure internal querying over confidential business files." }
    ],
    webMobileServices: [
      { title: "High-Performance Next.js Websites", desc: "Fast-loading web applications with sub-second page transitions and superior Core Web Vitals." },
      { title: "Cross-Platform Flutter Mobile Apps", desc: "Native-speed iOS and Android applications with offline caching and payment gateways." }
    ],
    industriesServed: [
      { name: "Logistics & Maritime", desc: "Tracking systems, shipment management portals, and automated document workflows." },
      { name: "Retail & E-Commerce", desc: "Marketplaces and online shopping platforms (such as our work on ReddX Thrifty)." },
      { name: "Healthcare & Clinics", desc: "Patient booking platforms, telemedicine software, and secure clinical records." }
    ],
    relevantProjects: [
      { title: "ReddX Thrifty", slug: "reddx-thrifty", desc: "Multi-vendor e-commerce marketplace built with WordPress and WooCommerce.", category: "E-Commerce" },
      { title: "Moonglade", slug: "moonglade-event-ticket-booking", desc: "Event ticket booking and verification platform built with React and Node.js.", category: "Events & Ticketing" }
    ],
    whyChooseUs: [
      { title: "Infopark-Ready Quality Standards", desc: "Enterprise-grade code review, security testing, and scalable architecture design." },
      { title: "Rapid WhatsApp Communication", desc: "Fast response times and seamless project coordination." }
    ],
    serviceAreaInfo: "Lucid8 Technologies delivers software engineering and AI solutions to businesses across Ernakulam, Infopark Kakkanad, SmartCity, Kalamassery, Edappally, and the Greater Kochi region.",
    faqs: [
      {
        question: "Does Lucid8 serve startups and companies in Infopark Kochi?",
        answer: "Yes, we work with startups, established IT firms, and commercial enterprises across Kochi and Infopark, delivering custom software, AI tools, and web/mobile development."
      },
      {
        question: "Can you help modernize an existing legacy software system in Kochi?",
        answer: "Yes, we specialize in refactoring legacy monoliths, migrating on-premise applications to secure cloud architectures, and building modern API layers."
      }
    ],
    nearbyLocations: [
      { name: "Kerala", href: "/locations/kerala" },
      { name: "Kozhikode", href: "/locations/kozhikode" },
      { name: "Thrissur", href: "/locations/thrissur" },
      { name: "Thiruvananthapuram", href: "/locations/thiruvananthapuram" }
    ]
  },

  "kannur": {
    slug: "kannur",
    slugSegments: ["kannur"],
    cityOrRegion: "Kannur",
    parentRegion: "Kerala",
    metaTitle: "Software & AI Development Company in Kannur | Lucid8",
    metaDesc: "Lucid8 is a software and AI development company serving businesses in Kannur, building custom software, websites, mobile applications, and AI tools.",
    h1: "Software & AI Development Company in Kannur",
    tagline: "Custom software development, intelligent AI automation, and web/mobile platforms for businesses in Kannur.",
    intro: "Lucid8 Technologies provides software and AI development services for commercial enterprises, healthcare providers, educational institutions, and emerging digital businesses in Kannur and North Kerala. We build custom software solutions, responsive Next.js websites, mobile apps, and automated digital tools.",
    regionalContext: "Kannur is experiencing strong digital adoption across its thriving commercial, textile, retail, education, and healthcare sectors. With improved connectivity and growing entrepreneurial initiatives, businesses in Kannur are increasingly investing in custom software systems and AI automation to streamline operations and expand their reach.",
    softwareServices: [
      { title: "Business Management Software", desc: "Custom order processing, inventory management, and billing software for commercial enterprises in Kannur." },
      { title: "Custom Web Applications", desc: "Interactive customer portals and digital service platforms built with Next.js and React." }
    ],
    aiServices: [
      { title: "AI Business Automation", desc: "Automating customer inquiries, lead capture, and report generation using AI agents." },
      { title: "Smart Chatbots & Assistants", desc: "24/7 automated support assistants connected directly to your business WhatsApp and CRM." }
    ],
    webMobileServices: [
      { title: "Corporate Websites & E-Commerce", desc: "Modern, mobile-responsive online stores and business websites optimized for search engines." },
      { title: "Mobile Apps (iOS & Android)", desc: "Feature-packed Flutter mobile apps for retail customers, field staff, and internal teams." }
    ],
    industriesServed: [
      { name: "Retail & Trading", desc: "Point-of-sale integrations, e-commerce stores, and multi-branch inventory tracking." },
      { name: "Education & Academies", desc: "Custom LMS platforms, student portals, and digital test modules (like Oxyfied)." },
      { name: "Healthcare & Diagnostics", desc: "Appointment booking systems and secure patient record management." }
    ],
    relevantProjects: [
      { title: "Oxyfied", slug: "oxyfied", desc: "Modern digital e-learning platform built with Next.js and React for online education.", category: "E-Learning" },
      { title: "VisionX", slug: "visionx", desc: "Modern corporate website developed for an IT software startup.", category: "IT & Software" }
    ],
    whyChooseUs: [
      { title: "Accessible Engineering Support", desc: "Clear technical guidance without unnecessary jargon, tailored to your growth goals." },
      { title: "Modern Technology Stack", desc: "Built with modern frameworks ensuring your software stays fast, secure, and future-proof." }
    ],
    serviceAreaInfo: "Lucid8 Technologies works with businesses throughout Kannur, Thalassery, Payyanur, Mattannur, and the wider North Malabar region.",
    faqs: [
      {
        question: "How can businesses in Kannur get started with Lucid8?",
        answer: "You can reach out directly via WhatsApp or our contact form to schedule an initial discussion. We review your requirements, suggest the optimal technical approach, and provide a clear milestone roadmap."
      },
      {
        question: "Do you develop e-commerce and retail software for Kannur businesses?",
        answer: "Yes, we build custom online stores, multi-vendor marketplaces, and inventory management systems tailored to local retail and wholesale workflows."
      }
    ],
    nearbyLocations: [
      { name: "Kerala", href: "/locations/kerala" },
      { name: "Kozhikode", href: "/locations/kozhikode" },
      { name: "Kochi", href: "/locations/kochi" }
    ]
  },

  "kozhikode": {
    slug: "kozhikode",
    slugSegments: ["kozhikode"],
    cityOrRegion: "Kozhikode",
    parentRegion: "Kerala",
    metaTitle: "Software & AI Development Company in Kozhikode | Lucid8",
    metaDesc: "Lucid8 is a software and AI development company serving businesses in Kozhikode (Calicut), Cyberpark, and UL Cyberpark, building custom software and AI apps.",
    h1: "Software & AI Development Company in Kozhikode",
    tagline: "Building scalable software architectures, AI systems, and modern web applications for Kozhikode businesses.",
    intro: "Lucid8 Technologies provides software development and AI engineering services for businesses, startups, and enterprises in Kozhikode (Calicut). Serving clients across Cyberpark, UL Cyberpark, and the bustling Malabar trade district, we create bespoke software systems, mobile apps, e-learning platforms, and AI automation tools.",
    regionalContext: "Kozhikode is one of Kerala's most vibrant commercial and technology destinations, anchored by Cyberpark Kozhikode and UL Cyberpark. From flourishing retail networks and healthcare institutions to food-tech and logistics startups, Calicut businesses demand fast, secure, and modern digital software architectures.",
    softwareServices: [
      { title: "Custom Software Development", desc: "Bespoke database architectures, multi-branch management systems, and enterprise portals." },
      { title: "SaaS Application Development", desc: "Cloud software engineered for high concurrency, secure authentication, and recurring payments." }
    ],
    aiServices: [
      { title: "AI Workflow Automation", desc: "Automating document ingestion, customer lead follow-ups, and operational reporting." },
      { title: "Custom Machine Learning Models", desc: "Predictive analytics, customer trend forecasting, and intelligent classifiers in Python." }
    ],
    webMobileServices: [
      { title: "Next.js Web Platforms", desc: "Ultra-fast web applications with clean SEO architecture and responsive layouts." },
      { title: "Flutter Mobile App Development", desc: "iOS and Android apps with native performance, offline support, and payment gateways." }
    ],
    industriesServed: [
      { name: "Retail & Consumer Brands", desc: "Online shopping platforms, multi-vendor marketplaces, and inventory synchronizers." },
      { name: "Education & EdTech", desc: "Digital learning platforms, course management systems, and assessment tools (e.g. Oxyfied)." },
      { name: "Events & Ticketing", desc: "Event booking and QR code ticketing platforms (e.g. Moonglade)." }
    ],
    relevantProjects: [
      { title: "ReddX Thrifty", slug: "reddx-thrifty", desc: "Multi-vendor e-commerce marketplace developed with WordPress and WooCommerce.", category: "E-Commerce" },
      { title: "Oxyfied", slug: "oxyfied", desc: "Modern digital e-learning platform built with Next.js and React.", category: "E-Learning" },
      { title: "AI-VR4U Solutions", slug: "aivr4u-solutions", desc: "Corporate software startup web application developed with React.js.", category: "IT & Software" }
    ],
    whyChooseUs: [
      { title: "Engineering Rigor", desc: "Clean, documented codebases with automated CI/CD and security reviews." },
      { title: "Startup-to-Enterprise Scalability", desc: "Architectures designed to grow seamlessly as transaction volumes scale." }
    ],
    serviceAreaInfo: "Lucid8 Technologies collaborates with businesses across Calicut Cyberpark, UL Cyberpark, Mavoor Road, Palayam, Ramanattukara, and the Greater Kozhikode area.",
    faqs: [
      {
        question: "Does Lucid8 build custom software for Cyberpark Kozhikode startups?",
        answer: "Yes, we work with startups and established technology businesses in Cyberpark and UL Cyberpark to engineer robust MVPs, SaaS platforms, and enterprise backend systems."
      },
      {
        question: "How long does a typical software development project take?",
        answer: "Timelines depend on scope. An initial MVP or core web application typically takes 4 to 8 weeks, while comprehensive enterprise platforms follow milestone-based agile sprints."
      }
    ],
    nearbyLocations: [
      { name: "Kannur", href: "/locations/kannur" },
      { name: "Thrissur", href: "/locations/thrissur" },
      { name: "Kochi", href: "/locations/kochi" },
      { name: "Kerala", href: "/locations/kerala" }
    ]
  },

  "thiruvananthapuram": {
    slug: "thiruvananthapuram",
    slugSegments: ["thiruvananthapuram"],
    cityOrRegion: "Thiruvananthapuram",
    parentRegion: "Kerala",
    metaTitle: "Software & AI Development Company in Thiruvananthapuram | Lucid8",
    metaDesc: "Lucid8 is a software and AI development company serving businesses and startups in Thiruvananthapuram and Technopark with custom software and AI solutions.",
    h1: "Software & AI Development Company in Thiruvananthapuram",
    tagline: "Enterprise software development, AI solutions, and secure cloud platforms in Thiruvananthapuram.",
    intro: "Lucid8 Technologies delivers software engineering and AI development services for enterprises, government entities, and innovative startups in Thiruvananthapuram (Trivandrum). Centered around Kerala's capital and the renowned Technopark ecosystem, we build secure custom software, cloud architectures, Generative AI applications, and mobile solutions.",
    regionalContext: "Thiruvananthapuram is the premier hub of IT excellence in Kerala, home to Technopark, one of India's largest technology parks. The city houses major enterprise R&D units, aerospace institutions, biotech centers, and tech startups requiring high standards in cybersecurity, data privacy, and architectural resilience.",
    softwareServices: [
      { title: "Enterprise Software & Portals", desc: "High-concurrency business management systems, role-based admin platforms, and database schemas." },
      { title: "Secure API & Backend Architectures", desc: "Spring Boot and Node.js microservices with JWT authentication and strict OWASP security compliance." }
    ],
    aiServices: [
      { title: "AI & Machine Learning Engineering", desc: "Predictive analytics, data classification pipelines, and intelligent automated workflows." },
      { title: "Private Generative AI Systems", desc: "Isolated RAG models ensuring enterprise data confidentiality and compliance." }
    ],
    webMobileServices: [
      { title: "Next.js Web Applications", desc: "High-security, WCAG-accessible web platforms with optimized Core Web Vitals." },
      { title: "Cross-Platform Mobile Apps", desc: "Robust Flutter applications with biometric security, offline storage, and push alerts." }
    ],
    industriesServed: [
      { name: "Enterprises & R&D", desc: "Scalable microservices, distributed databases, and automated testing suites." },
      { name: "Fintech & Banking", desc: "Secure transaction processing, ledger systems, and regulatory data isolation." },
      { name: "Education & EdTech", desc: "Scalable learning platforms and assessment engines (like Oxyfied)." }
    ],
    relevantProjects: [
      { title: "Oxyfied", slug: "oxyfied", desc: "Modern e-learning platform developed with Next.js and React.", category: "E-Learning" },
      { title: "VisionX", slug: "visionx", desc: "Technology startup digital presence built with React.js.", category: "IT & Software" }
    ],
    whyChooseUs: [
      { title: "Technopark-Level Engineering Standards", desc: "Clean code patterns, comprehensive testing, and strict security compliance." },
      { title: "Security-First Architecture", desc: "Integrated vulnerability assessments, tokenized sessions, and encrypted storage." }
    ],
    serviceAreaInfo: "Lucid8 Technologies provides technical solutions to organizations across Technopark Trivandrum (Phases I, II, III, and Technocity), Kazhakkoottam, Kowdiar, and Thiruvananthapuram district.",
    faqs: [
      {
        question: "Does Lucid8 provide security audits and secure software development for Trivandrum enterprises?",
        answer: "Yes, security by design is central to our engineering practice. We perform code vulnerability reviews, secure SDLC integration, and penetration testing."
      },
      {
        question: "Can you build multi-platform web and mobile systems for startups in Technopark?",
        answer: "Yes, we engineer unified architectures with Next.js for web and Flutter for iOS and Android, backed by scalable Node.js/PostgreSQL APIs."
      }
    ],
    nearbyLocations: [
      { name: "Kerala", href: "/locations/kerala" },
      { name: "Kochi", href: "/locations/kochi" },
      { name: "Kozhikode", href: "/locations/kozhikode" }
    ]
  },

  "thrissur": {
    slug: "thrissur",
    slugSegments: ["thrissur"],
    cityOrRegion: "Thrissur",
    parentRegion: "Kerala",
    metaTitle: "Software & AI Development Company in Thrissur | Lucid8",
    metaDesc: "Lucid8 is a software and AI development company serving businesses in Thrissur, building custom business software, e-commerce, websites, and mobile apps.",
    h1: "Software & AI Development Company in Thrissur",
    tagline: "Custom software engineering, AI business tools, and web/mobile development for Thrissur enterprises.",
    intro: "Lucid8 Technologies delivers custom software development, AI solutions, and modern web applications for businesses in Thrissur. As the cultural and financial hub of Kerala, Thrissur is home to leading banking institutions, jewellery conglomerates, educational centers, and healthcare networks that rely on bespoke software to power their operations.",
    regionalContext: "Thrissur boasts a strong tradition of commerce, banking, jewellery manufacturing, textile trading, and higher education. As these established businesses modernize, custom software development and AI automation provide the agility needed to streamline multi-branch operations and engage digital consumers.",
    softwareServices: [
      { title: "Multi-Branch Management Software", desc: "Custom inventory tracking, branch accounting middleware, and real-time operational reporting." },
      { title: "Custom Web Portals", desc: "Secure customer service portals and administrative dashboards built with Next.js and React." }
    ],
    aiServices: [
      { title: "AI Automation & Chatbots", desc: "Automating customer inquiries, lead qualification, and document verification for Thrissur businesses." },
      { title: "Predictive Analytics", desc: "Demand forecasting and customer purchasing analysis engineered in Python." }
    ],
    webMobileServices: [
      { title: "E-Commerce & Retail Storefronts", desc: "Multi-vendor marketplaces and high-speed online shopping systems (like ReddX Thrifty)." },
      { title: "Flutter Mobile Applications", desc: "Feature-rich iOS and Android mobile apps with instant payments and notifications." }
    ],
    industriesServed: [
      { name: "Banking & Financial Services", desc: "Secure customer dashboards, transaction tracking, and compliance logs." },
      { name: "Retail & Wholesale Jewelry", desc: "Product catalogs, custom inventory middleware, and billing integrations." },
      { name: "Education & Institutions", desc: "Modern LMS portals, student admissions, and digital course delivery (like Oxyfied)." }
    ],
    relevantProjects: [
      { title: "ReddX Thrifty", slug: "reddx-thrifty", desc: "Multi-vendor e-commerce marketplace built with WordPress and WooCommerce.", category: "E-Commerce" },
      { title: "Oxyfied", slug: "oxyfied", desc: "Modern digital e-learning platform built with Next.js and React.", category: "E-Learning" }
    ],
    whyChooseUs: [
      { title: "Tailored to Local Business Workflows", desc: "Software mapped directly to multi-location business operations." },
      { title: "High-Performance Next.js Architecture", desc: "Sub-second load times and reliable uptime." }
    ],
    serviceAreaInfo: "Lucid8 Technologies serves businesses across Thrissur, Guruvayur, Chalakudy, Kodungallur, Kunnamkulam, and the wider Thrissur district.",
    faqs: [
      {
        question: "How can businesses in Thrissur consult with Lucid8?",
        answer: "You can start a conversation via WhatsApp or email to schedule an engineering scoping call where we analyze your technical goals and provide a detailed proposal."
      },
      {
        question: "Do you build custom billing and inventory software for multi-branch retailers in Thrissur?",
        answer: "Yes, we develop custom web-based management portals with real-time stock sync, role-based access, and automated branch accounting."
      }
    ],
    nearbyLocations: [
      { name: "Kochi", href: "/locations/kochi" },
      { name: "Kozhikode", href: "/locations/kozhikode" },
      { name: "Kerala", href: "/locations/kerala" }
    ]
  },

  "bangalore": {
    slug: "bangalore",
    slugSegments: ["bangalore"],
    cityOrRegion: "Bangalore",
    metaTitle: "Software & AI Development Company in Bangalore | Lucid8",
    metaDesc: "Lucid8 Technologies is a software and AI development company in Bangalore (Bengaluru) building custom software, web applications, mobile apps, and Generative AI solutions.",
    h1: "Software & AI Development Company in Bangalore",
    tagline: "Engineering bespoke software architectures, Generative AI applications, SaaS platforms, and mobile apps for Bangalore startups and enterprises.",
    intro: "Lucid8 Technologies delivers software development and AI engineering services for startups, tech scale-ups, and enterprises in Bangalore (Bengaluru). As the Silicon Valley of India, Bengaluru demands rapid software delivery, high-concurrency systems, and cutting-edge artificial intelligence. We build custom SaaS platforms, modern Next.js web applications, Flutter mobile apps, and autonomous AI agents.",
    regionalContext: "Bangalore (Bengaluru) is the undisputed technology capital of India, housing global R&D centers, venture-backed tech startups, and innovation hubs across Indiranagar, Koramangala, HSR Layout, Whitefield, and Electronic City. Bengaluru companies operate at the bleeding edge of AI, cloud infrastructure, and product design, requiring engineering partners who build resilient, production-ready code.",
    softwareServices: [
      { title: "Custom Software & SaaS Platforms", desc: "Multi-tenant cloud platforms, subscription engines, and high-concurrency microservices." },
      { title: "API & Backend Architectures", desc: "High-throughput REST and GraphQL backend systems built with Node.js, Spring Boot, and PostgreSQL." },
      { title: "Software Modernization", desc: "Refactoring monoliths into modular cloud containers with automated CI/CD pipelines." }
    ],
    aiServices: [
      { title: "Generative AI & Custom Agents", desc: "Autonomous AI agents, enterprise RAG systems, and intelligent workflow automation." },
      { title: "Machine Learning Engineering", desc: "Predictive analytics, demand modeling, and computer vision models running on FastAPI and Python." }
    ],
    webMobileServices: [
      { title: "High-Performance Next.js Web Apps", desc: "Sub-second LCP speeds, reactive dashboards, and conversion-optimized client portals." },
      { title: "Cross-Platform Flutter Mobile Apps", desc: "Native-speed iOS and Android apps with offline synchronization and payment integrations." }
    ],
    industriesServed: [
      { name: "Tech Startups & SaaS", desc: "Fast-to-market MVPs, cloud setups, and rapid feature scaling." },
      { name: "Fintech & Payments", desc: "Secure transaction processing, ledger systems, and automated reconciliation." },
      { name: "E-Commerce & Marketplaces", desc: "High-throughput storefronts and multi-vendor marketplaces (like ReddX Thrifty)." },
      { name: "EdTech & Learning", desc: "Modern digital learning platforms (like Oxyfied) with real-time progress tracking." }
    ],
    relevantProjects: [
      { title: "ReddX Thrifty", slug: "reddx-thrifty", desc: "Multi-vendor e-commerce marketplace developed with WordPress and WooCommerce.", category: "E-Commerce" },
      { title: "Oxyfied", slug: "oxyfied", desc: "Modern digital e-learning platform built with Next.js and React.", category: "E-Learning" },
      { title: "AI-VR4U Solutions", slug: "aivr4u-solutions", desc: "IT software startup corporate website developed using React.js.", category: "IT & Software" },
      { title: "VisionX", slug: "visionx", desc: "Modern corporate website developed with React.js for an IT software startup.", category: "IT & Software" }
    ],
    whyChooseUs: [
      { title: "Silicon Valley-Grade Engineering", desc: "Modern tech stacks, security-by-design, clean git workflows, and automated tests." },
      { title: "Direct Engineer Collaboration", desc: "Work directly with seasoned software architects and AI engineers." },
      { title: "Rapid Time-to-Market", desc: "Agile sprints delivering functional milestones without bloat or delays." }
    ],
    serviceAreaInfo: "Lucid8 Technologies collaborates with innovative companies across Bangalore / Bengaluru, actively serving clients in Indiranagar, Koramangala, HSR Layout, Whitefield, Electronic City, and Bellandur.",
    faqs: [
      {
        question: "How does Lucid8 collaborate with startups and tech companies in Bangalore (Bengaluru)?",
        answer: "We act as your dedicated engineering partner, providing full-lifecycle software development, AI model integration, and cloud architecture through agile sprint deliverables and real-time WhatsApp/Slack collaboration."
      },
      {
        question: "Can you help our Bangalore startup build an AI MVP?",
        answer: "Yes, we specialize in rapidly architecting and deploying AI MVPs—including Generative AI applications, RAG pipelines, and automated agents—built on production-grade infrastructure that scales smoothly."
      },
      {
        question: "What is your typical technology stack for Bangalore projects?",
        answer: "We primarily build with Next.js, React, TypeScript, Node.js, Spring Boot, Python, PyTorch, Flutter, PostgreSQL, Redis, Docker, and AWS."
      }
    ],
    nearbyLocations: [
      { name: "Indiranagar, Bangalore", href: "/locations/bangalore/indiranagar" },
      { name: "Kerala", href: "/locations/kerala" },
      { name: "Kochi", href: "/locations/kochi" }
    ]
  },

  "bangalore/indiranagar": {
    slug: "bangalore/indiranagar",
    slugSegments: ["bangalore", "indiranagar"],
    cityOrRegion: "Indiranagar, Bangalore",
    parentRegion: "Bangalore",
    metaTitle: "Software & AI Development Company in Indiranagar | Lucid8",
    metaDesc: "Lucid8 is a software and AI development company serving startups and businesses in Indiranagar, Bangalore, building custom software, web apps, and AI solutions.",
    h1: "Software & AI Development Company in Indiranagar",
    tagline: "Custom software engineering, AI automation, and high-performance web/mobile applications for Indiranagar businesses.",
    intro: "Lucid8 Technologies provides specialized software development and AI engineering services for startups, design studios, D2C brands, and tech enterprises in Indiranagar, Bangalore. From early-stage MVPs to complex custom business software and Generative AI workflows, we deliver scalable digital architectures tailored to Indiranagar's fast-moving business ecosystem.",
    regionalContext: "Indiranagar is one of Bangalore's most prominent hubs for technology startups, venture capital networks, creative agencies, and flagship retail brands. With its dense concentration of tech founders and high-growth companies along 100 Feet Road and 12th Main, businesses in Indiranagar demand high-velocity software engineering and sophisticated AI capabilities.",
    softwareServices: [
      { title: "Startup MVPs & Custom Software", desc: "Rapidly turning product concepts into robust, scalable software platforms built with Next.js and Node.js." },
      { title: "SaaS & Cloud Platforms", desc: "Multi-tenant cloud applications with automated billing, user roles, and high concurrency." }
    ],
    aiServices: [
      { title: "Generative AI & Agent Workflows", desc: "Custom LLM integrations, autonomous AI agents, and intelligent workflow automation." },
      { title: "Customer Interaction Chatbots", desc: "Context-aware AI support and sales assistants integrated with your CRM and databases." }
    ],
    webMobileServices: [
      { title: "High-Performance Next.js Web Apps", desc: "Ultra-fast client dashboards, marketing portals, and modern web applications." },
      { title: "Flutter iOS & Android Mobile Apps", desc: "Native-grade mobile applications with offline sync and seamless payment integrations." }
    ],
    industriesServed: [
      { name: "Tech Startups & SaaS", desc: "MVP engineering, cloud infrastructure, and product scaling." },
      { name: "D2C & E-Commerce Brands", desc: "Headless shopping experiences and multi-vendor platforms (such as ReddX Thrifty)." },
      { name: "Events & Entertainment", desc: "Digital booking and ticketing systems (like Moonglade)." }
    ],
    relevantProjects: [
      { title: "ReddX Thrifty", slug: "reddx-thrifty", desc: "Multi-vendor e-commerce marketplace developed with WordPress and WooCommerce.", category: "E-Commerce" },
      { title: "Moonglade", slug: "moonglade-event-ticket-booking", desc: "Event ticket booking and management platform built with React and Node.js.", category: "Events & Ticketing" },
      { title: "AI-VR4U Solutions", slug: "aivr4u-solutions", desc: "Professional IT software startup website developed with React.js.", category: "IT & Software" }
    ],
    whyChooseUs: [
      { title: "Startup-Speed Delivery", desc: "Agile sprints focused on functional milestones and rapid product iteration." },
      { title: "Modern Design & Code Standards", desc: "Visually refined, accessible UI paired with clean, secure backend code." }
    ],
    serviceAreaInfo: "Lucid8 Technologies delivers software engineering services to startups, digital businesses, and enterprises located in and around Indiranagar, Domlur, HAL 2nd Stage, Old Airport Road, and Central Bangalore.",
    faqs: [
      {
        question: "How does Lucid8 work with startup founders in Indiranagar, Bangalore?",
        answer: "We partner with founders to turn product roadmaps into production-grade software. We handle system architecture, database modeling, frontend/backend engineering, and cloud deployment with transparent milestone tracking."
      },
      {
        question: "Can Lucid8 build an AI solution for our Indiranagar business?",
        answer: "Yes, we build custom Generative AI agents, internal knowledge search engines, and business process automation tools tailored to your operational needs."
      }
    ],
    nearbyLocations: [
      { name: "Bangalore", href: "/locations/bangalore" },
      { name: "Kerala", href: "/locations/kerala" },
      { name: "Kochi", href: "/locations/kochi" }
    ]
  }
};

export function getAllLocations(): LocationData[] {
  return Object.values(locationsData);
}

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locationsData[slug];
}
