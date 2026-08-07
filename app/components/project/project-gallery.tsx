"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface GalleryImage {
  src: string;
  alt: string;
  type?: "image" | "plan";
}

interface ProjectGalleryProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    src: "/imgs/project1.jpg",
    alt: "Exterior View",
  },
  {
    src: "/imgs/project1.jpg",
    alt: "Ground Floor Plan",
    type: "plan",
  },
  {
    src: "/imgs/project1.jpg",
    alt: "Living Room",
  },
  {
    src: "/imgs/project1.jpg",
    alt: "Facade",
  },
  {
    src: "/imgs/project1.jpg",
    alt: "Section",
    type: "plan",
  },
];

export default function ProjectGallery({
  images = defaultImages,
}: ProjectGalleryProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {images.map((image, index) => (
            <motion.figure
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="mb-6 break-inside-avoid"
            >
              <div
                className={`overflow-hidden ${
                  image.type === "plan"
                    ? "bg-white p-8"
                    : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1200}
                  className={`h-auto w-full transition-transform duration-700 ${
                    image.type === "plan"
                      ? "object-contain"
                      : "object-cover hover:scale-[1.02]"
                  }`}
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}