import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./(sections)/sidebar";
import { Footer } from "./(sections)/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galina Vitvitskaya Portfolio",
  description: "Place for all my coding things online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <div className="flex md:flex-row flex-col gap-8 md:gap-12 selection:bg-peach mx-auto p-4 md:p-8 w-full max-w-7xl min-h-screen font-sans selection:text-white">
      <Sidebar />
      <body className="flex flex-col min-h-full">
        <div>
        {children}
        <Footer />
        </div>
      </body>
    </div>
    </html>
  );
}
