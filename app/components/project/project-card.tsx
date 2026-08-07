"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface Props {
  title: string;
  location: string;
  image: string;
}

export default function ProjectCard({
  title,
  location,
  image,
}: Props) {
  return (
    <motion.article
      whileHover="hover"
      className="group cursor-pointer">
      <Link className="overflow-hidden rounded-2xl" href={`/projects/proyect-1`}>
        <motion.div
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Image
            src={image}
            alt={title}
            width={1600}
            height={1000}
            className="aspect-[4/3] object-cover"
          />
        </motion.div>
      </Link>
      <div className="mt-8">
        <h3 className="text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-black/55">
          {location}
        </p>
      </div>
    </motion.article>
  );
}