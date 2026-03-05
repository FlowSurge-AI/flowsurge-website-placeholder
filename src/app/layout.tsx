import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowSurge AI — AI-Powered Growth for Dental Specialists",
  description:
    "AI-powered lead automation for dental specialists and oral surgeons. Automate follow-ups, eliminate missed referrals, and grow your practice with data-driven insights.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "FlowSurge AI — AI-Powered Growth for Dental Specialists",
    description:
      "AI-powered lead automation for dental specialists and oral surgeons. Automate follow-ups, eliminate missed referrals, and grow your practice.",
    url: "https://flowsurge.ai",
    siteName: "FlowSurge AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowSurge AI — AI-Powered Growth for Dental Specialists",
    description:
      "AI-powered lead automation for dental specialists and oral surgeons.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
