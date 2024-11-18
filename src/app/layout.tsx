import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chanho.dev",
  description: "Dev.blog by Chanho Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
