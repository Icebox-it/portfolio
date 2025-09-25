"use client";
import { Link } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Project } from "@/app/api/projects/route";
const getProjects = async () => {
  const res = await fetch("http://localhost:3000/api/projects", {
    method: "GET",
  });
  return await res.json();
};

const CareerPage = async () => {
  const projects = (await getProjects()).projects as Project[];
  return (
    <div className="text-center" id="career">
      <h2>これまでの案件履歴</h2>
      <p>バックエンド３年目です。</p>
      <div>
        {projects.map((project, index) => (
          <div key={project.id} className="text-left pl-10">
            <h3>
              {index + 1}.{project.name}
            </h3>
            <p>工程：{project.type}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CareerPage;
