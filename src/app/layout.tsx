import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "amberglow",
  description: "essentials only",
};

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
      <body className={`bg-(--primary-foreground) min-h-full flex flex-col max-w-9/10 mx-auto font-display`}>{children}</body>
    </html>
  );
}
