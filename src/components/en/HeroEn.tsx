import Image from "next/image";
import Link from "next/link";

export default function HeroEn() {
  return (
    <section className="relative flex items-center justify-start overflow-hidden min-h-[640px] lg:min-h-[calc(100vh-80px)] h-auto w-full bg-brand-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/abstract_tokyo_wireframe_bg.png"
          alt="Luare Abstract Architectural Background"
          fill
          priority
          className="object-cover object-center opacity-[0.15] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/95" />
      </div>

      {/* Gold accent line — top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-10" />

      {/* Content Area */}
      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-12 md:px-20 py-20 sm:py-28 lg:pt-36 lg:pb-32">
        <div className="fade-in-section">

          {/* Small label */}
          <div className="flex flex-col items-start gap-3 mb-6 sm:mb-8">
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-brand-gold pb-1 border-b border-brand-gold/30">
              AI × Accounting &amp; Finance Professionals
            </span>
            <span className="inline-block text-sm sm:text-base font-medium tracking-[0.25em] text-brand-gold/90">
              Big 4 Quality at Optimized Costs
            </span>
          </div>

          {/* Main Copy */}
          <h1 className="max-w-[860px] font-serif text-[1.75rem] sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-medium tracking-wide text-brand-navy leading-[1.4] mb-8 sm:mb-12">
            <span className="block mb-2">Zero Local Hiring Risk.</span>
            <span className="block">Absolute Financial Compliance in Japan.</span>
          </h1>

          {/* Sub Copy as Value Proposition Blocks */}
          <div className="relative pl-6 sm:pl-10 mb-10 sm:mb-12 max-w-[620px] flex flex-col gap-6 sm:gap-8">
            {/* Left Gold Line */}
            <div className="absolute top-2 bottom-2 left-0 w-[1.5px] bg-brand-gold/50" />

            {/* Block 1: AI Agent Bookkeeping */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] shrink-0 text-brand-gold mt-1">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <p className="text-base sm:text-[1.05rem] text-brand-slate leading-[1.8] tracking-wide">
                Hiring delays, sudden turnover, key-person dependencies, and rising personnel costs. We solve localized accounting challenges with secure AI agents and bilingual experts.
              </p>
            </div>

            {/* Block 2: USCPA Logic & Handoff */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] shrink-0 text-brand-gold mt-1">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <p className="text-base sm:text-[1.05rem] text-brand-slate leading-[1.8] tracking-wide">
                Leverage an autonomous local AI agent deep-infused with USCPA internal control logic. Fully hand off Japanese bookkeeping, payment operations, and localized financial reporting to Luare Consulting.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 sm:pt-4 max-w-[860px]">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-navy text-white px-8 sm:px-12 py-4 sm:py-5 text-sm font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto rounded-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              Schedule a Free Consultation
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom subtle bar decor */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent z-10" />
    </section>
  );
}
