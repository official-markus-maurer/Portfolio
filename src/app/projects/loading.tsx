export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-40 animate-pulse rounded-xl border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900"
        />
      ))}
    </div>
  );
}
