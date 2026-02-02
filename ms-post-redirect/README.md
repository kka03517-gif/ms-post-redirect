# Microsoft POST Redirect to Site

This Vercel serverless function handles POST requests from Microsoft API apps
and redirects to your site page.

## How to deploy:

1. Replace the `targetUrl` in `api/redirect.js` with your actual site URL.
2. Run `npm install` (optional, no dependencies here).
3. Deploy with `vercel deploy` or `vercel --prod`.
