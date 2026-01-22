import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import Navbar from "./components/navbar/navbar";
import LenisProvider from "@/app/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zackary Overend — Portfolio",
    template: "%s · Zackary Overend",
  },
  description:
    "Zackary Overend is a computer science student and developer focused on building clean, intuitive mobile and web applications.",
  applicationName: "Zackary Overend Portfolio",
  authors: [{ name: "Zackary Overend" }],
  generator: "Next.js",
  keywords: [
    "Zackary Overend",
    "portfolio",
    "computer science student",
    "mobile developer",
    "web developer",
    "SwiftUI",
    "Next.js",
  ],
  creator: "Zackary Overend",

  openGraph: {
    title: "Zackary Overend — Portfolio",
    description:
      "Clean, thoughtful mobile and web applications by Zackary Overend.",
    url: "https://zackaryoverend.com",
    siteName: "Zackary Overend Portfolio",
    images: [
      {
        url: "/web-icon.svg", // put in /public
        width: 1200,
        height: 630,
        alt: "Zackary Overend Portfolio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zackary Overend — Portfolio",
    description:
      "Clean, thoughtful mobile and web applications by Zackary Overend.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // optional
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
