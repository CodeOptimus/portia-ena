import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s — Portia Mawuena Adaletey",
    default: "Portia Mawuena Adaletey — Cybersecurity portfolio",
  },
  description:
    "Cybersecurity portfolio—labs, writeups, and practical application security—by a developer who shipped web products first.",
  openGraph: {
    title: "Portia Mawuena Adaletey — Cybersecurity portfolio",
    description:
      "Cybersecurity portfolio—labs, writeups, and practical application security—by a developer who shipped web products first.",
    url: "https://yoursite.com",
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
      <body className="font-sans antialiased">
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
          <main className="pt-14">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}