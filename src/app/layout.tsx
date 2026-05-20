import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kristjan Bajuk — Web3 Developer & Consultant",
  description:
    "Senior Web3 Engineer from Ljubljana. Building production-grade smart contracts and dApp frontends for real-estate tokenization, DeFi, and creator platforms.",
  keywords: [
    "Web3 Developer",
    "Solidity",
    "Next.js",
    "Blockchain",
    "Smart Contracts",
    "DeFi",
    "Ljubljana",
    "Slovenia",
    "Ethereum",
    "Freelance",
  ],
  authors: [{ name: "Kristjan Bajuk", url: "https://makoreactor.io" }],
  creator: "Kristjan Bajuk",
  metadataBase: new URL("https://makoreactor.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://makoreactor.io",
    siteName: "Makoreactor",
    title: "Kristjan Bajuk — Web3 Developer & Consultant",
    description:
      "Senior Web3 Engineer from Ljubljana. Building production-grade smart contracts and dApp frontends for real-estate tokenization, DeFi, and creator platforms.",
    images: [
      {
        url: "/imgs/portrait-main.jpg",
        width: 1200,
        height: 630,
        alt: "Kristjan Bajuk — Web3 Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristjan Bajuk — Web3 Developer & Consultant",
    description:
      "Senior Web3 Engineer from Ljubljana. Building production-grade smart contracts and dApp frontends for real-estate tokenization, DeFi, and creator platforms.",
    creator: "@0xMellonCollie",
    images: ["/imgs/portrait-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
