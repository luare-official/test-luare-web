import type { TabType } from "./SolutionExperience";

interface ConceptDiagramProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function ConceptDiagram({ activeTab, setActiveTab }: ConceptDiagramProps) {
  return (
    <section id="concept" className="py-28 sm:py-36 bg-brand-white border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">

        {/* Section label + heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
            Concept
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
            {activeTab === "domestic" ? (
              <>
                経理を、<br className="hidden sm:block" />個人の頑張りから仕組みへ。
              </>
            ) : (
              <>
                日本法人の財務機能を、<br className="hidden sm:block" />立ち上げから運営まで。
              </>
            )}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("domestic")}
            className={`pb-4 text-sm sm:text-base font-bold tracking-wide transition-colors outline-none ${
              activeTab === "domestic" 
                ? "text-brand-navy border-b-[3px] border-brand-navy" 
                : "text-brand-slate/40 hover:text-brand-slate/80"
            }`}
          >
            国内企業向け
          </button>
          <button
            onClick={() => setActiveTab("global")}
            className={`pb-4 text-sm sm:text-base font-bold tracking-wide transition-colors outline-none ${
              activeTab === "global" 
                ? "text-brand-navy border-b-[3px] border-brand-navy" 
                : "text-brand-slate/40 hover:text-brand-slate/80"
            }`}
          >
            外資系企業向け
          </button>
        </div>

        {/* ── TAB CONTENT: DOMESTIC ── */}
        {activeTab === "domestic" && (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col w-full max-w-5xl mx-auto mb-4 md:mb-10">
              
              {/* コンセプト文 */}
              <div className="max-w-3xl mb-12 sm:mb-16">
                <p className="text-[15px] sm:text-lg text-brand-slate leading-[1.8] font-medium tracking-wide">
                  経理担当者を置き換えるのではありません。<br />
                  今いる社員を活かしながら、属人化や退職リスクを減らし、<br className="hidden sm:block" />
                  持続可能な経理・財務体制を構築します。<br />
                  <br />
                  Luareは、AIと財務専門家の力を活用し、<br className="hidden sm:block" />
                  業務標準化から管理会計までを支援します。
                </p>
              </div>

              {/* Before / After コンテナ */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
                
                {/* BEFORE カード */}
                <div className="flex-1 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col items-center">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                    Before
                  </div>
                  
                  <div className="w-full bg-white border border-slate-200 rounded-xl py-4 px-6 text-center shadow-sm mb-6">
                    <span className="font-serif font-bold text-lg text-brand-charcoal">経理担当者</span>
                  </div>

                  <div className="flex flex-col items-center py-2">
                    <div className="h-6 border-l-[1.5px] border-slate-300"></div>
                    <svg className="w-4 h-4 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="w-full flex flex-col gap-3 mt-2">
                    {["請求書処理", "経費精算", "Excel管理", "転記作業"].map((item, idx) => (
                      <div key={idx} className="w-full bg-white border border-slate-200 rounded-lg py-3 text-center text-sm font-medium text-slate-500 shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center py-4">
                    <div className="h-6 border-l-[1.5px] border-slate-300"></div>
                    <svg className="w-4 h-4 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    {["残業増加", "属人化", "退職リスク"].map((item, idx) => (
                      <div key={idx} className="w-full bg-slate-100/80 border border-slate-200 rounded-lg py-3 text-center text-sm font-bold text-brand-slate">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* AFTER カード */}
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col items-center relative overflow-hidden">
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-bl-[100px] pointer-events-none" />

                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 relative z-10">
                    After
                  </div>
                  
                  <div className="w-full bg-brand-navy border border-brand-navy/80 rounded-xl py-4 px-6 text-center shadow-md mb-6 relative z-10">
                    <span className="font-serif font-bold text-base sm:text-lg text-white">経理担当者 <span className="text-brand-gold mx-1 sm:mx-2">＋</span> Luare <span className="text-brand-gold mx-1 sm:mx-2">＋</span> AI</span>
                  </div>

                  <div className="flex flex-col items-center w-full relative z-10">
                    {[
                      { label: "業務標準化", highlight: false },
                      { label: "残業削減", highlight: false },
                      { label: "属人化解消", highlight: false },
                      { label: "継続運営", highlight: false },
                      { label: "経営数字の可視化", highlight: true }
                    ].map((step, idx) => (
                      <div key={idx} className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center py-2">
                          <div className="h-5 sm:h-6 border-l-[1.5px] border-brand-gold/40"></div>
                          <svg className="w-4 h-4 text-brand-gold/60 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        <div className={`w-full border rounded-lg py-3 sm:py-3.5 text-center text-sm font-bold shadow-sm transition-all ${
                          step.highlight 
                            ? "bg-brand-navy border-brand-navy text-white shadow-md mt-1" 
                            : "bg-white border-brand-gold/30 text-brand-charcoal"
                        }`}>
                          {step.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB CONTENT: GLOBAL ── */}
        {activeTab === "global" && (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col w-full max-w-6xl mx-auto mb-4 md:mb-10">

              {/* TOP TIER: HQ -> Pipeline -> Subsidiary */}
              <div className="flex flex-col md:flex-row items-center md:items-stretch w-full">

                {/* LEFT: Headquarters */}
                <div className="flex flex-col items-center text-center px-6 sm:px-8 py-12 md:py-14 w-full md:w-[32%] shrink-0 bg-white rounded-2xl md:rounded-r-none shadow-xl border border-slate-200 md:border-r-0">
                  <div className="mb-8 w-36 h-36 flex items-end justify-center">
                    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                      <rect x="4" y="28" width="26" height="96" fill="#1C2541" rx="1"/>
                      <rect x="6" y="32" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                      <rect x="13" y="32" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                      <rect x="20" y="32" width="7" height="7" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                      <rect x="6" y="44" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="13" y="44" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="20" y="44" width="7" height="7" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="6" y="56" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="13" y="56" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="20" y="56" width="7" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="6" y="68" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="13" y="68" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="36" y="4" width="36" height="120" fill="#0B132B" rx="1"/>
                      <rect x="46" y="0" width="16" height="8" fill="#0B132B" rx="1"/>
                      <rect x="52" y="-2" width="4" height="6" fill="#334155" rx="0.5"/>
                      <rect x="39" y="10" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="50" y="10" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="61" y="10" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="39" y="25" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="50" y="25" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="61" y="25" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="39" y="40" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="50" y="40" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="61" y="40" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="39" y="55" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="50" y="55" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="61" y="55" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="39" y="70" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.3"/>
                      <rect x="50" y="70" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.3"/>
                      <rect x="61" y="70" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.3"/>
                      <rect x="48" y="106" width="12" height="18" fill="#1C2541" rx="0.5"/>
                      <rect x="78" y="20" width="24" height="104" fill="#334155" rx="1"/>
                      <rect x="80" y="25" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                      <rect x="88" y="25" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                      <rect x="96" y="25" width="4" height="8" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                      <rect x="80" y="38" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="88" y="38" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="96" y="38" width="4" height="8" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="80" y="51" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="88" y="51" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="80" y="64" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="104" y="44" width="20" height="80" fill="#94A3B8" rx="1"/>
                      <rect x="106" y="48" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="113" y="48" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                      <rect x="106" y="58" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="113" y="58" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="0" y="124" width="128" height="4" fill="#E2E8F0" rx="0"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">Headquarters</h3>
                  <span className="text-[11px] font-normal tracking-wider text-brand-slate/60 mb-5 block">
                    グローバル本社：日本または海外
                  </span>
                  <p className="text-sm text-brand-slate leading-relaxed font-medium max-w-xs">
                    IFRS/US-GAAP準拠。海外・国内からのガバナンス要求を満たし、リアルタイムな経営状況の把握を実現。
                  </p>
                </div>

                {/* CENTER: Pipeline */}
                <div className="hidden md:flex flex-col items-center justify-center w-[36%] shrink-0 py-8 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] mb-5" style={{ color: '#C5A059' }}>
                    Luare Integrated Data Pipeline
                  </span>
                  <div className="relative w-full rounded-full border-[1.5px] overflow-hidden bg-transparent" style={{ borderColor: '#C5A059', padding: '14px 0' }}>
                    <div className="absolute top-[28%] left-0 w-full h-[3px] overflow-hidden pointer-events-none">
                      <div className="beam-right h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                      <div className="beam-right h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
                    </div>
                    <div className="absolute bottom-[28%] left-0 w-full h-[3px] overflow-hidden pointer-events-none">
                      <div className="beam-left h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                      <div className="beam-left h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-full px-5">
                      <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-r-[8px] border-t-transparent border-b-transparent border-r-[#C5A059] shrink-0" />
                      <div className="flex-1 h-[2px] bg-[#C5A059]" />
                      <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#C5A059] shrink-0" />
                    </div>
                  </div>
                </div>

                <div className="flex md:hidden flex-col items-center justify-center py-6 w-full">
                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] mb-3" style={{ color: '#C5A059' }}>
                    Luare Integrated Data Pipeline
                  </span>
                  <div className="relative rounded-full border-[1.5px] overflow-hidden bg-transparent" style={{ borderColor: '#C5A059', width: '44px', height: '120px' }}>
                    <div className="absolute left-[28%] top-0 w-[3px] h-full overflow-hidden pointer-events-none">
                      <div className="beam-down w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                      <div className="beam-down w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
                    </div>
                    <div className="absolute right-[28%] top-0 w-[3px] h-full overflow-hidden pointer-events-none">
                      <div className="beam-up w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                      <div className="beam-up w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full py-3">
                      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#C5A059] shrink-0" />
                      <div className="w-[2px] flex-1 bg-[#C5A059]" />
                      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#C5A059] shrink-0" />
                    </div>
                  </div>
                </div>

                {/* RIGHT: Subsidiary */}
                <div className="flex flex-col items-center text-center px-6 sm:px-8 py-12 md:py-14 w-full md:w-[32%] shrink-0 bg-white rounded-2xl md:rounded-l-none shadow-xl border border-slate-200 md:border-l-0">
                  <div className="mb-8 w-36 h-36 flex items-end justify-center">
                    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                      <rect x="2" y="56" width="18" height="68" fill="#CBD5E1" rx="1"/>
                      <rect x="4" y="60" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="10" y="60" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="4" y="70" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="10" y="70" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="24" y="24" width="64" height="100" fill="#1C2541" rx="2"/>
                      <rect x="24" y="44" width="64" height="3" fill="#334155"/>
                      <rect x="24" y="70" width="64" height="3" fill="#334155"/>
                      <rect x="24" y="96" width="64" height="3" fill="#334155"/>
                      <rect x="30" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="44" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="58" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="72" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                      <rect x="30" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="44" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="58" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="72" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="30" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="44" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="58" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="72" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="46" y="106" width="20" height="18" fill="#0B132B" rx="1"/>
                      <rect x="55" y="108" width="2" height="16" fill="#334155"/>
                      <rect x="94" y="44" width="22" height="80" fill="#94A3B8" rx="1"/>
                      <rect x="96" y="49" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="104" y="49" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                      <rect x="96" y="61" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="104" y="61" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                      <rect x="96" y="73" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                      <rect x="0" y="124" width="128" height="4" fill="#E2E8F0"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">Subsidiary</h3>
                  <span className="text-[11px] font-normal tracking-wider text-brand-slate/60 mb-5 block">
                    現地子会社：日本または海外
                  </span>
                  <p className="text-sm text-brand-slate leading-relaxed font-medium max-w-xs">
                    進出先の会社法・税法への確実な準拠。ローカル取引における100%のコンプライアンスを両立。
                  </p>
                </div>
              </div>

              {/* BOTTOM TIER: Foundation Text */}
              <div className="mt-8 rounded-2xl px-8 md:px-16 py-10 flex flex-col items-center text-center border" style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', borderColor: 'rgba(197, 160, 89, 0.2)' }}>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
                  Luare 統合財務インフラストラクチャ
                </span>
                <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed max-w-2xl">
                  Luareは両拠点の間に介入するのではなく、データ・ガバナンスを裏側から一元化し、ブラックボックスを排除する『透明かつ強固な財務インフラ』として機能します。
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
