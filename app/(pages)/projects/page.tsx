"use client";

import ProjectGrid from "@/app/components/project/project-grid";
import { Project } from "@/app/lib/models";
import { getProjectsList } from "@/app/services/projects";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProjectsPage() {

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const projectsAvailable = (await getProjectsList())
        .filter((project: Project) => project.visible)
      setProjects(projectsAvailable);
    } catch {
      toast.error("No fue posible cargar los proyectos.");
    } finally {
    }
  }

  return ( <ProjectGrid projects={projects} /> );
}