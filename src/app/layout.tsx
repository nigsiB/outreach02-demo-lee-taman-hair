import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Lato } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Lato({ weight: ["400","700"], subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "Lee Taman | Hairdresser Cranleigh", template: "%s" },
  description: "Hair salon demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="bg-[#fdf8f6] border-b border-rose-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">Lee Taman</Link>
            <nav className="flex gap-5 text-sm"><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
