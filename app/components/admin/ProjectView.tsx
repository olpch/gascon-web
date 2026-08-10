"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ProjectGallery from "@/app/components/project/project-gallery";
import { Project } from "@/app/lib/models";
import { useLanguage } from "@/app/providers/language-context";

interface ProjectViewProps {
  project: Project;
}

export default function ProjectViewPage({
    project
}: ProjectViewProps) {

  const { language, tlocal } = useLanguage();

  return (
    <section className="relative !py-[0]">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.coverImage}
          alt="Casa del Río"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Project Information */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20"
      >
        <div className="grid gap-20 border-b border-black/10 py-20 lg:grid-cols-[2fr_1fr]">
          <div>
            <span className="mb-6 block text-[12px] uppercase tracking-[0.32em] text-black/45">
              {project.category}
            </span>

            <h1 className="max-w-4xl text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-black md:text-7xl">
              { project?.title }
            </h1>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-black/40">
                { tlocal('Location','Ubicación') }
              </p>

              <p className="text-lg leading-relaxed text-black/70">
                {project.location}
                <br />
                {project.country}
              </p>
            </div>

            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-black/40">
                { tlocal('Year','Año') }
              </p>

              <p className="text-lg text-black/70">{project.year}</p>
            </div>

            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-black/40">
                Area
              </p>

              <p className="text-lg text-black/70">520 m²</p>
            </div>
          </div>
        </div>

        <div className="grid gap-16 py-24 lg:grid-cols-[220px_1fr]">
          <span className="text-[12px] uppercase tracking-[0.28em] text-black/40">
            { tlocal('Overview','Descripción general') }
          </span>

          <p className="max-w-5xl text-2xl leading-[1.8] font-light text-black/80">
            {project.description?.[language]}
          </p>
        </div>
      </motion.div>
      <ProjectGallery gallery={project.gallery} />
    </section>
  );
}