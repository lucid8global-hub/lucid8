import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block relative p-6 bg-[#0a0a0a]/50 border border-slate-800/80 rounded-xl hover:border-brand-blue/40 hover:bg-[#0a0a0a]/80 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Background Glow */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" 
      />

      <div className="space-y-4 relative z-10 flex flex-col h-full justify-between">
        <div className="space-y-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/40 text-brand-cyan group-hover:bg-brand-blue/20 group-hover:text-brand-cyan transition-all duration-300">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors duration-250 font-jakarta">
              {title}
            </h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors duration-250 pt-4">
          <span>Read Capability Details</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
