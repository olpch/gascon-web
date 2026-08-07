"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface ProjectGalleryItemProps {
  image: string;
  onRemove: () => void;
}

export default function ProjectGalleryItem({
  image,
  onRemove,
}: ProjectGalleryItemProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-slate-900">
      <Image
        src={image}
        alt="Project image"
        fill
        className="object-cover transition duration-300 group-hover:scale-105"
      />

      <button
        type="button"
        onClick={onRemove}
        className="
          absolute
          right-2
          top-2
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-black/70
          text-white
          opacity-0
          transition-all
          duration-200
          group-hover:opacity-100
          hover:bg-red-600
        "
      >
        <X size={16} />
      </button>
    </div>
  );
}