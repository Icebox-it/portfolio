import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@/components/Menu/Menu";

export const metadata: Metadata = {
  title: "Mero's Portfolio",
  icons: {
    icon: "/images/favicon.png",
  },
  meta: {
    keywords: "Portfolio, Necochi, Backend Engineer, Java, Spring Framework",
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
        <Menu />
        {children}
      </body>
    </html>
  );
}
