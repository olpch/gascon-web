import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    // {
    //   path: "./fonts/proxima-nova/ProximaNova-Light.otf",
    //   weight: "300",
    //   style: "normal",
    // },
    {
      path: "../fonts/proxima-nova/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../fonts/proxima-nova/ProximaNova-Medium.otf",
    //   weight: "500",
    //   style: "normal",
    // },
    // {
    //   path: "../fonts/proxima-nova/ProximaNova-Semibold.otf",
    //   weight: "600",
    //   style: "normal",
    // },
    // {
    //   path: "../fonts/proxima-nova/ProximaNova-Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-proxima",
  display: "swap",
});