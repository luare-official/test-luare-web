import type { TabType } from "./SolutionExperience";

interface ServicesProps {
  activeTab: TabType;
}

export default function Services({ activeTab }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-brand-offwhite border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        {/* ── DOMESTIC SERVICES ── */}
        {activeTab === "domestic" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Section heading (Supplementary Style) */}
            <div className="max-w-2xl mb-10 md:mb-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Service Areas
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                サービス領域
              </h2>
              <p className="mt-4 text-sm text-brand-slate/80 leading-relaxed max-w-xl font-medium">
                「アプローチ」を実現するための具体的な提供サービス群です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Service 1: 診断 */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 transition-shadow">
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mb-2">Phase 01</span>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-4 pb-4 border-b border-slate-100">診断</h3>
                <ul className="flex flex-col gap-3">
                  {["業務棚卸", "課題可視化", "ボトルネック分析"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-brand-slate font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Service 2: 構築 */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 transition-shadow">
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mb-2">Phase 02</span>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-4 pb-4 border-b border-slate-100">構築</h3>
                <ul className="flex flex-col gap-3">
                  {["業務標準化", "内部統制", "引継ぎ体制整備"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-brand-slate font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Service 3: 運営 */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 transition-shadow">
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mb-2">Phase 03</span>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-4 pb-4 border-b border-slate-100">運営</h3>
                <ul className="flex flex-col gap-3">
                  {["月次決算", "経営レポート", "管理会計", "継続支援"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-brand-slate font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── GLOBAL SERVICES ── */}
        {activeTab === "global" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Section heading */}
            <div className="max-w-2xl mb-10 md:mb-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Our Services
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                経理・財務アウトソーシング ＆ Virtual CFO
              </h2>
              <p className="mt-4 text-sm text-brand-slate/80 leading-relaxed max-w-xl font-medium">
                日本法人の日常的な記帳業務（BPO）から、グローバル本社への高度なレポーティング（Virtual CFO）までを一気通貫で支援します。
              </p>
            </div>

            {/* ── ENCOMPASSING FRAME: BPO FOUNDATION ── */}
            <div className="relative w-full rounded-3xl border-[1.5px] border-[#C5A059]/20 bg-white/70 p-6 sm:p-10 md:p-14 shadow-sm overflow-hidden backdrop-blur-sm">
              
              {/* Subtle gold glow inside the frame */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/90 to-transparent pointer-events-none" />

              {/* BPO Label (Top left inside the frame) */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-[#C5A059]/15 pb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-charcoal mb-2">
                    Accounting & Finance BPO
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate/70 tracking-wide font-medium leading-relaxed">
                    企業成長フェーズに応じて進化する、経理・財務の支援サービス<br className="hidden sm:inline" />
                    <span className="text-brand-navy font-bold inline-block mt-1.5 bg-brand-navy/5 px-2 py-0.5 rounded-sm">
                      設立から月次運営、親会社レポーティング、内部統制まで一貫対応
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative w-full">

                {/* ── SVG Background Growth Curve ── */}
                <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
                  <svg
                    viewBox="0 0 1200 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <line x1="0" y1="150" x2="1200" y2="150" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="8 6" />
                    <line x1="0" y1="300" x2="1200" y2="300" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="8 6" />
                    <line x1="0" y1="450" x2="1200" y2="450" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="8 6" />
                    <defs>
                      <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0B132B" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#0B132B" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 540 C 100 530, 200 510, 300 470 C 400 430, 500 370, 600 300 C 700 230, 800 160, 900 110 C 1000 60, 1100 30, 1200 20 L 1200 540 Z"
                      fill="url(#curveGrad)"
                    />
                    <path
                      d="M 0 540 C 100 530, 200 510, 300 470 C 400 430, 500 370, 600 300 C 700 230, 800 160, 900 110 C 1000 60, 1100 30, 1200 20"
                      stroke="#C5A059"
                      strokeWidth="2.5"
                      strokeOpacity="0.85"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="200" cy="510" r="6" fill="#0B132B" opacity="0.2" />
                    <circle cx="600" cy="300" r="6" fill="#0B132B" opacity="0.2" />
                    <circle cx="1000" cy="60" r="6" fill="#0B132B" opacity="0.2" />
                  </svg>
                </div>

                {/* ── PHASE CARDS ── */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end min-h-0 md:min-h-[520px]">

                  {/* Phase 01 */}
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
                        会社設立・ファイナンスセットアップ
                      </h3>
                      <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                      <p className="text-sm text-brand-slate/80 leading-[1.85]">
                        法人設立代行、会計財務チームの構築、人材採用支援まで強固な事業運営の土台となるバックオフィス体制を構築します。
                      </p>
                    </div>
                  </div>

                  {/* Phase 02 */}
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
                        継続的な経理・財務運営
                      </h3>
                      <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                      <p className="text-sm text-brand-slate/80 leading-[1.85]">
                        日常の記帳、月次決算、経営レポート作成、親会社向け報告、単発のイレギュラー対応まで継続的に支援。企業の経理・財務機能を安定的に運営します。
                      </p>
                    </div>
                  </div>

                  {/* Phase 03 */}
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
                        グローバルガバナンス強化・DX支援
                      </h3>
                      <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                      <p className="text-sm text-brand-slate/80 leading-[1.85]">
                        事業拡大に伴うガバナンス体制の強化をサポートします。グローバル本社の要求水準に準拠した、内部統制の構築から評価までを支援し、透明で強固な管理体制を実現します。
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
