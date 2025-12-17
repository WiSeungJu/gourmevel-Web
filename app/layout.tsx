import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Noto_Serif_KR } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import RightClickGuard from "@/components/ui/RightClickGuard";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gourmevel",
  description: "Taste The Extraordinary.",
  keywords: ["Gourmevel", "고메블", "미식", "파인다이닝", "위승주"],
  authors: [{ name: "위승주" }],
  icons: {
    icon: "/gourmevel_logo.png",
    apple: "/gourmevel_logo.png",
  },
  openGraph: {
    title: "Gourmevel",
    description: "Taste The Extraordinary.",
    type: "website",
    images: [
      {
        url: "/gourmevel_logo.png",
        width: 1200,
        height: 630,
        alt: "Gourmevel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bodoni.variable} ${inter.variable} ${notoSerifKR.variable} antialiased bg-white text-black overflow-x-hidden`}
      >
        <RightClickGuard />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
