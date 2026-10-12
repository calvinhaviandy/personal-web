import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SpaceBackdrop from "@/app/components/SpaceBackdrop";
import MotionController from "@/app/components/MotionController";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const plexSans = localFont({
  src: [
    { path: "../public/fonts/ibm-plex/IBMPlexSans-Regular-Latin1.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ibm-plex/IBMPlexSans-Medium-Latin1.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

// Keep each project's cover lettering independent of the portfolio typography.
const outfit = localFont({
  src: "../public/fonts/Outfit-Regular.woff2",
  variable: "--font-outfit",
  weight: "400",
  display: "swap",
  preload: false,
});

const archiaBold = localFont({
  src: "../public/fonts/archia-bold-webfont.woff2",
  variable: "--font-archia-bold",
  weight: "700",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calvinhaviandy.vercel.app"),
  title: {
    default: "Calvin Haviandy — Developer & Designer",
    template: "%s — Calvin Haviandy",
  },
  description:
    "Calvin Haviandy designs and builds websites, tools, and digital products. Explore selected work and connect.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Calvin Haviandy — Developer & Designer",
    description: "Websites, tools, and digital products by Calvin Haviandy.",
    url: "/",
    siteName: "Calvin Haviandy",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${outfit.variable} ${archiaBold.variable}`}>
        <SpaceBackdrop />
        <Navbar />
        {children}
        <Footer />
        <MotionController />
      </body>
    </html>
  );
}
