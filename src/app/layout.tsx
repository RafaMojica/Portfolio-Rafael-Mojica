import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | Rafael Mojica",
  description:
    "Portafolio personal web donde conocerás más sobre mi trayectoria en el mundo del desarrollo web, aquí podrás ver mi experiencia laboral, proyectos realizados, tecnologías que manejo y mucho más.",
  metadataBase: new URL("https://portafolio-rafael-mojica.vercel.app/"),
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-dBg ${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
