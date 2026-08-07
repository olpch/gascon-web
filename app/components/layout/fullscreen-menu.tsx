"use client";

import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Staff", "/staff"],
  ["Contact", "/contact"],
  ["English", "/contact"],
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: .35,
          }}
          className="fixed inset-0 z-[300] bg-[#F5F3F1]"
        >
          <div className="flex h-full flex-col px-10 py-10">

            <div className="flex items-center justify-between">

              <span className="tracking-[0.45em] text-sm uppercase">

                GASCON

              </span>

              <button
                onClick={onClose}
                className="text-4xl leading-none"
              >
                ×
              </button>

            </div>

            <div className="mt-auto mb-auto">

              {links.map(([title, href], index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                >
                  <Link
                    href={href}
                    onClick={onClose}
                    className="block py-5 text-5xl font-light"
                  >
                    {title}
                  </Link>
                </motion.div>
              ))}

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}