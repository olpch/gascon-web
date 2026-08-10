import { notFound } from "next/navigation";
import { getProject } from "@/app/services/projects";
import ProjectViewPage from "@/app/components/admin/ProjectView";
import { projects } from "@/app/db/schema";
import { db } from "@/app/lib/db";
import { eq } from "drizzle-orm";
import { proyectToObject } from "@/app/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export async function getProjectById(projectId: string): Promise<any> {
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, projectId))
    .limit(1);
  return proyectToObject(project) ?? null;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) { notFound(); }

  return <ProjectViewPage project={project} />;
}