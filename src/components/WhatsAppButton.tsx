"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Create context-aware pre-filled messages
  const getWhatsAppLink = () => {
    const baseUrl = "https://wa.me/918281184608";
    let text = "Hello Lucid8, I would like to discuss a software engineering project.";

    if (pathname.includes("cybersecurity") || pathname.includes("security-testing")) {
      text = "Hello Lucid8, I would like to discuss cybersecurity and security auditing services.";
    } else if (pathname.includes("ai-machine-learning") || pathname.includes("automation")) {
      text = "Hello Lucid8, I would like to discuss an AI, Machine Learning, or automation project.";
    } else if (pathname.includes("software-testing")) {
      text = "Hello Lucid8, I would like to discuss QA and software testing automation services.";
    } else if (pathname.includes("digital-transformation")) {
      text = "Hello Lucid8, I would like to discuss digital transformation and cloud modernization.";
    } else if (pathname.includes("industries")) {
      const industry = pathname.split("/").pop() || "";
      text = `Hello Lucid8, I would like to discuss technical solutions for the ${industry} industry.`;
    } else if (pathname.includes("careers")) {
      text = "Hello Lucid8, I am interested in exploring career opportunities with your engineering team.";
    }

    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a Lucid8 Expert on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-brand-blue hover:bg-brand-blue/90 text-black rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group hover:shadow-brand-blue/20"
    >
      <MessageCircle className="w-6 h-6 fill-black text-black group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 border border-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
        Talk to an Expert
      </span>
    </a>
  );
}
