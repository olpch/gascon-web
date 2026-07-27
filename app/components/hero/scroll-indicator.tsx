"use client";

import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-14 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-4">

        <span className="text-xs uppercase tracking-[.4em] text-white/70">

          Scroll

        </span>

        <div className="h-20 w-px bg-white/40" />

      </div>
    </motion.div>
  );
}