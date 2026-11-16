"use client";

import React from "react";
import { Wrench, BookOpen, Globe, Users2, Trophy, Flame, Layers, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsInterestsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" /> SECTION 07 &middot; COMPETENCIES &amp; INTELLECTUAL HORIZONS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Core Skills &amp; Intellectual Pursuits
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            The balance of interpersonal leadership capabilities honed through high-pressure execution, and intellectual curiosity fueled by extensive reading and cultural exploration.
          </p>
        </div>

        {/* Two-Column Grid: Left Skills, Right Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Executive Skills Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
                  Executive &amp; Leadership Skills
                </span>
                <span className="text-xs font-mono text-slate-500">6 Core Capabilities</span>
              </div>

              <div className="space-y-4">
                {skills.executive.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-500/20 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-display font-semibold text-base text-white group-hover:text-gold-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests & Intellectual Pursuits Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card-gold p-8 rounded-3xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
                  Curiosity &amp; Intellectual Drivers
                </span>
                <span className="text-xs font-mono text-slate-400">Personal Depth</span>
              </div>

              {/* Bento cards for interests */}
              <div className="space-y-4">
                {/* Reading Spotlight */}
                <div className="p-5 rounded-2xl bg-black/40 border border-gold-500/30 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-lg text-white">
                        Avid Reader &middot; 20+ Books
                      </h4>
                      <span className="text-[10px] font-mono text-gold-300 uppercase">
                        Intellectual Foundation
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Deep immersion across business biographies, venture case studies, psychological decision-making, and leadership philosophies.
                    </p>
                  </div>
                </div>

                {/* Networking & Human Capital */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <Users2 className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-white">
                      Strategic Networking
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Actively cultivating relationships with entrepreneurs, academic professors, sports mentors, and venture creators.
                    </p>
                  </div>
                </div>

                {/* Travel & Cultural Perspective */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <Globe className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-white">
                      Travel &amp; Cultural Immersion
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Exploring diverse regional ecosystems and consumer dynamics to inform international market perspectives.
                    </p>
                  </div>
                </div>

                {/* Competitive Sports & Games */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <Trophy className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-white">
                      Sports &amp; Games
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Competitive engagement that sharpens reflexes, psychological poise under fatigue, and team camaraderie.
                    </p>
                  </div>
                </div>

                {/* Business & Entrepreneurship */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <Flame className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-white">
                      Business &amp; Entrepreneurship
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Continuous analysis of business models, industry unit economics, and emerging market disruptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
