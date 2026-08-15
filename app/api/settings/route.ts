import { db } from '@/app/lib/db';
import { settings } from '@/app/db/schema';
import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm';

export async function GET() {
  const response = await db.select().from(settings).limit(1);
  const jsonData = JSON.parse(response[0].data)
  return NextResponse.json({ ...response[0], data: jsonData });

}

export async function PATCH(request: Request) {
  try {
    const { id, data } = await request.json();
    const [response] = await db
      .update(settings)
      .set({ id: id, data: JSON.stringify(data) })
      .where(eq(settings.id, id))
      .returning();

    if (!response) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'settings updated!'
      },
      { status: 200 }
    );
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