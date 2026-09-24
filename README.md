# 🌐 negativeentropy.me

Personal website of Antony Kotsampaseris, built with **Next.js** and **Tailwind CSS**, with content managed in **Sanity** and hosted on **Vercel**.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Sanity](https://www.sanity.io/), with the Studio embedded at `/studio`
- **Hosting**: [Vercel](https://vercel.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/docs/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

The site runs at http://localhost:3000 and the Studio at http://localhost:3000/studio.

### Environment variables

Create a `.env` file in the project root:

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Sanity dataset, e.g. `production` |
| `SANITY_REVALIDATE_SECRET` | In production | Shared secret for the Sanity revalidation webhook |

The Sanity project ID and dataset are public by design, since the Studio runs in the browser. Never give a secret the `NEXT_PUBLIC_` prefix, because Next.js inlines those values into the client bundle.

---

## ✍️ Content

All content is edited in the Studio at `/studio`:

- **Posts** and **Post Categories** power `/blog`.
- **Now** is a single document that powers `/now` and the "Currently" block on the home page. Give a section a *Currently Label* to show it on the home page.
- **Photos** power `/photos`, newest first. Each has an image and an optional description and location.

Pages are cached and refreshed on demand. A Sanity webhook calls `/api/revalidate` whenever a post, category, photo, or the Now document is published, changed, or deleted, and that route refreshes only the affected pages. As a fallback, pages also refresh on a timer (at most every hour).

The webhook is configured in the Sanity dashboard under **API → Webhooks**, and uses the same secret as `SANITY_REVALIDATE_SECRET`.

---

## 📡 Feeds & SEO

- `/feed.xml`: RSS feed of blog posts
- `/sitemap.xml`: sitemap of pages and posts
- `/robots.txt`: allows everything except `/studio`
- Each blog post gets a generated Open Graph image for link previews.

---

## 🚢 Deployment

The site deploys to Vercel automatically on every push to `main`. Environment variables are managed in the Vercel project settings, and changes to them apply only to new deployments.
