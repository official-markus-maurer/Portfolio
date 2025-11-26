import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Hero({ title, subtitle, viewProjects, viewSkills, projectsHref = "/projects", skillsHref = "#skills" }: { title: string; subtitle: string; viewProjects: string; viewSkills: string; projectsHref?: string; skillsHref?: string }) {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="blob pointer-events-none -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
      <div className="blob pointer-events-none -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-emerald-500/20" />
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">{title}</span>
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400 sm:mt-3">{subtitle}</p>
      <div className="mt-4 flex flex-wrap gap-4 sm:mt-6">
        <Button href={projectsHref} variant="primary">{viewProjects}</Button>
        <Button href={skillsHref} variant="outline">{viewSkills}</Button>
      </div>
    </Card>
  );
}
