"use client";

import { useEffect, useState } from "react";

import ProjectItem from "@/app/components/admin/ProjectItem";
import ProjectEditor from "@/app/components/admin/ProjectEditor";
import ProjectToolbar from "@/app/components/admin/ProjectToolbar";
import { Project } from "@/app/lib/models";
import { toast } from "sonner";
import { getProjectsList } from "@/app/services/projects";
import Alert from "@/app/components/alert/alert";
import AlertInline from "@/app/components/alert/alert-inline";

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Casa Moderna",
    category: "Residencial",
    location: "Barranquilla",
    year: "2025",
    description: "Proyecto residencial contemporáneo.",
    coverImage: "/imgs/project1.jpg",
    image: "/imgs/project1.jpg",
    visible: true,
    order: 1,
    gallery: [
        "/imgs/project1.jpg",
        "/imgs/project1.jpg",
        "/imgs/project1.jpg",
    ]
  },
  {
    id: "2",
    title: "Hotel Boutique",
    category: "Comercial",
    location: "Santa Marta",
    year: "2024",
    description: "Hotel de lujo frente al mar.",
    coverImage: "/imgs/project1.jpg",
    image: "/imgs/project1.jpg",
    visible: true,
    order: 2,
    gallery: [
        "/imgs/project1.jpg",
        "/imgs/project1.jpg",
        "/imgs/project1.jpg",
    ]
  },
];



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

  const handleSave = (updated: Project) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
    console.table(updated);
    setSelected(updated);
  };
  
  const handleDelete = (id: string) => {
    const remaining = projects.filter((p) => p.id !== id);
    setProjects(remaining);
    setSelected(remaining[0] ?? null);
  };

    const handleNewProject = () => {
        const newProject: Project = {
            id: crypto.randomUUID(),
            title: "Nuevo proyecto",
            category: "",
            location: "",
            year: "",
            description: "",
            image: "",
            visible: true,
            order: projects.length + 1,
        };

        setProjects((prev) => [...prev, newProject]);
        setSelected(newProject);
    };

    const filteredProjects = projects.filter((project) => {
      const text = search.toLowerCase();
      console.log({project, text});
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