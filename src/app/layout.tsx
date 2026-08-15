import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucid8 Technologies | Secure, Intelligent & Scalable Digital Solutions",
    template: "%s | Lucid8 Technologies"
  },
  description: "Lucid8 helps businesses build secure software, leverage artificial intelligence, strengthen cybersecurity, and deliver reliable digital experiences.",
  metadataBase: new URL("https://lucid8.in"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Lucid8 Technologies | Secure, Intelligent & Scalable Digital Solutions",
    description: "Lucid8 helps businesses build secure software, leverage artificial intelligence, strengthen cybersecurity, and deliver reliable digital experiences.",
    url: "https://lucid8.in",
    siteName: "Lucid8 Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucid8 Technologies | Secure, Intelligent & Scalable Digital Solutions",
    description: "Lucid8 helps businesses build secure software, leverage artificial intelligence, strengthen cybersecurity, and deliver reliable digital experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased scroll-smooth`}>
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
