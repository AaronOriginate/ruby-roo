import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AccessibilityWidget } from "@/components/ui/accessibility-widget";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Ruby Roo | Strategy, Marketing & Education",
  description:
    "Turnkey consultancy for education providers and business owners. Strategy, marketing, and education reform -- we build what others only advise on.",
  keywords: [
    "Ruby Roo",
    "consultancy",
    "education",
    "strategy",
    "marketing",
    "apprenticeships",
    "Skills England",
    "business strategy",
  ],
  authors: [{ name: "Ruby Roo" }],
  openGraph: {
    title: "Ruby Roo | Strategy, Marketing & Education",
    description:
      "We build what others only advise on. Strategy, marketing, and education consultancy.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Fontshare CDN for Clash Display + Satoshi */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,300i,400i,500i,700i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AccessibilityWidget />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
