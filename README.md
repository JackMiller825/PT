# PointTaken

Courtside chronicles for PointTaken / $PT. A single-page Vite + React site.

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

The production base path is `/PT/` for GitHub Pages at `https://jackmiller825.github.io/PT/`.

Project settings and empty social destinations live in `src/config.ts`. The six chapters live in `src/story.ts`. No contract address is published until one is added there.

Pushing to `main` runs `.github/workflows/pages.yml` and publishes the `dist` folder.
