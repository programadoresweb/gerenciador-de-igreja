import type { Metadata } from "next";
import { BBH_Bogle, Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "variable",
});

const bbhBogle = BBH_Bogle({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bbh-bogle",
  adjustFontFallback: false,
});


export const metadata: Metadata = {
  title: "ASSEMBLEIA DE DEUS",
  description: "cultos toda terca, quinta, sabado e domingo",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${bbhBogle.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
