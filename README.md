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

The production build generates a static website in `out/`, with trailing-slash routes. Vercel project `personal-website-portfolio` in team `lmartinresnicks-projects` uses the Next.js preset, Node.js 22, and `npm run build`. Building locally does not publish anything.

The public production URL is https://lukemartinresnick.com/. The Vercel hostname is https://personal-website-portfolio-sand.vercel.app/.

GitHub automatic deployments are connected to `lmartinresnick/personal-website-portfolio`, with production branch `main`. Pushing or merging to `main` builds and deploys the site to the production domains. Other branches receive preview deployments. The Vercel GitHub app is limited to this repository.

For a manual deployment when needed:

```sh
vercel deploy --prod --project personal-website-portfolio --scope lmartinresnicks-projects
```

`.vercelignore` excludes local design reference assets and legacy build output from CLI uploads. Keep those references untracked; this ignore file does not remove files from a Git-based build if they are later committed.

## Domain hosting and rollback

Vercel has both `lukemartinresnick.com` and `www.lukemartinresnick.com` attached. The latter redirects to the apex with HTTP 301. GoDaddy DNS was switched to Vercel on November 4, 2026 (Pacific time). Both domains passed Vercel verification; HTTPS, all four routes, and the 404 response were verified directly against Vercel. Google and Cloudflare public DNS resolved the new values during cutover.

Website records configured in GoDaddy:

| Type | Name | Previous Firebase value | Current Vercel value |
| --- | --- | --- | --- |
| A | @ | 199.36.158.100 | 216.198.79.1 |
| A | @ | — | 64.29.17.1 |
| CNAME | www | personal-portfolio-dcbca.web.app | cac9031df6bca420.vercel-dns-017.com |

GoDaddy nameservers and unrelated DNS records were preserved. Firebase Hosting project `personal-portfolio-dcbca` remains running during propagation for cached DNS and rollback. To roll back, restore the previous Firebase A and CNAME values above and remove the second apex A record. Retire Firebase Hosting only after propagation is complete.

```sh
vercel domains verify lukemartinresnick.com --scope lmartinresnicks-projects
vercel domains verify www.lukemartinresnick.com --scope lmartinresnicks-projects
```

Routes are `/`, `/about/`, `/projects/`, and `/contact/`. Shared layout and metadata live in `src/app/layout.tsx`; the existing page components are in `src/screens/`. Work history has typed records in `src/utils/AboutSectionDatasource.ts`.

The migration removes Create React App, React Router, and the old link-preview API dependency. Work links render immediately from local metadata, without an API credential. Placeholder preview image paths are not requested. The existing contact form is still presentation-only; no email-delivery service is configured.

Existing untracked reference templates and assets in `public/` were preserved. Files in `public/` are included in the static export, so review reference assets before a future deployment.
