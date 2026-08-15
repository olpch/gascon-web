"use client";

import Navbar from "../layout/navbar";
import HeroVideo from "./hero-video";
import HeroContent from "./hero-content";
import ScrollIndicator from "./scroll-indicator";
import { useLanguage } from "@/app/providers/language-context";
import { useEffect, useState } from "react";

export default function Hero() {

  const { settings } = useLanguage();
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    setBanner(settings.data.home.banner);
  }, [settings])

  return (
    <>
      <Navbar />
      <section id="hero"
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          backgroundImage: banner?.image
            ? `url("${banner.image}")`
            : undefined
        }}>
        <HeroVideo />
        <div className="relative z-20 mx-auto flex w-full max-w-[1600px] px-8">
          <HeroContent />
        </div>
        <ScrollIndicator />
      </section>
    </>
  );
}