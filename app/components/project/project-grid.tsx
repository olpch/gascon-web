'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Reveal from '../effects/reveal';
import Heading from '../typography/heading';
import { Project } from '@/app/lib/models';
import { useLanguage } from '@/app/providers/language-context';

interface ProjectGridProps {
  projects: Project[];
}


export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  const { language, t } = useLanguage();

  const content = {
    es: {
      title: "No hay proyectos disponibles",
      description:
        "En este momento no hay proyectos activos para mostrar.",
    },
    en: {
      title: "No active projects available",
      description:
        "There are currently no active projects to display.",
    },
  };

  const { title, description } = content[language];

  return (
    <>
      <section className="flex flex-col items-center !py-0 !pt-[10rem]">
          <Reveal>
              <Heading className="mb-[3rem]">Projects</Heading>
          </Reveal>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 w-full !py-0 !pb-20 px-[10vw]">
        {projects.map((project) => (
          <Link
            key={project.id} 
            className="relative aspect-[4/3] mb-10 md:mb-0 rounded-sm md:rounded-none  block w-full overflow-hidden group cursor-pointer"
            href={`/projects/${project.id}`}
          >
            <Image
              src={project.coverImage || '/imgs/project_cover.png'}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority={project.finalized}
            />
            <pre>[{ JSON.stringify(project.finalized) }]</pre>
            { !project.finalized && (
                <span className="absolute top-1.5 left-1.5 z-20 bg-white/90 backdrop-blur-[2px] text-black text-[9px] font-semibold tracking-wider px-1.5 py-0.5 uppercase leading-none">
                  { t('pages.projects.tag') }
                </span>
            )}
            <div className="absolute inset-0 bg-black/40 md:opacity-0 group-hover:opacity-100 opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-white">
              <span className="text-[10px] tracking-widest font-normal uppercase mb-1 opacity-90">
                {project.location} - {project.year}
              </span>
              <h3 className="text-xl font-normal leading-snug tracking-tight">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>
      {
        projects.length < 1 &&
            <section className="flex min-h-[50vh] w-full items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-medium tracking-tight text-black md:text-3xl">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-black/50 md:text-base">
          {description}
        </p>
      </div>
    </section>
      }
    </>
  );
}