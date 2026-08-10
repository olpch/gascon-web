"use client";

import Section from "../layout/section";
import Heading from "../typography/heading";
import Reveal from "../effects/reveal";
import ProjectCard from "../project/project-card";
import { useLanguage } from "@/app/providers/language-context";
import { getProjectsList } from "@/app/services/projects";
import { useEffect, useState } from "react";
import { Project } from "@/app/lib/models";

export default function FeaturedProjects() {

  const { tlocal } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);

  const loadProyects = () => {
    getProjectsList().then((remoteProjects: Project[]) => {
      setProjects(remoteProjects.filter(p => p.home))
    });
  }

  useEffect(()=>{
    loadProyects();
  }, [])

  return (
    <>
      { projects.length > 0 &&
        <Section>
          <Reveal>
            <Heading className="mb-24 capitalize">
              { tlocal('Projects', 'Proyectos')}
            </Heading>
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>
      }
    </>
  );
}