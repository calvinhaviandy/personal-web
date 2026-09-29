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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${outfit.variable} ${archiaBold.variable}`}>
        <div className="space-backdrop" aria-hidden="true">
          <span className="shooting-star shooting-star-one" />
          <span className="shooting-star shooting-star-two" />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
