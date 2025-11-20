import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Resume</h1>
      <p className="text-zinc-600 dark:text-zinc-400">Web version of the CV. Contact details are omitted.</p>
      <div className="flex gap-4">
        <a href="/resume.pdf" className="rounded-full bg-black px-5 py-2 text-white transition hover:opacity-90 dark:bg-white dark:text-black">Download PDF</a>
        <Link href="/contact" className="rounded-full border border-black/10 px-5 py-2 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">Contact</Link>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm leading-7 dark:border-white/10 dark:bg-black">
        <div className="font-semibold">Profile Summary</div>
        <div>
          Helpdesk specialist delivering comprehensive support and troubleshooting across hardware, software, and networks. Experienced in system installations, device configuration, ticket workflows, and remote support. Strong ability to convey technical concepts to non‑technical users and collaborate with IT teams to improve operational outcomes.
        </div>
        <div className="mt-4 font-semibold">Technical Skills</div>
        <ul className="list-disc pl-5">
          <li>Operating systems: Windows 11/10/7/Vista/XP, Windows Server 2008–2022, macOS, basic Linux, Azure</li>
          <li>Software: ServiceNow, 8x8, Duo, AirWatch, Intune, SharePoint, OneDrive, Microsoft 365, Outlook, Adobe, Cisco AnyConnect, Zoom, Microsoft Teams, LogMeIn, GoToAssist, pfSense, Wireshark, FortiGate, Nessus, GFI FaxMaker</li>
          <li>Helpdesk: Remote desktop support, network printer setup, AD user/group lifecycle, GPO management, MDM, ticketing, Duo security, BitLocker, Exchange, Microsoft 365 Admin Center, TCP/IP, DNS, DHCP, VPN</li>
        </ul>
        <div className="mt-4 font-semibold">Professional Experience</div>
        <div className="mt-2">Process Associate / Helpdesk Agent / Online Marketing • Apr 2021 – Present</div>
        <ul className="list-disc pl-5">
          <li>Provided remote support for end users; diagnosed hardware/software/network issues</li>
          <li>Performed OS and software deployment/refresh and device configuration</li>
          <li>Managed AD accounts and group policies; enforced encryption and VPN access</li>
          <li>Operated ServiceNow ticketing with clear SLAs; escalated effectively</li>
          <li>Maintained MDM (Intune/AirWatch) compliance and device profiles</li>
        </ul>
        <div className="mt-4 font-semibold">Education</div>
        <ul className="list-disc pl-5">
          <li>Vocational training: Information Technology Assistant • 2019–2020</li>
          <li>Apprenticeship: Mason journeyman • 08/2023–07/2025</li>
        </ul>
      </div>
    </div>
  );
}
