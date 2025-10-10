import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samyak Borkar - Full Stack Developer",
  description:
    "Portfolio of Samyak Borkar - B.Tech IT Student & Full Stack Developer specializing in React, Node.js, and AI/ML technologies",
  generator: "v0.app",
  keywords: [
    "Samyak Borkar",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "AI/ML",
    "Portfolio",
  ],
  authors: [{ name: "Samyak Borkar" }],
  openGraph: {
    title: "Samyak Borkar - Full Stack Developer",
    description:
      "Portfolio showcasing innovative web applications and AI-powered solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
