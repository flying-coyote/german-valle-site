# German Valle — Director of Photography

Portfolio site for German Valle. Cinematic, video-first, deployed on Cloudflare.

> Subproject under `second-brain/02-projects/cinematographer-portfolio/`. The
> outer folder holds source assets, contact notes, and any non-website
> deliverables; this `website/` folder is the deployable Astro app.

## Stack

- **Astro 5** + **Tailwind 4** (`@tailwindcss/vite`)
- **TypeScript** (strict)
- **`@astrojs/cloudflare`** — Workers adapter
- **Self-hosted variable fonts**: Fraunces (display serif) + Inter (UI sans) via `@fontsource-variable`
- **Vimeo embeds** for the showcase reel and per-project clips — no video re-uploading

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # type-check + production build to dist/
npm run preview      # build + wrangler dev (full Workers runtime)
npm run deploy       # build + wrangler deploy
```

## Project layout

```
src/
├── pages/
│   ├── index.astro          # full-bleed reel hero + featured grid
│   ├── work/
│   │   ├── index.astro      # all projects, grouped by category
│   │   └── [slug].astro     # per-project page (Vimeo embed + credits + stills)
│   ├── photography.astro    # stills lightbox (Session 3)
│   ├── about.astro          # bio + headshot
│   └── contact.astro        # representation + direct email
├── components/
│   ├── Header.astro         # fixed top bar; transparent over the reel hero
│   ├── Footer.astro         # representation block + external links
│   ├── ReelHero.astro       # ambient muted Vimeo loop + click-to-play modal
│   └── ProjectTile.astro    # grid tile with Vimeo poster fallback
├── layouts/
│   └── Layout.astro         # OG / Twitter / canonical, ClientRouter for view transitions
├── data/
│   └── projects.ts          # source of truth for the project list
├── styles/
│   └── global.css           # @theme tokens, dark cinematic palette
└── config.ts                # site name, role, agent block, external URLs
```

## Updating content

1. **Add a new project** — append an entry to `src/data/projects.ts`.
2. **Add stills to a project** — drop images under `public/work/<slug>/` and reference them in the project's `stills` array.
3. **Replace the showcase reel** — set `REEL_VIMEO_ID` in `src/config.ts`.
4. **Update bio / agent / IMDb** — edit `src/config.ts` and `src/pages/about.astro`.

## Outstanding work (next sessions)

- [ ] Get German's actual Vimeo profile URL and master reel ID; replace placeholder Vimeo IDs.
- [ ] Pull current `germanvalle.com` content (bio, project list, stills) and seed `src/data/projects.ts`.
- [ ] Build out the `/photography` lightbox.
- [ ] Real bio copy, full filmography, agent block.
- [ ] Per-project stills under `public/work/<slug>/`.
- [ ] OG image generation.
- [ ] Cloudflare deploy + custom domain.
- [ ] Lighthouse pass (target 95+ across all axes).

## Deployment

The Workers adapter outputs a `dist/` directory ready for `wrangler deploy`. The Cloudflare project name is `german-valle-site` (see `wrangler.jsonc`).
