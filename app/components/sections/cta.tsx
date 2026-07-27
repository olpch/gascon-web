import Link from "next/link";
import Section from "../layout/section";
import Heading from "../typography/heading";

export default function CTA() {
  return (
    <Section>
      <div className="rounded-[40px] bg-[#3C3C3C] px-14 py-24 text-white">
        <Heading className="max-w-4xl text-white">
          Let's create architecture that lasts for generations.
        </Heading>

        <p className="mt-10 max-w-2xl text-xl leading-9 text-white/70">
          Tell us about your project and we will help transform
          your ideas into spaces that inspire.
        </p>

        <Link
          href="/contact"
          className="mt-16 inline-flex rounded-full border border-white px-10 py-5 uppercase tracking-[.25em] transition hover:bg-white hover:text-black"
        >
          Start a Project
        </Link>
      </div>
    </Section>
  );
}