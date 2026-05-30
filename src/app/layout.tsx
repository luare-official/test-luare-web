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
  title: "Luare | ハイエンド財務コンサルティング＆BPOファーム",
  description: "中国・アジア企業の日本進出、および日本企業の海外バックオフィス構築に特化した、財務特化型AIと高度専門人材のハイエンドな統合型BPO・コンサルティングファーム。",
  keywords: ["財務コンサルティング", "BPO", "日本進出", "海外展開", "内部統制", "USCPA", "Luare", "ルアーレ"],
};

import ScrollToTop from "@/components/ScrollToTop";

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
      <body className="min-h-full flex flex-col bg-brand-white text-brand-charcoal font-sans selection:bg-brand-navy selection:text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}


