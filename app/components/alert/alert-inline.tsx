"use client";

import { ArrowRight, CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";
import clsx from "clsx";

type Variant = "info" | "success" | "warning" | "error";

interface AlertInlineProps {
  variant?: Variant;
  title: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const styles = {
  info: {
    bg: "bg-blue-500/10 border-blue-500/20",
    icon: "text-blue-400",
  },
  success: {
    bg: "bg-emerald-500/10 border-emerald-500/20",
    icon: "text-emerald-400",
  },
  warning: {
    bg: "bg-amber-500/10 border-amber-500/20",
    icon: "text-amber-400",
  },
  error: {
    bg: "bg-red-500/10 border-red-500/20",
    icon: "text-red-400",
  },
};

const icons = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
};

export default function AlertInline({
  variant = "info",
  title,
  action,
  className,
}: AlertInlineProps) {

  const Icon = icons[variant];

  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-xl border px-5 py-4",
        styles[variant].bg,
        className
      )}
    >
      <div className="flex items-center gap-3">

        <Icon
          className={clsx(
            "h-5 w-5",
            styles[variant].icon
          )}
        />

        <p className="text-sm text-white">
          {title}
        </p>

      </div>

      {action && (
        <button
          onClick={action.onClick}
          className="
            flex
            items-center
            gap-1
            text-sm
            text-slate-300
            transition
            hover:text-white
            cursor-pointer
          "
        >
          {action.label}

          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}