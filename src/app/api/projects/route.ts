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
    name: "生体認証システムサーバ側開発",
    type: "FD/CD/UT",
    description: "2021/04 ~ 2024/03",
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
