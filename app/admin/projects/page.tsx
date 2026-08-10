"use client";

import { useEffect, useState } from "react";

import ProjectItem from "@/app/components/admin/ProjectItem";
import ProjectEditor from "@/app/components/admin/ProjectEditor";
import ProjectToolbar from "@/app/components/admin/ProjectToolbar";
import { Project } from "@/app/lib/models";
import { toast } from "sonner";
import { createProject, getProjectsList, updateProject, deleteProject } from "@/app/services/projects";
import AlertInline from "@/app/components/alert/alert-inline";


export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const handleSelect = (project: Project) => {
    setSelected(project);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      setLoading(true);
      const data = await getProjectsList();
      setProjects(data);
      if (data.length > 0) setSelected(data[0]);
    } catch {
      toast.error("No fue posible cargar los proyectos.");
    } finally {
      setLoading(false);
    }
  }

  const handleSave = async (created: Project) => {
    const id = toast.loading("Actualizando...");
    setProjects((prev) =>
      prev.map((p) => (p.id === created.id ? created : p))
    );
    try {
      await createProject(created);
      toast.success("Registro guardado correctamente.", {id});
      setSelected({...created, isNew: false});
    } catch (error) {
      console.error(error);
      toast.error("No fue posible guardar el registro.", {id});
    }
  };

  const handleUpdate = async (updated: Project) => {
    const id = toast.loading("Actualizando...");
    setProjects((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
    try {
      await updateProject(updated);
      toast.success("Registro guardado correctamente.", {id});
      setSelected(updated);
    } catch (error) {
      console.error(error);
      toast.error("No fue posible guardar el registro.", {id});
    }
  };
  
  const handleDelete = async (projectId: string) => {
    const id = toast.loading("Actualizando...");
    const remaining = projects.filter((p) => p.id !== projectId);
    setProjects(remaining);
    try {
      await deleteProject(projectId);
      toast.success("Registro guardado correctamente.", {id});
      setSelected(remaining[0] ?? null);
    } catch (error) {
      console.error(error);
      toast.error("No fue posible guardar el registro.", {id});
    }
  };

  const handleNewProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: "Nuevo proyecto",
      category: "",
      country: "",
      location: "",
      year: (new Date()).getFullYear(),
      area: 0,
      description:{ en:"", es:"" }, 
      visible: true,
      finalized: false,
      order: projects.length + 1,
      coverImage: "/imgs/project_cover.png",
      gallery: [],
      isNew: true,
    };

    setProjects((prev) => [...prev, newProject]);
    setSelected(newProject);
  };

    const filteredProjects = projects.filter((project) => {
      const text = search.toLowerCase();
      return (
        project?.title?.toLowerCase().includes(text) ||
        project?.category?.toLowerCase().includes(text) ||
        project?.location?.toLowerCase().includes(text)
      );
    });

  return (
    <div className="flex h-full flex-col">
        <ProjectToolbar
            search={search}
            onSearch={setSearch}
            onNewProject={handleNewProject}
        />

      <div className="grid flex-1 grid-cols-12 overflow-y-auto">
        {/* Lista */}
        <aside className="col-span-4 border-r border-white/10 bg-slate-900">
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              active={selected?.id === project.id}
              onClick={() => handleSelect(project)}
            />
          ))}
        </aside>

        {/* Editor */}
        <main className="col-span-8 bg-slate-950">
          {
            selected 
            ? (
              <ProjectEditor
                project={selected}
                onSave={handleSave}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            )
            : (
              <div className="p-8">
                <AlertInline
                  title="No se han registrado proyectos"
                  action={{
                      label: "Crear proyecto",
                      onClick: () => handleNewProject(),
                  }}
                />
              </div>
            )
        }
          
        </main>
      </div>
    </div>
  );
}