import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pastry Queen India 2026 - The Dance of Birds",
  description:
    "The 5th edition of Pastry Queen India - the national stage for India's finest women pastry chefs. 5–6 August 2026, India Expo Centre & Mart, Greater Noida.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Pastry Queen India 2026 - The Dance of Birds",
    description:
      "The national stage for India's finest women pastry chefs. 5–6 August 2026, Greater Noida.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <ScrollProgress />
        <Nav />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
