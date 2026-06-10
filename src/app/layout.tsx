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
  title: "Luare Consulting | 人に依存しない次世代型AI経理BPO",
  description: "採用・教育・退職リスクをゼロに。AIエージェントと専門家チームが一体となった次世代型経理BPOで、中堅企業の経理財務体制を根本から最適化します。",
  keywords: ["経理BPO", "AIエージェント", "経理アウトソーシング", "財務コンサルティング", "月次決算", "内部統制", "USCPA", "Luare", "ルアーレ"],
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


