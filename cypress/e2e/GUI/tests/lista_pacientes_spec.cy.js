const usuario_admin = Cypress.env('user_admin')
const senha_admin = Cypress.env('senha_admin')
const paciente = Cypress.env('paciente')

describe('listas de Pacientes', () => {

  beforeEach(() => {

    cy.visit(Cypress.env('url'), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
        win.onerror = null
      }
    })

    cy.login(usuario_admin, senha_admin)
  })

  it('pacientes na lista', () => {
    cy.lista_pacientes()
  })

  it('Buscar Paciente', () => {
    cy.buscar_pacientes(paciente)
    cy.lista_pacientes("GERSON DA COSTA DIAS")
  })

  it('Fechar Modal Buscar Paciente', () => {
    cy.fechar_buscar_pacientes()
    cy.url().should('include', '/paciente/laudo/index');
  })

  it('Enviar Modal Buscar Paciente sem Digitar no Campo', () => {
    cy.enviar_buscar_sem_pacientes()
  })

  it.skip('Deletar Paciente', () => {
    cy.delete_paciente()
  })

})