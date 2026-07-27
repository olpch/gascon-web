import Link from "next/link";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16">
      <Container>
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <h3 className="text-2xl">
              Gascon
            </h3>

            <p className="mt-6 max-w-sm leading-8 text-black/55">
              Contemporary architecture with timeless values.
            </p>
          </div>

          <div>
            <p className="mb-6 uppercase tracking-[.3em] text-sm">
              Navigation
            </p>

            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/studio">Studio</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-6 uppercase tracking-[.3em] text-sm">
              Contact
            </p>

            <p>hello@gascon.com</p>
            <p className="mt-3">+57 300 0000000</p>
          </div>
        </div>

        <div className="mt-24 flex justify-between border-t border-black/10 pt-8 text-sm text-black/40">
          <span>© 2026 Gascon Architecture</span>

          <span>Designed with Next.js</span>
        </div>
      </Container>
    </footer>
  );
}