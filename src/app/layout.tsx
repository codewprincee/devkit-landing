import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevKit — The Developer Toolbox for macOS",
  description:
    "The developer toolbox that replaces 10 terminal commands with one app. 5 native macOS tools — free, open source, built with Tauri and Rust.",
  keywords: [
    "developer tools",
    "macOS",
    "port manager",
    "env manager",
    "API client",
    "log viewer",
    "Docker dashboard",
    "open source",
    "Tauri",
  ],
  openGraph: {
    title: "DevKit — The Developer Toolbox for macOS",
    description:
      "The developer toolbox that replaces 10 terminal commands with one app. 5 native macOS tools — free, open source, built with Tauri and Rust.",
    url: "https://devkit.dev",
    siteName: "DevKit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevKit — The Developer Toolbox for macOS",
    description:
      "The developer toolbox that replaces 10 terminal commands with one app. 5 native macOS tools — free, open source.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
