import Section from "../layout/section";
import Heading from "../typography/heading";

export default function Philosophy() {
  return (
    <Section>

      <div className="grid gap-24 lg:grid-cols-2">

        <Heading>

          Architecture begins long before the first line is drawn.

        </Heading>

        <div>

          <p className="text-xl leading-10 text-black/65">

            Every commission represents an opportunity to
            understand how people inhabit space.

            Through careful observation,
            timeless materials
            and thoughtful proportions,
            we design places that improve everyday life
            while respecting their surroundings.

          </p>

        </div>

      </div>

    </Section>
  );
}