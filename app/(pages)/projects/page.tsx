import ProjectGrid from "@/app/components/project/project-grid";

const projects = [
  {
    slug: "villa-a",
    title: "Villa A",
    category: "Residential",
    year: "2025",
    image: "/imgs/project1.jpg",
  },
  {
    slug: "museum",
    title: "Museum",
    category: "Culture",
    year: "2024",
    image: "/imgs/project1.jpg",
  },
  {
    slug: "office",
    title: "Office Building",
    category: "Commercial",
    year: "2023",
    image: "/imgs/project1.jpg",
  },
];


export default function ProjectsPage() {
  return (
    <>
      <ProjectGrid projects={projects} />;
    </>
  );
}