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
  title: "Markus Maurer — Helpdesk Portfolio",
  description: "AD/M365/Intune, VPN, endpoint troubleshooting and PowerShell automation.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.maurer-internet.de"),
  openGraph: {
    title: "Markus Maurer — Helpdesk Portfolio",
    description: "AD/M365/Intune, VPN, endpoint troubleshooting and PowerShell automation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.maurer-internet.de",
    siteName: "Markus Maurer Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markus Maurer — Helpdesk Portfolio",
    description: "AD/M365/Intune, VPN, endpoint troubleshooting and PowerShell automation.",
    images: ["/twitter-image"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center justify-between">
            <span>© {new Date().getFullYear()} Portfolio</span>
            <div className="flex items-center gap-4">
              <a className="hover:opacity-80" href="https://github.com/RyuuSlayer" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="hover:opacity-80" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
