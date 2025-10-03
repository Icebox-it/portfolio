"use client";
import { useEffect, useState } from "react";
import { Project } from "@/app/api/projects/route";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@radix-ui/react-accordion";

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

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data.projects ?? data);
    });
  }, []);

  return (
    <div id="career" className="page">
      <h2>Works</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <Accordion type="single" collapsible className="w-75">
          {projects.map((project) => (
            <AccordionItem
              key={project.id}
              className="border-dark border-2 shadow mb-2 rounded-4 p-2"
              value={`item-${project.id}`}
            >
              <AccordionTrigger>{project.name}</AccordionTrigger>
              <AccordionContent className="p-3">
                {project.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
