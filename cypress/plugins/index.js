/// <reference types="cypress" />

const fs = require('fs-extra')
const path = require('path')
const pdf = require('pdf-parse');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)

  return fs.readJSON(pathToConfigFile)
}

const repoRoot = path.join(__dirname, '..', '..') // assumes pdf at project root

const parsePdf = async (pdfName) => {
  const pdfPathname = path.join(repoRoot, pdfName)
  let dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer) // use async/await since pdf returns a promise 
}

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  const file = config.env.configFile || 'hml'

  on('task', {
    getPdfContent(pdfName) {
      return String(parsePdf(pdfName))
    }
  })

  on('before:browser:launch', (browser = {}, launchOptions) => {
    launchOptions.args.push('--use-fake-device-for-media-stream')
    launchOptions.args.push('--use-fake-ui-for-media-stream')

    return launchOptions
  });

  return getConfigurationByFile(file)

};