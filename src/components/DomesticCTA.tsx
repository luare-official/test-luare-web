import Link from "next/link";

export default function DomesticCTA() {
  const benefits = [
    <>本当に「新規採用・増員」が必要かどうかの客観的な判断</>,
    <>自社で取り組むべき「業務棚卸・効率化」の具体的な方向性</>,
    <>
      貴社の業務ボリュームに合わせた、
      <br />
      最適なアウトソーシング体制と概算イメージの共有
    </>
  ];

  return (
    <section className="relative h-auto md:h-auto py-16 sm:py-24 md:pt-24 md:pb-20 bg-brand-navy overflow-hidden">
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
          「採用」か「外注」か。<br className="sm:hidden" />まずは経理の最適解を診断しませんか？
        </h2>
        
        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-16">
          「経理が何をしているか見えない」「現場から増員を求められているが、本当に採用すべきか迷っている」——そんな経営者様のリアルなお悩みに寄り添います。現状の課題を整理し、自社採用とアウトソーシングのどちらが最適か、客観的にアドバイスいたします。強引な営業は一切ありませんのでご安心ください。
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-12 backdrop-blur-sm text-left max-w-3xl mx-auto mb-16">
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
            className="group relative inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 text-xs sm:text-base font-bold text-brand-navy bg-brand-gold overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(197,160,89,0.5)] hover:scale-105 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 tracking-wider">
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
