import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeContextProvider } from "@/hooks/useDarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato Peres - Homepage",
  description: "Renato's homepage",
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
