import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lucid8.in";

  const staticPages = [
    "",
    "/about",
    "/services",
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

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
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

  return [...staticUrls, ...serviceUrls, ...industryUrls, ...caseUrls, ...insightUrls];
}
