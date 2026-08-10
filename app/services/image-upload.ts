import { StorageSize } from "../lib/models";

export async function imageUpload(file: File, category = '') {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("category", category);

  const res = await fetch("/api/uploads", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }

  return await res.json();
}

export async function deleteImage(url: string) {
  await fetch("/api/uploads", {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({url}),
  });
}

export async function getStorageSize(): Promise<StorageSize> {
  const res = await fetch("/api/storage", {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  });
  if (!res.ok) { return { used: 0, percent: 0 }; }
  return await res.json();

}