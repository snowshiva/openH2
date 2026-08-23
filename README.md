# openH2

Source for [openH2.org](https://openh2.org): open source knowledge and hardware for molecular hydrogen: health, safety, and electrolysis experimentation.

## Stack

SvelteKit 2 + Svelte 5 (runes), Tailwind CSS v4, Iconify icons, light/dark theming. Deployed to Cloudflare Workers via `adapter-cloudflare`: every page is prerendered to static HTML and served from the assets binding, and the Worker handles the one server route (`/api/subscribe`).

## Developing

```sh
bun install
bun run dev
```

To exercise the Worker runtime and the subscribe endpoint locally:

```sh
bun run build
npx wrangler dev
```

## Building

```sh
bun run build
```

Outputs to `.svelte-kit/cloudflare` (worker plus prerendered assets).

## Mailing list

Signups go to [Brevo](https://www.brevo.com/) through `/api/subscribe`. The API key never reaches the browser; it lives as a Worker secret and is read server-side.

Configure once per environment:

```sh
# secret: never commit this
npx wrangler secret put BREVO_API_KEY
```

The list id is a plain var in `wrangler.jsonc` (`BREVO_LIST_ID`). Set it to the id of the Brevo list new subscribers should join; find it in Brevo under Contacts, Lists.

For local development, copy `.dev.vars.example` to `.dev.vars` and fill in the key. `.dev.vars` is gitignored.

The endpoint validates the address, adds the contact with `updateEnabled`, treats an existing contact as success, and uses a honeypot field to absorb bots. It has no rate limiting of its own; if abuse becomes an issue, add [Turnstile](https://developers.cloudflare.com/turnstile/) or a Cloudflare rate-limiting rule in front of it.

## Branches

Work happens on `dev`. Pushing to `dev` does not deploy.

`main` is the deploy branch: Cloudflare builds and deploys every push to it. Ship by merging:

```sh
git switch main
git merge dev
git push          # this is the deploy
git switch dev
```

## Deploying

Cloudflare builds from git and runs `bun run build`, then `npx wrangler deploy`. `wrangler.jsonc` is committed on purpose: without it, `wrangler deploy` runs an auto-config step that rewrites the build script and fails the deploy.

## Licensing

Website code is MIT licensed (see `LICENSE`). Written site content is CC BY-SA 4.0, and hardware designs are CERN-OHL-W v2; see [openh2.org/licensing](https://openh2.org/licensing) for details.
