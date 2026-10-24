import Link from "next/link";

export default function Footer() {
  return (
    <footer className="luare-footer">
      <div className="luare-container">
        <div className="luare-footer-main">
          <div>
            <Link href="/" className="luare-footer-logo">
              Luare Consulting
              <small>ACCOUNTING &amp; FINANCE</small>
            </Link>
            <p className="luare-footer-desc">
              外資系・グローバル企業を中心に、会計・財務、監査・税務、
              M&amp;A・Valuation、Global Reportingなどの専門課題を支援します。
            </p>
          </div>
          <nav className="luare-footer-links" aria-label="Footer navigation">
            <Link href="/">ホーム</Link>
            <Link href="/services">サービス</Link>
            <Link href="/cases">支援事例</Link>
            <Link href="/insights">ブログ</Link>
            <Link href="/pricing">料金</Link>
            <Link href="/#representative">代表プロフィール</Link>
            <Link href="/services/audit-assurance">会計監査対応</Link>
            <Link href="/bpo">経理BPO</Link>
            <Link href="/contact">お問い合わせ</Link>
          </nav>
        </div>
        <div className="luare-footer-copy">© 2026 Luare Consulting</div>
      </div>
    </footer>
  );
}
