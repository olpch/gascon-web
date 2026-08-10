"use client";

import { useLanguage } from "@/app/providers/language-context";
import { motion } from "motion/react";

export default function HeroContent() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, }}
      animate={{ opacity: 1, y: 0, }}
      transition={{ duration: 1.2, }}
      className="relative z-20 max-w-6xl">
      <h1 className="text-[clamp(4.8rem,10vw,9rem)]
        font-light leading-[0.92] tracking-[-0.05em]
        text-white whitespace-pre-line">
        {t('pages.home.banner.title')}
      </h1>
      <p className="mt-12 max-w-2xl text-xl leading-9 text-white/75">
        {t('pages.home.banner.subtitle')}
      </p>
    </motion.div>
  );
}