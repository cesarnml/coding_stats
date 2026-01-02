# Repository Guidelines

## Project Structure & Module Organization

This is a SvelteKit app.

- `src/routes/` holds pages and route layouts (e.g., `src/routes/+page.svelte`).
- `src/lib/` contains shared modules and server utilities (see `src/lib/server/db/`).
- `src/app.html` and `src/app.d.ts` define app shell and types.
- `e2e/` contains Playwright end-to-end tests.
- `static/` is for static assets served as-is (e.g., `static/robots.txt`).

Keep new modules near the routes or libraries that use them, and prefer small, focused files.

## Build, Test, and Development Commands

Use the Bun scripts in `package.json` as the single source of truth.

- `bun run dev` — start the Vite dev server.
- `bun run build` — build the production bundle.
- `bun run preview` — serve the production build locally.
- `bun run lint` — run Prettier checks and ESLint.
- `bun run format` — format the codebase with Prettier.
- `bun run test` — run unit tests and Playwright E2E tests.
- `bun run test:unit` — run Vitest unit tests.
- `bun run test:e2e` — run Playwright tests.

Database tooling (Drizzle + Docker):

- `bun run db:start` — start Postgres via `compose.yaml`.
- `bun run db:push` — push schema changes to the database.
- `bun run db:generate` — generate Drizzle artifacts.
- `bun run db:migrate` — run migrations.
- `bun run db:studio` — open Drizzle Studio.

## Coding Style & Naming Conventions

Prettier is the formatting source of truth, with tabs for indentation and single quotes. ESLint is enabled for TypeScript/Svelte.

- Svelte components use `+page.svelte`, `+layout.svelte`, and `+server.ts` naming under `src/routes/`.
- Unit tests use `*.spec.ts` (examples: `src/routes/page.svelte.spec.ts`).
- E2E tests live in `e2e/` and use `*.test.ts`.

## Testing Guidelines

Unit tests run with Vitest; E2E tests run with Playwright. There is no explicit coverage threshold yet.

- Run `bun run test:unit` during development.
- Run `bun run test` before opening a PR to cover unit + E2E.

## Configuration & Environment

Local development expects a Postgres URL.

- Copy `.env.example` to `.env` and set `DATABASE_URL`.
- The default Docker setup uses `compose.yaml` and the credentials in `.env.example`.

## Commit & Pull Request Guidelines

There is no established commit convention yet. Use short, imperative messages (e.g., "Add coding stats summary page").

PRs should include:

- A concise description of changes and rationale.
- Linked issues (if applicable).
- Screenshots for UI changes or logs for behavior changes.

## Agent-Specific Instructions

This repository uses `AGENTS.md` as the contributor guide. Update it when structure or tooling changes.
