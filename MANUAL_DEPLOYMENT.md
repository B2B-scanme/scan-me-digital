# Manual deployment

This project can be deployed to a Cloudflare account that you control. The
generated Worker name is `scan-me-digital`.

## Deploy from your computer

1. Install Node.js 22 or newer.
2. Open PowerShell in this project folder.
3. Install dependencies:

   ```powershell
   npm install
   ```

4. Sign in to your Cloudflare account:

   ```powershell
   npx wrangler login
   ```

5. Deploy the production site:

   ```powershell
   npm run deploy:cloudflare
   ```

Wrangler prints the owner-controlled `workers.dev` URL when deployment
finishes. Re-run the last command whenever you want to publish local changes.

## Cloudflare Git integration

Use these settings under **Settings > Build** for the production branch:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Root directory: `/`

The build creates `dist/server/wrangler.json`; the deploy script explicitly
uses that generated Worker configuration. After changing dependencies, clear
Cloudflare's build cache before retrying so a stale native package cannot be
mixed with the JavaScript package from the current lockfile.

## Deploy manually from GitHub

The repository includes a workflow named **Deploy Scan Me to Cloudflare**. It
runs only when you press the **Run workflow** button.

Before the first run, add these GitHub repository secrets under
**Settings > Secrets and variables > Actions**:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

Create the token in Cloudflare with permission to edit Workers, scoped to your
own account. Never commit the token to the repository.

Then open **Actions > Deploy Scan Me to Cloudflare > Run workflow**.

## Custom domain

After the first deployment, open the `scan-me-digital` Worker in Cloudflare,
choose **Settings > Domains & Routes**, and add your domain or subdomain. DNS
and future deployments remain under your Cloudflare account.
