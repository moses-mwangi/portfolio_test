import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Portfolio - Your Name",
  description:
    "A portfolio showcasing web development projects with Next.js, React, and more.",
  keywords: "portfolio, web development, React, Next.js, developer",
  authors: [{ name: "Your Name", url: "https://your-portfolio.com" }],
  creator: "Your Name",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO and Social Sharing */}
        <meta
          name="description"
          content="A portfolio showcasing web development projects with Next.js, React, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="portfolio, web development, React, Next.js, developer"
        />

        {/* Open Graph Meta Tags (For Social Media Sharing) */}
        <meta property="og:title" content="Your Portfolio - Your Name" />
        <meta
          property="og:description"
          content="Explore my web development work and projects."
        />
        <meta
          property="og:image"
          content="https://your-portfolio.com/images/your-image.jpg"
        />
        <meta property="og:url" content="https://your-portfolio.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Portfolio - Your Name" />
        <meta
          name="twitter:description"
          content="Explore my web development work and projects."
        />
        <meta
          name="twitter:image"
          content="https://your-portfolio.com/images/your-image.jpg"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />

        {/* Manifest and Icons for PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Web Developer",
              url: "https://your-portfolio.com",
              image: "https://your-portfolio.com/images/your-image.jpg",
              description:
                "Full-stack web developer specializing in React and Next.js",
              sameAs: [
                "https://www.linkedin.com/in/yourprofile",
                "https://github.com/yourhandle",
                "https://twitter.com/yourhandle",
              ],
            }),
          }}
        />

        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID`}
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_TRACKING_ID');
          `}
        </script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
