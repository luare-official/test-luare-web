import Link from "next/link";

export default function FooterZh() {
  return (
    <footer className="luare-footer" lang="zh-CN">
      <div className="luare-container">
        <div className="luare-footer-main">
          <div>
            <Link href="/zh" className="luare-footer-logo">
              Luare Consulting<small>ACCOUNTING &amp; FINANCE</small>
            </Link>
            <p className="luare-footer-desc">为在日本开展业务的企业提供会计、财务及跨境业务支持。</p>
          </div>
          <nav className="luare-footer-links" aria-label="页脚导航">
            <Link href="/zh">首页</Link>
            <Link href="/zh/services">专业服务</Link>
            <Link href="/zh/cases">支持案例</Link>
            <Link href="/zh/insights">文章</Link>
            <Link href="/zh/pricing">费用说明</Link>
            <Link href="/zh/about">关于我们</Link>
            <Link href="/zh/contact">联系我们</Link>
            
            <Link href="/privacy">隐私政策 / Privacy Policy</Link>
          </nav>
        </div>
        <div className="luare-footer-copy">© 2026 Luare Consulting</div>
      </div>
    </footer>
  );
}
