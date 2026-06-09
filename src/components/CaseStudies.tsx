export default function CaseStudies() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 sm:py-32 border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
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
