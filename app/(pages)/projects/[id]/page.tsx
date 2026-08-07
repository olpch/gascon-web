"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ProjectGallery from "@/app/components/project/project-gallery";

interface Props {
  params: Promise<{ id: string }>;
}

const gallery = [
  {
    src: "/imgs/project1.jpg",
    alt: "Exterior View",
    type: "image",
  },
  {
    src: "/imgs/project-plan-01.png",
    alt: "Ground Floor Plan",
    type: "plan",
  },
  {
    src: "/imgs/project2.jpg",
    alt: "Living Room",
    type: "image",
  },
  {
    src: "/imgs/project-plan-02.png",
    alt: "Section",
    type: "plan",
  },
];

const getProject = async(id: string) => {


  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`,{
      // cache: 'force-cache',// TODO: cambiar esto en un futuro
      next: {
        revalidate: 60 * 60 * 30 * 6
      }
    }).then( resp => resp.json() );
  
    console.log('Se cargó: ', pokemon.name);
  
    return pokemon;
    
  } catch (error) {
    // notFound();
  }

}

export default function ProjectPage({ params }:Props) {

    // const { id } = await params;
    // const pokemon = await getProject(id);
    const id  = 1;
    const pokemon = {};

  return (
    <section className="relative !py-[0]">
      {/* Hero Image */}
      <div className="relative h-[85vh] overflow-hidden">
        <Image
          src="/imgs/project1.jpg"
          alt="Casa del Río"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Project Information */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20"
      >
        <div className="grid gap-20 border-b border-black/10 py-20 lg:grid-cols-[2fr_1fr]">
          <div>
            <span className="mb-6 block text-[12px] uppercase tracking-[0.32em] text-black/45">
              Residential
            </span>

            <h1 className="max-w-4xl text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-black md:text-7xl">
              Casa del Río
            </h1>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-black/40">
                Location
              </p>

              <p className="text-lg leading-relaxed text-black/70">
                Barranquilla,
                <br />
                Colombia
              </p>
            </div>

            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-black/40">
                Year
              </p>

              <p className="text-lg text-black/70">2026</p>
            </div>

            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-black/40">
                Area
              </p>

              <p className="text-lg text-black/70">520 m²</p>
            </div>
          </div>
        </div>

        {/* Introduction */}

        <div className="grid gap-16 py-24 lg:grid-cols-[220px_1fr]">
          <span className="text-[12px] uppercase tracking-[0.28em] text-black/40">
            Overview
          </span>

          <p className="max-w-5xl text-2xl leading-[1.8] font-light text-black/80">
            Conceived as a contemporary retreat integrated with the natural
            landscape, Casa del Río explores the relationship between light,
            materiality and spatial continuity. Every intervention seeks to
            establish a dialogue between architecture and its surroundings,
            creating calm, timeless and functional spaces.
          </p>
        </div>
      </motion.div>
      <ProjectGallery />
    </section>
  );
}