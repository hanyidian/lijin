import type { Metadata } from "next";
import { Noto_Serif_SC, Inter } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "黎锦 - 穿在身上的史诗 | Li Brocade",
  description:
    "探索三千年黎族纺染织绣技艺，联合国急需保护的非物质文化遗产。体验经纬交织之美，感受海南黎族文化的独特魅力。",
  keywords: ["黎锦", "Li Brocade", "非物质文化遗产", "海南", "黎族", "传统工艺", "纺织"],
  openGraph: {
    title: "黎锦 - 穿在身上的史诗",
    description: "三千年纺染织绣，联合国急需保护的非物质文化遗产",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerifSC.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
