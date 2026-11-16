"use client";

import React, { useState } from "react";
import { Trophy, Award, Sparkles, Filter, CheckCircle2, TrendingUp, Mic, Star } from "lucide-react";
import { PORTFOLIO_DATA, AchievementItem } from "@/data/portfolioData";

export default function AchievementsSection() {
  const { achievements } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredAchievements = achievements.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "academic") return item.category === "academic";
    if (activeFilter === "entrepreneurship") return item.category === "entrepreneurship";
    if (activeFilter === "speaking") return item.category === "speaking" || item.category === "honor";
    return true;
  });

  return (
    <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-500/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" /> SECTION 03 &middot; EDITORIAL TROPHY WALL
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Academic &amp; Competitive Podiums
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Tested across national aptitude arenas, national corporate quizzes, premier management conclaves, and high-pressure startup pitching stages.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.02] p-1.5 rounded-2xl border border-white/10">
            {[
              { id: "all", label: "All Podiums" },
              { id: "academic", label: "National Aptitude & Quiz" },
              { id: "entrepreneurship", label: "Startups & Strategy" },
              { id: "speaking", label: "Oratory & Honors" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium tracking-wide transition-all ${
                  activeFilter === tab.id
                    ? "bg-gold-500 text-black font-semibold shadow-md shadow-gold-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Distinction Spotlight: CUET 99.79 Percentile */}
        <div className="glass-card-gold p-8 sm:p-10 rounded-3xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/10 blur-[90px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Apex Aptitude Distinction
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
                CUET GAT 2026 &mdash; 99.79 Percentile
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Secured an exceptional 99.79 percentile in the Common University Entrance Test (General Aptitude Test), ranking within the top 0.21% of candidates nationwide. Demonstrates elite analytical reasoning, mathematical logic, and quantitative aptitude under standardized national evaluation.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                  National Testing Agency (NTA)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Top 0.21% All-India Rank Tier
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-gold-500/30 text-center space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                Percentile Score
              </span>
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">
                99.79
              </div>
              <span className="text-xs font-mono text-gold-300/80">
                CUET GAT Nationwide
              </span>
            </div>
          </div>
        </div>

        {/* Trophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements
            .filter((a) => a.id !== "cuet") // CUET highlighted above
            .map((item) => (
              <div
                key={item.id}
                className="glass-card p-7 rounded-3xl flex flex-col justify-between space-y-6 group hover:border-gold-500/40 relative overflow-hidden"
              >
                {/* Top Badge & Metric */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-gold-500/10 text-gold-300 border border-gold-500/20">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.metric}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gold-400 font-semibold uppercase tracking-wider block mb-1">
                      {item.rank}
                    </span>
                    <h4 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400 block mt-1">
                      {item.organization}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verification Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Verified Record
                  </span>
                  <span className="text-gold-400 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
