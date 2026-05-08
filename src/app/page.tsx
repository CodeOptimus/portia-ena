import type { Metadata } from "next";
import GateLanding from "@/components/gate-landing";

export const metadata: Metadata = {
  title: "Portia Mawuena Adaletey",
  description:
    "Web developer and cybersecurity professional—choose the web portfolio or the security labs and writeups.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <GateLanding />;
}
