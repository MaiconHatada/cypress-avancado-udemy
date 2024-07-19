const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: '/',
  },

  fixturesFolder: false,
  video: false,
});
