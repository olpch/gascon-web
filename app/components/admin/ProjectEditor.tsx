"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project } from "@/app/lib/models";
import ProjectGallery from "./ProjectGallery";

interface ProjectEditorProps {
  project: Project;
  onSave: (project: Project) => void;
  onDelete: (id: string) => void;
}

export default function ProjectEditor({
  project,
  onSave,
  onDelete,
}: ProjectEditorProps) {
  const [form, setForm] = useState<Project>(project);
  const [showDelete, setShowDelete] = useState(false);
  
  useEffect(() => {
    setForm(project);
  }, [project]);

  const updateField = <K extends keyof Project>(
    field: K,
    value: Project[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h2 className="mb-8 text-2xl font-semibold text-white">
        Editar { form.title }
      </h2>
      <div className="space-y-6">
        {/* Imagen */}
        {/* Portada */}
      <div>
        <label className="mb-3 block text-sm font-medium text-slate-300">
          Imagen de portada
        </label>
        <div className="flex gap-6">
          <div className="relative aspect-[4/3] w-64 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
            {
              form.coverImage 
                ? (<img src={form.coverImage} alt="imagen cover" className="h-full w-full object-cover" />)
                : (<div className="flex h-full items-center justify-center text-slate-500">Sin imagen</div>)
            }
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) =>
                updateField("coverImage", e.target.value)
              }
              placeholder="/images/projects/cover.webp"
              className="rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"/>
            <p className="mt-3 text-sm text-slate-500">
              Esta imagen será utilizada en el listado de proyectos y como portada del detalle.
            </p>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nombre
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500" />
      </div>

        {/* Categoría */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Categoría
          </label>

          <input
            type="text"
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Ubicación */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Ubicación
          </label>

          <input
            type="text"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Año */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Año
          </label>

          <input
            type="text"
            value={form.year}
            onChange={(e) => updateField("year", (e.target as any).value)}
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Descripción
          </label>

          <textarea
            rows={6}
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            className="w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Visible */}
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900 px-4 py-3">
          <span className="text-white">Visible en el sitio web</span>

          <input
            type="checkbox"
            checked={form.visible}
            onChange={(e) => updateField("visible", e.target.checked)}
            className="h-5 w-5 accent-indigo-600"
          />
        </div>

        {/* Orden */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Orden
          </label>

          <input
            type="number"
            value={form.order}
            onChange={(e) =>
              updateField("order", Number(e.target.value))
            }
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

         <ProjectGallery
            images={ form.gallery || [] }
            onChange={(gallery) =>
                updateField("gallery", gallery)
            }
        />

        {/* Guardar */}
        <div className="pt-4">
            <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <button
                    onClick={() => setShowDelete(true)}
                    className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 transition hover:bg-red-500/20"
                >
                    <Trash2 size={18} />
                    Eliminar Proyecto
                </button>
                <button
                    onClick={() => onSave(form)}
                    className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
                >
                    Guardar Cambios
                </button>
            </div>
            </div>
        </div>
        <ProjectModal
            open={showDelete}
            title="Eliminar proyecto"
            message="¿Seguro que deseas eliminar este proyecto? Esta acción no se puede deshacer."
            onCancel={() => setShowDelete(false)}
            onConfirm={() => {
                onDelete(project.id);
                setShowDelete(false);
            }}
        />
    </div>
    
  );
}