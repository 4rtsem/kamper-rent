# Kamper Rent Setup Design

## Goal

Create a small Vite, React, and TypeScript project that can be pushed to GitHub and hosted on Cloudflare Pages.

## Scope

- Initialize a local Git repository.
- Scaffold a Vite React TypeScript frontend.
- Replace the default starter screen with a first landing page for a camper rental marketplace.
- Include a project-bound hero image asset.
- Document the Cloudflare Pages build settings.

## Product Direction

Kamper Rent is a two-sided marketplace. It helps camper owners list their vehicles and helps travelers find rental offers. The service does not provide the rental itself; it only helps both sides find each other and start contact.

## Technical Direction

The first version is a static frontend with no backend, auth, payments, booking flow, or database. Cloudflare Pages will build the project with `npm run build` and publish the generated `dist` directory.

## Success Criteria

- `npm run build` completes successfully.
- The page clearly explains the two marketplace sides.
- The repository contains enough documentation to connect GitHub to Cloudflare Pages without guessing build settings.
