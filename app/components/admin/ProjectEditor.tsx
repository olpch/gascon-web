"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project } from "@/app/lib/models";
import ProjectGallery from "./ProjectGallery";
import Image from "next/image";
import ImageUpload from "../image-upload/image-upload";

interface ProjectEditorProps {
  project: Project;
  onSave: (project: Project) => void;
  onUpdate: (project: Project) => void;
  onDelete: (id: string) => void;
}

type NestedObjectKey<T> = {
  [K in keyof T]-?: NonNullable<T[K]> extends object ? K : never;
}[keyof T];


export default function ProjectEditor({
  onSave,
  project,
  onDelete,
  onUpdate,
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

  const updateNestedField = <
    K extends NestedObjectKey<Project>,
    NK extends keyof NonNullable<Project[K]>
  >(
    field: K,
    nestedField: NK,
    value: NonNullable<Project[K]>[NK]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...(prev[field] as object),
        [nestedField]: value,
      },
    }));
  };

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h2 className="mb-8 text-2xl font-semibold text-white">
        Editar {form.title}
      </h2>
      <div className="space-y-6">
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Imagen de portada
          </label>
          <div className="flex flex-col gap-6 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
            <label className="relative h-[30vh] w-full" htmlFor="cover-image-input">
              <Image
                src={form.coverImage || '/imgs/project_cover.png'}
                alt="image cover project" fill
                className="object-cover" />
            </label>
            <ImageUpload
              category="projects"
              indentifier="cover-image-input"
              onUploaded={(img) => updateField("coverImage", img)} />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Esta imagen será utilizada en el listado de proyectos y como portada del detalle.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Estado del Proyecto
            </label>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900 px-4 py-3">
              <span className="text-white">
                {form.finalized ? 'Finalizado' : 'En curso'}
              </span>
              <input
                type="checkbox"
                checked={form.finalized}
                onChange={(e) => updateField("finalized", e.target.checked)}
                className="h-5 w-5 accent-indigo-600"
              />
            </div>
          </div>
        </div>


        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Descripción inglès
            </label>

            <textarea
              rows={6}
              value={form.description?.en}
              onChange={(e) => updateNestedField("description", "en", e.target.value)}
              className="w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Descripción español
            </label>

            <textarea
              rows={6}
              value={form.description?.es}
              onChange={(e) => updateNestedField("description", "es", e.target.value)}
              className="w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              País
            </label>

            <input
              type="text"
              value={form.country}
              onChange={(e) => updateField("country", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Año
            </label>
            <input
              type="number"
              value={form.year}
              onChange={(e) => updateField("year", (e.target as any).value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Area (m<sup>2</sup>)
            </label>
            <input
              type="number"
              value={form.area}
              onChange={(e) => updateField("area", Number(e.target.value))}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Página Inicio
            </label>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900 px-4 py-3">
              <span className={form.home ? 'text-white' : 'text-white/20'}>
                {form.home ? 'Visible' : 'No visible'}
              </span>
              <input
                type="checkbox"
                checked={form.home}
                onChange={(e) => updateField("home", e.target.checked)}
                className="h-5 w-5 accent-indigo-600"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Toda la página
            </label>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900 px-4 py-3">
              <span className={form.visible ? 'text-white' : 'text-white/20'}>
                {form.visible ? 'Visible' : 'No visible'}
              </span>
              <input
                type="checkbox"
                checked={form.visible}
                onChange={(e) => updateField("visible", e.target.checked)}
                className="h-5 w-5 accent-indigo-600"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Categoria
            </label>

            <input
              type="text"
              value={form.category}
              onChange={(e) => updateField("category", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>
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
        </div>


        <ProjectGallery
          images={form.gallery || []}
          onChange={(gallery) =>
            updateField("gallery", gallery)
          }
        />

        {/* Guardar */}
        <div className="pt-4">
          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            {project.isNew
              ? (<div />)
              : (<button
                onClick={() => setShowDelete(true)}
                className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 transition hover:bg-red-500/20">
                <Trash2 size={18} />
                Eliminar
              </button>
              )
            }
            {project.isNew &&
              <button
                onClick={() => onSave(form)}
                className="
                      self-end rounded-lg bg-indigo-600 px-6 py-3 
                      font-medium text-white transition hover:bg-indigo-500">
                Crear
              </button>
            }
            {!project.isNew &&
              <button
                onClick={() => onUpdate(form)}
                className="
                      self-end rounded-lg bg-indigo-600 px-6 py-3 
                      font-medium text-white transition hover:bg-indigo-500">
                Actualizar
              </button>
            }
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