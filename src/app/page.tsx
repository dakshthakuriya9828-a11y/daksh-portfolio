import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import SportsSection from "@/components/SportsSection";
import LeadershipSection from "@/components/LeadershipSection";
import BusinessExperienceSection from "@/components/BusinessExperienceSection";
import SkillsInterestsSection from "@/components/SkillsInterestsSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text relative selection:bg-gold-500/30 selection:text-gold-300">
      {/* Global Navigation */}
      <Navbar />

      {/* SECTION A — HERO */}
      <HeroSection />

      {/* Kinetic Divider Ticker */}
      <MarqueeTicker />

      {/* SECTION B — ABOUT ME */}
      <AboutSection />

      {/* SECTION C — EDUCATION */}
      <EducationSection />

      {/* SECTION D — ACHIEVEMENTS */}
      <AchievementsSection />

      {/* Kinetic Reverse Divider Ticker */}
      <MarqueeTicker reverse />

      {/* SECTION E — SPORTS ACHIEVEMENTS */}
      <SportsSection />

      {/* SECTION F — LEADERSHIP & RESPONSIBILITY */}
      <LeadershipSection />

      {/* SECTION G — BUSINESS & PROFESSIONAL EXPERIENCE */}
      <BusinessExperienceSection />

      {/* SECTION H — SKILLS & INTERESTS */}
      <SkillsInterestsSection />

      {/* SECTION I — ENTREPRENEURIAL VISION */}
      <VisionSection />

      {/* SECTION J — CONTACT & BUSINESS ENQUIRIES */}
      <ContactSection />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
