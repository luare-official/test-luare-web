export default function CostReductionChart() {
  return (
    <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-center bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 xl:p-16 shadow-sm mb-16 overflow-hidden">
      
      {/* Left Text */}
      <div className="w-full xl:w-[28%] text-left relative z-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal leading-relaxed mb-6 xl:mb-0">
          必要な業務だけを、
          <br />
          必要な分だけ。
          <span className="text-brand-navy block mt-4 text-base sm:text-lg font-medium leading-relaxed font-sans">
            採用・教育・退職リスクを含めた総コスト最適化を支援します。
          </span>
        </h3>
      </div>

      {/* Right Graph Area */}
      <div className="w-full xl:w-[68%] flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-8 relative z-10">
        
        {/* Graph Visual Container */}
        <div className="flex items-end justify-between sm:justify-center gap-6 sm:gap-24 relative w-full sm:w-auto mt-12 md:mt-0 px-2 sm:px-0 pb-10">
          
          {/* Left Bar (Luare) */}
          <div className="relative flex flex-col justify-end w-[35%] sm:w-32 h-80 sm:h-96 shrink-0 z-10">
            <div className="w-full bg-brand-navy rounded-sm flex items-center justify-center p-2 sm:p-4 text-center text-white font-bold text-[11px] sm:text-sm leading-snug shadow-md" style={{ height: '35%' }}>
              プロフェッショナルの<br/>実務価値のみ
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-[11px] sm:text-xs font-bold text-brand-navy whitespace-nowrap font-serif tracking-wide">
              LUARE
            </div>
          </div>

          {/* Dotted lines and Badge (Absolute over the gap) */}
          <div className="absolute left-[35%] sm:left-32 right-[35%] sm:right-32 top-0 bottom-10 pointer-events-none z-0">
            {/* Connecting lines */}
            <svg className="absolute w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="65%" x2="100%" y2="0" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
            
            {/* Circular Badge */}
            <div className="absolute top-[45%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 bg-white border-[3px] border-brand-gold rounded-full flex flex-col items-center justify-center shadow-xl z-20">
              <span className="text-[10px] sm:text-[13px] font-bold text-brand-slate tracking-widest leading-snug mb-1">実務価値のみに</span>
              <span className="text-base sm:text-2xl font-bold text-brand-gold tracking-widest">最適化</span>
            </div>
          </div>

          {/* Right Bar (In-house) */}
          <div className="relative flex flex-col justify-end w-[35%] sm:w-32 h-80 sm:h-96 shrink-0 z-10">
            {/* Top group (Potential costs) */}
            <div className="bg-slate-100 border border-slate-300 rounded-t-sm flex items-center justify-center p-1 sm:p-2 text-center text-slate-500 font-bold text-[9px] sm:text-[10px] leading-tight" style={{ flex: '15 1 0%' }}>
              退職リスク＋引継ロス<br className="hidden sm:block"/>・教育コスト
            </div>
            <div className="bg-slate-200 border-x border-b border-slate-300 flex items-center justify-center p-1 sm:p-2 text-center text-slate-600 font-bold text-[9px] sm:text-[11px] leading-tight mb-3 sm:mb-4 shadow-sm" style={{ flex: '15 1 0%' }}>
              採用コスト
            </div>
            
            {/* Bottom group (Fixed costs) */}
            <div className="bg-slate-300 border border-slate-400 rounded-t-sm flex items-center justify-center p-1 sm:p-2 text-center text-slate-700 font-bold text-[9px] sm:text-[11px] leading-tight" style={{ flex: '15 1 0%' }}>
              社会保険・法定福利費
            </div>
            <div className="bg-slate-400 border-x border-b border-slate-400 rounded-b-sm flex items-center justify-center p-2 text-center text-white font-bold text-[11px] sm:text-sm" style={{ flex: '55 1 0%' }}>
              基本給与
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-[11px] sm:text-xs font-bold text-brand-slate whitespace-nowrap">
              自社採用の総コスト
            </div>
          </div>
          
        </div>

        {/* Features list */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto relative z-10 px-4 sm:px-0 mt-4 md:mt-0">
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-4 sm:p-5 shadow-sm w-full sm:w-80">
            <span className="inline-block px-2 py-1 bg-brand-gold text-white text-[10px] font-bold tracking-widest rounded mb-2">特徴1</span>
            <p className="text-xs sm:text-sm text-brand-charcoal font-bold leading-relaxed">
              <span className="text-brand-gold">【採用費・教育費ゼロ】</span><br/>即戦力のプロフェッショナルが稼働。
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-4 sm:p-5 shadow-sm w-full sm:w-80">
            <span className="inline-block px-2 py-1 bg-brand-gold text-white text-[10px] font-bold tracking-widest rounded mb-2">特徴2</span>
            <p className="text-xs sm:text-sm text-brand-charcoal font-bold leading-relaxed">
              <span className="text-brand-gold">【退職リスクゼロ】</span><br/>チーム体制とAIエージェントによる完全標準化で属人化を排除。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
