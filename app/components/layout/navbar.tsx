"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import FullscreenMenu from "./fullscreen-menu";
import MenuButton from "./menu-button";
import Image from 'next/image';
import { useLanguage } from "@/app/providers/language-context";

const links = [
  { title: "home", href: "/", icon: '' },
  { title: "projects", href: "/projects", icon: '' },
  { title: "staff", href: "/staff", icon: '' },
  { title: "contact", href: "/contact", icon: '' },
];

interface Props {
  nbg?: boolean;
}

const getBackground = (nbg: boolean = false) => {
  return !nbg ? 'nav-bar' : 'nav-bar-nbg';
}

export default function Navbar({ nbg = false }: Props) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { language, t, setLanguage } = useLanguage();

  const changeLanguage = () => {
    const id = (language === 'en') ? 'es' : 'en';
    setLanguage(id);
  }

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
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <nav className={`${getBackground(nbg)} mx-auto flex h-18 p-2 items-center justify-between px-8 xl:px-8`}>

          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-[0.45em]"
          >
            <Image
              className="image-logo"
              src="/imgs/Logo_dark.png"
              width={550} height={98}
              alt="Logo"
            />
          </Link>

          {/* Desktop */}

          <ul className="hidden items-center gap-14 lg:flex">

            {links.map(({ title, href, icon }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="nav-link text-[13px] uppercase tracking-[0.28em] text-black/70 transition hover:text-black"
                >
                  <span className="font-nerd">{`${icon} ` || ''} </span>
                  {t(`navigation.${title}`)}
                </Link>
              </li>
            ))}
            <li key="Language">
              <Link
                href=""
                onClick={changeLanguage}
                className="nav-link text-[13px] uppercase tracking-[0.28em] text-black/70 transition hover:text-black"
              >
                <span className="font-nerd"> </span>
                {t('label')}
              </Link>
            </li>

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