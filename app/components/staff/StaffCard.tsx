"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { StaffMember } from "./staff";


export default function StaffCard({
  member,
}: {
  member: StaffMember;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mx-auto max-w-5xl"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={550}
        height={550}
        className="aspect-[4/5] w-50 object-cover"
      />

      <div className="mt-12 max-w-2xl">
        <h2 className="text-4xl font-light tracking-[-.04em] text-black">
          {member.name}
        </h2>

        <p className="mt-3 uppercase tracking-[.25em] text-sm text-black/45">
          {member.role}
        </p>

        <p className="mt-10 text-lg leading-8 text-black/65">
          {member.description}
        </p>

        <div className="mt-12 flex gap-8">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="group uppercase tracking-[.25em] text-xs"
            >
              Email

              <div className="mt-2 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </a>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              className="group uppercase tracking-[.25em] text-xs"
            >
              LinkedIn

              <div className="mt-2 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}