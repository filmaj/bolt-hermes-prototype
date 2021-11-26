# Setup

1. Create a `.env` file with required env vars for your app:
  - `SLACK_SIGNING_SECRET`
  - `SLACK_BOT_TOKEN`
  - `SLACK_APP_TOKEN` (if using socket mode)
2. Make sure you use the `cli-poc` branch of bolt-js, and from within that repo:
  - Make sure you `npm install` and `npm run build`
  - Run `npm link`
3. Back in this directory, run `npm install` then `npm link @slack/bolt`
4. Run `source .env` to pull in your app-specific env vars

# Play

At this point you should be able to run `hermes` commands while inside the repo.
