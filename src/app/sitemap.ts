import { MetadataRoute } from "next";
import { getAllProjects } from "../data/projects";
import { getAllServices } from "../data/seo/services";
import { getAllLocations } from "../data/seo/locations";
import { getAllInsights } from "../data/seo/insights";
import { siteConfig } from "../data/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/services",
    "/locations",
    "/projects",
    "/case-studies",
    "/insights",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
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

  const services = getAllServices();
  const locations = getAllLocations();
  const projects = getAllProjects();
  const insights = getAllInsights();

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : (page === "/projects" || page === "/services" || page === "/locations" ? 0.9 : 0.8),
  }));

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const locationUrls = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const projectUrls = projects.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const insightUrls = insights.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
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

  return [
    ...staticUrls,
    ...serviceUrls,
    ...locationUrls,
    ...projectUrls,
    ...insightUrls,
    ...industryUrls,
    ...caseUrls
  ];
}
