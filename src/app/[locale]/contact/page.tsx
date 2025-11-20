import { getMessages } from "@/lib/i18n";

export default async function ContactPage({ params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  const action = `mailto:you@example.com`;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{m.contactTitle}</h1>
      <form action={action} method="GET" className="space-y-4 rounded-2xl border border-border bg-surface p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm">Name</label>
            <input name="subject" placeholder="Name" className="w-full rounded-md border border-border bg-background px-3 py-2" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <input name="from" type="email" placeholder="you@example.com" className="w-full rounded-md border border-border bg-background px-3 py-2" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm">Message</label>
          <textarea name="body" rows={6} className="w-full rounded-md border border-border bg-background px-3 py-2" required />
        </div>
        <button type="submit" className="rounded-full bg-black px-5 py-2 text-white transition hover:opacity-90 dark:bg-white dark:text-black">{m.emailMe}</button>
      </form>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const p = await params;
  const m = getMessages(p.locale);
  return { title: `${m.contactTitle} | Portfolio`, description: m.contactText };
}
