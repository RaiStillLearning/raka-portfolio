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
export const metadata = {
  metadataBase: new URL("https://rakhaarkana.my.id"),

  title: {
    default: "Rakha Arkana – Junior Web Developer Portfolio",
    template: "%s | Rakha Arkana",
  },

  description:
    "Rakha Arkana – Junior Web Developer specializing in MERN Stack and modern web application development. Explore my skills, projects, and portfolio.",

  keywords: [
    "Rakha Arkana",
    "Junior Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Portfolio",
    "Frontend Developer",
  ],

  openGraph: {
    type: "website",
    url: "https://rakhaarkana.my.id",
    title: "Rakha Arkana – Junior Web Developer",
    description:
      "Explore Rakha Arkana’s portfolio as a MERN Stack and modern web developer.",
    siteName: "Rakha Arkana Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rakha Arkana Portfolio OG Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rakha Arkana – Junior Web Developer",
    description: "Explore my projects, skills, and experience.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/", // otomatis → https://rakhaarkana.my.id
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://rakhaarkana.my.id" />

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rakha Arkana",
              url: "https://rakhaarkana.my.id",
              image: "https://rakhaarkana.my.id/og-image.png",
              jobTitle: "Junior Web Developer",
              sameAs: [
                "https://github.com/rakhaarkana",
                "https://linkedin.com/in/rakhaarkana",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
