import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#0B5ED7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Endotec | Equipamiento Médico y Servicio Técnico Especializado",
  description: "Líderes en venta y servicio técnico de equipamiento médico de mediana y alta complejidad. Especialistas en endoscopia, artroscopia y cirugía general.",
  keywords: ["endotec", "endotec salud", "equipamiento médico", "servicio técnico médico", "artroscopia", "urología", "gastroenterología"],
  authors: [{ name: "Endotec" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Endotec | Equipamiento Médico y Servicio Técnico Especializado",
    description: "Venta y mantenimiento de equipamiento médico de alta complejidad.",
    url: "https://endotec.com.ar",
    siteName: "Endotec",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand-primary selection:text-white`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
