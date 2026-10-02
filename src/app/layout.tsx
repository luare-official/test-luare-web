import type { Metadata } from "next";
import { Inter, Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luare Consulting | 経理・財務を、設計から実務まで",
  description: "会計・財務コンサルティング、Global Finance、Finance Operations、BPOまで。外資系日本法人・海外子会社を持つ企業の経理・財務を、設計から実務まで支援します。",
  keywords: ["経理", "財務", "会計コンサルティング", "Finance Operations", "経理BPO", "Global Finance", "HQ Reporting", "Intercompany", "内部統制", "USCPA", "Luare", "ルアーレ"],
};

import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSerif.variable} ${notoSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-white text-brand-charcoal font-sans selection:bg-brand-navy selection:text-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-39MBNBLCY1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-39MBNBLCY1');
          `}
        </Script>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}


