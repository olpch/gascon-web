"use client";

import { useEffect, useState } from "react";
import { Dictionary } from "@/app/lib/models";
import StaffInput from "./StaffInput";
import StaffTextarea from "./StaffTextarea";

interface LanguajeEditorProps {
  dictionary: Dictionary;
  onSave: (dictionary: Dictionary) => void;
  onChange: (dictionary: Dictionary) => void;
}

export default function LanguajeEditor({
  onSave,
  onChange,
  dictionary
}: LanguajeEditorProps) {

  const [form, setForm] = useState<Dictionary>(dictionary);

  const updateField = (path: string, value: string) => {
    setForm((prev) => {
      const copy = structuredClone(prev);
      const keys = path.split(".");
      let current: any = copy;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return copy;
    });
    return;
  }

  const handleSave = () => {

  }

  useEffect(() => setForm(dictionary), [dictionary]);

  useEffect(() => onChange(form), [form]);

  return (
    <div className="mt-10 mx-auto max-w-4xl">
      <h2 className="mb-10 text-2xl font-semibold text-white">
        Editar de idioma {form.label}
      </h2>
      <h2 className="mt-12 text-1xl font-semibold text-white">
        Navegación
      </h2>
      <hr className="mb-6 mt-2 border border-white/10" />
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Home"
          value={form.navigation.home}
          onChange={(v) => updateField("navigation.home", v)} />
        <StaffInput
          label="Projects"
          value={form.navigation.projects}
          onChange={(v) => updateField("navigation.projects", v)} />
      </div>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Staff"
          value={form.navigation.staff}
          onChange={(v) => updateField("navigation.staff", v)} />
        <StaffInput
          label="Contact"
          value={form.navigation.contact}
          onChange={(v) => updateField("navigation.contact", v)} />
      </div>

      <h2 className="mt-12 text-1xl font-semibold text-white">
        Página de inicio
      </h2>
      <hr className="mt-2 border border-white/10" />
      <h2 className="mt-8 text-1xl font-semibold text-white">
        Banner
      </h2>
      <div className="mt-6">
        <StaffInput
          label="Título"
          value={form.pages.home.banner.title}
          onChange={(v) => updateField("pages.home.philosophy.title", v)} />
      </div>
      <div className="mt-6">
        <StaffTextarea
          label="Subtítulo"
          value={form.pages.home.banner.subtitle}
          onChange={(v) => updateField("pages.home.philosophy.subtitle", v)} />
      </div>
      <h2 className="mt-8 text-1xl font-semibold text-white">
        Filosofía
      </h2>
      <div className="mt-6">
        <StaffInput
          label="Título"
          value={form.pages.home.philosophy.title}
          onChange={(v) => updateField("pages.home.philosophy.title", v)} />
      </div>
      <div className="mt-6">
        <StaffTextarea
          label="Subtítulo"
          value={form.pages.home.philosophy.subtitle}
          onChange={(v) => updateField("pages.home.philosophy.subtitle", v)} />
      </div>

      <h2 className="mt-10 text-1xl font-semibold text-white">
        Página de Projectos
      </h2>
      <hr className="mt-2 border border-white/10" />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Nombre"
          value={form.pages.projects.name}
          onChange={(v) => updateField("pages.projects.name", v)} />
        <StaffInput
          label="Tag"
          value={form.pages.projects.tag}
          onChange={(v) => updateField("pages.projects.tag", v)} />
      </div>

      <h2 className="mt-10 text-1xl font-semibold text-white">
        Página de Contacto
      </h2>
      <hr className="mt-2 border border-white/10" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Nombre"
          value={form.pages.contact.name}
          onChange={(v) => updateField("pages.contact.name", v)} />
        <StaffInput
          label="Título"
          value={form.pages.contact.title}
          onChange={(v) => updateField("pages.contact.title", v)} />
      </div>
      <div className="mt-6">
        <StaffTextarea
          label="Subtítulo"
          value={form.pages.contact.subtitle}
          onChange={(v) => updateField("pages.contact.subtitle", v)} />
      </div>

      <h2 className="mt-10 text-1xl font-semibold text-white">
        Miembros del equipo
      </h2>
      <hr className="mt-2 border border-white/10" />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Nombre"
          value={form.pages.staff.name}
          onChange={(v) => updateField("pages.staff.name", v)} />
        <StaffInput
          label="Título"
          value={form.pages.staff.title}
          onChange={(v) => updateField("pages.staff.title", v)} />
      </div>

      <h2 className="mt-10 text-1xl font-semibold text-white">
        Información General
      </h2>
      <hr className="mt-2 border border-white/10" />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Email"
          value={form.general.email}
          onChange={(v) => updateField("general.email", v)} />

        <StaffInput
          label="Teléfono"
          value={form.general.phone}
          onChange={(v) => updateField("general.phone", v)} />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Ubicación"
          value={form.general.location}
          onChange={(v) => updateField("general.location", v)} />
        <StaffInput
          label="País"
          value={form.general.country}
          onChange={(v) => updateField("general.country", v)} />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <StaffInput
          label="Texto Copyright"
          value={form.general.copyright}
          onChange={(v) => updateField("general.copyright", v)} />
      </div>

      <hr className="mb-10 mt-10 border border-white/10" />
      <div className="mt-10 flex justify-end">
        <button
          onClick={() => { onSave(form) }}
          className="cursor-pointer rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
          Actualizar cambios
        </button>
      </div>
    </div>
  );
}