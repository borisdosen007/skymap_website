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
  title: "Originalan poklon za rođendan, godišnjicu i vjenčanje | Skymap BiH",
  description:
    "Personalizovana karta zvjezdanog neba za poseban datum i lokaciju – originalan i jedinstven poklon za rođendan, godišnjicu, vjenčanje ili prvi susret.",
  keywords: [
    "poklon za rođendan",
    "poklon za godišnjicu",
    "poklon za vjenčanje",
    "originalan poklon",
    "personalizovani poklon",
    "jedinstven poklon",
    "zvjezdano nebo",
    "mapa zvijezda",
    "star map",
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
    title: "Originalan poklon za rođendan, godišnjicu i vjenčanje | Skymap BiH",
    description:
      "Personalizovana karta zvjezdanog neba za poseban datum i lokaciju – originalan poklon za rođendan, godišnjicu ili vjenčanje.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Originalan poklon za rođendan, godišnjicu i vjenčanje | Skymap BiH",
    description:
      "Personalizovana karta zvjezdanog neba za poseban datum i lokaciju – originalan poklon za rođendan, godišnjicu ili vjenčanje.",
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
