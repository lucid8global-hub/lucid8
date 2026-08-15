"use client";

import React, { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely
    console.error("Runtime exception caught:", error);
  }, [error]);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-grid-pattern">
      <div className="relative z-10 max-w-md mx-auto px-4 text-center space-y-6">
        
        {/* Error icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 text-red-400 rounded-full border border-red-500/25">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-white font-jakarta">Application Runtime Error</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            An unexpected error occurred during client-side rendering. If this persists, please contact our support desk.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 transition-all shadow-md shadow-brand-blue/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            <span>Re-attempt Loading Page</span>
          </button>
        </div>

      </div>
    </div>
  );
}
