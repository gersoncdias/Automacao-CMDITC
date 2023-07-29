const usuario_recep = Cypress.env('user_recep')
const senha_recep = Cypress.env('senha_recep')
const usuario_admin = Cypress.env('user_admin')
const senha_admin = Cypress.env('senha_admin')
const paciente = Cypress.env('paciente')

describe('Cadastro de Exames', () => {

  beforeEach(() => {

    cy.visit(Cypress.env('url'), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
        win.onerror = null
      }
    })
    cy.login(usuario_recep, senha_recep)
  })

  it('Cadastro de Exames', () => {
    cy.cadastro_exame()
    cy.criando_exame()
  })

  it('Cadastro de Exames com Pendencia', () => {
    cy.cadastro_exame()
    cy.criando_exame_com_pendencia()
  })

  it('Cadastro de Exames com Urgencia', () => {
    cy.cadastro_exame()
    cy.criando_exame_com_urgencia()
  })

  it('Cadastro de Exames com Contraste', () => {
    cy.cadastro_exame()
    cy.criando_exame_com_contraste()
  })

  it('Excluir Exames', () => {
    cy.visit(Cypress.env('url'), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
        win.onerror = null
      }
    })
    cy.login(usuario_admin, senha_admin)

    cy.cadastro_exame()
    cy.excluir_exame()
  })

})