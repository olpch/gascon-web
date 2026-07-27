import Reveal from "../effects/reveal";
import Section from "../layout/section";
import Heading from "../typography/heading";

const services = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Urban Planning",
  "Landscape Design",
  "Construction Supervision",
];

export default function Services() {
  return (
    <Section>
      <Reveal>
        <Heading className="mb-24">
          Services
        </Heading>
      </Reveal>

      <div className="divide-y divide-black/10">
        {services.map((service, index) => (
          <Reveal key={service}>
            <div className="flex items-center justify-between py-10 transition hover:pl-6">
              <span className="text-5xl font-light text-black/20">
                0{index + 1}
              </span>

              <h3 className="text-3xl">
                {service}
              </h3>

              <span className="text-sm uppercase tracking-[.3em] text-black/40">
                View
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}