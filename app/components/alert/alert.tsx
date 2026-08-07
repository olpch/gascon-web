"use client";

import { X, ArrowRight, Info, CircleCheck, TriangleAlert, CircleX } from "lucide-react";
import clsx from "clsx";

type Variant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: Variant;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
  className?: string;
}

const styles = {
  info: {
    container:
      "border-blue-500/20 bg-blue-500/10",
    icon: "text-blue-400",
  },

  success: {
    container:
      "border-emerald-500/20 bg-emerald-500/10",
    icon: "text-emerald-400",
  },

  warning: {
    container:
      "border-amber-500/20 bg-amber-500/10",
    icon: "text-amber-400",
  },

  error: {
    container:
      "border-red-500/20 bg-red-500/10",
    icon: "text-red-400",
  },
};

const icons = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
};

export default function Alert({
  variant = "info",
  title,
  description,
  action,
  onClose,
  className,
}: AlertProps) {

  const Icon = icons[variant];

  return (
    <div
      className={clsx(
        "rounded-xl border px-5 py-4 shadow-lg",
        styles[variant].container,
        className
      )}
    >
      <div className="flex items-start gap-4">

        <Icon
          className={clsx(
            "mt-0.5 h-5 w-5 shrink-0",
            styles[variant].icon
          )}
        />

        <div className="flex-1">

          <h3 className="font-medium text-white">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-slate-300">
              {description}
            </p>
          )}

          {action && (
            <button
              onClick={action.onClick}
              className="
                mt-3
                inline-flex
                items-center
                gap-1
                text-sm
                font-medium
                text-white
                transition
                hover:text-indigo-300
                cursor-pointer
              "
            >
              {action.label}

              <ArrowRight className="h-4 w-4" />
            </button>
          )}

        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="
              rounded-lg
              p-1.5
              text-slate-500
              transition
              hover:bg-white/5
              hover:text-white
              cursor-pointer
            "
          >
            <X className="h-4 w-4" />
          </button>
        )}

      </div>
    </div>
  );
}