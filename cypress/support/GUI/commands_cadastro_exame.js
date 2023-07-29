const cadastro_pctPage = require('../page_elements/cadastro_pct_page')
const cadastro_pctPg = new cadastro_pctPage()
const listaPage = require('../page_elements/lista_page')
const listaPg = new listaPage()
const cadastro_examePage = require('../page_elements/cadastro_exame_page')
const cadastro_examePg = new cadastro_examePage()

Cypress.Commands.add('cadastro_exame', () => {

  cy.get(cadastro_examePg.search_nascimento)
    .should('exist')
    .should('be.visible')
    .type("14/05/1982{enter}")

  cy.get(cadastro_examePg.btn_exame_tc)
    .should('exist')
    .should('be.visible')
    .click({
      force: true
    })
})

Cypress.Commands.add('criando_exame', () => {

  cy.get(cadastro_examePg.painel_criando_exame)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "19547 - GERSON DA COSTA DIAS - 41 anos")

  cy.get(cadastro_examePg.seleciona_unidade)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('AMBULATÓRIO')
    .click()

  cy.get(cadastro_examePg.seleciona_regiao)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('TC - ABDOME E PELVE')
    .click()

  cy.get(cadastro_examePg.contraste)
    .should('exist')
    .should('be.visible')
    .select('NÃO')

  cy.get(cadastro_examePg.data_exame_realizado)
    .should('exist')
    .should('be.visible')
    .type("14/05/2023{enter}")

  cy.get(cadastro_examePg.indicacao_clinica)
    .should('exist')
    .should('be.visible')
    .type("Dor a compressão com piora a descompressão do quadrante inferior direito do abdome")

  cy.get(cadastro_examePg.salvar)
    .contains('Salvar')
    .click()

  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO SALVO COM SUCESSO!')

  cy.get(cadastro_examePg.exame_registrado)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'TC - ABDOME E PELVE')
    .should('contains.text', 'SEM LAUDO')
})

Cypress.Commands.add('criando_exame_com_contraste', () => {

  cy.get(cadastro_examePg.painel_criando_exame)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "19547 - GERSON DA COSTA DIAS - 41 anos")

  cy.get(cadastro_examePg.seleciona_unidade)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('AMBULATÓRIO')
    .click()

  cy.get(cadastro_examePg.seleciona_regiao)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('TC - ABDOME E PELVE')
    .click()

  cy.get(cadastro_examePg.contraste)
    .should('exist')
    .should('be.visible')
    .select('SIM')

  cy.get(cadastro_examePg.data_exame_realizado)
    .should('exist')
    .should('be.visible')
    .type("14/05/2023{enter}")

  cy.get(cadastro_examePg.indicacao_clinica)
    .should('exist')
    .should('be.visible')
    .type("Dor a compressão com piora a descompressão do quadrante inferior direito do abdome")

  cy.get(cadastro_examePg.salvar)
    .contains('Salvar')
    .click()

  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO SALVO COM SUCESSO!')

  cy.get(cadastro_examePg.exame_registrado)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'TC - ABDOME E PELVE')
    .should('contains.text', 'SEM LAUDO')
    .should('contains.text', 'SIM')
})

Cypress.Commands.add('criando_exame_com_pendencia', () => {

  cy.get(cadastro_examePg.painel_criando_exame)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "19547 - GERSON DA COSTA DIAS - 41 anos")

  cy.get(cadastro_examePg.seleciona_unidade)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('AMBULATÓRIO')
    .click()

  cy.get(cadastro_examePg.seleciona_regiao)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('TC - ABDOME E PELVE')
    .click()

  cy.get(cadastro_examePg.contraste)
    .should('exist')
    .should('be.visible')
    .select('NÃO')

  cy.get(cadastro_examePg.data_exame_realizado)
    .should('exist')
    .should('be.visible')
    .type("14/05/2023{enter}")

  cy.get(cadastro_examePg.indicacao_clinica)
    .should('exist')
    .should('be.visible')
    .type("Dor a compressão com piora a descompressão do quadrante inferior direito do abdome")

  cy.get(cadastro_examePg.input_pendencia)
    .should('exist')
    .should('be.visible')
    .type('Exame sem Imagem no Servidor')

  cy.get(cadastro_examePg.btn_pendente)
    .contains('Pendência')
    .click()

  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO SALVO COM SUCESSO!')

  cy.get(cadastro_examePg.exame_registrado)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'TC - ABDOME E PELVE')
    .should('contains.text', 'PENDENCIA')
})

Cypress.Commands.add('criando_exame_com_urgencia', () => {

  cy.get(cadastro_examePg.painel_criando_exame)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "19547 - GERSON DA COSTA DIAS - 41 anos")

  cy.get(cadastro_examePg.seleciona_unidade)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('AMBULATÓRIO')
    .click()

  cy.get(cadastro_examePg.seleciona_regiao)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_examePg.select_dropdown)
    .contains('TC - ABDOME E PELVE')
    .click()

  cy.get(cadastro_examePg.contraste)
    .should('exist')
    .should('be.visible')
    .select('NÃO')

  cy.get(cadastro_examePg.data_exame_realizado)
    .should('exist')
    .should('be.visible')
    .type("14/05/2023{enter}")

  cy.get(cadastro_examePg.indicacao_clinica)
    .should('exist')
    .should('be.visible')
    .type("Dor a compressão com piora a descompressão do quadrante inferior direito do abdome")

  cy.get(cadastro_examePg.btn_urgencia)
    .contains('Urgência')
    .click()

  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO SALVO COM SUCESSO!')

  cy.get(cadastro_examePg.exame_registrado)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'TC - ABDOME E PELVE')
    .should('contains.text', 'URGENTE')
})

Cypress.Commands.add('excluir_exame', () => {

  cy.get(cadastro_examePg.painel_criando_exame)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "19547 - GERSON DA COSTA DIAS - 41 anos")

  cy.get(cadastro_examePg.deleta_exame)
    .first()
    .should('have.attr', 'title', 'Deletar Laudo')
    .and('have.attr', 'data-pjax', '0')
    .find('i.glyphicon.glyphicon-trash')
    .click()

  cy.get(cadastro_examePg.confirma_deletar)
    .should('exist')
    .should('be.visible')
    .should('contain', 'Confirmação')

  cy.get(cadastro_examePg.btn_confirma_deletar)
    .should('exist')
    .should('be.visible')
    .contains('Ok')
    .click()

  cy.get(listaPg.msg_sucesso)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'REGISTRO DELETADO COM SUCESSO!')

})