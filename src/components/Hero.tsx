import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-start overflow-hidden min-h-[680px] h-[calc(100vh-80px)] w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/global_cities_skyline.png"
          alt="Luare Global Cities Skyline"
          fill
          priority
          className="object-cover object-center grayscale mix-blend-luminosity opacity-[0.85]"
        />
        {/* White / Light Gray Overlay for readability (Slightly more transparent than before) */}
        <div className="absolute inset-0 bg-brand-white/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-white/95 via-brand-white/75 to-transparent" />
      </div>

      {/* Gold accent line — top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent z-10" />

      {/* Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 pt-[200px] pb-24 lg:pt-[260px] lg:pb-32">
        <div className="max-w-[800px] fade-in-section">
          
          {/* Small label */}
          <div className="flex flex-col items-start gap-5 mb-8">
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand-gold border-b border-brand-gold/30 pb-2">
              財務BPO・内部統制構築支援
            </span>
            <span className="inline-block text-sm sm:text-base font-medium tracking-widest text-brand-gold/90 mt-1">
              大手品質を、最適コストで。
            </span>
          </div>

          {/* Main Copy */}
          <h1 className="font-serif text-[1.65rem] sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-medium tracking-wide text-brand-navy leading-[1.4] lg:leading-[1.35] mb-12 lg:mb-14">
            <span className="block">人材に悩まない。</span>
            <span className="block mt-2">人に依存しない</span>
            <span className="block">経理・財務へ。</span>
          </h1>

          {/* Sub Copy as Value Proposition Blocks */}
          <div className="relative pl-8 sm:pl-10 mb-14 lg:mb-16 max-w-[650px] flex flex-col gap-8">
            {/* Left Gold Line */}
            <div className="absolute top-2 bottom-2 left-0 w-[1.5px] bg-brand-gold/50" />
            
            {/* Block 1: People / Team */}
            <div className="flex items-start gap-5">
              <div className="w-[32px] h-[32px] shrink-0 text-brand-gold mt-1">
                <svg fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-brand-slate leading-[1.85] tracking-wider">
                <span className="text-brand-gold font-semibold">退職</span>、
                <span className="text-brand-gold font-semibold">採用難</span>、
                <span className="text-brand-gold font-semibold">属人化</span>、
                <span className="text-brand-gold font-semibold">人材コスト</span>。<br />
                経理・財務部門が抱える課題を、<br className="hidden sm:block" />AIと財務専門家の力で解決します。
              </p>
            </div>

            {/* Block 2: Globe / Network */}
            <div className="flex items-start gap-5">
              <div className="w-[32px] h-[32px] shrink-0 text-brand-gold mt-1">
                <svg fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-brand-slate leading-[1.85] tracking-wider">
                国内企業・外資系企業向けに、<br className="hidden sm:block" />持続可能な財務体制の構築と運営を支援します。
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-navy text-white px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              無料相談を予約する
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-transparent text-brand-navy px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border border-brand-navy/30 hover:border-brand-navy hover:bg-brand-navy/5 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
            >
              サービスを見る
            </a>
          </div>

        </div>
      </div>

      {/* Bottom subtle bar decor */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent z-10" />
    </section>
  );
}
