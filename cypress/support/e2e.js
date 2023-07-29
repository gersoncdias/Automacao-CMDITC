//commands UI

import './GUI/commands_login'
import './GUI/commands_lista'
import './GUI/commands_cadastro_pct'
import './GUI/commands_cadastro_exame'

require('cypress-plugin-tab')
require('cy-verify-downloads').addCustomCommand()
require('cypress-iframe')

Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
    addContext({
      test
    }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
  } else {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} -- after each hook.png`
    addContext({
      test
    }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
  }
})