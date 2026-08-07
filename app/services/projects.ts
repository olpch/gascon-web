import { Project } from "../lib/models";

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

export async function updateProject(id: string, data: Project) {
  const response = await fetch(`/api/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}