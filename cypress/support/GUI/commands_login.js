const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()

const logoutPage = require('../page_elements/logout_page')
const logoutPg = new logoutPage()

Cypress.Commands.add('login', {
  timeout: 7000
}, (user, senha) => {

    cy.get(loginPg.txt_titulo)
      .should('exist')
      .should('be.visible')
      .should('contains.text', 'Faça seu login para começar')

    cy.get(loginPg.campo_usuario)
      .should('exist')
      .should('be.visible')
      .type(user)

    cy.get(loginPg.campo_senha)
      .should('exist')
      .should('be.visible')
      .type(senha)

    cy.get(loginPg.btn_login)
      .should('exist')
      .should('be.visible')
      .click()

    cy.wait(1000)
})

Cypress.Commands.add('Valida_msg_erro', (erro) => {

  cy.get(loginPg.msg_error)
    .should('exist')
    .should('be.visible')
    .should('contains.text', erro)

})

Cypress.Commands.add('Validar_user_msg_erro', (erro) => {

  cy.get(loginPg.user_msg_erro)
    .should('exist')
    .should('be.visible')
    .should('contains.text', erro)

})

Cypress.Commands.add('esqueciMinhaSenha', () => {

  cy.get(loginPg.link_esqueci_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Esqueci minha senha.')
    .click()

  cy.get(loginPg.txt_redefinir_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Redefinição de senha')

  cy.get(loginPg.modal_redefinir_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Enviaremos um link ao e-mail cadastrado.')

  cy.get(loginPg.btn_voltar_login)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Voltar para o login.')
    .click()
})

Cypress.Commands.add('solicitar_senha', () => {

  cy.get(loginPg.link_esqueci_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Esqueci minha senha.')
    .click()

  cy.get(loginPg.input_txt_reset_email)
    .should('exist')
    .should('be.visible')
    .type('email@teste.com')

  cy.get(loginPg.btn_login)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(loginPg.msg_error_email)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Não existe usuário com esse e-mail.')
})

Cypress.Commands.add('logout', () => {

  cy.get(logoutPg.dropdown_logout)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(logoutPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Admin')

  cy.get(logoutPg.btn_logout)
    .should('exist')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('preserveSession', () => {
  cy.getCookies().then((cookies) => {
    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value);
    });
  });
});