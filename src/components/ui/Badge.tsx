export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 inline-flex w-fit items-center rounded-full border border-border bg-surface px-2 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-300">
      {children}
    </span>
  );
}
