import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAIBOLY MANÀNA FINOANA — Baiboly malagasy hors-ligne",
  description:
    "Vakio ny Baiboly malagasy manontolo (Tanakh + Brit Hadashah, Sacred Name Edition) amin'ny Android sy iOS. 75 boky, 100% hors-ligne, fikarohana haingana, anarana masina paleo-hebreo.",
  keywords: [
    "Baiboly malagasy",
    "Bible malgache",
    "Tanakh",
    "Brit Hadashah",
    "Sacred Name",
    "YHWH",
    "Mashiah",
    "application biblique",
  ],
  openGraph: {
    title: "BAIBOLY MANÀNA FINOANA",
    description:
      "Ny Baiboly malagasy manontolo, hors-ligne, miaraka amin'ny anarana masina paleo-hebreo (YHWH, MASHIAH).",
    type: "website",
    locale: "mg_MG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mg"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-slate-900"
        suppressHydrationWarning
      >
        <ScrollAnimationProvider />
        {children}
      </body>
    </html>
  );
}
