"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 15,
        y: mouse.y - 15,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
      className="pointer-events-none fixed z-[999] h-8 w-8 rounded-full border border-white mix-blend-difference"
    />
  );
}