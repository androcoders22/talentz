import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const centuryGothic = localFont({
  src: "./assest/centurygothic.ttf",
  variable: "--font-century-gothic",
});

export const metadata: Metadata = {
  title: "TALENTZ | AVL Rentals, Pro Audio, Music Gears.",
  description:
    "TALENTZ - Ready for Every Stage. World-class event production resources, Pro Audio, and Music Gears in Oman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://tweakcn.com/live-preview.min.js"></script>
      </head>
      <body
        suppressHydrationWarning
        className={`${centuryGothic.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
