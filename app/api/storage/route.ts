import { list } from "@vercel/blob";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    const { blobs } = await list();
    const total = blobs.reduce((acc, blob) => acc + blob.size, 0);
    const used = total / 1048576;
    const percent = used / 10.24;
    return NextResponse.json({used, percent});
  
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}