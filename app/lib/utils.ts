import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from './models';

export function cn(...inputs: any[]) {

  return twMerge(clsx(inputs));

}

export const proyectToObject = (project: any): Project | null => {
  if (!project) return null;
  return {
    ...project,
    home: project.home === 1,
    visible: project.visible === 1,
    finalized: project.finalized === 1,
    description: JSON.parse(project.description),
    gallery: JSON.parse(project.gallery)
  };
}

export const hasChanges = <T>(original: T, current: T): boolean => {
  return JSON.stringify(original) !== JSON.stringify(current);
}

export function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) { return videoId; }

      const pathParts = parsedUrl.pathname.split("/");
      const type = pathParts[1];

      if (
        ["embed", "shorts", "live"].includes(type) &&
        pathParts[2]
      ) {
        return pathParts[2];
      }
    }

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }
    return null;
  } catch {
    return null;
  }
}