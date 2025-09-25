"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/api/projects/route";

export default function CareerPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const res = await fetch("http://localhost:3000/api/projects", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    }
    return await res.json();
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data.projects ?? data);
    });
  }, []);

  return (
    <div id="career" className="text-center">
      <h2>職歴</h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border-stone-700 border-2 border-solid rounded-lg"
          >
            <p>
              {index + 1}. {project.name}
            </p>
            <p>Assign：{project.type}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
