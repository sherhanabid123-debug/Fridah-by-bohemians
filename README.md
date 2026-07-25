# Fridah by Bohemians

Website for Fridah by Bohemians, a restaurant and event space, built with React and Vite.

## Features

- Sections for experience zones, signature dishes, dining packages, and events
- Menu preview with a full menu modal
- Gallery of the venue
- Reservation and ordering flow
- Location map
- Smooth scroll (Lenis) and GSAP animations throughout

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [GSAP](https://gsap.com/) + `@gsap/react` for animation
- [Lenis](https://lenis.darkroom.engineering/) for smooth scroll
- Lucide / React Icons

## Project structure

```
src/
  components/   All page sections and UI pieces (Hero, About, Menu, Gallery, Events, Reservation, etc.)
  data/         Static content (menuData.js)
  assets/       Images, brand logo
  hooks/        Custom hooks (useMagnetic)
public/         Static files (favicon)
```

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Linting

```bash
npm run lint
```
