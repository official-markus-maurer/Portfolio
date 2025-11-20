export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
        Helpdesk specialist with experience delivering end‑to‑end support and troubleshooting across hardware, software, and networks. Skilled in diagnosing issues, performing system installations, configuring devices, and running effective ticket workflows. Strong at communicating technical concepts to non‑technical users, collaborating with IT teams, and providing dependable remote support.
      </p>
      <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm leading-7 dark:border-white/10 dark:bg-black">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Focus</div>
            <div className="mt-2 text-sm">Identity, endpoint, networking, and service excellence with measurable outcomes.</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Strengths</div>
            <div className="mt-2 text-sm">Clear communication, reliable execution, documentation, and small automations that reduce repetitive work.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
