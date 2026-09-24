# Landing page showcase

Three fictional, frontend-only concept sites for a freelance web-development portfolio. They are design demonstrations, not real businesses or client work.

## Apps

| App | Description | Development command |
| --- | --- | --- |
| `apps/saas` — Aster | A focused operations SaaS with an original CSS product dashboard. | `pnpm dev:saas` |
| `apps/cafe` — Serein | An editorial, coffee-house concept with original CSS illustration work. | `pnpm dev:cafe` |
| `apps/studio` — Offset | A typographic independent creative-practice concept. | `pnpm dev:studio` |

## Stack

pnpm workspaces, TypeScript, React, Next.js App Router, Tailwind CSS (with each app’s design authored in its local stylesheet). No external imagery, APIs, keys, or backend are required.

## Run locally

```bash
pnpm install
pnpm dev:saas    # http://localhost:3001
pnpm dev:cafe    # http://localhost:3002
pnpm dev:studio  # http://localhost:3003
pnpm build
pnpm typecheck
```

All demos render at `/`. For portfolio captures, use 1440 × 900 for desktop and 390 × 844 for mobile. The pages are composed to make their hero and opening content work well at those sizes.

Google Fonts are loaded from Google Fonts for typography only; all visual artwork is created locally with CSS.
