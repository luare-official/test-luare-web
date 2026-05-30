"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [lang, setLang] = useState<"JP" | "EN" | "ZH">("JP");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-brand-white/95 backdrop-blur-md border-brand-silver/20 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className={`font-serif text-lg sm:text-xl font-medium tracking-wider transition-colors ${
              isScrolled ? "text-brand-navy" : "text-brand-platinum"
            }`}
          >
            株式会社 Luare Consulting
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#concept" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-brand-slate hover:text-brand-navy" : "text-brand-silver hover:text-brand-platinum"}`}>
            Concept
          </a>
          <a href="#services" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-brand-slate hover:text-brand-navy" : "text-brand-silver hover:text-brand-platinum"}`}>
            Services
          </a>
          <a href="#strengths" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-brand-slate hover:text-brand-navy" : "text-brand-silver hover:text-brand-platinum"}`}>
            Strengths
          </a>
          <a href="#insights" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-brand-slate hover:text-brand-navy" : "text-brand-silver hover:text-brand-platinum"}`}>
            Insights
          </a>
        </nav>

        {/* Right Controls: Lang Toggle & CTA */}
        <div className="flex items-center gap-6">
          {/* Lang Selector */}
          <div className={`flex items-center border rounded-none overflow-hidden p-0.5 transition-colors ${isScrolled ? "border-brand-silver/30 bg-brand-offwhite" : "border-brand-silver/20 bg-brand-navy/30"}`}>
            {(["JP", "EN", "ZH"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[10px] font-semibold tracking-wider transition-all rounded-none ${
                  lang === l
                    ? isScrolled ? "bg-brand-navy text-white" : "bg-brand-platinum text-brand-navy"
                    : isScrolled ? "text-brand-slate hover:text-brand-navy" : "text-brand-silver hover:text-brand-platinum"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center justify-center border px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              isScrolled
                ? "border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                : "border-brand-platinum text-brand-platinum hover:bg-brand-platinum hover:text-brand-navy"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

