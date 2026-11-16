"use client";

import React from "react";
import { Compass, Flame, Layers, Target, Trophy, Building2, Quote, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;

  const pillars = [
    {
      title: "Athletic Tenacity & Focus",
      desc: "Training to become a National Gold Medalist in roller skating taught me what relentless conditioning, speed, and mental fortitude require under extreme pressure.",
      icon: Trophy,
      tag: "Discipline",
    },
    {
      title: "Academic & Analytical Rigor",
      desc: "Currently pursuing BBA degrees at both IIM Bangalore (DBE) and IIM Udaipur, reinforced by a 99.79 percentile in CUET GAT — mastering digital business models and strategic analytics.",
      icon: Target,
      tag: "Intellect",
    },
    {
      title: "Real Commercial Groundwork",
      desc: "Active operational manager at Triangle Events and Caterers, paired with hands-on corporate exposure across finance (Upsurely) and electronics (Nine Pointers).",
      icon: Building2,
      tag: "Execution",
    },
    {
      title: "Global Enterprise Ambition",
      desc: "Not content with incremental progress. Focused on building, incubating, and scaling multi-industry enterprises with a concrete roadmap for cross-border expansion.",
      icon: Compass,
      tag: "Vision",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5" /> SECTION 01 &middot; BRAND PHILOSOPHY
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Not just collecting qualifications. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-white">
              Cultivating the capacity to build, lead and scale.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed pt-2">
            The intersection of athletic championship discipline, elite management education at IIM Bangalore and IIM Udaipur, and real ground-level business execution in Jaipur.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 rounded-3xl space-y-6 border border-white/10">
              <span className="text-xs uppercase font-mono tracking-widest text-gold-400 block">
                The Narrative
              </span>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {personal.narrativeBio[0]}
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {personal.narrativeBio[1]}
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {personal.narrativeBio[2]}
              </p>

              {/* Hand-drawn style tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2.5">
                {[
                  "national champion mindset",
                  "IIM dual scholar",
                  "real operations manager",
                  "50+ events anchored",
                  "star kid award recipient",
                  "future-focused builder",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-hand text-lg text-gold-300 px-3 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlight Block / Core Ethos */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Ethos Callout */}
            <div className="glass-card-gold p-8 rounded-3xl relative overflow-hidden">
              <Quote className="w-10 h-10 text-gold-400/30 mb-4" />
              <blockquote className="font-display font-medium text-xl sm:text-2xl text-white leading-snug">
                &ldquo;{personal.coreEthos}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-gold-400 font-semibold uppercase tracking-wider">
                  Daksh Thakuriya
                </span>
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>

            {/* Quick Summary Matrix */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                Executive Profile Summary
              </span>
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Undergraduate</span>
                  <span className="text-xs font-semibold text-white">IIMB & IIMU</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">CUET Score</span>
                  <span className="text-xs font-semibold text-emerald-400">99.79 Percentile</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Athletics</span>
                  <span className="text-xs font-semibold text-gold-400">National Gold</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Recognition</span>
                  <span className="text-xs font-semibold text-amber-300">Star Kid Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Competence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-gold-500/30 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      0{index + 1} &middot; {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gold-400/80">
                  <span>Demonstrated Capability</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
