export const revalidate = 3600;

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "RyuuSlayer";
  if (!username) return Response.json([], { status: 200 });
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=24`;
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "next-portfolio" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  let data: any[] = [];
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, { headers, signal: controller.signal });
    clearTimeout(id);
    data = res.ok ? await res.json() : [];
  } catch (e) {
    data = [];
  }
  const featured = (process.env.NEXT_PUBLIC_FEATURED_REPOS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const repos = (data || []).filter((r: any) => !r.fork);
  repos.sort((a: any, b: any) => {
    const af = featured.includes((a.name || "").toLowerCase()) ? 1 : 0;
    const bf = featured.includes((b.name || "").toLowerCase()) ? 1 : 0;
    if (af !== bf) return bf - af;
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  async function summarizeReadme(owner: string, name: string): Promise<string | null> {
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${name}/readme`, { headers });
      if (!res.ok) return null;
      const json = await res.json();
      const content = json?.content ? Buffer.from(json.content, "base64").toString("utf-8") : "";
      if (!content) return null;
      const cleaned = content
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/\r\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
        .replace(/\[[^\]]*\]\([^)]*\)/g, (m) => m.replace(/\[[^\]]*\]\([^)]*\)/g, ""))
        .replace(/^#+\s+/gm, "")
        .trim();
      const firstPara = cleaned.split(/\n\n+/)[0] || cleaned.split(/\n/)[0] || cleaned;
      const summary = firstPara.replace(/\s+/g, " ").slice(0, 280);
      return summary || null;
    } catch {
      return null;
    }
  }

  const toSummarize = repos.filter((r: any) => !r.description || (r.description || "").length < 20).slice(0, 8);
  for (const r of toSummarize) {
    const summary = await summarizeReadme(r.owner?.login || username, r.name);
    if (summary) r.description = summary;
  }
  return Response.json(repos, { status: 200 });
}
