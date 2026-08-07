"use client";

interface ProjectModalProps {
  open: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ProjectModal({
  open,
  title,
  message,
  onCancel,
  onConfirm,
}: ProjectModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-slate-900 p-6 shadow-2xl">

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {message}
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="rounded-lg border border-white/10 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
          >
            Eliminar
          </button>

        </div>
      </div>
    </div>
  );
}