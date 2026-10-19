# RainKing Irrigation website

Marketing site for RainKing Irrigation (Des Moines & Central Iowa), built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| All text content: phone, hours, services, cities, reviews, blog posts | `src/data/site.ts` |
| Images and logo | `public/images/` |
| Pages | `src/app/` (one folder per page) |
| Shared pieces (header, footer, cards, quote form) | `src/components/` |
| Colors, animations, hover effects | `src/app/globals.css` |

- **Add a service, city or blog post:** add an entry to the matching list in `src/data/site.ts`. Its page, links, footer entry and sitemap entry are created automatically.
- **Animations:** hero content fades up on load; sections fade up as you scroll (`Reveal` component); cards lift and images zoom on hover. Visitors who have reduced motion turned on in their device settings get no animation.

## Quote form email

The quote forms post to `/api/quote`, which emails the request using [Resend](https://resend.com). Set these in Vercel → Project → Settings → Environment Variables:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com |
| `QUOTE_TO_EMAIL` | Where requests go, e.g. `service@rainkingiowa.com` |
| `QUOTE_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `RainKing Website <quotes@rainkingiowa.com>` |
| `NEXT_PUBLIC_SITE_URL` | The live site URL, used for the sitemap and link previews |

Until the first two are set, submitting the form shows a message asking the visitor to call.
