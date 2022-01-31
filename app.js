const { App } = require('@slack/bolt');
const fs = require('fs');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  // signingSecret: process.env.SLACK_SIGNING_SECRET,
  // logLevel: 'debug',
  manifest: JSON.parse(fs.readFileSync('manifest.json', 'utf-8')),
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN // add this
});
// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log('hello: say()');
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Open View"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

module.exports = app;
