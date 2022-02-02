# Setup

1. Make sure you use the `cli-poc` branch of bolt-js, and from within that repo:
  - Make sure you `npm install` and `npm run build`
  - Run `npm link`
2. Back in this directory, run `npm install` then `npm link @slack/bolt`
3. Make sure you have the `bolt-local-run-hackery` branch of slack-cli, and build that branch via `make build`.

# Play

At this point you should be able to run `hermes` (or `slack` - but from wherever your slack-cli binaries are built) commands while inside this repo.
