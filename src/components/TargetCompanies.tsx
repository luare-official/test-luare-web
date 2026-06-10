export default function TargetCompanies() {
  const cases = [
    {
      title: "経理担当者が1〜3名",
      desc: "担当者への依存が強く、退職リスクに常に不安がある。",
    },
    {
      title: "採用が難しい",
      desc: "採用しても、実務の育成や定着までに莫大な時間がかかる。",
    },
    {
      title: "月次決算の確定が遅い",
      desc: "経営判断に必要な数字がタイムリーに見えにくい。",
    },
    {
      title: "事業が急成長している",
      desc: "売上の伸びに管理部門が追いつかず、経理体制を整備したい。",
    },
    {
      title: "内部統制・標準化が必要",
      desc: "属人化を解消し、誰がやっても回る仕組みを構築したい。",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 md:py-32 border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/50 block mb-4">
            Who we help
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal leading-[1.5] mb-6">
            こんな課題を抱える企業に。
          </h3>
          <p className="text-sm sm:text-base text-brand-slate leading-relaxed font-medium max-w-2xl">
            Luareは、経理・財務機能の構築と運営を支援します。<br className="hidden sm:block" />
            特に以下のようなフェーズ・課題感を持つ企業に選ばれています。
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 hover:shadow-md hover:bg-white transition-all duration-300 group"
            >
              <div className="text-[10px] font-mono tracking-widest text-brand-gold uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                Case 0{idx + 1}
              </div>
              <h4 className="font-serif text-lg font-bold text-brand-charcoal mb-3 leading-snug">
                {item.title}
              </h4>
              <p className="text-[13px] sm:text-sm text-brand-slate leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
