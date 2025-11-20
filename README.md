# Helpdesk Portfolio (Next.js 16)

Bilingual portfolio that showcases GitHub projects and job‑ready helpdesk skills. Fast, accessible, visually polished, and Nginx‑ready for hosting.

## Features

- Next.js 16 App Router with locale routes (`/en`, `/de`)
- Projects page with language filters and blur image placeholders
- Internal API (`/api/github`) with hourly revalidation and timeout handling
- Skills grouped by Support, Identity, Endpoint, Networking, Automation
- Contact page with email form (mailto)
- Theme toggle (sun/moon) and Tailwind v4 tokens in `src/app/globals.css`
- Accessibility: skip‑to‑content, focus styles, readable dark mode
- SEO: Open Graph and Twitter images

## Tech Stack

- Next.js 16, React 19
- Tailwind CSS v4 (inline theme tokens)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
# optional: run on a specific port
npm run dev -- -p 3022
```

Open `http://localhost:3022/en` (or `/de`) in the browser.

## Configuration

Create `.env.local` with the following variables:

```
NEXT_PUBLIC_GITHUB_USERNAME=RyuuSlayer
# optional to increase API rate limits
GITHUB_TOKEN=ghp_yourtoken

# optional featured banner on Projects page
NEXT_PUBLIC_FEATURED_ORG_URL=https://github.com/Adventurecraft-Awakening
NEXT_PUBLIC_FEATURED_ORG_NAME=Adventurecraft Awakening

# optional: prioritized repo names (comma‑separated)
NEXT_PUBLIC_FEATURED_REPOS=AC-1.7.3,IA-Mirror,ReRedump,Blog
```

Notes:
- Locale enforcement is handled by `src/proxy.ts` (Next 16 replaces `middleware` with `proxy`).
- The GitHub API route times out gracefully and falls back to an empty list to avoid dev hangs.

## Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm start` – start production server

## Project Structure

```
src/
  app/
    [locale]/            # en/de routes
      page.tsx           # localized home
      projects/page.tsx  # projects list
      contact/page.tsx   # contact form
    api/github/route.ts  # internal API with ISR
    layout.tsx           # global layout
    globals.css          # theme tokens and styles
  components/
    ui/                  # Button, Badge, Card
    ProjectCard.tsx
    ProjectsFilter.tsx
    Hero.tsx
    LanguageSwitcher.tsx
    ThemeToggle.tsx
  lib/i18n.ts            # localized messages
  lib/github.ts          # fetch repos via internal API
src/proxy.ts             # locale redirect (Next 16)
```

## Customization

- Theme tokens: edit `src/app/globals.css` (`--background`, `--foreground`, `--surface`, `--border`).
- UI Kit: reuse `Button`, `Badge`, and `Card` for consistent styling.
- Skills: modify `skillGroups` in `src/lib/i18n.ts` for EN/DE content.

## Deploy (Nginx)

Example reverse proxy for a production server (`next start` on port 3000):

```
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## License

Proprietary. Update to your preferred license if desired.
