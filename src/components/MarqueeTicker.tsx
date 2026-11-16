import React from "react";

interface MarqueeTickerProps {
  reverse?: boolean;
}

export default function MarqueeTicker({ reverse = false }: MarqueeTickerProps) {
  const items = [
    "ENTREPRENEURIAL VISION",
    "STRATEGIC LEADERSHIP",
    "ATHLETIC DISCIPLINE",
    "OPERATIONAL EXCELLENCE",
    "NATIONAL GOLD MEDALIST",
    "99.79 PERCENTILE CUET",
    "BUSINESS MANAGEMENT",
    "VENTURE CREATION",
    "HIGH-STAKES EXECUTION",
  ];

  return (
    <div className="py-4 border-y border-white/10 bg-brand-surface/40 backdrop-blur-md overflow-hidden select-none">
      <div className="flex w-max">
        <div
          className={`flex items-center space-x-6 whitespace-nowrap ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {items.map((item, index) => (
            <div key={`item-1-${index}`} className="flex items-center space-x-6">
              <span className="font-display font-bold text-sm sm:text-base tracking-[0.2em] uppercase text-slate-300">
                {item}
              </span>
              <span className="text-gold-500 font-bold text-lg">✳</span>
            </div>
          ))}
        </div>
        <div
          className={`flex items-center space-x-6 whitespace-nowrap ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <div key={`item-2-${index}`} className="flex items-center space-x-6">
              <span className="font-display font-bold text-sm sm:text-base tracking-[0.2em] uppercase text-slate-300">
                {item}
              </span>
              <span className="text-gold-500 font-bold text-lg">✳</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
