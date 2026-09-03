# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Vercel

The project is configured to build for Vercel via the `vercel` Nitro preset.

1. Push this repository to GitHub.
2. Import the repository in the [Vercel dashboard](https://vercel.com/dashboard).
3. Keep the default framework selection as **Other** (or let Vercel read `vercel.json`).
4. Vercel will run `npm install` then `vite build` and deploy the `.output` directory.

> **Note:** the Lovable sandbox pins the Cloudflare preset during local preview builds, so `vite build` here still produces Cloudflare artifacts. On Vercel the `vercel` preset in `vite.config.ts` is honored and the output is generated for Vercel's platform.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
