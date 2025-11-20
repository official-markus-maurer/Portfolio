"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function swapLocale(path: string, next: string) {
  const parts = path.split("/");
  if (parts[1] === "en" || parts[1] === "de") {
    parts[1] = next;
    return parts.join("/");
  }
  return `/${next}${path}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isDe = pathname.startsWith("/de");
  const isEn = pathname.startsWith("/en");
  const toDe = swapLocale(pathname, "de");
  const toEn = swapLocale(pathname, "en");
  return (
    <div className="flex items-center gap-2">
      <Link href={toEn} className={`rounded-full border border-border px-3 py-1 text-sm ${isEn ? "bg-black text-white" : ""}`}>EN</Link>
      <Link href={toDe} className={`rounded-full border border-border px-3 py-1 text-sm ${isDe ? "bg-black text-white" : ""}`}>DE</Link>
    </div>
  );
}
