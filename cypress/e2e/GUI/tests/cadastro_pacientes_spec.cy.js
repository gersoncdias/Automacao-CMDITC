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

  it('Cadastro de Pacientes', () => {
    cy.lista_pacientes()
    cy.cadastro_pacientes()
    cy.url().should('include', '/paciente/laudo/index');
    cy.cadastro_sucesso()
  })

  it('Validar Campos Obrigatorios', () => {
    cy.campos_obrigatorios()
  })

  it('Fechar Cadastro', () => {
    cy.botao_fechar()
    cy.url().should('include', '/paciente/laudo/');
  })

  it('Cadastro de Paciente existente', () => {
    cy.paciente_existente()
  })

})