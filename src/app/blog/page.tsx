import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on web development, security, and craft.",
};

export default function BlogPage() {
  redirect("/writer");
}
