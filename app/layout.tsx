import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Archivo } from "next/font/google";
import Mark from "@/components/mark";
import Spotlight from "@/components/spotlight";
import Cursor from "@/components/cursor";
import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "Forward Deployed Engineer at Bluecore. I embed with customers’ engineering teams, get our product live in their stack and keep it running in production. Outside work, I build things of my own.";

export const metadata: Metadata = {
  // The live address, so link previews get full image URLs
  metadataBase: new URL("https://k2maan.vercel.app"),
  title: "Ketuman Vishwakarma",
  description,
  openGraph: { title: "Ketuman Vishwakarma", description, type: "website" },
  twitter: { card: "summary_large_image", creator: "@k2maandotdev" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The head script sets data-theme before React loads, so the attribute differs from the server's
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <body>
        {/* Apply a saved light/dark choice before the page hydrates, so it never flashes */}
        <Script id="theme" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`}
        </Script>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link href="/" className="site-home" aria-label="Ketuman, home">
            <Mark />
          </Link>
          <nav aria-label="Main">
            <Link href="/#work">Work</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
            <ThemeToggle />
          </nav>
        </header>
        <main id="main">{children}</main>
        <Spotlight />
        <Cursor />
        <footer className="site-footer">
          <a href="#main">Back to top</a>
        </footer>
      </body>
    </html>
  );
}
