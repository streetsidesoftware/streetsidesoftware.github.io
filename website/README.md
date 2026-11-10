# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```sh
pnpm i
```

### Local Development

```sh
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Type Check

```sh
pnpm typecheck
```

### Deployment

Pushing to `main` deploys the site to GitHub Pages through the `deploy-website.yml` workflow.
