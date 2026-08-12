import type { Metadata } from "next";
import { proximaNova, nerdFont, nerdFontMono } from "./lib/fonts";
import "./globals.css";
import Loader from "./components/effects/loader";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "./providers/language-context";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </>
      </body>
    </html>
  );
}
