"use client";

import { MoreHorizontal, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";

export interface Option {
  id: string;
  title: string;
  image: string;
  subtitle: string;
}

interface Props {
  option: Option;
  selected: boolean;
  onClick: () => void;
}

export default function SidebarOption({
  option,
  selected,
  onClick,
}: Props) {
  return (
    <motion.button
      layout
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group
        flex
        w-full
        items-center
        gap-4
        rounded-xl
        border
        p-3
        text-left
        transition-all

        ${
          selected
            ? "border-indigo-500 bg-indigo-500/10"
            : "border-transparent hover:border-white/10 hover:bg-white/5"
        }
      `}
    >
      <img
        src={option.image}
        alt={option.title}
        className="h-14 w-14 rounded-xl object-cover"
      />

      <div className="flex-1">

        <div className="flex items-center gap-2">

          <h3 className="font-medium text-white">
            {option.title}
          </h3>
        </div>

        <p className="text-sm text-slate-400">
          {option.subtitle}
        </p>

      </div>

      <MoreHorizontal
        size={18}
        className="
          opacity-0
          transition
          group-hover:opacity-100
          text-slate-500
        "
      />
    </motion.button>
  );
}