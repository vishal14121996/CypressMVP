const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    "runMode": 1,
    "openMode": 0
  },
  projectId: '6jnmcg',
  reporter: 'cypress-mochawesome-reporter', //for HTML report
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);//html report
    },
  },
});
