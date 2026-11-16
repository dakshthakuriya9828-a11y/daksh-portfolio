"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Trophy,
  Sparkles,
  MapPin,
  GraduationCap,
  Medal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-subtle">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-500/15 via-gold-500/10 to-transparent blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[480px] h-[380px] bg-cobalt-600/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-600/5 blur-[120px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
            Aspiring Entrepreneur &middot; Business &middot; Leadership &middot; Athletics
          </span>
        </div>

        {/* 12-Column Hero Grid: Left Typography + Right Portrait Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-hand text-2xl sm:text-3xl text-gold-400 block tracking-wide">
                Hello, I am
              </span>
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.95]">
                DAKSH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-gold-400">
                  THAKURIYA
                </span>
                <span className="text-gold-500 ml-2 inline-block">✳</span>
              </h1>
            </div>

            <div className="pt-1">
              <p className="font-display text-xl sm:text-2xl text-slate-200 font-medium max-w-2xl leading-snug">
                &ldquo;{personal.headline}&rdquo;
              </p>
              <p className="mt-3.5 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                {personal.supportingIntro}
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#achievements"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-black font-semibold text-sm tracking-wide shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:scale-[1.02] transition-all"
              >
                <Trophy className="w-4 h-4 text-black" />
                <span>Explore Achievements</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-sm tracking-wide transition-all backdrop-blur-md"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Read Story &amp; Vision</span>
              </a>
            </div>

            {/* Credibility Micro-Badges Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                <span>IIM Bangalore (BBA DBE)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                <span>IIM Udaipur (BBA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>99.79%ile CUET GAT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span>National Gold Medalist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Backing ambient gold aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-gold-500/30 via-amber-500/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Luxury Frame Container */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/10 via-brand-card/90 to-black/80 border border-white/15 backdrop-blur-2xl shadow-2xl">
                {/* Top Corner Details */}
                <div className="flex items-center justify-between px-3 pt-1 pb-2 text-[10px] font-mono uppercase tracking-widest text-gold-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                    Verified Identity
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-gold-400" /> Jaipur, IN
                  </span>
                </div>

                {/* Portrait Image Container - Natural 3:4 Proportions with crisp framing */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner group">
                  <Image
                    src={personal.portraitUrl || "/images/daksh.jpg"}
                    alt="Daksh Thakuriya — Aspiring Entrepreneur and Business Leader"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Subtle vignette gradient overlay at the base for contrast and legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Lower Card Overlay inside Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white tracking-wide">
                        DAKSH THAKURIYA
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-gold-500/20 text-gold-300 border border-gold-500/30 uppercase font-semibold">
                        2026 Edition
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-0.5">
                      <span className="flex items-center gap-1 text-gold-400 font-medium">
                        <Medal className="w-3 h-3" /> National Gold Medalist
                      </span>
                      <span className="text-slate-400">
                        Dual IIM Scholar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Accents / Editorial Strip */}
                <div className="pt-3 px-3 pb-1 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="font-hand text-lg text-gold-300">
                    &ldquo;Building what comes next&rdquo;
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">
                    IIMB &middot; IIMU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex items-center justify-between text-xs font-mono text-slate-400">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors group"
        >
          <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-gold-400/50 transition-colors">
            <span className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
          </div>
          <span className="uppercase tracking-widest text-[11px]">
            Scroll to explore journey
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-4 text-slate-500 uppercase text-[10px] tracking-widest">
          <span>Ambition</span>
          <span>&middot;</span>
          <span>Leadership</span>
          <span>&middot;</span>
          <span>Discipline</span>
          <span>&middot;</span>
          <span>Scale</span>
        </div>
      </div>
    </section>
  );
}
