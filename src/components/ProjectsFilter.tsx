"use client";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Repo } from "@/lib/github";

export default function ProjectsFilter({ repos, allLabel = "All" }: { repos: Repo[]; allLabel?: string }) {
  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => { if (r.language) set.add(r.language); });
    return Array.from(set).sort();
  }, [repos]);
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = useMemo(() => {
    if (!selected) return repos;
    return repos.filter((r) => r.language === selected);
  }, [repos, selected]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelected(null)}
          className={`rounded-full border px-3 py-1 text-sm ${selected===null?"bg-black text-white border-black dark:bg-white dark:text-black":"border-border"}`}
        >
          {allLabel}
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelected(lang)}
            className={`rounded-full border px-3 py-1 text-sm ${selected===lang?"bg-black text-white border-black dark:bg-white dark:text-black":"border-border"}`}
          >
            {lang}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
