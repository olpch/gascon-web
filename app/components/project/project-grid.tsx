'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Reveal from '../effects/reveal';
import Heading from '../typography/heading';
import { Project } from '@/app/lib/models';


const PROJECTS_DATA: Project[] = [
  { id: '1', title: 'Bamboo Pavilion', year: 'Madrid 2026', image: '/imgs/project1.jpg', isNew: true },
  { id: '2', title: 'Facade Structure', year: 'Madrid 2026', image: '/imgs/project1.jpg' },
  { id: '3', title: 'Terraced Roof', year: 'Madrid 2026', image: '/imgs/project1.jpg' },
  { id: '4', title: 'Acoustic Wall', year: 'Madrid 2026', image: '/imgs/project1.jpg', isNew: true },
  { id: '5', title: 'Exhibition Hall', year: 'Madrid 2026', image: '/imgs/project1.jpg', isNew: true },
  { id: '6', title: 'Timber Installation', year: 'Madrid 2026', image: '/imgs/project1.jpg' },
  { id: '7', title: 'Forest Lookout', year: 'Madrid 2026', image: '/imgs/project1.jpg' },
  { id: '8', title: 'Wooden Canopy', year: 'Madrid 2026', image: '/imgs/project1.jpg', isNew: true },
  { id: '9', title: 'Commercial Entrance', year: 'Madrid 2026', image: '/imgs/project1.jpg' },
];
export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
        <section className="flex flex-col items-center !py-0 !pt-[10rem]">
            <Reveal>
                <Heading className="mb-[3rem]">Projects</Heading>
            </Reveal>
        </section>
    {/* 
      <section className="flex flex-col items-center !py-0 !pt-[14rem] !pb-[5rem]">

        <button 
          type="button" 
          className="border border-black px-16 py-[3px] text-[11px] tracking-[0.15em] font-medium uppercase transition-colors hover:bg-black hover:text-white"
        >
          SEARCH
        </button>

        <nav className="flex items-center gap-4 mt-4 text-[10px] tracking-[0.12em] uppercase font-medium text-gray-800">
          {['USE', 'LOCATIONS', 'SIZE', 'OTHERS'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className="hover:underline underline-offset-4 focus:outline-none"
            >
              {category}
            </button>
          ))}
        </nav>
      </section>
        */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full !py-0 px-[10vw]">
        {PROJECTS_DATA.map((project) => (
          <Link
            key={project.id} 
            className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer"
            href="/projects/sadasd"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority={project.isNew}
            />

            {/* Badge 'NEW' */}
            {project.isNew && (
              <span className="absolute top-1.5 left-1.5 z-20 bg-white/90 backdrop-blur-[2px] text-black text-[9px] font-semibold tracking-wider px-1.5 py-0.5 uppercase leading-none">
                ON-GOING
              </span>
            )}

            {/* Hover Overlay with Text (Exact Replica) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-white">
              <span className="text-[10px] tracking-widest font-normal uppercase mb-1 opacity-90">
                {project.year}
              </span>
              <h3 className="text-xl font-normal leading-snug tracking-tight">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}