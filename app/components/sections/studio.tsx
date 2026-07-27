import Image from "next/image";

import Reveal from "../effects/reveal";
import Section from "../layout/section";

import Heading from "../typography/heading";
import Body from "../typography/body";
import Eyebrow from "../typography/eyebrow";

import Parallax from "../effects/parallax";

export default function Studio() {
  return (
    <Section>
      <div className="grid items-center gap-28 lg:grid-cols-2">
        <Reveal>
          <Parallax>
            <Image
              src="/images/studio/studio.jpg"
              alt="Studio"
              width={900}
              height={1200}
              className="aspect-[4/5] rounded-3xl object-cover"
            />
          </Parallax>
        </Reveal>

        <Reveal>
          <Eyebrow>Studio</Eyebrow>

          <Heading className="mb-10">
            We design spaces that remain meaningful over time.
          </Heading>

          <Body>
            Every project begins by understanding its context,
            the people who will inhabit it and the experience
            it should create.
          </Body>

          <Body className="mt-8">
            Architecture should endure, adapt and inspire for
            generations rather than simply respond to current
            trends.
          </Body>
        </Reveal>
      </div>
    </Section>
  );
}