import { MetadataRoute } from "next";
import { getAllProjects } from "../data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lucid8.in";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/case-studies",
    "/insights",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const servicesSlugs = [
    "software-development",
    "web-development",
    "mobile-app-development",
    "ai-machine-learning",
    "cloud-devops",
    "cybersecurity",
    "security-testing",
    "software-testing",
    "api-backend-development",
    "automation-solutions",
    "digital-transformation",
  ];

  const industriesSlugs = [
    "fintech",
    "healthcare",
    "education",
    "ecommerce",
    "startups",
    "enterprises",
  ];

  const caseStudiesSlugs = [
    "distributed-transaction-middleware",
    "telehealth-scheduling-core",
  ];

  const insightsSlugs = [
    "secure-software-development",
    "ai-business-automation",
    "web-app-security-best-practices",
    "software-testing-early-start",
    "building-scalable-web-applications",
    "api-security-fundamentals",
    "cloud-security-best-practices",
    "ai-role-software-testing",
  ];

  const projects = getAllProjects();

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : (page === "/projects" ? 0.85 : 0.8),
  }));

  const serviceUrls = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const industryUrls = industriesSlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectUrls = projects.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const caseUrls = caseStudiesSlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const insightUrls = insightsSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticUrls, ...serviceUrls, ...industryUrls, ...projectUrls, ...caseUrls, ...insightUrls];
}
