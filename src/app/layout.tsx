import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Prrrfct | AI Cat Adoption",
  description: "Find your perfect feline match.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Global layout:
          - Single main landmark
          - No extra gap between header and main
      */}
      <body className="bg-section-primary text-primary antialiased min-h-screen flex flex-col">
        {/* Skip link for keyboard and screen reader users */}
        <a
          href="#main-content"
          className="
            absolute top-xs left-xs px-sm py-2xs
            bg-section-primary text-primary z-50
            opacity-0 focus:opacity-100
            focus:outline focus:outline-2 focus:outline-brand-primary
          "
        >
          Skip to main content
        </a>

        {/* 1. Header at the top */}
        <Header />

        {/* 2. Page Content in the middle */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* 3. Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
