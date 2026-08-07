"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F3F1]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="flex flex-col items-center gap-10"
          >
            <div 
              className="loading-logo h-24 w-24 
              rounded-full border border-[#3C3C3C]/20 
              flex items-center justify-center">
            </div>
            <p className="tracking-[.6em] uppercase text-sm">
              <Image 
                className="loading-logo2"
                src="/imgs/loading-logo.png"
                width={550} height={165}
                alt="Logo"
              />
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}