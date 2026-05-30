export default function Services() {
  return (
    <section
      id="services"
      className="py-28 sm:py-36 bg-brand-offwhite border-b border-slate-100 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        {/* Section heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
            Core Solutions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
            一気通貫の伴走型サービス
          </h2>
          <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
            経理代行（BPO）の実務基盤の上で、企業の成長ステージに応じたサービス価値がステップアップ。立ち上げからグローバル経営まで、切れ目なく伴走します。
          </p>
        </div>

        {/* ── GROWTH CURVE DIAGRAM ── */}
        <div className="relative w-full">

          {/* ── SVG Background Growth Curve ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg
              viewBox="0 0 1200 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Grid lines — subtle horizontal */}
              <line x1="0" y1="150" x2="1200" y2="150" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="8 6" />
              <line x1="0" y1="300" x2="1200" y2="300" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="8 6" />
              <line x1="0" y1="450" x2="1200" y2="450" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="8 6" />

              {/* Growth area fill — subtle gradient */}
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0B132B" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0B132B" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Area under curve */}
              <path
                d="M 0 540 C 100 530, 200 510, 300 470 C 400 430, 500 370, 600 300 C 700 230, 800 160, 900 110 C 1000 60, 1100 30, 1200 20 L 1200 540 Z"
                fill="url(#curveGrad)"
              />

              {/* Main curve line */}
              <path
                d="M 0 540 C 100 530, 200 510, 300 470 C 400 430, 500 370, 600 300 C 700 230, 800 160, 900 110 C 1000 60, 1100 30, 1200 20"
                stroke="#C5A059"
                strokeWidth="2.5"
                strokeOpacity="0.85"
                fill="none"
                strokeLinecap="round"
              />

              {/* Phase marker dots on curve */}
              <circle cx="200" cy="510" r="6" fill="#0B132B" opacity="0.2" />
              <circle cx="600" cy="300" r="6" fill="#0B132B" opacity="0.2" />
              <circle cx="1000" cy="60" r="6" fill="#0B132B" opacity="0.2" />

              {/* Y-axis label area */}
              <text x="16" y="30" fill="#94A3B8" fontSize="11" fontFamily="sans-serif" opacity="0.6">
                LTV ↑
              </text>
            </svg>
          </div>

          {/* ── PHASE CARDS — Stepping up along the curve ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end min-h-[480px] md:min-h-[520px]">

            {/* Phase 01 — bottom left */}
            <div className="md:self-end md:mb-0">
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg rounded-xl p-7 md:p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-white font-serif text-sm font-bold shadow-md">
                    01
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-brand-slate/50 uppercase">
                    Phase 01
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3 leading-snug">
                  クロスボーダー進出・バックオフィス立ち上げ
                </h3>
                <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                <p className="text-sm text-brand-slate/80 leading-[1.85]">
                  海外企業の日本市場参入と日本企業の海外展開を双方向でサポート。会社設立から初期の経理インフラ構築まで、スムーズな進出をワンストップで伴走します。
                </p>
              </div>
            </div>

            {/* Phase 02 — middle, elevated */}
            <div className="md:self-center md:mb-8">
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg rounded-xl p-7 md:p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-white font-serif text-sm font-bold shadow-md">
                    02
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-brand-slate/50 uppercase">
                    Phase 02
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3 leading-snug">
                  ガバナンス強化・内部統制構築
                </h3>
                <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                <p className="text-sm text-brand-slate/80 leading-[1.85]">
                  事業拡大に伴うリスクを管理。親会社への多言語レポート対応や、クラウド会計を用いた内部統制の構築により、強固な管理体制を実現します。
                </p>
              </div>
            </div>

            {/* Phase 03 — top right, highest */}
            <div className="md:self-start md:mt-0">
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg rounded-xl p-7 md:p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 ring-1 ring-brand-gold/10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-white font-serif text-sm font-bold shadow-md">
                    03
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-brand-slate/50 uppercase">
                    Phase 03
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3 leading-snug">
                  グローバル財務・CFOコンサルティング
                </h3>
                <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                <p className="text-sm text-brand-slate/80 leading-[1.85]">
                  日々の財務データを完全に把握した上で、USCPA等の専門家が参画。資金効率化やDXアップグレードなど、経営に直結する高度な財務コンサルティングを提供します。
                </p>
              </div>
            </div>

          </div>

          {/* ── BPO FOUNDATION BAR (X-axis base) ── */}
          <div className="relative z-10 mt-8">
            <div className="bg-slate-900 rounded-xl px-8 md:px-12 py-6 md:py-7 flex flex-col md:flex-row items-start md:items-center gap-5 shadow-lg">
              {/* Icon */}
              <div className="shrink-0 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-400 block mb-1">
                  Foundation — 全フェーズ共通の実務基盤
                </span>
                <p className="text-sm font-bold text-slate-200 leading-relaxed">
                  日常の経理BPO（記帳・決算・税務）を強固な実務基盤として、全フェーズを下支えします。
                </p>
              </div>

              {/* Visual: continuous bar indicator */}
              <div className="hidden md:flex shrink-0 items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-500" />
                <div className="w-20 h-[2px] bg-slate-500 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-slate-500" />
                <div className="w-20 h-[2px] bg-slate-500 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-slate-500" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
