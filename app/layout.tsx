import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const outfit = localFont({
  src: "../public/fonts/Outfit-Regular.ttf",
  variable: "--font-outfit",
});

const archiaBold = localFont({
  src: "../public/fonts/archia-bold-webfont.woff2",
  variable: "--font-archia-bold",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calvinhaviandy.vercel.app"),
  title: {
    default: "Calvin Haviandy — Developer & Designer",
    template: "%s — Calvin Haviandy",
  },
  description:
    "Selected web development and product design work by Calvin Haviandy, based in Indonesia.",
  openGraph: {
    title: "Calvin Haviandy — Developer & Designer",
    description: "Selected web development and product design work by Calvin Haviandy.",
    url: "/",
    siteName: "Calvin Haviandy",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1efe8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${archiaBold.variable} font-outfit`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
