"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Linkedin, ShieldCheck, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-brand-surface/70 backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Massive Name Branding Header */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Personal Brand Dossier
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              DAKSH THAKURIYA <span className="text-gold-500">✳</span>
            </div>
            <p className="text-sm text-slate-400 font-mono">
              {personal.role} &middot; {personal.location}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Navigation & Quick Links */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-3 font-semibold">
              Exploration
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  Brand Philosophy
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-white transition-colors">
                  Academic Dossier
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-slate-400 hover:text-white transition-colors">
                  Trophy Wall &amp; Podiums
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-3 font-semibold">
              Discipline
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#sports" className="text-slate-400 hover:text-white transition-colors">
                  Triple Gold Skating
                </a>
              </li>
              <li>
                <a href="#sports" className="text-slate-400 hover:text-white transition-colors">
                  Track &amp; Sprint Athletics
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-slate-400 hover:text-white transition-colors">
                  50+ Institutional Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-3 font-semibold">
              Enterprises
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                  Triangle Events &amp; Caterers
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                  Upsurely &amp; Nine Pointers
                </a>
              </li>
              <li>
                <a href="#vision" className="text-slate-400 hover:text-white transition-colors">
                  4-Pillar Venture Horizon
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-3 font-semibold">
              Connectivity
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-gold-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn Network
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Initiate Business Dialogue
                </a>
              </li>
              <li className="text-slate-600">
                <span>Jaipur, Rajasthan &middot; IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DAKSH THAKURIYA. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Curated Executive Portfolio &middot; Next.js &amp; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
