# openH2

Source for [openH2.org](https://openh2.org): open source knowledge and hardware for molecular hydrogen: health, safety, and electrolysis experimentation.

## Stack

SvelteKit 2 + Svelte 5 (runes), Tailwind CSS v4, `adapter-static` with full prerendering, Iconify icons, light/dark theming.

## Developing

```sh
bun install
bun run dev
```

## Building

```sh
bun run build
```

Outputs a fully static site to `build/`. Preview with `bun run preview`.

## Licensing

Website code is MIT licensed (see `LICENSE`). Written site content is CC BY-SA 4.0, and hardware designs are CERN-OHL-W v2; see [openh2.org/licensing](https://openh2.org/licensing) for details.
