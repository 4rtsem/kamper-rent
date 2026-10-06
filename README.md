# Kamper Rent

Prosty frontend serwisu kojarzacego wlascicieli kamperow z osobami szukajacymi ofert wynajmu.

Serwis nie swiadczy uslug wynajmu. Na start pelni role marketplace'u i strony informacyjnej, ktora tlumaczy obie sciezki: wystawienie kampera oraz znalezienie oferty.

## Stack

- Vite
- React
- TypeScript
- Oxlint

## Lokalnie

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Wynik builda trafia do katalogu `dist`.

## Cloudflare Pages

Project URL:

- https://kamper-rent.pages.dev

Rekomendowane ustawienia projektu Cloudflare Pages:

- Repository: repo GitHub z tym projektem
- Production branch: `main`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Po podpieciu repo Cloudflare Pages powinno publikowac nowa wersje po kazdym pushu do `main`.
