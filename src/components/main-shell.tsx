"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGate = pathname === "/";

  return (
    <main className={cn("flex-1 flex flex-col", isGate ? "pt-0" : "pt-14")}>{children}</main>
  );
}
