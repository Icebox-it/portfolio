import { NextResponse } from "next/server";

export interface Skill {
  id: number;
  icon: string;
  name: string;
  level: string;
  remark: string;
}

const skills: Skill[] = [
  { id: 1, icon: "", name: "Java", level: "High", remark: "2.0" },
  { id: 2, icon: "", name: "JavaScript", level: "High", remark: "2.0" },
  { id: 3, icon: "", name: "C#", level: "Low", remark: "2.0" },
  { id: 4, icon: "", name: "Oracle", level: "High", remark: "2.0" },
  { id: 5, icon: "", name: "Struts", level: "High", remark: "2.0" },
];

export const GET = async () => {
  return NextResponse.json(
    { skills },
    {
      status: 200,
    }
  );
};
