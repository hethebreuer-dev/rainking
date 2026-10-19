import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Fonts are bundled locally so builds never depend on Google's font CDN.
const archivo = localFont({
  src: "./fonts/archivo.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rainkingiowa.com"),
  title: {
    default: "RainKing | Iowa's #1 Professional Sprinkler Specialists",
    template: "%s | RainKing Irrigation",
  },
  description:
    "Sprinkler installation, repair, spring start-up, winterization, backflow testing, and landscape & holiday lighting across Des Moines and Central Iowa since 1988.",
  openGraph: {
    siteName: "RainKing Irrigation",
    type: "website",
    images: ["/images/home-lawn.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
