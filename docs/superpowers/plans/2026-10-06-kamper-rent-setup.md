# Kamper Rent Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the initial static frontend foundation for Kamper Rent.

**Architecture:** Use Vite with React and TypeScript for a static site. Keep the first page as a single app-level landing page with project documentation for GitHub and Cloudflare Pages.

**Tech Stack:** Vite, React, TypeScript, npm, Oxlint, Cloudflare Pages.

**Spec:** `docs/superpowers/specs/2026-10-06-kamper-rent-setup-design.md`

## Global Constraints

- The site is static and has no backend in this phase.
- Cloudflare Pages uses `npm run build` and publishes `dist`.
- The page must explain that Kamper Rent matches owners and travelers but does not provide rental services directly.

## Review Focus

- Cloudflare settings are complete enough for first deploy.
- Build output is generated without TypeScript or Vite errors.
- Page copy does not imply Kamper Rent is the direct rental provider.
- Visual layout works on desktop and mobile widths.
- Project assets used by the app live inside the repository.

---

### Task 1: Project Foundation

**Files:**
- Create: Vite React TypeScript scaffold
- Create: `README.md`
- Create: `docs/superpowers/specs/2026-10-06-kamper-rent-setup-design.md`
- Create: `docs/superpowers/plans/2026-10-06-kamper-rent-setup.md`

**Interfaces:**
- Produces: npm scripts `dev`, `build`, `lint`, `preview`

- [x] **Step 1: Scaffold Vite React TypeScript**

Run: `npm create vite@latest . -- --template react-ts`

- [x] **Step 2: Install dependencies**

Run: `npm install`

- [x] **Step 3: Initialize Git**

Run: `git init`

### Task 2: Initial Landing Page

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/App.css`
- Modify: `src/index.css`
- Modify: `index.html`
- Create: `public/images/camper-hero.png`

**Interfaces:**
- Consumes: Vite static asset serving from `public`
- Produces: a static landing page for the marketplace concept

- [x] **Step 1: Add project-bound hero image**

Use `public/images/camper-hero.png`.

- [x] **Step 2: Replace starter app**

Create a Polish landing page with sections for travelers, owners, how it works, example offers, and next MVP step.

- [ ] **Step 3: Verify**

Run: `npm run build`

### Task 3: First Commit

**Files:**
- All project files

**Interfaces:**
- Produces: first local Git commit ready to push to GitHub

- [ ] **Step 1: Review status**

Run: `git status --short`

- [ ] **Step 2: Commit**

Run: `git add .` then `git commit -m "chore: set up kamper rent frontend"`
