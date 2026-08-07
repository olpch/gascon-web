"use client";

import { ImagePlus } from "lucide-react";
import ProjectGalleryItem from "./ProjectGalleryItem";

interface ProjectGalleryProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export default function ProjectGallery({
  images,
  onChange,
}: ProjectGalleryProps) {
  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const addImage = () => {
    // Temporal mientras conectamos uploads
    const url = window.prompt("Ruta de la imagen");

    if (!url) return;

    onChange([...images, url]);
  };

  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-slate-300">
        Galería
      </label>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <ProjectGalleryItem
            key={`${image}-${index}`}
            image={image}
            onRemove={() => removeImage(index)}
          />
        ))}

        <button
          type="button"
          onClick={addImage}
          className="
            flex
            aspect-square
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-white/15
            bg-slate-900
            transition
            hover:border-indigo-500
            hover:bg-slate-800
          "
        >
          <ImagePlus
            size={34}
            className="mb-3 text-slate-500"
          />

          <span className="text-sm text-slate-400">
            Agregar imagen
          </span>
        </button>
      </div>
    </div>
  );
}