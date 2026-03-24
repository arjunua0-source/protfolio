import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software QA & Tester Portfolio",
  description: "Portfolio of a detail-oriented Software Tester specialized in automation and manual testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-slate-900 text-slate-50 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
