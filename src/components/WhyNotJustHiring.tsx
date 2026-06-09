export default function WhyNotJustHiring() {
  return (
    <section className="w-full bg-white py-24 sm:py-32 border-b border-slate-100 relative overflow-hidden">
      
      {/* Premium subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-gradient-to-b from-brand-gold/[0.02] to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-4xl px-6 sm:px-10 relative z-10 text-center">
        
        {/* Header */}
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold mb-6 relative">
          <span className="absolute top-1/2 -left-12 w-8 h-[1px] bg-brand-gold/40"></span>
          The Limitation of Hiring
          <span className="absolute top-1/2 -right-12 w-8 h-[1px] bg-brand-gold/40"></span>
        </span>
        
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide text-brand-charcoal mb-12 leading-[1.5]">
          なぜ「採用」だけでは解決しないのか
        </h3>

        {/* Message Body */}
        <div className="max-w-2xl mx-auto space-y-8 text-[15px] sm:text-[17px] text-brand-slate leading-[2] font-medium tracking-wide">
          <p>
            経理担当者を採用しても、<br className="hidden sm:block" />
            業務が整理されていなければ、<br className="hidden sm:block" />
            属人化や引継ぎ問題は繰り返されます。
          </p>
          <p>
            本当に必要なのは、<br className="hidden sm:block" />
            人を増やすことではなく、<br className="hidden sm:block" />
            <span className="text-brand-charcoal font-bold bg-gradient-to-r from-brand-gold/20 to-transparent bg-[length:100%_8px] bg-no-repeat bg-bottom">業務を整理し、仕組み化し、</span><br className="hidden sm:block" />
            <span className="text-brand-charcoal font-bold bg-gradient-to-r from-brand-gold/20 to-transparent bg-[length:100%_8px] bg-no-repeat bg-bottom">継続運営できる体制を構築すること</span>です。
          </p>
          <div className="pt-4 mt-8 border-t border-slate-200 inline-block w-16 mx-auto" />
          <p className="text-lg sm:text-xl font-bold text-brand-navy">
            Luareは採用の代替ではありません。<br />
            採用だけに頼らない経理体制を構築します。
          </p>
        </div>

      </div>
    </section>
  );
}
