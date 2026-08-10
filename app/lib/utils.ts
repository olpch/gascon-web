import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from './models';

export function cn(...inputs:any[]) {

return twMerge(clsx(inputs));

}

export const proyectToObject = (project: any): Project | null  => {
    if(!project) return null;
    return {
        ...project, 
        home: project.home === 1,
        visible: project.visible === 1,
        finalized: project.finalized === 1,
        description: JSON.parse(project.description),
        gallery: JSON.parse(project.gallery)
     };
}