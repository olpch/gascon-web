"use client";

import type { Metadata } from "next";
import { proximaNova, nerdFont, nerdFontMono } from "../lib/fonts";
import "../globals.css";
import Sidebar from "../components/layout/admin/sidebar";
import { Toaster } from "sonner";
import { AdminProvider, useAdminContext } from "../providers/admin-context";
import AdminGuard from "./admin-guard";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Gascon Architecture",
//     description: "Architecture Studio"
//   }
// };

const fontsClass = `${proximaNova.variable} ${nerdFont.variable} ${nerdFontMono.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <AdminProvider>
      <AdminGuard>
        <div id="main-container" className="flex h-screen overflow-hidden bg-slate-950">
          <Sidebar />
          <main className="flex-1">
            {children}
            <Toaster
              richColors
              position="top-right" />
          </main>
        </div>
      </AdminGuard>
    </AdminProvider>
  );
}