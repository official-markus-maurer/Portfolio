export type Messages = {
  title: string;
  subtitle: string;
  viewProjects: string;
  viewSkills: string;
  skillsTitle: string;
  contactTitle: string;
  contactText: string;
  emailMe: string;
  browseProjects: string;
  projectsTitle: string;
  skillGroups: { title: string; bullets: string[] }[];
  allLabel: string;
  contactNav: string;
  skipToContent: string;
};

export const messages: Record<string, Messages> = {
  en: {
    title: "Helpdesk Portfolio",
    subtitle: "Fast, clean, and professional. Explore projects and skills aligned with helpdesk roles.",
    viewProjects: "View Projects",
    viewSkills: "View Skills",
    skillsTitle: "Skills",
    contactTitle: "Contact",
    contactText: "Open to helpdesk roles and support contracts.",
    emailMe: "Email Me",
    browseProjects: "Browse Projects",
    projectsTitle: "Projects",
    allLabel: "All",
    contactNav: "Contact",
    skipToContent: "Skip to content",
    skillGroups: [
      {
        title: "Support",
        bullets: [
          "Windows 10/11 issue resolution and user onboarding",
          "Microsoft 365 account support and email troubleshooting",
          "Ticket handling with clear SLAs and CSAT focus",
          "Remote support using industry tools",
          "Clear communication to non‑technical users",
        ],
      },
      {
        title: "Identity",
        bullets: [
          "Active Directory account lifecycle and group management",
          "Password resets, MFA enrollment and access requests",
          "Azure AD and Intune integrations",
          "BitLocker and device encryption policies",
        ],
      },
      {
        title: "Endpoint",
        bullets: [
          "Imaging, device setup and driver issues",
          "Intune device compliance and profiles",
          "Printer, VPN and remote access support",
          "GPO management and policy troubleshooting",
        ],
      },
      {
        title: "Networking",
        bullets: [
          "DNS/DHCP, IP addressing and connectivity troubleshooting",
          "Wi‑Fi authentication and captive portal issues",
          "Firewall policies and VPN configuration",
          "Packet capture and analysis (Wireshark)",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "PowerShell scripts for AD/M365 provisioning",
          "Batch automation for repetitive tasks",
          "Documentation and runbooks for repeatability",
          "Ticketing integrations and workflow improvements",
        ],
      },
  ],
  },
  de: {
    title: "Helpdesk‑Portfolio",
    subtitle: "Schnell, sauber und professionell. Entdecken Sie Projekte und Fähigkeiten für Helpdesk‑Rollen.",
    viewProjects: "Projekte ansehen",
    viewSkills: "Fähigkeiten anzeigen",
    skillsTitle: "Fähigkeiten",
    contactTitle: "Kontakt",
    contactText: "Offen für Helpdesk‑Rollen und Supportverträge.",
    emailMe: "E‑Mail senden",
    browseProjects: "Projekte durchsuchen",
    projectsTitle: "Projekte",
    allLabel: "Alle",
    contactNav: "Kontakt",
    skipToContent: "Zum Inhalt springen",
    skillGroups: [
      {
        title: "Support",
        bullets: [
          "Windows 10/11‑Problemlösung und Benutzer‑Onboarding",
          "Microsoft 365‑Support und E‑Mail‑Fehlerbehebung",
          "Ticketbearbeitung mit klaren SLAs und CSAT‑Fokus",
          "Remote‑Support mit gängigen Tools",
          "Verständliche Kommunikation für Nicht‑Techniker",
        ],
      },
      {
        title: "Identität",
        bullets: [
          "Active Directory‑Kontolebenszyklus und Gruppenverwaltung",
          "Passwort‑Resets, MFA‑Registrierung und Zugriffsanfragen",
          "Azure AD‑ und Intune‑Integrationen",
          "BitLocker und Gerätekryptografie‑Richtlinien",
        ],
      },
      {
        title: "Endpoint",
        bullets: [
          "Imaging, Geräteeinrichtung und Treiberprobleme",
          "Intune‑Gerätecompliance und Profile",
          "Drucker, VPN und Remote‑Zugriff",
          "GPO‑Verwaltung und Richtlinien‑Troubleshooting",
        ],
      },
      {
        title: "Netzwerk",
        bullets: [
          "DNS/DHCP, IP‑Adressierung und Konnektivität",
          "WLAN‑Authentifizierung und Captive‑Portal‑Probleme",
          "Firewall‑Richtlinien und VPN‑Konfiguration",
          "Paketmitschnitt und Analyse (Wireshark)",
        ],
      },
      {
        title: "Automatisierung",
        bullets: [
          "PowerShell‑Skripte für AD/M365‑Provisionierung",
          "Batch‑Automatisierung für wiederkehrende Aufgaben",
          "Dokumentation und Runbooks für Wiederholbarkeit",
          "Ticketing‑Integrationen und Workflow‑Verbesserungen",
        ],
      },
  ],
  },
};

export function getMessages(locale: string): Messages {
  return messages[locale] || messages.en;
}
