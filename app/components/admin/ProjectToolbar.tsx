"use client";

import { Plus, Search } from "lucide-react";

interface ProjectToolbarProps {
  search: string;
  onSearch: (value: string) => void;
  onNewProject: () => void;
}

export default function ProjectToolbar({
  search,
  onSearch,
  onNewProject,
}: ProjectToolbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold text-white">
          Proyectos
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Administra los proyectos del sitio.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Buscar proyecto..."
            className="w-64 rounded-lg border border-white/10 bg-slate-900 py-2 pl-10 pr-4 text-white outline-none transition focus:border-indigo-500"
        />
        </div>

        <button
          onClick={onNewProject}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500"
        >
          <Plus size={18} />
          Nuevo
        </button>
      </div>
    </header>
  );
}