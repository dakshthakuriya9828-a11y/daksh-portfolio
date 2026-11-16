"use client";

import React from "react";
import { GraduationCap, BookOpen, Award, CheckCircle2, Clock } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-brand-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" /> SECTION 02 &middot; ACADEMIC DOSSIER
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Academic Pedigree &amp; Foundations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Rigorous business management scholarship across India&rsquo;s premier institutes of management, grounded by strong foundational secondary schooling in Jaipur.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {education.map((item, index) => {
            const isIIM = item.institution.includes("Management");
            return (
              <div key={item.institution + item.degree} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center ${
                    isIIM
                      ? "bg-gold-500 border-gold-300 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                      : "bg-brand-bg border-white/40"
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${isIIM ? "bg-black" : "bg-white"}`} />
                </div>

                {/* Card Content */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl transition-all ${
                    isIIM ? "glass-card-gold" : "glass-card"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-slate-300">
                      <Clock className="w-3 h-3 text-gold-400" />
                      {item.period}
                    </span>

                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-gold-500/10 text-gold-300 border border-gold-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-gold-300 transition-colors">
                    {item.institution}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-slate-200 mt-1">
                    {item.degree}
                  </p>

                  {item.highlight && (
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-3xl">
                      {item.highlight}
                    </p>
                  )}

                  {/* Score Pill / Distinction */}
                  {item.score && (
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {item.scoreLabel}:
                      </span>
                      <span
                        className={`text-sm font-mono font-bold px-3 py-1 rounded-md border ${
                          item.score === "Percentage to be added"
                            ? "bg-slate-800 text-slate-300 border-slate-700 italic"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        }`}
                      >
                        {item.score}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
