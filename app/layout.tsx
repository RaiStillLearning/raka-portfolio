import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // IMPORTANT untuk performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO METADATA YANG LEBIH LENGKAP
export const metadata: Metadata = {
  metadataBase: new URL('https://rakhaarkana.com'), // Ganti dengan domain Anda
  title: {
    default: "Rakha Arkana - Junior Web Developer Portfolio",
    template: "%s | Rakha Arkana"
  },
  description: "Junior Web Developer specializing in MERN Stack (MongoDB, Express, React, Node.js). View my projects, skills, and get in touch for web development opportunities.",
  keywords: ["Rakha Arkana", "Web Developer", "MERN Stack", "React Developer", "Next.js", "Portfolio", "Junior Developer", "Full Stack Developer"],
  authors: [{ name: "Rakha Arkana" }],
  creator: "Rakha Arkana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakhaarkana.vercel.app",
    siteName: "Rakha Arkana Portfolio",
    title: "Rakha Arkana - Junior Web Developer",
    description: "Junior Web Developer specializing in MERN Stack. Building modern, responsive web applications.",
    images: [
      {
        url: "/og-image.png", // Buat gambar ini 1200x630px
        width: 1200,
        height: 630,
        alt: "Rakha Arkana Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakha Arkana - Junior Web Developer",
    description: "Junior Web Developer specializing in MERN Stack",
    images: ["/og-image.png"],
    creator: "@rakhaarkana" // Ganti dengan handle Twitter Anda
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Dari Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://rakhaarkana.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
