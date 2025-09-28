import { NextResponse } from "next/server";
export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "画像認証システム　サーバ側開発(2022/06 ~ 2024/06)",
    type: "FD/CD/UT",
    description:
      "画像認証システムの顧客要望対応として、サーバ側の機能追加や、マイグレーション対応を行いました。期間中に対応したバグ数はXX件程で、〜に努めました。",
  },
  {
    id: 2,
    name: "画像認証システム　サーバ側管理画面改修(2024/06 ~ 2025/09)",
    type: "CD/UT",
    description:
      "SSL対応に伴うフロント側の画面改修と中継機のHTTPサーバのSSL化対応を行いました。",
  },
  {
    id: 3,
    name: "画像認証システム　フロント側管理画面改修(2024/10 ~ 2024/12)",
    type: "CD/UT",
    description:
      "SSL対応に伴うフロント側の画面改修と中継機のHTTPサーバのSSL化対応を行いました。〜に努めました。",
  },
];

export const GET = async () => {
  return NextResponse.json(
    { projects },
    {
      status: 200,
    }
  );
};
