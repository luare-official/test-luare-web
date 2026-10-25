import Link from "next/link";

type Topic = "internal"|"finance"|"transform"|"global"|"audit"|"bpo"|"ma";
const related: Record<Topic,readonly {title:string,href:string,description:string}[]> = {
  internal:[
    {title:"海外拠点のJ-SOX 3点セット整備",href:"/cases#/case/overseas-jsox",description:"現地業務のヒアリングから文書化・評価準備まで"},
    {title:"グローバル内部統制の運用",href:"/cases#/case/global-internal-control",description:"統制方針と国内実務の役割分担を整理"},
  ],
  finance:[
    {title:"決算実務と締め工程の改善",href:"/cases#/case/accounting-operations",description:"複数事業のデータと決算工程を整理"},
    {title:"FP&A支援モデル（実績ではありません）",href:"/cases#fpa-model",description:"海外事業のKPI・予実分析を設計する参考モデル"},
  ],
  transform:[
    {title:"決算工程・データ収集の改善",href:"/cases#/case/accounting-operations",description:"事業部と経理部の業務工程を整理"},
    {title:"グローバル内部統制の運用",href:"/cases#/case/global-internal-control",description:"現場で続けられる手順と責任分担を検討"},
  ],
  global:[
    {title:"海外拠点のJ-SOX文書化",href:"/cases#/case/overseas-jsox",description:"言語や商習慣を越えた業務可視化の関連事例"},
    {title:"FP&A支援モデル（実績ではありません）",href:"/cases#fpa-model",description:"海外本社と現地の経営指標を結ぶ参考モデル"},
  ],
  audit:[
    {title:"海外拠点のJ-SOX文書化",href:"/cases#/case/overseas-jsox",description:"監査関係者との論点整理を含む関連事例（監査証明の事例ではありません）"},
  ],
  bpo:[
    {title:"決算資料と業務フローの整理",href:"/cases#/case/accounting-operations",description:"継続的な経理運営にも関係する決算工程の参考事例"},
  ],
  ma:[]
};

export default function RelatedCaseLinks({topic}:{topic:Topic}){
  const items=related[topic];
  if(!items.length)return null;
  return <section className="border-y border-[#CBD5E1] bg-white py-12 sm:py-16" aria-labelledby="related-cases-heading">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <p className="text-xs font-semibold tracking-[.16em] text-[#1766A0]">RELATED CASE STUDIES</p>
      <h2 id="related-cases-heading" className="mt-3 text-2xl font-bold text-[#0B3158]">関連する支援事例</h2>
      <p className="mt-3 text-sm leading-7 text-[#475569]">サービスの内容に近い事例・支援モデルをご紹介します。実績の詳細は事実確認・掲載許諾の確認中です。</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {items.map(item=><Link key={item.href} href={item.href} className="group block rounded-md border border-[#CBD5E1] bg-[#EDF5FC] p-6 hover:border-[#CBD5E1]">
          <h3 className="text-base font-semibold leading-7 text-[#0B3158]">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#475569]">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-[#0B3158] group-hover:underline">詳細を見る ↗</span>
        </Link>)}
      </div>
      <Link href="/cases" className="mt-6 inline-block text-sm font-semibold text-[#0B3158] hover:underline">支援事例の一覧へ ↗</Link>
    </div>
  </section>;
}
