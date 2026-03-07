import type { Metadata } from "next";
import { Nunito, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Private Knight Combo | Ayurnnath - Ayurvedic Wellness",
  description: "Power & Performance Redefined — Ayurvedic combo designed to boost confidence, stamina, and performance naturally. 100% Ayurvedic with free consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
