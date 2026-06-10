import Link from "next/link";

export default function GlobalCTA() {
  const benefits = [
    "グローバル本社（HQ）のレポーティング要件の整理",
    "大手ファーム・自社採用と比較した正確な費用シミュレーション",
    "経理アウトソーシング（BPO）で巻き取れる実務範囲の特定"
  ];

  return (
    <div className="flex flex-col">
      {/* Foreign Enterprise CTA */}
      <section className="relative py-24 sm:py-32 bg-brand-navy overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 text-center">
          
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold mb-6 block">
            Free Consultation
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide text-white mb-16 leading-[1.4]">
            日本法人に最適な財務体制を<br />シミュレーションしませんか？
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-left max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-4 text-center sm:text-left">
              無料相談で得られるもの
            </h3>
            <ul className="space-y-5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium text-[15px] sm:text-base tracking-wide leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm sm:text-base font-bold text-brand-navy bg-brand-gold overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(197,160,89,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3 tracking-wider">
                外資系企業向けの無料オンライン相談を予約する
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="relative py-20 sm:py-24 bg-brand-charcoal overflow-hidden border-t border-white/10">
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 text-center">
          
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white mb-6">
            For Professional Partners
          </h2>
          <span className="text-sm font-bold tracking-widest text-brand-gold mb-10 block">
            （税理士・司法書士・行政書士・社労士の皆様へ）
          </span>
          
          <p className="text-sm sm:text-base text-white/80 leading-[1.8] max-w-2xl mx-auto mb-12 font-medium">
            海外クライアントの日本進出、および高度な経理・財務サポートに関する業務協業を歓迎しております。クライアント様への同行提案なども可能ですので、お気軽にご相談ください。
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-transparent border-2 border-brand-gold overflow-hidden rounded-full transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy"
            >
              <span className="relative z-10 flex items-center gap-3 tracking-wider">
                士業・パートナー向けの協業について問い合わせる
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
