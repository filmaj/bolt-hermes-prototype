# Setup

1. Make sure you use the `cli-poc` branch of bolt-js, and from within that repo:
  - Make sure you `npm install` and `npm run build`
  - Run `npm link`
2. Back in this directory, run `npm install` then `npm link @slack/bolt`
3. Make sure you have the `bolt-local-run-hackery` branch of slack-cli, and build that branch via `make build`.

# Play

At this point you should be able to run `hermes` (or `slack` - but from wherever your slack-cli binaries are built) commands while inside this repo.

Typically, for a first-time ever run with the `slack` CLI, you would:

1. `slack login` to a hermes-enabled workspace to give the CLI access to that workspace
2. `slack run` to install this app to the authorized workspace of your choice
3. Invite the app to a channel in the workspace, and send a message containing the word "hello". The app should respond back.

Typical debug loop if this is not a first-time run would be: `slack uninstall && slack run` to uninstall / delete the old app and reinstall the new, though right now I'm not sure if the uninstall part is needed. maybe not...
