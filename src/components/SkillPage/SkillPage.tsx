"use client";

import { useEffect, useState } from "react";
import { Skill } from "@/app/api/skills/route";

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
    <div id="skill" className="my-5">
      <h2 className="text-center">Skills</h2>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {skills.map((skill) => (
          <div key={skill.id} className="d-flex flex-column align-items-center">
            <button
              className="btn btn-light shadow-sm rounded-circle p-3"
              onClick={() => toggleSkill(skill.id)}
              aria-expanded={openSkillId === skill.id}
              aria-controls={`collapse-${skill.id}`}
            >
              <i className={`bi ${skill.icon} fs-1`}></i>
            </button>
            <span className="mt-2">{skill.name}</span>

            <div
              className={`collapse mt-2 ${
                openSkillId === skill.id ? "show" : ""
              }`}
              id={`collapse-${skill.id}`}
            >
              <div className="card card-body shadow-sm border-0">
                <p>
                  <strong>Level:</strong> {skill.level}{" "}
                </p>
                <p>{skill.remark}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
