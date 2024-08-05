import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/proveedor_de_temas";

const monsetarre = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--fonts-sans",
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
      <body className={monsetarre.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
