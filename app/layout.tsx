import type { Metadata } from "next";
import { proximaNova, nerdFont, nerdFontMono } from "./lib/fonts";
import "./globals.css";
import LenisProvider from "./providers/lenis-provider";
import Loader from "./components/effects/loader";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Gascon Architecture",
  description:
    "Architecture Studio",
};

const fontsClass = `${proximaNova.variable} ${nerdFont.variable} ${nerdFontMono.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={fontsClass}>
        <>
          <Loader />
          <LenisProvider>
            {children}
          </LenisProvider>
        </>
      </body>
    </html>
  );
}
