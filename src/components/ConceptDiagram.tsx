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
    <section id="gateway" className="relative w-full bg-[#FAFAFA] py-14 sm:py-20 md:py-16 overflow-hidden border-b border-slate-200 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 md:mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold mb-6 block">
            Gateway
          </span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-medium tracking-wide text-brand-charcoal leading-[1.4]">
            貴社の事業環境や目的に応じて、<br className="hidden md:inline" />最適なサービスをお選びください。
          </h2>
        </div>

        {/* 2-Card Gateway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* Card 1: Domestic */}
          <div 
            onClick={() => handleTabClick("domestic")}
            className={`group cursor-pointer relative bg-white border rounded-2xl p-6 sm:p-8 md:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
              activeTab === "domestic" ? "border-brand-gold ring-1 ring-brand-gold" : "border-slate-200 hover:border-brand-gold/50"
            }`}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-brand-navy text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded mb-6 md:mb-4 shadow-sm">
                国内企業向け
              </div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-[1.65rem] font-bold text-brand-charcoal mb-6 md:mb-4 leading-tight transition-colors group-hover:text-brand-gold">
                採用に頼らない、強い経理部門へ
              </h3>
              <p className="text-[15px] sm:text-[17px] md:text-base text-brand-slate/90 leading-relaxed font-medium mb-12 md:mb-8">
                経理担当者の退職リスク、属人化・ブラックボックス化を、経理財務特化型AIによる標準化と会計専門家の伴走で根本解決します。
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

          {/* Card 2: Global */}
          <div 
            onClick={() => handleTabClick("global")}
            className={`group cursor-pointer relative bg-white border rounded-2xl p-6 sm:p-8 md:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
              activeTab === "global" ? "border-brand-gold ring-1 ring-brand-gold" : "border-slate-200 hover:border-brand-gold/50"
            }`}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-brand-navy text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded mb-6 md:mb-4 shadow-sm">
                外資系企業・グローバル向け
              </div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-[1.65rem] font-bold text-brand-charcoal mb-6 md:mb-4 leading-tight transition-colors group-hover:text-brand-gold">
                国境や言語の壁を感じさせない、<br className="hidden md:inline" />透明な経理・財務体制へ
              </h3>
              <p className="text-[15px] sm:text-[17px] md:text-base text-brand-slate/90 leading-relaxed font-medium mb-12 md:mb-8">
                日本独自の複雑な記帳業務から、グローバル本社が求める高度な英語レポーティングまで。外資系特有の情報の分断を、経理財務特化型AIと会計専門家の伴走で根本解決します。
              </p>
            </div>
            
            <div className="mt-auto">
              <button className="w-full py-4 px-6 border-2 border-brand-navy text-brand-navy font-bold rounded-full transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center gap-2">
                外資系企業向けの詳細を見る
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
