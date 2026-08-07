"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-40">
      <div className="mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Left */}

          <div className="space-y-8">
            <span className="text-xs uppercase tracking-[0.35em] text-black/45">
              Contact
            </span>

            <h2 className="max-w-md text-5xl font-normal leading-[1.1] tracking-[-0.04em] text-black md:text-6xl">
              Let's discuss your next project.
            </h2>

            <p className="max-w-sm text-base leading-8 text-black/55">
              We collaborate with clients seeking architecture that is
              timeless, functional and deeply connected to its context.
            </p>
          </div>

          {/* Right */}

          <div className="space-y-12">
            <div className="border-t border-black/10 pt-8">
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-black/40"
                />

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-black/40">
                    Studio
                  </p>

                  <p className="leading-8 text-black/75">
                    Barranquilla
                    <br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-8">
              <div className="flex items-start gap-4">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-black/40"
                />

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-black/40">
                    Email
                  </p>

                  <a
                    href="mailto:hello@gasconarchitecture.com"
                    className="transition-colors duration-300 hover:text-black/50"
                  >
                    hello@gasconarchitecture.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-8">
              <div className="flex items-start gap-4">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-black/40"
                />

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-black/40">
                    Phone
                  </p>

                  <a
                    href="tel:+573001234567"
                    className="transition-colors duration-300 hover:text-black/50"
                  >
                    +57 300 123 4567
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-8">
              <button className="group flex items-center gap-4">
                <span className="text-sm uppercase tracking-[0.28em] text-black">
                  Start a Conversation
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}