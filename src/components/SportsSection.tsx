"use client";

import React from "react";
import { Zap, Medal, ChevronRight, Award, Flame, Activity, Shield } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SportsSection() {
  const { rollerSkatingProgression, sportsOverview } = PORTFOLIO_DATA;

  return (
    <section id="sports" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-brand-surface/20 overflow-hidden">
      {/* Dynamic ambient sport track lines */}
      <div className="absolute inset-0 speed-stripes opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-[600px] h-[400px] bg-amber-500/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" /> SECTION 04 &middot; ATHLETIC MASTERY &amp; DISCIPLINE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Competitive Sports Achiever
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Athletic discipline forged on high-speed skating tracks, sprint lanes, kabaddi mats, and cricket fields &mdash; instilling the resilience and tactical reflexes required to lead in business.
          </p>
        </div>

        {/* SPECIAL VISUAL SHOWCASE: Roller Skating Triple Gold Progression */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">
                Pinnacle Athletic Journey
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                The Triple-Gold Roller Skating Ascent
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-mono text-xs font-semibold">
              <Medal className="w-4 h-4 text-gold-400" />
              District &rarr; State &rarr; National Progression
            </div>
          </div>

          {/* Sequential Progression Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {rollerSkatingProgression.map((stage, idx) => (
              <div
                key={stage.level}
                className={`glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between space-y-6 ${
                  stage.level === "National"
                    ? "border-gold-500/50 shadow-2xl shadow-gold-500/10 bg-gradient-to-b from-brand-card to-amber-950/20"
                    : "border-white/10"
                }`}
              >
                {/* Top Badge & Number */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                      Phase 0{idx + 1} &middot; {stage.level} Arena
                    </span>
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm ${
                        stage.level === "National"
                          ? "bg-gold-500 text-black shadow-lg shadow-gold-500/30"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <Medal className="w-5 h-5" />
                    </span>
                  </div>

                  <div>
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-gold-400 block mb-1">
                      {stage.award}
                    </span>
                    <h4 className="font-display font-bold text-2xl text-white">
                      {stage.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stage.significance}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-gold-400 font-semibold">
                    {stage.level === "National" ? "Apex National Triumph" : "Podium Cleared"}
                  </span>
                  {idx < 2 && (
                    <span className="hidden md:inline-flex items-center text-slate-500">
                      Ascending <ChevronRight className="w-4 h-4 text-gold-400" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Sport Disciplines Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Multi-Disciplinary Athletic Spectrum
            </h3>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Track &middot; Combat &middot; Court &middot; Team
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsOverview
              .filter((s) => s.name !== "Roller Skating") // Roller Skating showcased prominently above
              .map((sport) => (
                <div
                  key={sport.name}
                  className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-6 hover:border-gold-500/30 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                        {sport.category}
                      </span>
                      <Activity className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                        {sport.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {sport.keyHighlight}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-white/5">
                      {sport.accomplishments.map((acc, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1 flex-shrink-0" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                    <span className="font-semibold text-white">{sport.badge}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Athletic Mindset Callout */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
              The Athlete-Entrepreneur Edge
            </span>
            <p className="text-base sm:text-lg text-slate-200 font-medium">
              &ldquo;Competitive sports is not merely a hobby &mdash; it is an unforgiving training ground in stamina, rapid situational awareness, and the psychological grit to perform when the pressure is immense.&rdquo;
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="font-hand text-2xl text-gold-300">
              Discipline &middot; Focus &middot; Speed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
