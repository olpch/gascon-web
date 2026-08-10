"use client";

import { ImagePlus } from "lucide-react";
import ProjectGalleryItem from "./ProjectGalleryItem";
import ImageUpload from '../image-upload/image-upload';
import { getStorageSize } from "@/app/services/image-upload";
import { useEffect, useState } from "react";
import { StorageSize } from "@/app/lib/models";

interface ProjectGalleryProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export default function ProjectGallery({
  images,
  onChange,
}: ProjectGalleryProps) {

  const [storage, setStorage] = useState<StorageSize>();
  
  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const addImage = (url: string) => {
    if (!url) return;
    onChange([...images, url]);
  };

  useEffect(()=>{
    getStorageSize().then(setStorage);
  },[])

  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-slate-300">
        Galería { storage?.used }
      </label>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <ProjectGalleryItem
            key={`${image}-${index}`}
            image={image}
            onRemove={() => removeImage(index)}
          />
        ))}

        {
          images.length < 8 &&
          <label
            htmlFor="image-gallery-add"
            className="
              flex flex-col justify-center items-center
              transition aspect-square rounded-xl border border-dashed
              border-white/15 bg-slate-900 hover:border-indigo-500 hover:bg-slate-800
            "
          >
            <ImagePlus
              size={34}
              className="mb-3 text-slate-500"
            />
            <ImageUpload 
              category="project-gallery"
              onUploaded={addImage}
              indentifier="image-gallery-add" />
            <span className="text-sm text-slate-400">
              Agregar imagen
            </span>
          </label>
        }
      </div>
    </div>
  );
}