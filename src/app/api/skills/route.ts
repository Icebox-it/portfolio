import { NextResponse } from "next/server";
export interface Skill {
  id: number;
  icon: string;
  name: string;
  level: string;
  remark: string;
}

const skills: Skill[] = [
  {
    id: 1,
    icon: "/images/Java.jpeg",
    name: "Java",
    level: "High",
    remark: "2.0",
  },
  {
    id: 2,
    icon: "/images/JavaScript.png",
    name: "JavaScript",
    level: "High",
    remark: "2.0",
  },
  { id: 3, icon: "/images/Java.jpeg", name: "C#", level: "Low", remark: "2.0" },
  {
    id: 4,
    icon: "/images/Oracle.png",
    name: "Oracle",
    level: "High",
    remark: "2.0",
  },
  {
    id: 5,
    icon: "/images/struts.svg",
    name: "Struts",
    level: "High",
    remark: "2.0",
  },
];
// 実務で使える程度: teraterm, linux, git, Docker
// 何となくわかる程度: Bootstrap, HTML5, CSS
// 触ったことある程度: .NET, PostgreSQL, Node.js, NEXT.js, Vue.js, Kubernetes, Apache HTTP Server

export const GET = async () => {
  return NextResponse.json(
    { skills },
    {
      status: 200,
    }
  );
};
