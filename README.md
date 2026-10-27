# louis-earl.github.io

Source for [louis-earl.github.io](https://louis-earl.github.io), the portfolio of Louis Earl, a front-end engineer and UI/UX designer in Melbourne.

Built with Angular 21: standalone components, the built-in control flow, signals and lazy-loaded case study routes. The visual language is a "modern blueprint": white paper with a faint drafting grid, blueprint-blue panels, and line drawings standing in for screenshots that can't be shown publicly.

## Development

```bash
npm ci
npm start          # dev server on http://localhost:4200
npm run build      # production build in dist/portfolio-neon/browser
npm test           # unit tests (Karma + Jasmine)
```

To run the tests headless (for example in CI or a container), use `npx ng test --watch=false --browsers=ChromeHeadlessCI`.

## Structure

- `src/app/pages/homepage` – the homepage: hero, highlights, selected work, about and contact.
- `src/app/components/layer-stack` – the interactive exploded "design / front end / back end" stack in the hero.
- `src/app/components/blueprint-sketch` – line-drawn screens used on the case study cards.
- `src/app/constants/featured-work.const.ts` – content for the featured case studies.
- `src/app/pages/projects` – the individual case study pages.
- `src/styles` – design tokens (colours, type) and shared layout styles, including the blueprint grid backgrounds.

## Deployment

Pushing a `release/**` branch runs the GitHub Actions workflow, which builds the app and publishes it to the `gh-pages` branch.
