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
    icon: "/images/linux.jpeg",
    name: "Linux",
    level: "3",
    remark: "2.0",
  },
  {
    id: 2,
    icon: "/images/Oracle.png",
    name: "Oracle",
    level: "3",
    remark: "",
  },
  {
    id: 3,
    icon: "/images/Postgre.png",
    name: "PostgreSQL",
    level: "1",
    remark: "2.0",
  },
  {
    id: 4,
    icon: "/images/Java.jpeg",
    name: "Java",
    level: "3",
    remark: "",
  },
  {
    id: 5,
    icon: "/images/JavaScript.png",
    name: "JavaScript",
    level: "2",
    remark: "2.0",
  },
  {
    id: 6,
    icon: "/images/HTML5.png",
    name: "HTML5",
    level: "2",
    remark: "2.0",
  },
  {
    id: 7,
    icon: "/images/css.png",
    name: "CSS",
    level: "2",
    remark: "2.0",
  },
  {
    id: 8,
    icon: "/images/struts.svg",
    name: "Struts",
    level: "3",
    remark: "2.0",
  },
  {
    id: 9,
    icon: "/images/angular.webp",
    name: "Angular",
    level: "2",
    remark: "2.0",
  },
  {
    id: 10,
    icon: "/images/Bootstrap.png",
    name: "BootStrap",
    level: "1",
    remark: "2.0",
  },
  {
    id: 11,
    icon: "/images/docker-mark-blue.png",
    name: "Docker",
    level: "2",
    remark: "2.0",
  },
  {
    id: 12,
    icon: "/images/gitlab.png",
    name: "GitLab",
    level: "2",
    remark: "2.0",
  },
  {
    id: 13,
    icon: "/images/teraterm.png",
    name: "Teraterm",
    level: "3",
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
