"use client";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Project } from "@/app/lib/models";

interface ProjectItemProps {
  project: Project;
  active: boolean;
  onClick: () => void;
}

export default function ProjectItem({
  project,
  active,
  onClick,
}: ProjectItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        border-b
        border-white/5
        p-4
        text-left
        transition-all
        hover:bg-slate-800/50
        ${
          active
            ? "bg-slate-800 ring-1 ring-indigo-500"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex gap-4">
        <div className="relative h-20 w-28 overflow-hidden rounded-lg bg-slate-800">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-slate-500">
              Sin imagen
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="line-clamp-1 text-base font-medium text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {project.category}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {project.location} • {project.year}
            </p>
          </div>

          <div className="mt-3 flex items-start justify-between">
            <div>
              <span
                className={`
                  rounded-full
                  px-2
                  py-1
                  text-xs
                  font-medium
                  border
                  mr-2
                  ${
                    project.visible
                      ? "border-emerald-400 text-emerald-400"
                      : "border-red-400 text-red-400"
                  }
                `}
              >
                { project.visible ? 'Visible' : 'Oculto' }
              </span>
              <span
                className={`
                  rounded-full
                  px-2
                  py-1
                  text-xs
                  font-medium
                  ${ project.visible && project.home 
                    ? "border border-indigo-500 text-indigo-500"
                    : "hidden"
                  }
                `}>
                Página inicio
              </span>
            </div>
            {project.visible ? (
              <Eye size={16} className="text-slate-400" />
            ) : (
              <EyeOff size={16} className="text-slate-500" />
            )}
          </div>
        </div>
      </div>
    </button>
  );
}