import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skymap BiH – Personalizovano zvjezdano nebo | Savršen poklon",
  description:
    "Poklonite nezaboravno iskustvo – personalizovana karta zvjezdanog neba za poseban datum i lokaciju. Idealno za godišnjice, rođendane, vjenčanja i prve susrete.",
  keywords: [
    "zvjezdano nebo",
    "star map",
    "personalizovani poklon",
    "mapa zvijezda",
    "poklon za godišnjicu",
    "poklon za vjenčanje",
    "skymap BiH",
    "Bosna i Hercegovina",
  ],
  authors: [{ name: "Skymap BiH" }],
  creator: "Skymap BiH",
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: "https://skymapbih.com",
    siteName: "Skymap BiH",
    title: "Skymap BiH – Personalizovano zvjezdano nebo",
    description:
      "Poklonite nezaboravno iskustvo – personalizovana karta zvjezdanog neba za poseban datum i lokaciju.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skymap BiH – Personalizovano zvjezdano nebo",
    description:
      "Poklonite nezaboravno iskustvo – personalizovana karta zvjezdanog neba za poseban datum i lokaciju.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs" className={`${playfair.variable} ${dmSerif.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
