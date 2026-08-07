"use client";

import type { Metadata } from "next";
import { proximaNova } from "../lib/fonts";
import "../globals.css";
import Footer from "../components/layout/footer";
import Navbar from '../components/layout/navbar';
import LenisProvider from "../providers/lenis-provider";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Gascon Architecture",
//   description:
//     "Architecture Studio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={proximaNova.variable}>
        <LenisProvider>
          <Navbar nbg={isContactPage} />
            {children}
          <Footer></Footer>
        </LenisProvider>
      </body>
    </html>
  );
}
