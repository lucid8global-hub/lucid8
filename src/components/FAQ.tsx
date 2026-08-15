"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-800/80 rounded-xl overflow-hidden bg-[#0a0a0a]/30 transition-all duration-350"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center w-full px-5 py-4 text-left font-semibold text-white hover:bg-slate-800/20 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base pr-4 text-slate-100 group-hover:text-brand-cyan">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-188 text-brand-cyan" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 border-t border-slate-800/60 bg-[#0a0a0a]/10" : "max-h-0"
              }`}
            >
              <div className="px-5 py-4 text-sm text-slate-400 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
