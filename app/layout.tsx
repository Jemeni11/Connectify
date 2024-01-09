import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  image: "https://connectify-jemeni.vercel.app/og.png",
  url: "https://connectify-jemeni.vercel.app",
  author: "Emmanuel Jemeni",
  name: "Connectify",
  template: "%s | Connectify",
  description: "The NextJS-powered PWA for effortless contact management.",
};

export const metadata: Metadata = {
  title: {
    default: meta.name,
    template: meta.template,
  },
  keywords: [meta.name, "Contacts", "Connectify"],
  creator: meta.author,
  publisher: meta.author,
  authors: [{ name: meta.author, url: "https://github.com/Jemeni11" }],
  metadataBase: new URL(meta.url),
  description: meta.description,
  openGraph: {
    title: {
      default: meta.name,
      template: meta.template,
    },
    url: meta.url,
    siteName: "vercel.app",
    type: "website",
    description: meta.description,
    images: meta.image,
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: meta.name,
      template: meta.template,
    },
    site: meta.url,
    description: meta.description,
    creator: "@Jemeni11_",
    images: [meta.image],
  },
  applicationName: meta.name,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: meta.name,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: meta.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#86352E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
