import { UserAuth } from "../lib/models";

export async function login(user: UserAuth) {
  const response = await fetch(`/api/auth`, {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar");
  }

  return response.json();
}