const app = require('./app.js');

(async () => {
  // Start your app
  app.logger.setLevel('debug');
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
