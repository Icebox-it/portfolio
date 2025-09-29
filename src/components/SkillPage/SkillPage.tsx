"use client";

import { useEffect, useState } from "react";
import { Skill } from "@/app/api/skills/route";
import Image from "next/image";

export default function SkillPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [openSkillId, setOpenSkillId] = useState<number | null>(null);

  const getSkills = async () => {
    const res = await fetch("/api/skills", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`Error　for responce. status: ${res.status}`);
    }
    return await res.json();
  };

  useEffect(() => {
    getSkills().then((data) => {
      setSkills(data.skills ?? data);
    });
  }, []);

  return (
    <div id="skill" className="text-center my-5 mb-5 page">
      <h2>Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="d-flex flex-column border-2 rounded-4 skill-item shadow-sm"
          >
            <div className="d-flex align-items-center justify-content-center flex-grow-1">
              <img
                src={skill.icon}
                alt={skill.name}
                className="img-fluid rounded-4 skill-icon"
              />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
