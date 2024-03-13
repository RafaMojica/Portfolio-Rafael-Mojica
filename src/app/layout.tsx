import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Background from "@/components/Background";

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
      <body>
        <Background />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
