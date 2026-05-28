This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Email (Resend)

This project sends contact form submissions using [Resend](https://resend.com).

1. Create a Resend account and API key.
2. Verify a sending domain or use Resend test sender for local testing.
3. Add these variables to `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=Canada Budokai <no-reply@yourdomain.com>
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
CONTACT_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

Notes:

- `CONTACT_TO_EMAIL` is where you receive contact form submissions.
- `CONTACT_FROM_EMAIL` must be an address allowed by your Resend setup.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is the Cloudflare Turnstile site key used in the contact form.
- `TURNSTILE_SECRET_KEY` is the server-side secret used to verify Turnstile tokens.
- The contact API also applies a rate limit of 5 requests per 10 minutes per IP.
- `CONTACT_ALLOWED_ORIGINS` is optional and can be used to explicitly allow trusted origins for the contact endpoint.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
