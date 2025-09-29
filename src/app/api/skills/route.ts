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
    level: "3",
    remark: "",
  },
  {
    id: 2,
    icon: "/images/JavaScript.png",
    name: "JavaScript",
    level: "2",
    remark: "2.0",
  },
  {
    id: 3,
    icon: "/images/Oracle.png",
    name: "Oracle",
    level: "3",
    remark: "2.0",
  },
  {
    id: 4,
    icon: "/images/struts.svg",
    name: "Struts",
    level: "3",
    remark: "2.0",
  },
  {
    id: 5,
    icon: "/images/Angular.png",
    name: "Angular",
    level: "2",
    remark: "2.0",
  },
  {
    id: 6,
    icon: "/images/docker-mark-blue.png",
    name: "Docker",
    level: "2",
    remark: "2.0",
  },
  {
    id: 7,
    icon: "/images/git.png",
    name: "Docker",
    level: "2",
    remark: "2.0",
  },
  {
    id: 8,
    icon: "/images/linux.jpeg",
    name: "Linux",
    level: "3",
    remark: "2.0",
  },
  {
    id: 9,
    icon: "/images/teraterm.png",
    name: "Teraterm",
    level: "3",
    remark: "2.0",
  },
  {
    id: 10,
    icon: "/images/Bootstrap.png",
    name: "BootStrap",
    level: "1",
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
