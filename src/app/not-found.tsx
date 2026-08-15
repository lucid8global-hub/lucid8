import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-grid-pattern">
      <div className="relative z-10 max-w-md mx-auto px-4 text-center space-y-6 animate-fade-in-up">
        
        {/* Graphic Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 border border-slate-800 text-brand-purple rounded-full">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white font-jakarta">404 - Page Not Found</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page you are looking for does not exist or has been relocated to another technical folder.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all"
          >
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-slate-300 border border-slate-800 hover:bg-slate-800/30 transition-colors"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
