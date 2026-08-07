"use client";

import { useState } from "react";
import { imageUpload } from "@/app/services/image-upload";
import { Camera } from "lucide-react";

interface Props {
  onUploaded(url: string): void;
  indentifier: string;
}

export default function ImageUpload({
  onUploaded,
  indentifier
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const data = await imageUpload(file);

      onUploaded(data.url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="text-sm space-y-2">
        Change Photo
        <input
            id={indentifier}
            type="file"
            accept="image/*"
            onChange={handleChange}
        />
        {loading && (<p>Subiendo...</p>)}
    </div>
  );
}