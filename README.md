# Burger and Fries

A personal burger and fries ranking blog. React, Vite, TypeScript, React Router. No backend.

Everything in `src/data/` and `src/config/` is **sample content**. Replace it with your own.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
```

## Add, edit, remove, feature

Entries live in `src/data/burgers.ts` and `src/data/fries.ts`. The two lists never mix.

- **Add:** copy an entry in the array, give it a new unique `id` and `slug`, set `score`, and write `review` (one string per paragraph).
- **Edit:** change fields in place. Never change an `id` once published; slugs can change (they form the URL).
- **Remove:** delete the entry. Delete `isSample: true` from entries you keep.
- **Feature on the home page:** set `featured: true` on one entry per category. With none set, the top-ranked entry is used.

## How ranking works (one rule)

Higher `score` ranks higher. Ties go to the lower optional `rank`, then to name. Tier comes from the score using the thresholds in `src/config/tiers.ts`. Set `tierOverride` on an entry only if you want to break that rule.

To change tier names, descriptions, thresholds or colors, edit `TIERS` in `src/config/tiers.ts`. Site name, tagline, author and social links are in `src/config/site.ts`. Colors and fonts are CSS variables at the top of `src/styles/global.css`.

## Images

Put files in `public/images/burgers/` or `public/images/fries/` and reference them with an absolute path:

```ts
image: '/images/burgers/corner-smash.jpg',
imageAlt: 'Double smash burger on a paper-lined tray',
```

Resize photos to about 1200px wide and export as WebP or compressed JPEG before adding them. Entries without an image show a placeholder.

## Deploy (Netlify, Cloudflare Pages or Vercel)

Build command `npm run build`, output directory `dist`.

Refreshing a nested URL such as `/burgers/some-slug` needs a single-page-app fallback:

- Netlify and Cloudflare Pages: `public/_redirects` is already included.
- Vercel: `vercel.json` is already included.

## SEO checklist

- Per-page titles and descriptions are set by `useTitle`. Edit the defaults in `index.html`.
- Add `og:image` and a `<link rel="canonical">` in `index.html` once you have a domain.
- Write real `imageAlt` text for every photo.
- Client-rendered pages are indexed by Google but not by every crawler. If review pages need to rank, add pre-rendering later.

## Structure

```
src/config/   tiers, categories, site info
src/data/     your entries, plus index.ts, the only data access point for the UI
src/lib/      ranking and tier logic, title hook
src/components/  Layout, TierList, RankedList, FoodCard, FoodImage, TierBadge
src/pages/    Home, CategoryPage (serves /burgers and /fries), ReviewPage, About, NotFound
```

To use a CMS or API later, rewrite the functions in `src/data/index.ts`; the UI does not import entries directly.
