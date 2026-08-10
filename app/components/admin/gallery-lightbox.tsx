"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: string[];
  current: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (current === null) return;

    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [current, onClose, onNext, onPrev]);

  if (current === null) return null;

  const image = images[current];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Fondo */}
        <div
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-white hover:opacity-70 transition"
        >
          <X size={34} />
        </button>

        {/* Flecha izquierda */}
        <button
          onClick={onPrev}
          className="absolute left-6 z-20 text-white hover:opacity-70 transition"
        >
          <ChevronLeft size={48} />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={onNext}
          className="absolute right-6 z-20 text-white hover:opacity-70 transition"
        >
          <ChevronRight size={48} />
        </button>

        {/* Imagen */}
        <motion.div
          key={image}
          initial={{ scale: .92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: .92, opacity: 0 }}
          transition={{ duration: .35 }}
          className="relative w-[90vw] h-[85vh]"
        >
          <Image
            src={image}
            alt={image}
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Contador */}
        <div className="absolute bottom-8 text-white text-sm tracking-[0.25em]">
          {current + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}