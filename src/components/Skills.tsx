import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Skills({ title, groups }: { title: string; groups: { title: string; bullets: string[] }[] }) {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title} className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">{g.title}</span>
              <Badge>{g.bullets.length} items</Badge>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {g.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
