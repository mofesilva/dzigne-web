import type { Metadata } from "next";
import { Rajdhani, League_Spartan } from "next/font/google";
import "./globals.css";
import StickyNavbar from "@/components/StickyNavbar";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dzign-e | Software House",
  description: "A casa do seu sucesso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
      </head>
      <body
        className={`${rajdhani.variable} ${leagueSpartan.variable} antialiased`}
      >
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
