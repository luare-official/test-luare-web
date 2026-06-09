export default function DomesticPainPoints() {
  const painPoints = [
    "経理担当者が辞めたら業務が完全に止まってしまう",
    "特定の担当者しか分からないブラックボックス業務がある",
    "月次決算の確定が担当者頼みで、毎月遅れがちである",
    "採用費をかけて募集しても、実務ができる人材が捕まらない",
  ];

  return (
    <div className="w-full bg-brand-white py-16 sm:py-24 animate-in fade-in duration-700">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60 block mb-4">
            Pain Points
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal leading-[1.5]">
            経理部門に、こんな課題は<br className="sm:hidden" />ありませんか？
          </h3>
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {painPoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-6 h-6 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-gold/20">
                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-bold text-brand-charcoal leading-relaxed tracking-wide">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
