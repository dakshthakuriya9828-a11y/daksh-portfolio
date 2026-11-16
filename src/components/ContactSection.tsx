"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  Linkedin,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Shield,
  ArrowUpRight,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Venture Discussion",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [transmissionId, setTransmissionId] = useState("");
  const [copied, setCopied] = useState(false);

  const inquiryOptions = [
    "Venture Discussion",
    "Business Collaboration",
    "Speaking & Anchoring",
    "Professional Networking",
    "General Enquiry",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Your enquiry has been successfully registered.");
        setTransmissionId(data.transmissionId || `DT-${Date.now().toString(36).toUpperCase()}`);
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Unable to send enquiry. Please check your entries.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please try again or connect via LinkedIn.");
    }
  };

  const copyDispatchText = () => {
    const text = `From: ${formData.name} (${formData.email})
Org: ${formData.organization || "N/A"}
Topic: ${formData.inquiryType}
Message: ${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" /> SECTION 09 &middot; EXECUTIVE DIALOGUE &amp; ENQUIRIES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Initiate a Dialogue
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Open to high-impact venture partnerships, business collaboration discussions, institutional speaking invitations, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Profile & Confidentiality */}
          <div className="lg:col-span-5 space-y-6">
            {/* LinkedIn Verified Card */}
            <div className="glass-card-gold p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
                  Primary Professional Channel
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-gold-500/10 text-gold-300 border border-gold-500/20">
                  Verified Profile
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Daksh Thakuriya
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Aspiring Entrepreneur &middot; BBA Scholar at IIM Bangalore &amp; IIM Udaipur
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>

              <a
                href={personal.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 rounded-2xl bg-black/40 border border-gold-500/30 hover:border-gold-500/60 hover:bg-black/60 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0A66C2]">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-white block">
                      Connect on LinkedIn
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      daksh-thakuriya
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Privacy Protection Notice Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
                <Shield className="w-4 h-4 text-gold-400" /> Executive Privacy Protocol
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct telephonic contact and personal email coordinates are deliberately shielded from automated scraping and public dissemination. Legitimate business inquiries submitted via this verified portal are reviewed directly by Daksh Thakuriya.
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-500">
                Location: Jaipur, India (IST &middot; UTC+5:30)
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Functional Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
              {status === "success" ? (
                <div className="space-y-6 text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white">
                      Enquiry Registered Successfully
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      {statusMessage}
                    </p>
                    <p className="font-mono text-xs text-gold-400 pt-1">
                      Transmission Reference: <span className="font-bold">{transmissionId}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400 font-mono">
                      <span>Sender:</span>
                      <span className="text-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between text-slate-400 font-mono">
                      <span>Category:</span>
                      <span className="text-gold-300">{formData.inquiryType}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={copyDispatchText}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gold-400" />}
                      <span>{copied ? "Copied to Clipboard" : "Copy Structured Text"}</span>
                    </button>

                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          email: "",
                          organization: "",
                          inquiryType: "Venture Discussion",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500 text-black text-xs font-mono font-semibold transition-all hover:bg-gold-400"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Direct Enquiry Interface
                    </span>
                    <span className="text-[11px] font-mono text-gold-400">
                      * All fields verified
                    </span>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-300 text-xs">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* Inquiry Category Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Nature of Dialogue
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, inquiryType: opt })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            formData.inquiryType === opt
                              ? "bg-gold-500 text-black font-semibold shadow-md shadow-gold-500/20"
                              : "bg-white/5 text-slate-400 hover:text-white border border-white/5"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-500/50 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@venture.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-500/50 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Organization / Institute / Venture (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. IIM / Firm / Enterprise Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-500/50 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Message / Proposal Overview *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding your inquiry, venture proposition, or discussion agenda..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-500/50 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl text-center text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-amber-400 shadow-xl shadow-gold-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Professional Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
