"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Reveal({
  children,
  className,
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}