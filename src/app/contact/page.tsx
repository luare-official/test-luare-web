import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24 lg:pt-32 lg:pb-32 bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 fade-in-section">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-6 tracking-wider">
              無料相談・お問い合わせ
            </h1>
            <p className="text-sm md:text-base text-brand-slate tracking-wide leading-relaxed">
              経理・財務体制に関するご相談はお気軽にお問い合わせください。<br className="hidden sm:block" />
              初回相談は無料です。
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-12 shadow-xl border border-brand-silver/20 fade-in-section" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-10">
              
              {/* 基本情報セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  お客様情報
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社名 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      会社名 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                    </label>
                    <input type="text" className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" placeholder="株式会社Luare Consulting" required />
                  </div>

                  {/* お名前 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      お名前 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                    </label>
                    <input type="text" className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" placeholder="山田 太郎" required />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      メールアドレス <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                    </label>
                    <input type="email" className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" placeholder="info@example.com" required />
                  </div>

                  {/* 電話番号（任意） */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      電話番号 <span className="text-[10px] text-brand-silver font-normal ml-1 bg-brand-silver/10 px-1 py-0.5">任意</span>
                    </label>
                    <input type="tel" className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" placeholder="03-1234-5678" />
                  </div>
                </div>
              </div>

              {/* 企業属性セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  企業情報
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社種別 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      会社種別 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                    </label>
                    <div className="relative">
                      <select defaultValue="" className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" required>
                        <option value="" disabled>選択してください</option>
                        <option value="国内企業">国内企業</option>
                        <option value="外資系日本法人">外資系日本法人</option>
                        <option value="海外企業（日本進出予定）">海外企業（日本進出予定）</option>
                        <option value="その他">その他</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* 会社規模 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      会社規模 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                    </label>
                    <div className="relative">
                      <select defaultValue="" className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" required>
                        <option value="" disabled>選択してください</option>
                        <option value="1～10名">1～10名</option>
                        <option value="11～50名">11～50名</option>
                        <option value="51～100名">51～100名</option>
                        <option value="101～300名">101～300名</option>
                        <option value="301名以上">301名以上</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 相談内容セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  ご相談内容
                </h3>

                {/* 現在の経理体制 */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                    現在の経理体制 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                  </label>
                  <div className="relative md:w-1/2">
                    <select defaultValue="" className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50" required>
                      <option value="" disabled>選択してください</option>
                      <option value="経理担当者なし">経理担当者なし</option>
                      <option value="経理担当者1名">経理担当者1名</option>
                      <option value="2〜5名">2〜5名</option>
                      <option value="6名以上">6名以上</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                
                {/* 複数選択項目 */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-brand-navy mb-4 tracking-wide">
                    相談種別（複数選択可）
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      "採用の代替を探している",
                      "経理業務を効率化したい",
                      "月次決算を改善したい",
                      "内部統制を整備したい",
                      "外資系日本法人の支援を探している",
                      "その他",
                    ].map((item) => (
                      <label key={item} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-brand-silver/60 bg-brand-offwhite/50 group-hover:border-brand-navy transition-colors">
                          <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={item} />
                          <svg className="w-3 h-3 text-brand-navy opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-brand-slate group-hover:text-brand-navy transition-colors select-none">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 自由記述欄 */}
                <div className="pt-4">
                  <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                    現在のお悩み・ご相談内容 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必須</span>
                  </label>
                  <textarea 
                    className="w-full border border-brand-silver/40 p-4 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50 min-h-[160px] resize-y" 
                    placeholder="経理担当者の退職予定 / 採用難 / 月次決算の遅れ / 海外親会社へのレポート対応 / などをご記入ください。"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 text-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:bg-brand-darknavy w-full sm:w-auto min-w-[300px]"
                >
                  無料相談を申し込む
                </button>
                <p className="text-[10px] text-brand-silver mt-4 tracking-wider">
                  送信ボタンを押すことで、プライバシーポリシーに同意したものとみなされます。
                </p>
              </div>

            </form>
          </div>
          
        </div>
      </main>

      <Footer />
    </>
  );
}
