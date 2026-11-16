"use client";

import React from "react";
import { Sparkles, HeartPulse, TrendingUp, Factory, Globe2, ArrowUpRight, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function VisionSection() {
  const { vision } = PORTFOLIO_DATA;

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "HeartPulse":
        return HeartPulse;
      case "TrendingUp":
        return TrendingUp;
      case "Factory":
        return Factory;
      case "Globe2":
        return Globe2;
      default:
        return Compass;
    }
  };

  return (
    <section id="vision" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-brand-surface/40 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cobalt-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" /> SECTION 08 &middot; ENTREPRENEURIAL HORIZONS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Strategic Vision &amp; Venture Roadmap
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Where disciplined preparation meets long-term enterprise &mdash; charting the multi-industry horizons I am systematically building towards.
          </p>
        </div>

        {/* Central Core Ambition Banner */}
        <div className="glass-card-gold p-8 sm:p-12 rounded-3xl mb-16 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block font-semibold">
              The Guiding Principle
            </span>
            <blockquote className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug">
              &ldquo;{vision.statement}&rdquo;
            </blockquote>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
              {vision.subtext}
            </p>
          </div>
        </div>

        {/* 4-Pillar Interactive Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vision.pillars.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            return (
              <div
                key={pillar.number}
                className="glass-card p-7 rounded-3xl flex flex-col justify-between space-y-6 hover:border-gold-500/40 transition-all group"
              >
                <div className="space-y-5">
                  {/* Top indicator & Stage */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-3xl text-gold-400/80">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {pillar.timelineStage}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-mono text-gold-400/90 block mt-1">
                      {pillar.strategicFocus}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Target Horizon</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
