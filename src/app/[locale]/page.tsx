import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getMessages } from "@/lib/i18n";

export default async function Home({ params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  return (
    <div className="space-y-10">
      <Hero
        title={m.title}
        subtitle={m.subtitle}
        viewProjects={m.viewProjects}
        viewSkills={m.viewSkills}
        projectsHref={`/${p.locale}/projects`}
        skillsHref={`/${p.locale}/#skills`}
      />
      <Skills title={m.skillsTitle} groups={m.skillGroups} />
      <Card className="p-8">
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
