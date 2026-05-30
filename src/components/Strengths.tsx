export default function Strengths() {
  const strengths = [
    {
      title: "圧倒的な専門性",
      subtitle: "Professional Expertise",
      desc: "BIG4出身者やUSCPA資格保有者が集結。クロスボーダー取引や国際会計基準に精通し、確かなアドバイスを提供します。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      )
    },
    {
      title: "強固なレビュー体制",
      subtitle: "Robust Review",
      desc: "AIと専門家による二重・三重のチェック体制。ヒューマンエラーを極限まで排除し、実務品質を徹底的に保証します。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      )
    },
    {
      title: "堅牢な情報管理体制",
      subtitle: "Data Governance",
      desc: "国際的な情報保護規制への準拠に加え、IT全般統制（ITGC）基準をクリアしたアクセス制御インフラを構築。極めて機密性の高いグループ企業の財務データを安全に守ります。",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    }
  ];

  return (
    <section id="strengths" className="py-24 sm:py-32 bg-brand-offwhite border-b border-brand-silver/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title Section */}
        <div className="max-w-3xl mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate">
            Why Luare
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-charcoal mt-4 leading-tight">
            圧倒的な専門性と<br />
            テクノロジーによる高度な統制。
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
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

