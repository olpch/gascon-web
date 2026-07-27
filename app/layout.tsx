import type { Metadata } from "next";
import { proximaNova } from "./lib/fonts";
import "./globals.css";
import LenisProvider from "./providers/lenis-provider";

export const metadata: Metadata = {
  title: "Gascon Architecture",
  description:
    "Architecture Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={proximaNova.variable}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
