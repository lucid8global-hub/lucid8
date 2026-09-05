"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Shield,
  Globe,
  ExternalLink,
} from "lucide-react";

const servicesGroups = [
  {
    title: "Software Engineering",
    icon: <Cpu className="w-4 h-4 text-brand-blue" />,
    items: [
      {
        name: "Software Development",
        href: "/services/software-development",
        desc: "Enterprise systems & architectures",
      },
      {
        name: "Custom Software",
        href: "/services/custom-software",
        desc: "Tailored business software solutions",
      },
      {
        name: "Web Development",
        href: "/services/web-development",
        desc: "Premium Next.js & React web apps",
      },
      {
        name: "Mobile App Dev",
        href: "/services/mobile-app-development",
        desc: "Native & cross-platform Flutter apps",
      },
      {
        name: "SaaS Development",
        href: "/services/saas-development",
        desc: "Multi-tenant cloud architectures",
      },
      {
        name: "API & Backend",
        href: "/services/api-backend-development",
        desc: "Scalable backend & database layers",
      },
    ],
  },
  {
    title: "AI & Innovation",
    icon: <Globe className="w-4 h-4 text-brand-cyan" />,
    items: [
      {
        name: "AI Development",
        href: "/services/ai-development",
        desc: "Generative AI, LLMs & agents",
      },
      {
        name: "AI & Machine Learning",
        href: "/services/ai-machine-learning",
        desc: "Predictive modeling & pipelines",
      },
      {
        name: "E-Commerce Development",
        href: "/services/ecommerce-development",
        desc: "Multi-vendor marketplaces & stores",
      },
      {
        name: "E-Learning Platforms",
        href: "/services/e-learning-development",
        desc: "Custom LMS & learning portals",
      },
      {
        name: "Automation Solutions",
        href: "/services/automation-solutions",
        desc: "Workflow & process automation",
      },
      {
        name: "Digital Transformation",
        href: "/services/digital-transformation",
        desc: "Legacy modernization & strategy",
      },
    ],
  },
  {
    title: "Cybersecurity & Quality",
    icon: <Shield className="w-4 h-4 text-brand-purple" />,
    items: [
      {
        name: "Cybersecurity",
        href: "/services/cybersecurity",
        desc: "Enterprise protection & strategy",
      },
      {
        name: "Security Testing",
        href: "/services/security-testing",
        desc: "Penetration audits & vulnerability review",
      },
      {
        name: "Software Testing",
        href: "/services/software-testing",
        desc: "QA engineering & automation suites",
      },
      {
        name: "Cloud & DevOps",
        href: "/services/cloud-devops",
        desc: "CI/CD pipelines & AWS setups",
      },
    ],
  },
];

const industries = [
  { name: "Fintech", href: "/industries/fintech" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education", href: "/industries/education" },
  { name: "E-commerce", href: "/industries/ecommerce" },
  { name: "Startups", href: "/industries/startups" },
  { name: "Enterprises", href: "/industries/enterprises" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "services" | "industries" | null
  >(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg shadow-black/20 py-4"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* =====================================================
              LOGO
          ====================================================== */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Lucid8 Technologies - Home"
            >
              <span className="text-2xl lg:text-[26px] font-bold tracking-[-0.03em] text-white font-jakarta">
                Lucid
              </span>

              <Image
                src="/lucid8.png"
                alt="Lucid8"
                width={48}
                height={48}
                priority
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* About */}
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/about"
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              About
            </Link>

            {/* =================================================
                SERVICES DROPDOWN
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "services"}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-white focus:outline-none py-2 ${
                  pathname.startsWith("/services")
                    ? "text-white font-semibold"
                    : "text-slate-300"
                }`}
              >
                <span>Services</span>

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Mega Menu */}
              {activeDropdown === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-[#0a0a0a] border border-slate-800 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-fade-in-up">
                  {servicesGroups.map((group, idx) => (
                    <div key={idx} className="space-y-4">
                      {/* Group Heading */}
                      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
                        {group.icon}

                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-jakarta">
                          {group.title}
                        </h4>
                      </div>

                      {/* Group Items */}
                      <ul className="space-y-3">
                        {group.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="group/item block rounded-md p-2 transition-colors hover:bg-slate-850"
                            >
                              <div className="text-sm font-semibold text-slate-200 group-hover/item:text-brand-cyan transition-colors">
                                {item.name}
                              </div>

                              <p className="text-xs text-slate-500 leading-tight mt-0.5">
                                {item.desc}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Services Footer */}
                  <div className="col-span-3 bg-slate-950/50 -m-6 mt-4 p-4 rounded-b-xl border-t border-slate-800 flex justify-between items-center px-6">
                    <span className="text-xs text-slate-400">
                      Need a custom software or AI architecture?
                    </span>

                    <Link
                      href="/services"
                      className="text-xs font-semibold text-brand-cyan hover:text-brand-cyan/85 flex items-center space-x-1"
                    >
                      <span>Explore all capabilities</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                INDUSTRIES DROPDOWN
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "industries"}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-white focus:outline-none py-2 ${
                  pathname.startsWith("/industries")
                    ? "text-white font-semibold"
                    : "text-slate-300"
                }`}
              >
                <span>Industries</span>

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Industries Dropdown */}
              {activeDropdown === "industries" && (
                <div className="absolute left-0 mt-1 w-56 bg-[#0a0a0a] border border-slate-800 rounded-lg shadow-2xl p-2 animate-fade-in-up">
                  <ul className="space-y-1">
                    {industries.map((ind, idx) => (
                      <li key={idx}>
                        <Link
                          href={ind.href}
                          className="block rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-850 hover:text-brand-cyan"
                        >
                          {ind.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Locations Hub */}
            <Link
              href="/locations"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith("/locations")
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              Locations
            </Link>

            {/* Projects */}
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith("/projects")
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              Projects
            </Link>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/case-studies"
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              Case Studies
            </Link>

            {/* Insights */}
            <Link
              href="/insights"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith("/insights")
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              Insights
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/contact"
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}
      {isOpen && (
        <div className="lg:hidden bg-[#000000] border-b border-slate-800 absolute top-full left-0 right-0 w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fade-in-up shadow-2xl">
          <div className="space-y-1">
            {/* About */}
            <Link
              href="/about"
              onClick={closeMenus}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              About
            </Link>

            {/* Mobile Services */}
            <div className="space-y-1">
              <span className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Services
              </span>

              {servicesGroups.flatMap((g) => g.items).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={closeMenus}
                  className="block rounded-md pl-6 pr-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Locations */}
            <div className="space-y-1 mt-3">
              <span className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Locations
              </span>
              <Link
                href="/locations/kerala"
                onClick={closeMenus}
                className="block rounded-md pl-6 pr-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                Kerala Hub
              </Link>
              <Link
                href="/locations/bangalore"
                onClick={closeMenus}
                className="block rounded-md pl-6 pr-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                Bangalore Hub
              </Link>
              <Link
                href="/locations"
                onClick={closeMenus}
                className="block rounded-md pl-6 pr-3 py-2 text-sm font-medium text-brand-cyan hover:bg-slate-800"
              >
                View All Locations →
              </Link>
            </div>

            {/* Mobile Industries */}
            <div className="space-y-1 mt-3">
              <span className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Industries
              </span>

              {industries.map((ind, idx) => (
                <Link
                  key={idx}
                  href={ind.href}
                  onClick={closeMenus}
                  className="block rounded-md pl-6 pr-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  {ind.name}
                </Link>
              ))}
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              onClick={closeMenus}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Projects
            </Link>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              onClick={closeMenus}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Case Studies
            </Link>

            {/* Insights */}
            <Link
              href="/insights"
              onClick={closeMenus}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Insights
            </Link>

            {/* Careers */}
            <Link
              href="/careers"
              onClick={closeMenus}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Careers
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMenus}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 shadow-md shadow-brand-blue/20"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}