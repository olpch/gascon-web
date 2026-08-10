import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from '@/app/lib/db';
import { projects } from '@/app/db/schema';
import { proyectToObject } from "@/app/lib/utils";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.id, id))
      .limit(1);

    if (!project) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(proyectToObject(project));
  } catch (error) {
    console.error("GET_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "No se pudo obtener el proyecto",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const [project] = await db
      .delete(projects)
      .where(eq(projects.id, id))
      .returning();

    if (!project) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: "Proyecto eliminado correctamente",
      project,
    });
  } catch (error) {
    console.error("DELETE_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "No se pudo eliminar el proyecto",
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

    const [project] = await db
      .update(projects)
      .set({
        id: body.id,
        year: body.year,
        order: body.order,
        title: body.title,
        category: body.category,
        location: body.location,
        visible: body.visible,
        area: body.area,
        home: body.home,
        updateAt: body.updateAt,
        finalized: body.finalized,
        coverImage: body.coverImage,
        gallery: JSON.stringify(body.gallery),
        description: JSON.stringify(body.description),
      })
      .where(eq(projects.id, id))
      .returning();

    if (!project) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(project);
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