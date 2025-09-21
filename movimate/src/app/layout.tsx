import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import ErrorBoundary from "@/components/ErrorBoundary";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moviemate - Discover Your Next Favorite Movie",
  description:
    "Explore trending movies, get personalized recommendations, and discover your next favorite film with Moviemate. Search, browse, and save movies you love.",
  keywords:
    "movies, film, cinema, trending, recommendations, movie database, TMDB",
  authors: [{ name: "Moviemate Team" }],
  creator: "Moviemate",
  publisher: "Moviemate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://moviemate.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moviemate - Discover Your Next Favorite Movie",
    description:
      "Explore trending movies, get personalized recommendations, and discover your next favorite film with Moviemate.",
    url: "https://moviemate.app",
    siteName: "Moviemate",
    images: [
      {
        url: "/Images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Moviemate - Movie Discovery Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moviemate - Discover Your Next Favorite Movie",
    description:
      "Explore trending movies, get personalized recommendations, and discover your next favorite film with Moviemate.",
    images: ["/Images/logo.jpeg"],
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
  icons: {
    icon: "/Images/logo.jpeg",
    shortcut: "/Images/logo.jpeg",
    apple: "/Images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme appearance="dark" accentColor="violet" radius="large">
          <FavoritesProvider>
            <PageLoader />
            <ErrorBoundary>
              <Navbar />
            </ErrorBoundary>
            <ErrorBoundary>{children}</ErrorBoundary>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </FavoritesProvider>
        </Theme>
      </body>
    </html>
  );
}
