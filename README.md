# Scan Me

Official landing page for Scan Me digital menu services.

## Requirements

- Node.js `>=22.13.0`

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run typecheck
npm test
npm run deploy -- --dry-run
```

## Owner-controlled deployment

See [MANUAL_DEPLOYMENT.md](./MANUAL_DEPLOYMENT.md) for local Cloudflare
deployment and the manual GitHub Actions workflow.

## Database

The database schema is intentionally empty. Add Drizzle tables in
`db/schema.ts` only when persistent application data is needed.
