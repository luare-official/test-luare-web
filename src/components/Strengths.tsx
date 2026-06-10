export default function Strengths() {
  const strengths = [
    {
      title: "採用だけに頼らない体制",
      subtitle: "SUSTAINABLE SYSTEM",
      desc: "業務の標準化により、属人化を排除。人が入れ替わっても揺るがない強固な財務体制を提供します。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      )
    },
    {
      title: "今いる社員を活かせる",
      subtitle: "EMPOWER YOUR TEAM",
      desc: "定型業務を極限まで効率化し、既存スタッフがより付加価値の高い仕事に集中できる環境を創出します。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      )
    },
    {
      title: "Big4品質を最適コストで",
      subtitle: "TOP-TIER EXPERTISE",
      desc: "Big4出身者やUSCPAによる大企業水準のガバナンスと専門知識を、中小企業に最適化して適用します。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      )
    },
    {
      title: "将来の成長・外資対応も",
      subtitle: "GLOBAL ACCOUNTING & FINANCE CAPABILITY",
      desc: "国内企業の月次決算から、将来的なIFRS/US-GAAP対応、海外展開までシームレスに対応します。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    }
  ];

  return (
    <section id="strengths" className="relative py-16 sm:py-24 md:py-32 bg-brand-offwhite border-b border-brand-silver/20 overflow-hidden">
      
      {/* Background AI Finance Image with ~8% opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08] bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/ai_finance_concept.png')" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title Section */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate">
            Why Luare
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-charcoal mt-4 leading-tight">
            Luareが選ばれる理由
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {strengths.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-brand-white border border-brand-silver/30 flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-1">
                {item.title}
              </h3>
              <span className="block text-[10px] font-mono tracking-widest text-brand-gold mb-4 pb-4 border-b border-brand-gold/30 uppercase">
                {item.subtitle}
              </span>
              <p className="text-sm text-brand-slate leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

