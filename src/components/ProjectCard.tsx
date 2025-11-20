import Image from "next/image";
import type { Repo } from "@/lib/github";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-border">
          <Image src={repo.owner.avatar_url} alt="avatar" width={40} height={40} placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPScjZGRkZGQnIC8+PC9zdmc+" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{repo.name}</span>
          <Badge>{repo.language || "Unknown"}</Badge>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
        {repo.description || "No description"}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-zinc-600 dark:text-zinc-300">
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        <span>
          Updated {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(repo.updated_at))}
        </span>
      </div>
      <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 transition group-hover:opacity-100 dark:via-white/10" />
    </a>
  );
}
