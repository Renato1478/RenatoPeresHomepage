import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeContextProvider } from "@/hooks/useDarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato Peres - Homepage",
  description: "Renato's homepage",
  keywords:
    "sites, web, desenvolvimento, frontend, renato peres, ui designer, programador, renatopres, front-end, designer, ui, renato, freelancer, freela, website, portfólio",
  creator: "Renato Peres",
  openGraph: {
    type: "website",
    url: "https://renatoperes.dev",
    title: "Renato Peres - Homepage",
    description: "Renato's homepage",
    siteName: "Renato Peres - Homepage",
    images: [
      {
        url: "https://renatoperes.dev/images/og.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeContextProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className + " scroll-smooth"}>{children}</body>
      </html>
    </DarkModeContextProvider>
  );
}
