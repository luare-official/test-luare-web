import { TabType } from "./SolutionExperience";

interface ConceptDiagramProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function ConceptDiagram({ activeTab, setActiveTab }: ConceptDiagramProps) {
  
  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    // Smooth scroll to the content area
    setTimeout(() => {
      const target = document.getElementById("solution-content");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 sm:py-28 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold mb-6 block">
            Gateway
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide text-brand-charcoal leading-[1.4]">
            貴社の現在のフェーズ、または<br className="sm:hidden" />ご相談の目的に合わせてお進みください。
          </h2>
        </div>

        {/* 2-Card Gateway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* Card 1: Domestic */}
          <div 
            onClick={() => handleTabClick("domestic")}
            className={`group cursor-pointer relative bg-white border rounded-2xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
              activeTab === "domestic" ? "border-brand-gold ring-1 ring-brand-gold" : "border-slate-200 hover:border-brand-gold/50"
            }`}
          >
            <div>
              <div className="inline-block px-3 py-1 bg-slate-100 text-brand-slate text-[10px] font-bold uppercase tracking-widest rounded mb-6">
                国内企業向け
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-6 leading-tight transition-colors group-hover:text-brand-gold">
                採用に頼らない、<br />強い経理部門へ
              </h3>
              <p className="text-[15px] sm:text-base text-brand-slate/90 leading-relaxed font-medium mb-12">
                経理担当者の退職リスク、属人化、ブラックボックス化を、最新テクノロジーによる標準化とプロの伴走で根本解決します。
              </p>
            </div>
            
            <div className="mt-auto">
              <button className="w-full py-4 px-6 border-2 border-brand-navy text-brand-navy font-bold rounded-full transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center gap-2">
                国内企業向けの詳細を見る
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Global & Partners */}
          <div 
            onClick={() => handleTabClick("global")}
            className={`group cursor-pointer relative bg-brand-charcoal border rounded-2xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden ${
              activeTab === "global" ? "border-brand-gold ring-1 ring-brand-gold" : "border-brand-navy hover:border-brand-gold/50"
            }`}
          >
            {/* Dark background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-charcoal opacity-50 z-0"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6">
                外資系企業・グローバル向け
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight transition-colors group-hover:text-brand-gold">
                日本進出・経理財務の<br className="hidden lg:block"/>アウトソーシング（BPO）支援
              </h3>
              <p className="text-[15px] sm:text-base text-white/80 leading-relaxed font-medium mb-8">
                日本法人の日常的な記帳業務から、IFRS/US-GAAP準拠の月次決算、グローバル本社（HQ）の要求水準を満たす英語レポーティングまで、スピーディかつワンストップで代行します。
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-12">
                <p className="text-[13px] text-white/70 leading-relaxed">
                  <span className="text-brand-gold font-bold mr-1">※</span>
                  海外クライアントを持つ司法書士・行政書士・税理士・社労士の先生方との、業務協業・パートナーシップのご相談もこちらから承っております。
                </p>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <button className="w-full py-4 px-6 border-2 border-brand-gold text-brand-gold font-bold rounded-full transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy flex items-center justify-center gap-2">
                外資系企業・士業向けの詳細を見る
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
