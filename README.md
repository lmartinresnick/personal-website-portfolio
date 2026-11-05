# Luke Martin-Resnick’s portfolio

Next.js App Router and TypeScript, preserving the existing portfolio content and styling. The separate design-exploration task will supply a future layout.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3010. Port 3000 is not used. `npm start` is an alias for the same local development preview.

## Checks and production output

```sh
npm run typecheck
npm run build
```

The production build generates a static website in `out/`. Firebase Hosting is configured to serve that directory, with trailing-slash routes. Deployment is a separate manual step; building does not publish anything.

Routes are `/`, `/about/`, `/projects/`, and `/contact/`. Shared layout and metadata live in `src/app/layout.tsx`; the existing page components are in `src/screens/`. Work history has typed records in `src/utils/AboutSectionDatasource.ts`.

The migration removes Create React App, React Router, and the old link-preview API dependency. Work links render immediately from local metadata, without an API credential. Placeholder preview image paths are not requested. The existing contact form is still presentation-only; no email-delivery service is configured.

Existing untracked reference templates and assets in `public/` were preserved. Files in `public/` are included in the static export, so review reference assets before a future deployment.
