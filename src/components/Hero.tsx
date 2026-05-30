import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-24 sm:py-32 bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/global_cities_skyline.png"
          alt="Luare Global Cities Skyline"
          fill
          priority
          className="object-cover object-center grayscale opacity-60 mix-blend-luminosity filter contrast-[1.1]"
        />
        {/* Semi-transparent deep dark navy overlay for heavy intellectual look and readability */}
        <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl fade-in-section flex flex-col items-center">
          {/* Target / Top label */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 border-b border-slate-300/30 pb-2 mb-8">
            中国・アジア企業の日本進出、および日本企業の海外バックオフィス構築に特化。
          </span>

          {/* Main Copy */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-white leading-[1.3] mb-6 drop-shadow-md">
            グローバルビジネスの財務・ガバナンスを、シームレスに支援。
          </h1>

          {/* Sub Copy */}
          <p className="text-sm sm:text-base font-normal text-slate-300 leading-relaxed tracking-wider mb-10 max-w-3xl">
            財務特化型AIと高度専門人材を融合した、次世代の統合型BPO・コンサルティング。大手グローバルファーム出身者およびUSCPA等の専門チームが、確かな品質を提供します。
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#diagnostic"
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] border border-brand-gold hover:bg-brand-gold transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
            >
              クロスボーダー財務体制の無料診断（オンライン）
            </a>
          </div>
        </div>
      </div>

      {/* Bottom subtle bar decor */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent" />
    </section>
  );
}
