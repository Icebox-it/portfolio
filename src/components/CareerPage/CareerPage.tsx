"use client";
import { useEffect, useState } from "react";
import { Project } from "@/app/api/projects/route";

export default function CareerPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const itemsPerRow = 8;

  const getProjects = async () => {
    const res = await fetch("http://localhost:3000/api/projects", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    }
    return await res.json();
  };

  const createFilledProjects = (projects: Project[], itemsPerRow: number) => {
    const filledProjects = [...projects];
    const remainder = projects.length % itemsPerRow; // .size → .length

    if (remainder !== 0) {
      const emptyItemsNeeded = itemsPerRow - remainder;

      for (let i = 0; i < emptyItemsNeeded; i++) {
        filledProjects.push({
          id: `empty-${i}`,
          name: "",
          isEmpty: true,
          emptyIndex: i,
        } as any);
      }
    }

    return filledProjects;
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data.projects ?? data);
    });
  }, []);

  const filledProjects = createFilledProjects(projects, itemsPerRow);

  return (
    <div id="career" className="text-center mb-5">
      <h2>職歴</h2>
      <div className="d-flex flex-wrap">
        {filledProjects.map((project, index) => {
          const isRealProject = !(project as any).isEmpty;
          const realProjectIndex = isRealProject
            ? projects.findIndex((p) => p.id === project.id) + 1
            : null;

          return (
            <div
              key={project.id}
              className="border-2 border-dark rounded-4 m-2 d-flex align-items-center justify-content-center"
              style={{
                width: `calc(${100 / itemsPerRow}% - 1rem)`,
                aspectRatio: "1 / 1",
                minWidth: "90px",
                maxWidth: "180px",
              }}
            >
              <p className="text-center m-0">
                {isRealProject
                  ? `${realProjectIndex}. ${project.name}`
                  : `${
                      projects.length + ((project as any).emptyIndex || 0) + 1
                    }. comming soon...`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
