const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()

const listaPage = require('../page_elements/lista_page')
const listaPg = new listaPage()



Cypress.Commands.add('lista_pacientes', () => {

  cy.get(listaPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Laudos")

  cy.get(listaPg.painel)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "SILAS RODRIGUES GONZAGA")

  cy.get(listaPg.tc)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "0/2 TC")
})

Cypress.Commands.add('buscar_pacientes', (paciente) => {

  cy.get(listaPg.buscar_pacientes)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(listaPg.modal_buscar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Busca Completa")

  cy.get(listaPg.input_buscar)
    .should('exist')
    .should('be.visible')
    .type("GERSON DA COSTA DIAS")
    .click()

  cy.get(listaPg.select_nome)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "GERSON DA COSTA DIAS")
    .click()

  cy.get(listaPg.btn_enviar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Enviar")
    .click()

})

Cypress.Commands.add('fechar_buscar_pacientes', (paciente) => {

  cy.get(listaPg.buscar_pacientes)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(listaPg.modal_buscar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Busca Completa")

  cy.get(listaPg.btn_fechar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Fechar")
    .click()

})

Cypress.Commands.add('enviar_buscar_sem_pacientes', (paciente) => {

  cy.get(listaPg.buscar_pacientes)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(listaPg.modal_buscar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Busca Completa")

  cy.get(listaPg.btn_enviar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Enviar")
    .click()

  cy.get(listaPg.msg_erro)
    .should('exist')
    .should('be.visible')
    .should('contains.text', '"Nome" não pode ficar em branco.')
})

Cypress.Commands.add('cadastro_sucesso', () => {

  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO CRIADO COM SUCESSO!')
})

Cypress.Commands.add('delete_paciente', () => {

  cy.get(listaPg.delete)
    .should('exist')
    .should('be.visible')
    .first()
    .click()

  cy.get(listaPg.checkox)
    .should('exist')
    .should('be.visible')
    .first()
    .click()

  cy.get(listaPg.btn_delete)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(listaPg.modal_confirma)
    .should('exist')
    .should('be.visible')

  cy.get(listaPg.confirma_detelar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Confirmação')
    .should('contains.text', 'Deseja realmente deletar o(s) registro(s) ?')
    .should('contains.text', 'REGISTRO CRIADO COM SUCESSO!')

  cy.get(listaPg.btn_modal_confirma_deletar)
    .should('exist')
    .should('be.visible')
    .click()


  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO DELETADO COM SUCESSO!')
})