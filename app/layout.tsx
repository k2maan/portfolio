import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Script from "next/script";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

const display = Funnel_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const text = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

const description =
  "Forward Deployed Engineer at Bluecore, helping large retailers get our product live and keep it working. On my own time I build small products.";

export const metadata: Metadata = {
  // The live address, so link previews get full image URLs
  metadataBase: new URL("https://k2maan.vercel.app"),
  title: "Ketuman Vishwakarma",
  description,
  openGraph: { title: "Ketuman Vishwakarma", description, type: "website" },
  twitter: { card: "summary_large_image", creator: "@k2maandotdev" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d6d8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#cfd1f9" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The head script sets data-theme before React loads, so the attribute differs from the server's
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <body>
        {/* Apply a saved light/dark choice before the page hydrates, so it never flashes */}
        <Script id="theme" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`}
        </Script>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link href="/" className="site-home">
            k2maan
          </Link>
          <nav aria-label="Main">
            <Link href="/#projects">Projects</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#contact">Contact</Link>
            <ThemeToggle />
          </nav>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
