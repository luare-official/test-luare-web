import type { TabType } from "./SolutionExperience";

interface ServicesProps {
  activeTab: TabType;
}

export default function Services({ activeTab }: ServicesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-brand-offwhite border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        {/* ── DOMESTIC SERVICES ── */}
        {activeTab === "domestic" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Section heading */}
            <div className="max-w-2xl mb-10 md:mb-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Domestic Services
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                国内企業向けサービス
              </h2>
              <p className="mt-4 text-sm text-brand-slate/80 leading-relaxed max-w-xl font-medium">
                採用難や属人化に悩まない、持続可能な経理体制へ。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-navy text-[11px] sm:text-xs font-bold border border-brand-gold/20 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  経理担当者1名の企業から導入可能
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-navy text-[11px] sm:text-xs font-bold border border-brand-gold/20 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  必要な業務だけを柔軟にサポート
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Service 1 */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center mb-6 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mb-2">AI-Powered Accounting Team</span>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3">経理チーム代行</h3>
                <p className="text-sm text-brand-slate leading-relaxed">経理担当者の退職や採用難に左右されない、継続可能な経理体制を提供。</p>
              </div>
              {/* Service 2 */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center mb-6 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mb-2">Monthly Finance Operations</span>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3">月次経理・財務運営支援</h3>
                <p className="text-sm text-brand-slate leading-relaxed">記帳、月次決算、経営レポートまで、経理業務の継続運営を支援。</p>
              </div>
              {/* Service 3 */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center mb-6 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mb-2">Internal Control Support</span>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3">業務標準化・内部統制支援</h3>
                <p className="text-sm text-brand-slate leading-relaxed">属人化を防ぎ、再現性の高い経理体制を構築。</p>
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
                Global Services
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                外資系企業向けサービス
              </h2>
              <p className="mt-4 text-sm text-brand-slate/80 leading-relaxed max-w-xl font-medium">
                日本進出からガバナンス強化まで、ワンストップで支援。
              </p>
            </div>

            {/* ── ENCOMPASSING FRAME: BPO FOUNDATION ── */}
            <div className="relative w-full rounded-3xl border-[1.5px] border-[#C5A059]/20 bg-white/70 p-6 sm:p-10 md:p-14 shadow-sm overflow-hidden backdrop-blur-sm">
              
              {/* Subtle gold glow inside the frame */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/90 to-transparent pointer-events-none" />

              {/* BPO Label (Top left inside the frame) */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-[#C5A059]/15 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[1px] bg-[#C5A059]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C5A059]">
                      Foundation
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-charcoal mb-2">
                    Finance BPO
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate/70 tracking-wide font-medium leading-relaxed">
                    企業成長に応じて進化する統合型財務支援サービス<br />
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
                    <text x="16" y="30" fill="#94A3B8" fontSize="11" fontFamily="sans-serif" opacity="0.6">LTV ↑</text>
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
                        ファイナンスセットアップ
                        <br />
                        Finance Setup
                      </h3>
                      <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                      <p className="text-sm text-brand-slate/80 leading-[1.85]">
                        会社設立から会計システム導入、経理体制の構築、人材採用支援までを一貫してサポート。成長に耐えうる財務基盤を構築します。
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
                        <br />
                        Finance Operations
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
                        グローバルガバナンス強化
                        <br />
                        Global Governance
                      </h3>
                      <div className="w-8 h-[1px] bg-slate-200 mb-4" />
                      <p className="text-sm text-brand-slate/80 leading-[1.85]">
                        事業拡大に伴うリスクを管理。親会社への多言語レポート対応や、クラウド会計を用いた内部統制の構築により、強固な管理体制を実現します。
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
