import React from "react";
import Link from "next/link";
import { MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "SaaS Development", href: "/services/saas-development" },
    { name: "E-Commerce Development", href: "/services/ecommerce-development" },
    { name: "E-Learning Platforms", href: "/services/e-learning-development" },
  ];

  const locationLinks = [
    { name: "Kerala", href: "/locations/kerala" },
    { name: "Kochi", href: "/locations/kochi" },
    { name: "Kannur", href: "/locations/kannur" },
    { name: "Kozhikode", href: "/locations/kozhikode" },
    { name: "Thiruvananthapuram", href: "/locations/thiruvananthapuram" },
    { name: "Thrissur", href: "/locations/thrissur" },
    { name: "Bangalore", href: "/locations/bangalore" },
    { name: "Indiranagar", href: "/locations/bangalore/indiranagar" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects & Portfolio", href: "/projects" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights & Articles", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Expert", href: "/contact" },
  ];

  return (
    <footer className="bg-[#000000] border-t border-slate-800/80 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-white font-jakarta">
                Lucid<span className="text-brand-cyan font-extrabold">8</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Lucid8 Technologies is a software and AI development company in Kerala and Bangalore building custom software, web applications, mobile apps, AI solutions, e-commerce platforms, e-learning systems and digital products.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-brand-cyan" />
                <a
                  href="https://wa.me/918281184608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-200 hover:text-brand-cyan transition-colors"
                >
                  +91 82811 84608
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a
                  href="mailto:lucid8global@gmail.com"
                  className="text-sm font-semibold text-slate-200 hover:text-brand-blue transition-colors"
                >
                  lucid8global@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-jakarta mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-jakarta mb-5">
              Locations
            </h3>
            <ul className="space-y-3">
              {locationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-jakarta mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            © 2026 Lucid8 Technologies. All rights reserved. Software &amp; AI Development in Kerala &amp; Bangalore.
          </div>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-350 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-350 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-350 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
