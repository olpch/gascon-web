"use client";

import { useState } from "react";
import { imageUpload } from "@/app/services/image-upload";

interface Props {
  category: string;
  indentifier: string;
  onUploaded(url: string): void;
}

export default function ImageUpload({
  onUploaded,
  indentifier,
  category,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const data = await imageUpload(file, category);

      onUploaded(data.url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <input
      id={indentifier}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleChange}
    />
  );
}