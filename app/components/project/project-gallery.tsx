"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import GalleryLightbox from "../admin/gallery-lightbox";
[] = [];

interface ProjectGalleryProps {
  projectName?: string
  gallery: string[]
}

export default function ProjectGallery({
  gallery,
  projectName = '',
}: ProjectGalleryProps) {

  const [current, setCurrent] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="columns-1 gap-5 md:columns- xl:columns-2">
          {gallery.map((image, index) => (
            <motion.figure
              key={`${image}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="mb-6 break-inside-avoid"
            >
              <div className="overflow-hidden">
                <Image
                  src={image}
                  alt={`imagen gallery ${projectName}`}
                  width={600}
                  height={200}
                  onClick={() => setCurrent(index)}
                  className="
                    border rounded-sm
                    h-auto w-full transition-transform duration-700 
                    object-cover hover:scale-[1.5]"/>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
      <GalleryLightbox
        images={gallery}
        current={current}
        onClose={() => setCurrent(null)}
        onNext={() =>
          setCurrent((prev) =>
            prev === null ? 0 : (prev + 1) % gallery.length
          )
        }
        onPrev={() =>
          setCurrent((prev) =>
            prev === null
              ? 0
              : (prev - 1 + gallery.length) % gallery.length
          )
        }
      />
    </section>
    
  );
}