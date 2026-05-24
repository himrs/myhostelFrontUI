# AGENTS.md

## Cursor Cloud specific instructions

This repository contains two independent Next.js 16 apps (not a monorepo). Both use pnpm and have hardcoded mock data with no backend, database, or auth required.

### Services

| App | Directory | Dev command | Default port |
|---|---|---|---|
| Public Website (MyHostel.pk) | `hostel-website-design/` | `pnpm dev` | 3000 |
| Management Dashboard (HostelHub) | `hostel-management-dashboard/` | `pnpm dev --port 3001` | 3001 |

### Key caveats

- **No ESLint configured**: Both apps have `"lint": "eslint ."` in `package.json` but ESLint is not installed and no `.eslintrc` / `eslint.config.*` exists. Running `pnpm lint` will fail. This is a pre-existing project issue.
- **No environment variables needed**: All data is hardcoded mock data. The only env reference is `process.env.NODE_ENV` for optional Vercel Analytics.
- **No automated tests**: Neither app has a test framework or test suite configured.
- **sharp build warning**: pnpm will show a warning about ignored build scripts for `sharp@0.34.5`. This is cosmetic and does not affect functionality.
- **Standard commands**: `pnpm dev`, `pnpm build`, and `pnpm start` work as documented in each app's `package.json`.
