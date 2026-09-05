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
  relatedServiceSlug?: string;
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
      "A multi-vendor e-commerce marketplace developed with WordPress and WooCommerce, bringing multiple sellers and products together in one online shopping platform.",
    fullDescription:
      "ReddX Thrifty is a multi-vendor e-commerce marketplace built with WordPress, WooCommerce, and PHP. The platform provides an online marketplace experience where multiple vendors can showcase, manage, and sell their products through a centralized shopping platform with secure checkout and responsive navigation.",
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
      "Responsive e-commerce experience across devices",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-rose-500/20 to-orange-700/10",
    relatedServiceSlug: "ecommerce-development"
  },

  {
    id: "proj-2",
    slug: "oxyfied",
    title: "Oxyfied",
    tagline: "Modern e-learning platform for online education",
    category: "E-Learning",
    sector: "Education & E-Learning",
    description:
      "A modern digital e-learning platform developed with Next.js, React, and TypeScript for delivering online courses and educational experiences.",
    fullDescription:
      "Oxyfied is an e-learning platform built with Next.js, React, and TypeScript, designed to provide a modern digital learning experience. The platform provides an online environment for delivering courses, curriculum modules, and educational content to learners with fast page rendering and clean responsiveness.",
    featured: true,
    status: "Live",
    year: "2026",
    liveUrl: "https://oxyfied.com/",
    technologies: ["Next.js", "React", "TypeScript"],
    metrics: [],
    highlights: [
      "Modern e-learning platform architecture",
      "Online course and curriculum delivery",
      "Responsive learner experience",
      "Built with Next.js, React, and TypeScript",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-blue-500/20 to-cyan-700/10",
    relatedServiceSlug: "e-learning-development"
  },

  {
    id: "proj-3",
    slug: "moonglade-event-ticket-booking",
    title: "Moonglade Event Ticket Booking",
    tagline: "Event ticket booking and management platform",
    category: "Events & Ticketing",
    sector: "Events & Entertainment",
    description:
      "An online event ticket booking platform developed with React and Node.js for event discovery, ticket reservation, and booking management.",
    fullDescription:
      "Moonglade is an event ticket booking platform built with React and Node.js. The system provides an online experience for users to discover events and book tickets through a dedicated web-based ticketing platform with streamlined booking and verification flows.",
    featured: true,
    status: "Live",
    year: "2026",
    liveUrl: "https://ticket.moonglade.live/",
    technologies: ["React", "Node.js"],
    metrics: [],
    highlights: [
      "Online event ticket booking and reservation",
      "Event-focused web experience",
      "React-based frontend interface",
      "Node.js backend architecture",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-purple-500/20 to-indigo-700/10",
    relatedServiceSlug: "web-development"
  },

  {
    id: "proj-4",
    slug: "aivr4u-solutions",
    title: "AI-VR4U Solutions",
    tagline: "Professional IT software startup website",
    category: "IT & Software",
    sector: "IT & Software",
    description:
      "A professional corporate website developed with React.js for an IT software startup presenting technology-focused digital solutions.",
    fullDescription:
      "AI-VR4U Solutions is a professional IT software startup website developed using React.js. The website provides the company with a modern digital presence for presenting its technology-focused services and software solutions.",
    featured: false,
    status: "Live",
    year: "2026",
    liveUrl: "https://www.aivr4usolutions.com/",
    technologies: ["React.js"],
    metrics: [],
    highlights: [
      "Professional corporate website",
      "Modern React.js frontend architecture",
      "Technology-focused digital presence",
      "Responsive web experience across mobile and desktop",
    ],
    challenges: [],
    solutions: [],
    accentColor: "from-emerald-500/20 to-teal-700/10",
    relatedServiceSlug: "web-development"
  },

  {
    id: "proj-5",
    slug: "visionx",
    title: "VisionX",
    tagline: "Modern IT software startup website",
    category: "IT & Software",
    sector: "IT & Software",
    description:
      "A modern corporate website developed with React.js for an IT software startup presenting software and technology offerings.",
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
    relatedServiceSlug: "web-development"
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