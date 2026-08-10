import { put, del } from "@vercel/blob";
import { NextResponse, NextRequest } from "next/server";
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';


export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File;
    const category = form.get("category") as string || '';

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }
    const extension = file.type.split("/")[1];
    const filename = `${category}/${crypto.randomUUID()}.${extension}`
    const blob = await put(filename, file, {
      access: "public",
      addRandomSuffix: false,
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

export async function DELETE(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json(
        { error: "La URL es requerida" },
        { status: 400 }
      );
    }

    await del(url);

    return NextResponse.json({
      success: true,
      message: "Imagen eliminada correctamente",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error eliminando la imagen" },
      { status: 500 }
    );
  }
}

