import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./assets/components/NavBar";

const font = Noto_Sans({ subsets: ["latin"], weight: ['300', '400', '500']});

export const metadata: Metadata = {
  title: "Valencia Gynecology Associates"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body style={{display: 'flex', flexDirection: 'column'}} className={font.className}>{children}</body>
    </html>
  );
}
