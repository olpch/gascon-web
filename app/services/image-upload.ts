export async function imageUpload(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const res = await fetch("/api/uploads", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }

  return await res.json();
}