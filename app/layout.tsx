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
  title: "ENDOTEC | Equipamiento Médico y Servicio Técnico Especializado",
  description: "Líderes en venta, mantenimiento y soporte técnico para equipamiento médico de alta complejidad. Servicio técnico oficial y repuestos originales.",
  keywords: ["artroscopia", "urología", "gastroenterología", "cirugía general", "servicio técnico médico", "equipamiento médico argentina", "endotec", "mantenimiento hospitalario"],
  authors: [{ name: "Endotec" }],
  openGraph: {
    title: "ENDOTEC | Equipamiento Médico y Servicio Técnico Especializado",
    description: "Venta y mantenimiento de equipamiento médico de alta complejidad.",
    url: "https://endotec.com.ar", // Assuming domain
    siteName: "Endotec",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        {children}
      </body>
    </html>
  );
}
