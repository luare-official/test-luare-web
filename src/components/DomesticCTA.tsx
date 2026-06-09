import Link from "next/link";

export default function DomesticCTA() {
  const benefits = [
    "経理部門の「属人化・ブラックボックス化」のリスク診断",
    "本当に「新規採用・増員」が必要かどうかの客観的な判断",
    "自社で取り組むべき「業務棚卸・効率化」の具体的な方向性",
    "AIや自動化ツールで削減できる「残業時間」の予測"
  ];

  return (
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
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide text-white mb-8 leading-[1.4]">
          まずは、貴社の経理に潜む<br className="sm:hidden" />リスクを可視化しませんか？
        </h2>
        
        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-16">
          現状の業務フローをお伺いし、どこに「属人化リスク」や「無駄なコスト」が潜んでいるかをプロの目で診断します。強引な営業は一切ありませんのでご安心ください。
        </p>

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
              無料オンライン相談（30分）を予約する
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
        </div>

      </div>
    </section>
  );
}
