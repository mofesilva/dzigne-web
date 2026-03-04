import type { Metadata } from "next";
import { Rajdhani, Outfit } from "next/font/google";
import "./globals.css";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/footer/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollTracker from "@/components/ScrollTracker";
import SmoothScroll from "@/components/SmoothScroll";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
      </head>
      <body
        className={`${rajdhani.variable} ${outfit.variable} antialiased`}
      >
        <StickyNavbar />
        <ScrollTracker />
        <SmoothScroll />
        <main className="">   {/*  pt-28 ≈ 7 rem (112 px)  */}
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
