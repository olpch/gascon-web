"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "./providers/language-context";

export default function NotFound() {

  const {tlocal} = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}

      <Image
        src="/imgs/not-found.jpg"
        alt="Architecture"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Optional gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative z-10 flex min-h-screen items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-8 md:px-16">
          <div className="max-w-2xl">
            <Image
              src="/imgs/logo_w.png"
              alt="Gascon Architecture"
              width={550} height={165}
              className="not-found-logo"
            />

            <span className="mb-6 block text-xs uppercase tracking-[0.35em] text-white/70">
              Error 404
            </span>

            <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.05em] text-white md:text-7xl xl:text-8xl">
              { tlocal( 'Page not found.', 'Página no encontrada') }
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-white/75">
              { tlocal(
                'The page you are looking for may have been moved, renamed or is no longer available.',
                'Es posible que la página que busca se haya trasladado, cambiado de nombre o ya no esté disponible.'
              )}
            </p>

            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:gap-10">
              <Link
                href="/"
                className="group text-sm uppercase tracking-[0.28em] !text-white/70"
              >
                { tlocal('Back Home', 'Ir a Inicio') }

                <div className="mt-2 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </Link>

              <Link
                href="/projects"
                className="group text-sm uppercase tracking-[0.28em] !text-white/70">
                { tlocal('View Projects', 'Ver proyectos') }
                <div className="mt-2 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}