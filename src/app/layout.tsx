import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <body className="bg-background tracking-wide">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
