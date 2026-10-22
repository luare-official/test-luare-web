import Link from "next/link";
import { serviceItems, servicePages, type ServicePageKey } from "@/lib/serviceCatalog";

type Props = { page: ServicePageKey; compact?: boolean };

export default function ServiceTopicSections({page,compact=false}: Props){
  const meta=servicePages[page];
  const topics=serviceItems.filter(item=>item.page===page);
  return <section className="luare-guide-detail" aria-label={meta.title}>
    <div className="luare-guide-detail-inner">
      {!compact && <nav className="luare-guide-detail-breadcrumb" aria-label="パンくずリスト">
        <Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href="/#services">サービス</Link>
        <span aria-hidden="true">/</span><span aria-current="page">{meta.title}</span>
      </nav>}
      <p className="luare-guide-detail-kicker">SERVICE DETAILS</p>
      {compact ? <h2>{meta.title}の主な支援内容</h2> : <h1>{meta.title}</h1>}
      <p className="luare-guide-detail-intro">{meta.intro}</p>
      <div className="luare-guide-detail-list">
        {topics.map(item=><article key={item.id} id={item.id} className="luare-guide-detail-topic">
          <h3>{item.name}</h3><p>{item.description}</p>
        </article>)}
      </div>
      <Link href="/contact" className="luare-guide-detail-cta">{meta.title}について相談する →</Link>
    </div>
  </section>;
}
