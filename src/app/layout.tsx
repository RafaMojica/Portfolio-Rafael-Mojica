import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | Rafael Mojica",
  description: "Portafolio Rafael Mojica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background tracking-wide">{children}</body>
    </html>
  );
}
