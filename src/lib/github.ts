export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  owner: { avatar_url: string };
  updated_at: string;
  fork?: boolean;
};

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "octocat";

export async function fetchRepos(): Promise<Repo[]> {
  if (!username) return [];
  try {
    const res = await fetch("/api/github", { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = (await res.json()) as Repo[];
      if (data && data.length) return data;
    }
  } catch {}
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "next-portfolio" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=24`, { headers });
    if (!res.ok) return [];
    const data = (await res.json()) as Repo[];
    return (data || []).filter((r) => !r.fork);
  } catch {
    return [];
  }
}
