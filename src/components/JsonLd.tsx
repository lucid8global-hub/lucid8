import React from "react";
import { siteConfig } from "../data/seo/site";

interface JsonLdProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 1. Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    sameAs: [
      siteConfig.socialLinks.github,
      siteConfig.socialLinks.whatsapp
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Kerala",
        containsPlace: ["Kochi", "Kannur", "Kozhikode", "Thiruvananthapuram", "Thrissur"]
      },
      {
        "@type": "City",
        name: "Bangalore",
        alternateName: "Bengaluru",
        containsPlace: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield"]
      }
    ],
    knowsAbout: siteConfig.servicesOffered
  };
}

// 2. WebSite Schema
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo
      }
    }
  };
}

// 3. Service Schema
export function getServiceSchema({
  name,
  description,
  url,
  category = "Software Development",
  areaServed = ["Kerala", "Bangalore", "India"]
}: {
  name: string;
  description: string;
  url: string;
  category?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: category,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    url: `${siteConfig.url}${url}`,
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    }))
  };
}

// 4. Local Business / Service Area Schema (truthful, no fake address claims)
export function getLocalBusinessSchema({
  locationName,
  description,
  url,
  parentRegion
}: {
  locationName: string;
  description: string;
  url: string;
  parentRegion?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - ${locationName}`,
    description,
    url: `${siteConfig.url}${url}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: locationName,
      containedInPlace: parentRegion ? { "@type": "AdministrativeArea", name: parentRegion } : undefined
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software & AI Development Services",
      itemListElement: siteConfig.servicesOffered.map((service, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service
        },
        position: idx + 1
      }))
    }
  };
}

// 5. BreadcrumbList Schema
export function getBreadcrumbListSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`
    }))
  };
}

// 6. Article Schema
export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  author,
  category
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: author || siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo
      }
    },
    articleSection: category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${url}`
    }
  };
}

// 7. Project / SoftwareApplication Schema
export function getProjectSchema({
  name,
  description,
  url,
  category,
  technologies = []
}: {
  name: string;
  description: string;
  url: string;
  category: string;
  technologies?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: category,
    operatingSystem: "Web / Cloud / Cross-Platform",
    url: `${siteConfig.url}${url}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    keywords: technologies.join(", ")
  };
}
