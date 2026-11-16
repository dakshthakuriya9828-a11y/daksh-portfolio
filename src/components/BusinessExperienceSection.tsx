"use client";

import React from "react";
import { Briefcase, Building2, TrendingUp, Cpu, HeartPulse, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function BusinessExperienceSection() {
  const { businessExperience } = PORTFOLIO_DATA;

  const getIndustryIcon = (industry: string) => {
    if (industry.includes("Hospitality") || industry.includes("Event")) return Building2;
    if (industry.includes("Finance")) return TrendingUp;
    if (industry.includes("Electronics")) return Cpu;
    return HeartPulse;
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-brand-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" /> SECTION 06 &middot; COMMERCIAL ACUMEN &amp; VENTURE IMMERSION
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Business &amp; Professional Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Hands-on exposure to live business operations &mdash; managing active event logistics, exploring financial workflows, studying electronics distribution, and researching consumer wellness.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessExperience.map((exp) => {
            const Icon = getIndustryIcon(exp.industry);
            const isManager = exp.nature === "Operational Management";

            return (
              <div
                key={exp.company + exp.role}
                className={`p-8 rounded-3xl flex flex-col justify-between space-y-6 transition-all ${
                  isManager ? "glass-card-gold" : "glass-card"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-white/5 border border-white/10 text-slate-300">
                      {exp.nature}
                    </span>

                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-gold-500/10 text-gold-300 border border-gold-500/20">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-slate-200 mt-0.5">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-xs font-mono text-slate-400">
                        <span>Industry: {exp.industry}</span>
                        {exp.period && (
                          <>
                            <span>&middot;</span>
                            <span className="text-gold-400">{exp.period}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-2.5 pt-3 border-t border-white/5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-400">Practical Groundwork</span>
                  <span className="text-gold-400 font-semibold uppercase tracking-wider">
                    {exp.nature === "Operational Management" ? "Active Manager" : "Practicum"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
