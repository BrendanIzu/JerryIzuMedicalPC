import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Jerry Izu Medical PC",
  description:
    "Obstetrics & Gynecology in Santa Clarita. Dr. Jerry K. Izu provides prenatal, postnatal, gynecologic and menopause care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
