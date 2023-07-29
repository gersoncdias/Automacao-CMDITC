/// <reference types="Cypress" />

const usuario_admin = Cypress.env('user_admin')
const senha_admin = Cypress.env('senha_admin')
const usuario_invalido = 'admin2'
const senha_invalida = 'invalido'

import "cypress-localstorage-commands"

describe('Login', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
    })

    it('Single Login - sucesso', () => {
        cy.login(usuario_admin, senha_admin)
    });

    it('Login - sem usuario e senha', () => {
        cy.login('{enter}', '{enter}')
        cy.Validar_user_msg_erro('"Login" não pode ficar em branco.')
        cy.Valida_msg_erro('"Senha" não pode ficar em branco.')
    });
    it('Login - usuario incorretos', () => {
        cy.login(usuario_invalido, senha_admin)
        cy.Valida_msg_erro('Incorrect username or password.')
    });

    it('Login - senha incorreta', () => {
        cy.login(usuario_admin, senha_invalida)
        cy.Valida_msg_erro('Incorrect username or password.')
    });

    it('Login - sem senha', () => {
        cy.login(usuario_admin, '{enter}')
        cy.Valida_msg_erro('"Senha" não pode ficar em branco.')
    });

    it('Login - sem usuario', () => {
        cy.login('{enter}', senha_admin)
        cy.Validar_user_msg_erro('"Login" não pode ficar em branco.')
    });

    it('Esqueci minha senha', () => {
        cy.esqueciMinhaSenha();
        cy.url().should('include', '/')
    });

    it('Solicitar senha com email inválido', () => {
        cy.solicitar_senha();
    });

});