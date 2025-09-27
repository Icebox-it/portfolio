"use client";
import { useEffect, useState } from "react";
import { Project } from "@/app/api/projects/route";

export default function CareerPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const itemsPerRow = 6;

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

      // for文で空の要素を追加
      for (let i = 0; i < emptyItemsNeeded; i++) {
        filledProjects.push({
          id: `empty-${i}`,
          name: "",
          isEmpty: true,
          emptyIndex: i, // 空の要素のインデックスを追加
        } as any); // 型エラーを避けるため
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
          // 実際のプロジェクトかどうかをチェック
          const isRealProject = !(project as any).isEmpty;
          // 実際のプロジェクトのインデックスを計算
          const realProjectIndex = isRealProject
            ? projects.findIndex((p) => p.id === project.id) + 1
            : null;

          return (
            <div
              key={project.id}
              className="border border-2 border-dark rounded-4 m-2 d-flex align-items-center justify-content-center"
              style={{
                width: `calc(${100 / itemsPerRow}% - 1rem)`,
                aspectRatio: "1 / 1",
                minWidth: "90px",
                maxWidth: "180px",
                // 空の要素は薄いグレーの背景色を追加
                backgroundColor: (project as any).isEmpty
                  ? "#f8f9fa"
                  : "transparent",
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
