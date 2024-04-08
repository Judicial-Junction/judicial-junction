import { fontSans } from "@/config/font";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import Navbar from "./_components/Navbar/navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-primary">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
