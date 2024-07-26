import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monsetarre = Montserrat({ 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "ShareToGrow/eXpressive",
  description: "Red social para los artitas que quieren ser escuchados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={monsetarre.className }>{children}</body>
    </html>
  );
}
