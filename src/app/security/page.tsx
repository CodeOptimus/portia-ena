import { redirect } from "next/navigation";

/** Old URL; security home now lives at `/`. */
export default function SecurityIndexRedirect() {
  redirect("/");
}
