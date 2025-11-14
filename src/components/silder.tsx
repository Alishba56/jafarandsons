// BrandTicker.tsx
"use client";

import React from "react";

type BrandTickerProps = {
  brands?: string[];
  speed?: number; // seconds for one full loop
  className?: string;
};

export default function BrandTicker({
  brands = [
    "SAMSUNG — Premium Collection",
    "LG — Premium Collection",
    "TCL — Premium Collection",
  ],
  speed = 3,
  className = "",
}: BrandTickerProps) {
  const items = brands.map((b, idx) => (
    <span
      key={idx}
      className="ticker-item inline-block px-3 sm:px-6 md:px-8 uppercase font-bold text-sm sm:text-lg md:text-2xl lg:text-4xl tracking-tight whitespace-nowrap"
    >
      {b}
    </span>
  ));

  return (
    <div
      aria-hidden="true"
      className={`brand-ticker relative overflow-hidden pointer-events-none select-none w-full max-w-screen ${className}`}
    >
      {/* Scrolling content container */}
      <div
        className="ticker-track flex w-full"
        style={{
          animation: `tickerMove ${speed}s linear infinite`,
        }}
      >
        <div className="ticker-group flex shrink-0">{items}</div>
        <div className="ticker-group flex shrink-0">{items}</div>
      </div>

      {/* Gradient fades on edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}
