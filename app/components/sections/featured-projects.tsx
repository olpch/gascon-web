import Section from "../layout/section";
import Heading from "../typography/heading";
import Reveal from "../effects/reveal";
import ProjectCard from "../project/project-card";

const projects = [
  {
    title: "Private Residence",
    location: "Panamá",
    image: "/imgs/project1.jpg",
  },
  {
    title: "Urban House",
    location: "Madrid",
    image: "/imgs/project1.jpg",
  },
  {
    title: "Coastal Villa",
    location: "Canarias",
    image: "/imgs/project1.jpg",
  },
  {
    title: "Private Residence",
    location: "Barranquilla",
    image: "/imgs/project1.jpg",
  },
  {
    title: "Urban House",
    location: "Bogotá",
    image: "/imgs/project1.jpg",
  },
  {
    title: "Coastal Villa",
    location: "Santa Marta",
    image: "/imgs/project1.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <Section>

      <Reveal>

        <Heading className="mb-24">

          Projects

        </Heading>

      </Reveal>

      <div className="grid gap-12 lg:grid-cols-3">

        {projects.map((project, index) => (

          <Reveal key={index}>

            <ProjectCard {...project} />

          </Reveal>

        ))}

      </div>

    </Section>
  );
}