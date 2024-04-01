const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "28jmuq",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 70000,
  },
});
