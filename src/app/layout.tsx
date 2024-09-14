import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/proveedor_de_temas";
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const monsetarre = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: "--fonts-sans"
});

export const metadata: Metadata = {
  title: "ShareToGrow/eXpressive",
  description: "Red social para los artitas que quieren ser escuchados",
  authors: { name: "El lechero y el Eyaculador" },
  classification: "+13",
  icons: {
    icon: "./favicon.ico"
  }
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
          <main className='min-h-dvh bg-banner-fondo-claro dark:bg-banner-fondo conteiner bg-no-repeat bg-cover bg-center'>
            <NavBar />

            {children}

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
