import { db } from '@/app/lib/db';
import { projects } from '@/app/db/schema';
import { NextResponse, NextRequest } from 'next/server'
import { proyectToObject } from '@/app/lib/utils';

export async function GET(request: Request) { 
  const projectList = await db.select().from(projects);
  return NextResponse.json(
    projectList.map((project) => proyectToObject(project)
  ));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const [project] = await db
      .insert(projects)
      .values({
        year: body.year,
        home: body.home,
        order: body.order,
        title: body.title,
        category: body.category,
        location: body.location,
        visible: body.visible,
        country: body.country,
        finalized: body.finalized,
        coverImage: body.coverImage,
        gallery: JSON.stringify(body.gallery),
        description: JSON.stringify(body.description),
      })
      .returning();

    return NextResponse.json(project, {
      status: 201,
    });
  } catch (error) {
    console.error("CREATE_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "No se pudo crear el proyecto",
      },
      {
        status: 500,
      }
    );
  }
}
