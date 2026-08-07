import { StaffMember } from "../lib/models";

export async function getMembersList(): Promise<StaffMember[]> {
  const response = await fetch(`/api/staff`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}



export async function createMember(staffMember: StaffMember) {
  
  const response = await fetch(`/api/staff`, {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(staffMember),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}

export async function updateStaff(id: string, data: StaffMember) {
  const response = await fetch(`/api/staff/${id}`, {
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