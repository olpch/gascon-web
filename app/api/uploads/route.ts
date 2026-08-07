import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';


export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File;
    console.log("Received file:", file);

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }
    const extension = file.type.split("/")[1];
    const filename = `${crypto.randomUUID()}.${extension}`
    const blob = await put(filename, file, {
      access: "public",
    });

    return NextResponse.json(blob);
  
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}