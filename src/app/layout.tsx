import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@/components/Menu/Menu";
import { Zen_Maru_Gothic } from "next/font/google";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mero's Portfolio",
  icons: {
    icon: "/images/favicon.png",
  },
  meta: {
    keywords:
      "Portfolio, Necochi, Backend Engineer, Java, SE, システムエンジニア",
    description:
      "バックエンドエンジニアNecochiのポートフォリオサイトです。これまで私が身につけたスキルや経験を紹介しています。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={zenMaruGothic.className}>
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
