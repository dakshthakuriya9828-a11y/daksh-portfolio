"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "about",
        "education",
        "achievements",
        "sports",
        "leadership",
        "experience",
        "vision",
        "contact",
      ];

      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Athletics", href: "#sports", id: "sports" },
    { name: "Leadership", href: "#leadership", id: "leadership" },
    { name: "Ventures", href: "#experience", id: "experience" },
    { name: "Vision", href: "#vision", id: "vision" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-brand-bg/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#"
              className="group flex items-center space-x-2.5 text-white tracking-wider"
              aria-label="Daksh Thakuriya Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center font-display font-bold text-black text-sm shadow-md group-hover:scale-105 transition-transform">
                DT
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-gold-400 transition-colors">
                  DAKSH THAKURIYA
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Business & Leadership
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    activeSection === link.id
                      ? "bg-gold-500/20 text-gold-300 border border-gold-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Live Status Pill & CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-400" /> Jaipur, IN
                </span>
              </div>

              <a
                href="#contact"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-amber-400 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:scale-[1.02] transition-all"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6">
          <div className="flex flex-col space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-gold-400 border-b border-white/10 pb-2">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-display font-medium tracking-wide py-2 transition-colors ${
                  activeSection === link.id ? "text-gold-400" : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Jaipur, Rajasthan · Open to Venture Opportunities</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-center text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 to-amber-500"
            >
              <span>Initiate Business Dialogue</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
