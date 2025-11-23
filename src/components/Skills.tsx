import Card from "@/components/ui/Card";

export default function Skills({ title, groups, stack }: { title: string; groups: { title: string; bullets: string[] }[]; stack?: { languages: string[]; web: string[]; tools: string[]; topLangs?: string[]; primaryWeb?: string[] } }) {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title} className={`p-6 ${g.title === "Tech Stack" || g.title === "Technologie‑Stack" ? "md:col-span-2" : ""}`}>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">{g.title}</span>
            </div>
            {g.title === "Tech Stack" || g.title === "Technologie‑Stack" ? (
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="text-sm font-semibold">{g.title === "Tech Stack" ? "Languages" : "Sprachen"}</div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {(stack?.languages || []).map((b) => (
                      <span
                        key={`lang-${b}`}
                        className={`relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-black dark:before:bg-white ${stack?.topLangs?.includes(b) ? "font-semibold" : ""}`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{g.title === "Tech Stack" ? "Web & Tools" : "Web & Werkzeuge"}</div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {[...(stack?.web || []), ...(stack?.tools || [])].map((b) => (
                      <span
                        key={`wt-${b}`}
                        className={`relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-black dark:before:bg-white ${stack?.primaryWeb?.includes(b) ? "font-semibold" : ""}`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : g.title === "Programming" || g.title === "Programmierung" || g.title === "Web Development" || g.title === "Webentwicklung" ? (
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:text-sm sm:grid-cols-3 lg:grid-cols-4">
                {g.bullets.map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-zinc-700 dark:text-zinc-300">
                    {b}
                  </span>
                ))}
              </div>
            ) : (
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {g.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
