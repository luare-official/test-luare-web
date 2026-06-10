export default function RationalChoice() {
  const leftFlow = [
    "新規採用",
    "教 育",
    "引継ぎ",
    "属人化再発",
    "退職リスク",
    "再採用",
  ];

  const rightFlow = [
    "業務棚卸",
    "標準化",
    "継続運営",
    "残業削減",
    "増員抑制",
    "継続運営",
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-24 md:py-32 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold mb-6 block">
            Rational Choice
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-5xl font-medium tracking-wide text-brand-navy mb-8 leading-[1.4]">
            なぜ採用より<br className="sm:hidden" />合理的なのか
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-brand-charcoal mb-10 tracking-wide">
            人を増やす前に、まず仕組みを整える。
          </p>
          <div className="space-y-6 text-[15px] sm:text-base text-brand-slate leading-relaxed font-medium">
            <p>
              経理担当者を採用しても、業務が整理されていなければ、属人化や引継ぎ問題は繰り返されます。
            </p>
            <p>
              Luareは、人を増やす前に業務を整理し、標準化し、継続運営できる強固な体制を構築します。
            </p>
          </div>
        </div>


        {/* --- Diagram Section --- */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-24 md:mb-32">
          
          {/* Left: Hiring Loop */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
            <h3 className="font-serif text-lg font-bold text-slate-400 mb-10 tracking-wide uppercase">
              一般的な採用のループ
            </h3>
            
            <div className="flex flex-col items-center gap-2">
              {leftFlow.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center w-full">
                  <div className="w-full max-w-[200px] py-3 px-6 bg-slate-50 border border-slate-200 text-slate-500 font-bold rounded shadow-sm text-sm tracking-widest">
                    {item}
                  </div>
                  {idx < leftFlow.length - 1 && (
                    <div className="h-6 w-[1px] bg-slate-300 my-1 flex items-center justify-center relative">
                      <div className="absolute bottom-0 w-2 h-2 border-r border-b border-slate-300 rotate-45 translate-y-[3px]"></div>
                    </div>
                  )}
                </div>
              ))}
              {/* Loop back indicator */}
              <div className="mt-6 w-full max-w-[240px] h-12 border-b-2 border-l-2 border-r-2 border-slate-200 rounded-b-xl relative">
                 <div className="absolute -top-1 -left-[5px] w-2 h-2 border-t-2 border-r-2 border-slate-200 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Right: Luare Flow */}
          <div className="flex-1 bg-white border border-brand-gold/30 rounded-2xl p-8 sm:p-12 shadow-md text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
            <h3 className="font-serif text-lg font-bold text-brand-navy mb-10 tracking-wide uppercase">
              Luareの最適化アプローチ
            </h3>
            
            <div className="flex flex-col items-center gap-2">
              {rightFlow.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center w-full">
                  <div className={`w-full max-w-[200px] py-3 px-6 border font-bold rounded shadow-sm text-sm tracking-widest ${idx >= 3 ? 'bg-brand-navy text-white border-brand-navy' : 'bg-brand-gold/10 text-brand-navy border-brand-gold/20'}`}>
                    {item}
                  </div>
                  {idx < rightFlow.length - 1 && (
                    <div className={`h-6 w-[1px] my-1 flex items-center justify-center relative ${idx >= 2 ? 'bg-brand-navy/30' : 'bg-brand-gold/50'}`}>
                      <div className={`absolute bottom-0 w-2 h-2 border-r border-b rotate-45 translate-y-[3px] ${idx >= 2 ? 'border-brand-navy/30' : 'border-brand-gold/50'}`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* --- Case Studies Section --- */}
        <div className="text-center mb-16">
           <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal">
            こんなケースで導入されています
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Case 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm relative">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-3">Case Study 01</div>
            <h4 className="font-serif text-xl font-bold text-brand-charcoal mb-8 border-b border-slate-100 pb-4">
              経理担当者1名規模の企業
            </h4>
            
            <div className="space-y-3">
              {[
                { label: "課題", text: "月末残業が慢性化" },
                { label: "検討", text: "担当者の増員を検討" },
                { label: "決断", text: "Luare導入", highlight: true },
                { label: "プロセス", text: "業務整理・標準化" },
                { label: "成果", text: "残業削減" },
                { label: "成果", text: "増員見送り" },
                { label: "結論", text: "総コスト最適化", final: true }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-20 text-[10px] font-bold tracking-widest uppercase text-right ${step.final ? 'text-brand-gold' : 'text-slate-400'}`}>
                    {step.label}
                  </div>
                  <div className="w-4 flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full ${step.highlight ? 'bg-brand-gold' : step.final ? 'bg-brand-navy w-3 h-3' : 'bg-slate-300'}`}></div>
                    {idx < 6 && <div className="w-[1px] h-8 bg-slate-200"></div>}
                  </div>
                  <div className={`flex-1 text-sm font-bold tracking-wide ${step.highlight ? 'text-brand-gold' : step.final ? 'text-brand-navy text-base' : 'text-slate-600'}`}>
                    {step.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm relative">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-3">Case Study 02</div>
            <h4 className="font-serif text-xl font-bold text-brand-charcoal mb-8 border-b border-slate-100 pb-4">
              経理担当者2名規模の企業
            </h4>
            
            <div className="space-y-3">
              {[
                { label: "課題", text: "特定の業務が属人化" },
                { label: "リスク", text: "退職リスク発生" },
                { label: "決断", text: "Luare導入", highlight: true },
                { label: "プロセス", text: "業務標準化" },
                { label: "成果", text: "引継ぎ可能な体制へ" },
                { label: "結論", text: "持続可能な継続運営", final: true }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-20 text-[10px] font-bold tracking-widest uppercase text-right ${step.final ? 'text-brand-gold' : 'text-slate-400'}`}>
                    {step.label}
                  </div>
                  <div className="w-4 flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full ${step.highlight ? 'bg-brand-gold' : step.final ? 'bg-brand-navy w-3 h-3' : 'bg-slate-300'}`}></div>
                    {idx < 5 && <div className="w-[1px] h-8 bg-slate-200"></div>}
                  </div>
                  <div className={`flex-1 text-sm font-bold tracking-wide ${step.highlight ? 'text-brand-gold' : step.final ? 'text-brand-navy text-base' : 'text-slate-600'}`}>
                    {step.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
