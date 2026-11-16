"use client";

import React from "react";
import { Mic, Shield, Users, Crown, Calendar, Sparkles, Building } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function LeadershipSection() {
  const { leadership } = PORTFOLIO_DATA;

  // Split into anchoring spotlight and structural roles
  const anchoringRole = leadership.find((r) => r.roleType === "anchoring");
  const otherRoles = leadership.filter((r) => r.roleType !== "anchoring");

  return (
    <section id="leadership" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5" /> SECTION 05 &middot; LEADERSHIP &amp; RESPONSIBILITY
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Stage Command, Captaincy &amp; Governance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Tested in high-visibility arenas &mdash; from commanding school athletic contingents to anchoring institutional forums attended by state and national leaders.
          </p>
        </div>

        {/* FEATURE SPOTLIGHT: Institutional Anchoring & VIP Dignitaries */}
        {anchoringRole && (
          <div className="glass-card-gold p-8 sm:p-10 rounded-3xl mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest">
                  <Mic className="w-4 h-4" /> Apex Public Speaking &amp; Stage Command
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
                  Event Host &amp; Master of Ceremonies &mdash; 50+ Institutional Convocations
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Trusted to helm major institutional gatherings, formal assemblies, and high-stakes state assemblies. Hosted landmark convocations graced by leading constitutional figures:
                </p>

                {/* VIP Dignitary Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/30 flex items-start gap-3">
                    <Building className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] font-mono text-gold-300 uppercase block tracking-wider font-semibold">
                        Chief Minister of Rajasthan
                      </span>
                      <p className="text-sm font-display font-bold text-white mt-0.5">
                        Shri Bhajan Lal Sharma
                      </p>
                      <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                        State-Level Institutional Gathering
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/30 flex items-start gap-3">
                    <Building className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] font-mono text-gold-300 uppercase block tracking-wider font-semibold">
                        Union Cabinet Minister (Govt. of India)
                      </span>
                      <p className="text-sm font-display font-bold text-white mt-0.5">
                        Shri Gajendra Singh Shekhawat
                      </p>
                      <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                        National Institutional Conclave
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <ul className="space-y-2">
                    {anchoringRole.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Impact Metric Block */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/50 border border-white/10 text-center space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Track Record
                </span>
                <div className="font-display font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">
                  50+
                </div>
                <span className="text-sm font-semibold text-white">
                  Events Hosted &amp; Anchored
                </span>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  Flawless crowd engagement, protocol decorum, and spontaneous stage poise.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Governance & Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherRoles.map((role) => (
            <div
              key={role.title}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-6 group hover:border-gold-500/30 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                    {role.impactBadge}
                  </span>
                  {role.period && (
                    <span className="text-[11px] font-mono text-slate-500">
                      {role.period}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                    {role.title}
                  </h4>
                  <span className="text-xs font-mono text-slate-400 block mt-1">
                    {role.organization}
                  </span>
                </div>

                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Student Leadership</span>
                <span className="text-gold-400">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
