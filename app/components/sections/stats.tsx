import Reveal from "../effects/reveal";
import Section from "../layout/section";

const stats = [
  {
    number: "120+",
    title: "Projects",
  },
  {
    number: "18",
    title: "Awards",
  },
  {
    number: "12",
    title: "Years",
  },
  {
    number: "35",
    title: "Cities",
  },
];

export default function Stats() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Reveal key={item.title}>
            <div className="border-t border-black/10 pt-8">
              <h2 className="text-7xl font-light">
                {item.number}
              </h2>

              <p className="mt-4 uppercase tracking-[.3em] text-sm text-black/45">
                {item.title}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}