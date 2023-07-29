const {
  defineConfig
} = require('cypress')

module.exports = defineConfig({
  execTimeout: 61000,
  experimentalStudio: true,
  userAgent: null,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  defaultCommandTimeout: 11000,
  pageLoadTimeout: 910000,
  viewportWidth: 1200,
  requestTimeout: 91000,
  viewportHeight: 860,
  responseTimeout: 610000,
  chromeWebSecurity: true,
  videoCompression: false,
  screenshotOnRunFailure: true,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'Relatório-Testes-CMDI',
    reportName: 'Relatório',
    reportTitle: 'Relatório de Testes--CMDI',
    reportPageTitle: 'CMDI',
    takePassedScreenshot: false,
    clearOldScreenshots: true,
    shortScrFileNames: false,
    screenshotOnRunFailure: false,
    inline: true,
    charts: true,
    autoOpen: true,
    jsonReport: true,
    multiReport: true,
    timestamp: 'dd-mm-yyyy_hh-mm-ss',
    capture: 'runner',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})