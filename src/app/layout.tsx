import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { WORK } from "@/lib/work";
import { Shell } from "@/components/Shell";

const HOSTS = WORK.slice(0, 6).map((w) => new URL(w.live).host);

export const metadata: Metadata = {
  title: "MUNEEB©2026",
  description: "Muneeb Rehman: creative developer, web & graphic designer and AI visuals creator from Pakistan © 2026",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Pre-hydration theme resolver to avoid FOUC. Mirrors production light/dark/system.
// Dark only: set the class before first paint so the page never flashes light.
const themeScript = `document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {HOSTS.map((h) => (
          <link key={h} rel="preconnect" href={`https://${h}`} crossOrigin="anonymous" />
        ))}
      </head>
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
