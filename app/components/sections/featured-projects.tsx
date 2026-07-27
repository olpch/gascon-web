import Section from "../layout/section";
import Heading from "../typography/heading";
import Reveal from "../effects/reveal";
import ProjectCard from "../project/project-card";

const projects = [
  {
    title: "Private Residence",
    location: "Barranquilla",
    image: "/images/home/project1.jpg",
  },
  {
    title: "Urban House",
    location: "Bogotá",
    image: "/images/home/project2.jpg",
  },
  {
    title: "Coastal Villa",
    location: "Santa Marta",
    image: "/images/home/project3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <Section>

      <Reveal>

        <Heading className="mb-24">

          Selected Projects

        </Heading>

      </Reveal>

      <div className="grid gap-12 lg:grid-cols-3">

        {projects.map((project) => (

          <Reveal key={project.title}>

            <ProjectCard {...project} />

          </Reveal>

        ))}

      </div>

    </Section>
  );
}