export default function LuareApproach() {
  const steps = [
    {
      step: "Step 01",
      title: "見える化",
      desc: "現状業務を整理し、無駄な作業やボトルネックを可視化します。",
      points: ["業務棚卸", "役割整理", "課題分析", "ボトルネック発見"]
    },
    {
      step: "Step 02",
      title: "仕組み化",
      desc: "属人化を解消し、再現性のある経理体制を構築します。",
      points: ["業務標準化", "内部統制整備", "手順統一", "引継ぎ体制構築"]
    },
    {
      step: "Step 03",
      title: "継続運営",
      desc: "構築した仕組みを継続運営し、経営数字の可視化と意思決定支援まで行います。",
      points: ["月次決算", "経営レポート", "管理会計", "経営数字の可視化", "経営判断支援"]
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] py-24 sm:py-32 border-y border-slate-200 animate-in fade-in duration-700 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-gold/5 via-brand-navy/5 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="mx-auto max-w-5xl px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="mb-20 sm:mb-28 text-center sm:text-left max-w-3xl">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-brand-gold block mb-4">
            Our Approach
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-brand-navy leading-[1.3] mb-6">
            「作業の代行」ではなく、<br className="sm:hidden" />「経理組織のアップグレード」を。
          </h3>
          <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-medium">
            経理担当者を単に置き換えるのではなく、属人化を排除し、強い組織を創る。これがLuareの提供する価値です。
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Main vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[2.5rem] w-[1px] bg-gradient-to-b from-brand-gold/80 via-brand-navy/30 to-transparent" />

          <div className="flex flex-col gap-16 sm:gap-24">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start gap-6 md:gap-16 group">
                
                {/* Step Node & Number */}
                <div className="flex items-center gap-6 md:w-32 shrink-0">
                  <div className="hidden md:flex w-20 h-20 bg-white border border-brand-gold/30 rounded-full items-center justify-center shadow-lg relative z-10 group-hover:border-brand-gold transition-colors duration-500">
                    <span className="font-serif text-xl font-bold text-brand-navy">0{idx + 1}</span>
                  </div>
                  <div className="md:hidden flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-white border border-brand-gold/30 rounded-full flex items-center justify-center shadow-sm">
                      <span className="font-serif text-sm font-bold text-brand-navy">0{idx + 1}</span>
                    </div>
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">{step.step}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full relative overflow-hidden">
                  
                  {/* Subtle highlight on final steps */}
                  {idx >= 3 && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/[0.02] rounded-bl-full pointer-events-none" />
                  )}

                  <span className="hidden md:block text-[10px] font-bold tracking-widest text-brand-gold uppercase mb-3">
                    {step.step}
                  </span>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal mb-4">
                    {step.title}
                  </h4>
                  
                  <p className="text-sm sm:text-base text-brand-slate leading-[1.8] font-medium mb-8">
                    {step.desc}
                  </p>

                  {/* Bullet points grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-brand-slate/80">{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
