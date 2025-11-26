import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getMessages } from "@/lib/i18n";
import { fetchRepos } from "@/lib/github";

export default async function Home({ params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  const repos = await fetchRepos();
  const langCounts = repos.reduce((acc: Record<string, number>, r: any) => {
    const l = r.language;
    if (!l) return acc;
    const k = String(l);
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});
  const topLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);
  const langs = Array.from(new Set(
    repos
      .map((r: any) => r.language)
      .filter((l: any) => !!l && String(l).toLowerCase() !== "stylus")
  )).sort();
  const isEn = p.locale === "en";
  const webExtras = isEn
    ? ["HTML, CSS and JavaScript", "TypeScript", "PHP", "Laravel", "Next.js", "Vue.js", "Tailwind CSS"]
    : ["HTML, CSS und JavaScript", "TypeScript", "PHP", "Laravel", "Next.js", "Vue.js", "Tailwind CSS"];
  const langExtras = ["C", "C++", "Zig", "Rust", "Java", "LUA/JSON/XML"];
  const toolExtras = ["SQL", "Docker"];
  const webBullets = Array.from(new Set([...webExtras]));
  const langBullets = Array.from(new Set([...langExtras]));
  const toolBullets = Array.from(new Set([...toolExtras]));
  return (
    <div className="space-y-8 sm:space-y-10">
      <Hero
        title={m.title}
        subtitle={m.subtitle}
        viewProjects={m.viewProjects}
        viewSkills={m.viewSkills}
        projectsHref={`/${p.locale}/projects`}
        skillsHref={`/${p.locale}/#skills`}
      />
      <Skills
        title={m.skillsTitle}
        groups={[
          { title: isEn ? "Tech Stack" : "Technologie‑Stack", bullets: [] },
          ...m.skillGroups,
        ]}
        stack={{ languages: langBullets, web: webBullets, tools: toolBullets, topLangs, primaryWeb: ["Next.js", "Laravel", "Tailwind CSS"] }}
      />
      <Card className="p-6 sm:p-8">
        <h2 className="text-xl font-bold">{m.contactTitle}</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{m.contactText}</p>
        <div className="mt-4 flex gap-4">
          <Button href="mailto:you@example.com" variant="primary">{m.emailMe}</Button>
          <Button href={`/${p.locale}/projects`} variant="outline">{m.browseProjects}</Button>
        </div>
      </Card>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  return { title: `${m.title} | Portfolio`, description: m.subtitle };
}
