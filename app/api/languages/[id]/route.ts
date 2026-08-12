import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from '@/app/lib/db';
import { languages } from '@/app/db/schema';

interface LanguageDb {
  id: string;
  data: string;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [language] = await db
      .select()
      .from(languages)
      .where(eq(languages.id, id))
      .limit(1);

    if (!language) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    const response = { ...language, data: JSON.parse(language.data) };
    return NextResponse.json(response);
  } catch (error) {
    console.error("UPDATE_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "No se pudo actualizar el proyecto",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const [language] = await db
      .update(languages)
      .set({ id: id, data: JSON.stringify(body) })
      .where(eq(languages.id, id))
      .returning();

    if (!language) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(language);
  } catch (error) {
    console.error("UPDATE_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "No se pudo actualizar el proyecto",
      },
      {
        status: 500,
      }
    );
  }
}