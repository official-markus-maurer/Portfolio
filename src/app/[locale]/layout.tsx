import type { Metadata } from "next";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects and skills",
};

export default async function LocaleLayout({ children, params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  return (
    <div>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black">{m.skipToContent}</a>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={`/${p.locale}`} className="text-lg font-semibold">Portfolio</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href={`/${p.locale}/projects`} className="hover:opacity-80">{m.projectsTitle}</Link>
            <Link href={`/${p.locale}/#skills`} className="hover:opacity-80">{m.skillsTitle}</Link>
            <Link href={`/${p.locale}/contact`} className="hover:opacity-80">{m.contactNav}</Link>
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main id="content" className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
