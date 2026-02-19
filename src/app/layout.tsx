import Footer from '../components/Footer';
import Header from '../components/Header';

import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "GNCE Mercury",
  description: "Website for GNCE Mercury FTC team",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={space.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}