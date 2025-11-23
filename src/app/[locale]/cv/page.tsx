import Card from "@/components/ui/Card";

export default async function CvPage({ params }: any) {
  const p = await params;
  const isEn = p?.locale === "en";
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{isEn ? "CV" : "Lebenslauf"}</h1>

      <section className="space-y-6">
        <h2 className="text-xl font-bold">{isEn ? "Professional Experience" : "Berufserfahrung"}</h2>
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div className="font-semibold">Schultze Internet</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">{isEn ? "2021 – 2023" : "2021 – 2023"}</div>
          </div>
          <div className="text-sm">{isEn ? "Process Associate / Helpdesk Agent / Online Marketing" : "Process Associate / Helpdesk Agent / Online‑Marketing"}</div>
          <ul className="mt-3 list-disc pl-5 text-sm">
            <li>{isEn ? "Funnel building (landing pages, email marketing; e.g., KlickTipp)" : "Funnel‑Aufbau (Landingpages, E‑Mail‑Marketing; z. B. KlickTipp)"}</li>
            <li>{isEn ? "Payment processing via Digistore24" : "Zahlungsabwicklung über Digistore24"}</li>
            <li>{isEn ? "IT support: user onboarding, basic AD tasks, VPN setup" : "IT‑Support: Benutzer‑Onboarding, Basis‑AD‑Aufgaben, VPN‑Einrichtung"}</li>
            <li>{isEn ? "Ticket handling and clear communication" : "Ticketbearbeitung und klare Kommunikation"}</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold">{isEn ? "Education" : "Ausbildung"}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div className="font-semibold">{isEn ? "Apprenticeship: Mason Journeyman" : "Ausbildung als Maurer Geselle"}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">08/2023 – 07/2025</div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm">
              <li>{isEn ? "Masonry and concreting in practical work" : "Mauern und Betonieren im praktischen Einsatz"}</li>
              <li>{isEn ? "Site organization and safety" : "Baustellenorganisation und Arbeitssicherheit"}</li>
              <li>{isEn ? "Teamwork and precise execution to plans" : "Teamarbeit und präzise Ausführung nach Planvorgaben"}</li>
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div className="font-semibold">{isEn ? "Information Technology Assistant" : "Informationstechnischer Assistent"}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">2019 – 2020</div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm">
              <li>{isEn ? "Programming in C and Java" : "Programmierung in C und Java"}</li>
              <li>{isEn ? "Web development with HTML, CSS and JavaScript" : "Webentwicklung mit HTML, CSS und JavaScript"}</li>
              <li>{isEn ? "SQL databases and Docker" : "SQL‑Datenbanken und Docker"}</li>
              <li>{isEn ? "Networking basics and diagramming" : "Netzwerkgrundlagen und Netzwerkdiagramme"}</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
export async function generateMetadata({ params }: any) {
  const p = await params;
  const isEn = p?.locale === "en";
  return { title: `${isEn ? "CV" : "Lebenslauf"} | Portfolio`, description: isEn ? "Experience and education" : "Berufserfahrung und Ausbildung" };
}
