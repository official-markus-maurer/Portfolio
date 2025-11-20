import { fetchRepos } from "@/lib/github";
import ProjectsFilter from "@/components/ProjectsFilter";
import { getMessages } from "@/lib/i18n";

export const revalidate = 3600;

export default async function ProjectsPage({ params }: any) {
  const p = await params;
  const repos = await fetchRepos();
  const m = getMessages(p.locale);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{m.projectsTitle}</h1>
      {process.env.NEXT_PUBLIC_FEATURED_ORG_URL && (
        <a
          href={process.env.NEXT_PUBLIC_FEATURED_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-border bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 text-sm shadow-sm transition hover:shadow-md"
        >
          <span className="font-semibold">{process.env.NEXT_PUBLIC_FEATURED_ORG_NAME || "Featured"}</span>
          <span className="ml-2 text-zinc-600 dark:text-zinc-400">{process.env.NEXT_PUBLIC_FEATURED_ORG_URL}</span>
        </a>
      )}
      {!process.env.NEXT_PUBLIC_GITHUB_USERNAME && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
          Set `NEXT_PUBLIC_GITHUB_USERNAME` to show your repositories.
        </div>
      )}
      <ProjectsFilter repos={repos} allLabel={m.allLabel} />
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  return { title: `${m.projectsTitle} | Portfolio`, description: m.subtitle };
}
