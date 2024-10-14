const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  videos: false,
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // reporter: 'cypress-mochawesome-reporter', // Specify the reporter here
    //   reporterOptions: {
    //     reportDir: "results",
    //     reportFilename: "report",
    //     charts: true,
    //     overwrite: false,
    //     html: true,
    //     json: true
    // }
    reporter: 'cypress-junit', // Specify the reporter here
    reporterOptions: {
      mochaFile: 'cypress/results/junit-[hash].xml', // Path for JUnit report
      toConsole: true, // Optional: log output to console
    }
    ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
