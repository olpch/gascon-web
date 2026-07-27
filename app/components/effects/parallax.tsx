"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

export default function Parallax({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-80, 80]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
      }}
    >
      {children}
    </motion.div>
  );
}