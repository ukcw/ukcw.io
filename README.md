# next-template

A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

## Usage

```bash
npx create-next-app -e https://github.com/shadcn/next-template
```

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## Cloudflare CI/CD next-on-pages
To run the application for local development, two terminals will need to be opened.
1. `npx @cloudflare/next-on-pages --watch`
2. `npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat`

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
