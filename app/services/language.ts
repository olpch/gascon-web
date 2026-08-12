import { Dictionary } from '@/app/lib/models';
export async function getLanguage() {
  const response = await fetch(`/api/languages`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  if (!response.ok) {
    return [];
  }

  return response.json();
}
export async function setLanguage(dictionary: Dictionary) {
  const response = await fetch(`/api/languages/${dictionary.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dictionary)
  });
  if (!response.ok) {
    return [];
  }

  return response.json();
}