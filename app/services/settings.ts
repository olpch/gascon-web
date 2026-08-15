import { Settings } from '@/app/lib/models';
export async function getSettings() {
  const response = await fetch(`/api/settings`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  if (!response.ok) {
    return [];
  }

  return response.json();
}
export async function setSettings(settings: Settings) {
  const response = await fetch(`/api/settings`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(settings)
  });
  if (!response.ok) {
    return [];
  }

  return response.json();
}