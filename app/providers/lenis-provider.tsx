"use client";

import Lenis from "lenis";
import { useEffect } from "react";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({
  children,
}: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      touchMultiplier: 2,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}