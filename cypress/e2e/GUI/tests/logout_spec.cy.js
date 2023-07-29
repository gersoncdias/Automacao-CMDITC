const usuario_admin = Cypress.env('user_admin')
const senha_admin = Cypress.env('senha_admin')

describe('logout', () => {

  beforeEach(() => {

    cy.visit(Cypress.env('url'), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
        win.onerror = null
      }
    })
  })

  it('Logout sucesso', () => {
    cy.login(usuario_admin, senha_admin)
    cy.logout()
    cy.url().should('include', '/site/login');
  })
})