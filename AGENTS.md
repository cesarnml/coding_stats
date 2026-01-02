# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a clean slate with no tracked source files yet. As you add code, keep a simple, conventional layout so contributors can find things quickly. A typical structure could be:

- `src/` for application or library code
- `tests/` for automated tests
- `scripts/` for dev or automation scripts
- `docs/` for design notes and guides
- `assets/` for static files (images, fixtures, sample data)

If you choose a different layout, document it here and keep directories purposeful and small.

## Build, Test, and Development Commands

No build or test commands are configured yet. Once tooling is added, list the canonical commands and what they do. Examples to document (if applicable):

- `npm run dev` — start local development server
- `npm test` — run the full test suite
- `make build` — produce production artifacts

Keep these entries current and prefer a single, blessed command for each task.

## Coding Style & Naming Conventions

Style rules are not defined yet. When you pick a language or framework, specify:

- Indentation (e.g., 2 spaces vs 4 spaces)
- File naming (e.g., `snake_case.py`, `kebab-case.ts`)
- Formatting/linting tools (e.g., `prettier`, `eslint`, `black`)

Add a short note on any project-specific naming patterns for modules, classes, or tests.

## Testing Guidelines

Testing requirements are not defined yet. When tests are introduced, document:

- Frameworks used (e.g., `pytest`, `jest`, `go test`)
- Test file naming (e.g., `*_test.go`, `test_*.py`)
- Minimum coverage expectations, if any

Include the exact command contributors should run locally.

## Commit & Pull Request Guidelines

There is no Git history yet, so no established commit convention. Until one emerges, use clear, imperative messages (e.g., "Add data import pipeline"). If you adopt a standard like Conventional Commits, note it here.

PRs should include:

- A short description of the change and its motivation
- Linked issues or tickets (if applicable)
- Screenshots or logs for UI/behavior changes

## Agent-Specific Instructions

This repository uses `AGENTS.md` as the contributor guide. Keep it concise (200–400 words), update it when tooling or structure changes, and avoid speculative instructions.
