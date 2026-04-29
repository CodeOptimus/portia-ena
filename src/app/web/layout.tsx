import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web developer",
  description:
    "Web development work—interfaces, projects, and writing—from someone now focused on application security.",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return children;
}
