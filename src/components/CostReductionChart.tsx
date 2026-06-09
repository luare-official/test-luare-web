export default function CostReductionChart() {
  return (
    <div className="flex flex-col xl:flex-row gap-10 items-center bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm mb-16 overflow-hidden">
      
      {/* Left Text */}
      <div className="w-full xl:w-[30%] text-left relative z-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal leading-relaxed mb-6 xl:mb-0">
          必要な業務だけを、<br className="hidden sm:block" />必要な分だけ。<br className="hidden xl:block" />
          <span className="text-brand-navy block mt-4 text-base sm:text-lg font-medium leading-relaxed">
            採用・教育・退職リスクを含めた総コスト最適化を支援します。
          </span>
        </h3>
      </div>

      {/* Right Graph Area */}
      <div className="w-full xl:w-[70%] flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-8 lg:gap-12 relative z-10">
        
        {/* Graph Visual Container */}
        <div className="flex items-end justify-between sm:justify-center gap-6 sm:gap-32 relative w-full sm:w-auto mt-12 md:mt-0 px-2 sm:px-0 pb-10">
          
          {/* Left Bar (In-house) */}
          <div className="relative flex flex-col w-[35%] sm:w-32 h-64 sm:h-80 shrink-0 z-10">
            <div className="bg-slate-100 border border-slate-300 rounded-t-sm flex items-center justify-center p-1 sm:p-2 text-center text-slate-500 font-bold text-[9px] sm:text-xs leading-tight" style={{ height: '20%' }}>
              見えない退職リスク<br className="hidden sm:block"/>＋引継ぎロス
            </div>
            <div className="bg-slate-200 border-x border-b border-slate-300 flex items-center justify-center p-1 sm:p-2 text-center text-slate-600 font-bold text-[9px] sm:text-[11px] leading-tight" style={{ height: '15%' }}>
              採用・教育コスト
            </div>
            <div className="bg-slate-400 border-x border-b border-slate-400 rounded-b-sm flex items-center justify-center p-2 text-center text-white font-bold text-[11px] sm:text-sm" style={{ height: '65%' }}>
              基本人件費
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-[11px] sm:text-xs font-bold text-brand-slate whitespace-nowrap">
              自社採用の総コスト
            </div>
          </div>

          {/* Dotted lines and Badge (Absolute over the gap) */}
          <div className="absolute left-[35%] sm:left-32 right-[35%] sm:right-32 top-0 bottom-10 pointer-events-none z-0">
            {/* Connecting lines */}
            <svg className="absolute w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="50%" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
            
            {/* Circular Badge */}
            <div className="absolute top-[25%] sm:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-36 sm:h-36 bg-white border-[3px] border-brand-gold rounded-full flex flex-col items-center justify-center shadow-xl z-20">
              <span className="text-[9px] sm:text-[11px] font-bold text-brand-slate tracking-widest mb-0.5">総コスト</span>
              <div className="flex items-baseline mb-0.5">
                <span className="text-[10px] sm:text-sm font-bold text-brand-gold">最大</span>
                <span className="text-xl sm:text-4xl font-bold mx-0.5 text-brand-gold">50%</span>
              </div>
              <span className="text-[10px] sm:text-sm font-bold text-brand-gold">最適化!!</span>
            </div>
          </div>

          {/* Right Bar (Luare) */}
          <div className="relative flex flex-col w-[35%] sm:w-32 h-32 sm:h-40 shrink-0 z-10">
            <div className="flex-1 bg-brand-navy rounded-sm flex items-center justify-center p-2 sm:p-4 text-center text-white font-bold text-[11px] sm:text-sm leading-snug shadow-md">
              プロフェッショナルの<br/>実務価値のみ
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-[11px] sm:text-xs font-bold text-brand-navy whitespace-nowrap font-serif tracking-wide">
              LUARE
            </div>
          </div>
          
        </div>

        {/* Features list */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto relative z-10 px-4 sm:px-0 mt-4 md:mt-0">
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-4 sm:p-5 shadow-sm max-w-full sm:max-w-[280px]">
            <span className="inline-block px-2 py-1 bg-brand-gold text-white text-[10px] font-bold tracking-widest rounded mb-2">特徴1</span>
            <p className="text-xs sm:text-sm text-brand-charcoal font-bold leading-relaxed">
              <span className="text-brand-gold">【採用費・教育費ゼロ】</span><br/>即戦力のプロフェッショナルが稼働。
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-4 sm:p-5 shadow-sm max-w-full sm:max-w-[280px]">
            <span className="inline-block px-2 py-1 bg-brand-gold text-white text-[10px] font-bold tracking-widest rounded mb-2">特徴2</span>
            <p className="text-xs sm:text-sm text-brand-charcoal font-bold leading-relaxed">
              <span className="text-brand-gold">【退職リスクゼロ】</span><br/>チーム体制とAIによる完全標準化で属人化を排除。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
