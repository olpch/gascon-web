import { Project } from "../lib/models";



export async function getProject(projetcId: string): Promise<Project | null> {
  const response = await fetch(`/api/projects/${projetcId}/`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}

export async function getProjectsList(): Promise<Project[]> {
  const response = await fetch(`/api/projects`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function createProject(project: Project) {
  const response = await fetch(`/api/projects`, {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}

export async function updateProject(project: Project) {
  const response = await fetch(`/api/projects/${project.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}

export async function deleteProject(projectId: string) {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}