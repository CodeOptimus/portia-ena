import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import MainShell from "@/components/main-shell";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const site = getSiteUrl();
const ogUrl = site ? `${site}/` : "https://yoursite.com";

export const metadata: Metadata = {
  ...(site ? { metadataBase: new URL(`${site}/`) } : {}),
  title: {
    template: "%s — Portia Mawuena Adaletey",
    default: "Portia Mawuena Adaletey — Web & cybersecurity",
  },
  description:
    "Web developer and cybersecurity professional—product interfaces, application security, labs, and writeups.",
  openGraph: {
    title: "Portia Mawuena Adaletey — Web & cybersecurity",
    description:
      "Web developer and cybersecurity professional—product interfaces, application security, labs, and writeups.",
    url: ogUrl,
    siteName: "Portia Mawuena Adaletey",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored ? stored : 'dark';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
            `.trim(),
          }}
        />
        <ThemeProvider>
          <Nav />
          <MainShell>{children}</MainShell>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}