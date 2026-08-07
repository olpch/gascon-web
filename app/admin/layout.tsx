import type { Metadata } from "next";
import { proximaNova, nerdFont, nerdFontMono } from "../lib/fonts";
import "../globals.css";
import LenisProvider from "../providers/lenis-provider";
import Loader from "../components/effects/loader";
import Sidebar from "../components/layout/admin/sidebar";
import { Toaster } from "sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body className={fontsClass}>
        <div id="main-container" className="flex h-screen overflow-hidden bg-slate-950">
          <Sidebar />
          <main className="flex-1">
            {children}
            <Toaster
              richColors
              position="top-right" />
          </main>
        </div>
      </body>
    </html>
  );
}