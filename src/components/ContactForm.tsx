"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "software-development",
    budget: "$10,000 - $25,000",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Please describe your project or inquiry.";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Please write a more descriptive outline (minimum 20 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      // Simulate enterprise secure form submission (API response simulation)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "software-development",
        budget: "$10,000 - $25,000",
        description: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#0a0a0a]/40 border border-brand-cyan/30 p-8 rounded-2xl text-center space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-cyan/10 text-brand-cyan rounded-full">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white font-jakarta">Inquiry Received Successfully</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Lucid8 Technologies. Our consulting engineering team will review your project details and get back to you within 24 business hours.
          </p>
        </div>
        <div>
          <button
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold text-brand-cyan hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#0a0a0a]/20 border border-slate-800/80 p-8 rounded-2xl">
      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start space-x-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>An error occurred while submitting your message. Please try again or chat directly on WhatsApp.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full bg-[#000000] border ${
              errors.name ? "border-red-500" : "border-slate-800 focus:border-brand-blue"
            } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`w-full bg-[#000000] border ${
              errors.email ? "border-red-500" : "border-slate-800 focus:border-brand-blue"
            } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enterprise Inc."
            className="w-full bg-[#000000] border border-slate-800 focus:border-brand-blue rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Phone / Mobile
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 99999 99999"
            className="w-full bg-[#000000] border border-slate-800 focus:border-brand-blue rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Service Dropdown */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Required Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-[#000000] border border-slate-800 focus:border-brand-blue rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          >
            <option value="software-development">Custom Software Development</option>
            <option value="web-development">Web Application Development</option>
            <option value="mobile-app-development">Mobile App Development</option>
            <option value="ai-machine-learning">Artificial Intelligence & ML</option>
            <option value="cybersecurity">Cybersecurity Strategy</option>
            <option value="security-testing">Penetration & Security Testing</option>
            <option value="software-testing">Software Testing & QA</option>
            <option value="cloud-devops">Cloud & DevOps Engineering</option>
            <option value="automation-solutions">Business Automation Solutions</option>
            <option value="digital-transformation">Digital Transformation</option>
          </select>
        </div>

        {/* Project Budget Dropdown */}
        
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe your objectives, timelines, and technical requirements..."
          className={`w-full bg-[#000000] border ${
            errors.description ? "border-red-500" : "border-slate-800 focus:border-brand-blue"
          } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none`}
        />
        {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 hover:shadow-lg hover:shadow-brand-blue/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="flex items-center space-x-2">
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              <span>Processing Request...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Submit Project Inquiry</span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
