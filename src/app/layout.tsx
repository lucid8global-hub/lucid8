import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd, { getOrganizationSchema, getWebSiteSchema } from "../components/JsonLd";
import { siteConfig } from "../data/seo/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Software & AI Development Company in Kerala | Lucid8 Technologies",
    template: "%s | Lucid8 Technologies"
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Software & AI Development Company in Kerala | Lucid8 Technologies",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & AI Development Company in Kerala | Lucid8 Technologies",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased scroll-smooth`}>
      <head>
        <JsonLd schema={[getOrganizationSchema(), getWebSiteSchema()]} />
      </head>
      <body className="min-h-full flex flex-col bg-[#000000] text-slate-200 selection:bg-brand-cyan/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

