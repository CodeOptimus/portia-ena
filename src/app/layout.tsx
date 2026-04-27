import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: "%s — Your Name",
    default: "Your Name — Frontend Developer",
  },
  description: "Frontend developer crafting clean, performant web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-white text-neutral-950 antialiased">
  <Nav />
  <main className="pt-14">
    {children}
  </main>
  <Footer />
</body>
    </html>
  );
}

