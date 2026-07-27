"use client";

import { motion } from "motion/react";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function MenuButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="relative h-10 w-10"
    >
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 4 : -4,
        }}
        className="absolute left-1 top-1/2 h-px w-8 bg-current"
      />

      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? 4 : 4,
        }}
        className="absolute left-1 top-1/2 h-px w-8 bg-current"
      />
    </button>
  );
}