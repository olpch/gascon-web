"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/app/lib/models";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectCardProps) {
  return (
   <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-36"
    >
      <Link href={`/projects/${project.slug}`}>

        <div className="space-y-8">

          <div className="overflow-hidden">

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: .7 }}
            >
              <Image
                src={project.coverImage || ''}
                alt={project.title}
                width={2200}
                height={1500}
                className="h-auto w-full object-cover"
              />
            </motion.div>

          </div>

          <div className="flex justify-between">
            <div>
              <h2 className="text-5xl font-light">
                {project.title}
              </h2>
              <p className="mt-3 text-neutral-500">
                {project.category}
              </p>
            </div>
            <div className="text-right text-neutral-500">
              <p>{project.location}</p>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}