const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const os = require("node:os");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  videos: false,
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
    // Set up multiple reporters
    reporter: 'cypress-junit', // JUnit reporter
    reporterOptions: {
      mochaFile: 'cypress/results/test-[hash].xml', // Path for JUnit report
      toConsole: true, // Optional: log output to console
    },

    setupNodeEvents(on, config) {
      // Register Allure reporter
      allureCypress(on, config, {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      });

      // Return the updated config
      return config;
    },
  },
});