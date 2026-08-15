"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on the homepage
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((p) => p);

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center space-x-2 text-xs text-slate-400 py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28"
    >
      <Link 
        href="/" 
        className="hover:text-white flex items-center space-x-1 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      
      {paths.map((path, idx) => {
        const routeTo = `/${paths.slice(0, idx + 1).join("/")}`;
        const isLast = idx === paths.length - 1;
        const displayName = path
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-slate-655" />
            {isLast ? (
              <span className="text-brand-cyan font-semibold tracking-wide" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link 
                href={routeTo} 
                className="hover:text-white transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
