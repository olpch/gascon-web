"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/app/lib/models";

interface Props {
  project: Project
}

export default function ProjectCard({
  project
}: Props) {
  return (
    <motion.article
      whileHover="hover"
      className="group cursor-pointer">
      <Link
          href={`/projects/${project.id}`}
          className="overflow-hidden block rounded-md">
        <motion.div
          variants={{ hover: { scale: 1.05, }, }}
          transition={{ duration: 0.8, }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1600}
            height={1000}
            className="aspect-[16/9] object-cover"
          />
        </motion.div>
      </Link>
      <div className="mt-8">
        <h3 className="flex justify-between items-center text-3xl">
          {project.title}
        <span className="text-sm">{project.year}</span>
        </h3>
        <p className="mt-3 text-black/55">
          {project.location}
        </p>
      </div>
    </motion.article>
  );
}