import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For You 🤎",
  description: "A little world made just for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}