import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Space_Mono } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "amberglow",
  description: "essentials only",
};

const dmsans = DM_Sans({
  subsets: ['latin'],
});

const spacemono = Space_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: "--spacemono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full`}
    >
      <body className={`${dmsans.className} ${spacemono.className} bg-(--primary-foreground) min-h-full flex flex-col max-w-9/10 mx-auto`}>{children}</body>
    </html>
  );
}
