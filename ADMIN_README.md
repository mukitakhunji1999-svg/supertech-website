# SUPERTECH Admin Panel

A built-in admin console at **`/admin`** for managing products and site settings without editing code.

## Quick start (local dev)

### 1. Create a `.env.local` in the project root

Copy `.env.example` to `.env.local` and fill in real values:

```bash
ADMIN_PASSWORD=your-strong-password-here
ADMIN_SESSION_SECRET=long-random-string-at-least-32-chars
```

Generate a secure secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Run the site

```bash
npm run dev
```

### 3. Open the admin

Visit [http://localhost:3000/admin](http://localhost:3000/admin) → you'll be redirected to `/admin/login`. Sign in with the password you set above.

## What you can manage today

| Section | What it controls | URL |
|---|---|---|
| **Dashboard** | Quick stats and shortcuts | `/admin` |
| **Products** | All 24+ items in the "Featured products" tabs on the homepage (Pumps, Valves, Pipes, Panels, Cables, Solar). Add, edit, delete, reorder, upload images. | `/admin/products` |
| **Site Settings** | Business name, tagline, email, phone numbers, WhatsApp, address | `/admin/settings` |

Changes appear **instantly** on the public site after you click Save (the relevant pages are auto-revalidated).

## Where data is stored

- **Products** → `data/products.json` (version-controlled in git)
- **Site settings** → `data/site-settings.json`
- **Uploaded product images** → `public/uploads/products/` (gitignored)

The data-access layer is fully abstracted in `src/lib/admin/db.ts`. Swapping to a real database later is a one-file change.

## Dev vs. production

| Environment | Save behaviour |
|---|---|
| **`npm run dev` (your laptop)** | Saves write directly to JSON files. Works end-to-end. |
| **Vercel (live site)** | The filesystem is **read-only** at runtime, so admin saves on the deployed site will fail. You'll see saves locally and need to either: (a) commit the updated `data/*.json` files to git and push, or (b) swap the storage to a hosted database (Supabase / Neon / Vercel Postgres). |

When you're ready for live admin editing, the upgrade path is:

1. Sign up for Supabase or Neon (free).
2. Replace the `readJson`/`writeJson` helpers in `src/lib/admin/db.ts` with their Postgres SDK calls.
3. Set `DATABASE_URL` in Vercel env vars.

That's the only file that changes — every page in `/admin/*` keeps working without edits.

## Security notes

- **Single admin password** stored as `ADMIN_PASSWORD` env var (never in code).
- **HMAC-SHA256 signed session cookie** (`supertech_admin`), `httpOnly`, `secure` in production, 12-hour expiry.
- `requireAdmin()` runs on every protected route as a server-side gate.
- The admin route is marked `noindex` so it won't appear in search engines.

## Tech stack

- Next.js App Router (server components + server actions)
- Zod validation
- `react-hook-form` (already in your project)
- `lucide-react` icons (already in your project)
- Node `crypto` for auth — **no external auth dependency**
- Filesystem I/O for storage in dev — **no database dependency**

## Files added

```
.env.example
ADMIN_README.md
data/
  products.json
  site-settings.json
public/uploads/products/.gitkeep
src/
  app/admin/
    layout.tsx                              (admin shell — sets noindex)
    login/page.tsx                          (login form, public)
    logout/route.ts                         (sign-out endpoint)
    (protected)/
      layout.tsx                            (auth gate + sidebar)
      page.tsx                              (dashboard)
      products/
        page.tsx                            (list + delete)
        new/page.tsx                        (create)
        [id]/edit/page.tsx                  (edit)
        actions.ts                          (server actions)
      settings/
        page.tsx                            (settings form)
        actions.ts                          (settings update action)
  components/admin/
    sidebar.tsx
    product-form.tsx
    settings-form.tsx
  lib/admin/
    auth.ts                                 (session, requireAdmin)
    db.ts                                   (JSON read/write)
```

## Files changed

- `src/components/home/featured-product-tabs.tsx` — now a server component that loads from JSON
- `src/components/home/featured-product-tabs-client.tsx` — extracted interactive tab UI
- `.gitignore` — ignore uploaded images directory
