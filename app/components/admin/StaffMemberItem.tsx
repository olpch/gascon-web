"use client";

import { MoreHorizontal, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  image: string;
  linkedin: string;
  instagram: string;
  visible: boolean;
}

interface Props {
  member: TeamMember;
  selected: boolean;
  onClick: () => void;
}

export default function StaffMemberItem({
  member,
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
        src={member.image}
        alt={member.name}
        className="h-14 w-14 rounded-xl object-cover"
      />

      <div className="flex-1">

        <div className="flex items-center gap-2">

          <h3 className="font-medium text-white">
            {member.name}
          </h3>

          {member.visible ? (
            <Eye
              size={14}
              className="text-green-400"
            />
          ) : (
            <EyeOff
              size={14}
              className="text-red-400"
            />
          )}

        </div>

        <p className="text-sm text-slate-400">
          {member.role}
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