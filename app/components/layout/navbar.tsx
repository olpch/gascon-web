"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import FullscreenMenu from "./fullscreen-menu";
import MenuButton from "./menu-button";

const links = [
  ["Studio", "/studio"],
  ["Projects", "/projects"],
  ["Research", "/research"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="mx-auto flex h-24 max-w-[1700px] items-center justify-between px-8 xl:px-16">

          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-[0.45em]"
          >
            GASCON
          </Link>

          {/* Desktop */}

          <ul className="hidden items-center gap-14 lg:flex">

            {links.map(([title, href]) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-[13px] uppercase tracking-[0.28em] text-black/70 transition hover:text-black"
                >
                  {title}
                </Link>
              </li>
            ))}

          </ul>

          {/* Mobile */}

          <div className="lg:hidden">
            <MenuButton
              open={open}
              onClick={() => setOpen(true)}
            />
          </div>

        </nav>
      </header>

      <FullscreenMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}