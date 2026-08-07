import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    {
      path: "../fonts/proxima-nova/ProximaNova-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/proxima-nova/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/proxima-nova/ProximaNova-Semibold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/proxima-nova/ProximaNova-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/proxima-nova/ProximaNova-Black.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
  display: "swap",
});

export const nerdFont = localFont({
  src: [
    {
      path: "../fonts/symbols-nerd-font/SymbolsNerdFont-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nerd",
});

export const nerdFontMono = localFont({
  src: [
    {
      path: "../fonts/symbols-nerd-font/SymbolsNerdFontMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nerd-mono",
});