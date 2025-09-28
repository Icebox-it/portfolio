"use client";

import { useEffect, useState } from "react";
import { Skill } from "@/app/api/skills/route";
import Image from "next/image";

export default function SkillPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [openSkillId, setOpenSkillId] = useState<number | null>(null);

  const getSkills = async () => {
    const res = await fetch("http://localhost:3000/api/skills", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    }
    return await res.json();
  };

  useEffect(() => {
    getSkills().then((data) => {
      setSkills(data.skills ?? data);
    });
  }, []);

  const toggleSkill = (id: number) => {
    setOpenSkillId(openSkillId === id ? null : id);
  };

  return (
    <div id="skill" className="my-5 mb-5">
      <h2 className="text-center">Skills</h2>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="d-flex flex-column align-items-center"
            style={{ width: "75px", height: "75px" }}
          >
            <div className="ratio ratio-1x1 border-2 rounded-4 padding-10px　overflow-hidden">
              <img
                src={skill.icon}
                alt={skill.name}
                width={75}
                height={75}
                className="img-thumbnail"
              />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
