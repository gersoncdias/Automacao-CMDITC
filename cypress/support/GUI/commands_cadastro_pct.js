import {
  faker
} from '@faker-js/faker';
const dataNascimento = faker.date.between('1950-01-01', '2003-12-31')
const dataNascimentoString = dataNascimento.toLocaleDateString('pt-BR')
const email = faker.internet.email()
const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`
const cadastro_pctPage = require('../page_elements/cadastro_pct_page')
const cadastro_pctPg = new cadastro_pctPage()
const listaPage = require('../page_elements/lista_page')
const listaPg = new listaPage()

// support/commands/commands.js
Cypress.Commands.add('clickIfVisible', {
  prevSubject: 'element'
}, ($element) => {
  if ($element.is(':visible')) {
    cy.wrap($element).click();
  } else {
    cy.log('O elemento não está visível. Ignorando o clique...');
  }
});

Cypress.Commands.add('cadastro_pacientes', () => {

  cy.get(cadastro_pctPg.btn_cadastro_pct)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_pctPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Criar Paciente")

  cy.get(cadastro_pctPg.txt_input)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Nome")

  cy.get(cadastro_pctPg.input_nome)
    .should('exist')
    .should('be.visible')
    .type(nomeCompleto)

  cy.get(cadastro_pctPg.txt_nasc)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Nascimento")

  cy.get(cadastro_pctPg.input_dt_nasci)
    .should('exist')
    .should('be.visible')
    .type(dataNascimentoString)

  cy.get(cadastro_pctPg.txt_input_sexo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Sexo")

  cy.get(cadastro_pctPg.input_sexo)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_pctPg.txt_email)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Email")

  cy.get(cadastro_pctPg.input_email)
    .should('exist')
    .should('be.visible')
    .type(email)

  cy.get(cadastro_pctPg.txt_telefone)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Telefone")

  cy.get(cadastro_pctPg.input_telefone)
    .should('exist')
    .should('be.visible')
    .type("9999999999")

  cy.get(cadastro_pctPg.txt_sus)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Cartão do SUS")

  cy.get(cadastro_pctPg.input_sus)
    .should('exist')
    .should('be.visible')
    .type("9999999999")

  cy.get(cadastro_pctPg.txt_cep)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "CEP")

  cy.get(cadastro_pctPg.input_cep)
    .should('exist')
    .should('be.visible')
    .type("24425005")

  cy.get(cadastro_pctPg.txt_endereco)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Endereço")

  cy.get(cadastro_pctPg.input_endereco)
    .should('exist')
    .should('be.visible')
    .type("Oliveira Botelho")

  //Somete se executar o teste sem conexão com internet
  // cy.get(cadastro_pctPg.msg_alert)
  //   .click()


  cy.get(cadastro_pctPg.txt_numero)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Número")

  cy.get(cadastro_pctPg.input_numero)
    .should('exist')
    .should('be.visible')
    .type("785")

  cy.get(cadastro_pctPg.txt_complemento)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Complemento")

  cy.get(cadastro_pctPg.input_complemento)
    .should('exist')
    .should('be.visible')
    .type("S/")

  cy.get(cadastro_pctPg.txt_estado)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Estado")

  cy.get(cadastro_pctPg.input_estado)
    .should('exist')
    .should('be.visible')
    .type("Rio de Janeiro")

  cy.get(cadastro_pctPg.txt_cidade)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Cidade")

  cy.get(cadastro_pctPg.input_cidade)
    .should('exist')
    .should('be.visible')
    .type("São Gonçalo")

  cy.get(cadastro_pctPg.txt_bairro)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Bairro")

  cy.get(cadastro_pctPg.input_bairro)
    .should('exist')
    .should('be.visible')
    .type("Neves")

  cy.get(cadastro_pctPg.btn_criar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Criar")
    .click()
})


Cypress.Commands.add('campos_obrigatorios', () => {

  cy.get(cadastro_pctPg.btn_cadastro_pct)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_pctPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Criar Paciente")

  cy.get(cadastro_pctPg.btn_criar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Criar")
    .click()

  cy.get(cadastro_pctPg.msg_erro)
    .should('exist')
    .should('be.visible')
    .should('contains.text', '"Nome" não pode ficar em branco.')
    .should('contains.text', '"Nascimento" não pode ficar em branco.')
    .should('contains.text', '"Sexo" não pode ficar em branco.')
    .should('contains.text', '"Telefone" não pode ficar em branco.')
    .should('contains.text', '"Endereço" não pode ficar em branco.')
    .should('contains.text', '"Estado" não pode ficar em branco.')
    .should('contains.text', '"Cidade" não pode ficar em branco.')
    .should('contains.text', '"Bairro" não pode ficar em branco.')

})


Cypress.Commands.add('botao_fechar', () => {

  cy.get(cadastro_pctPg.btn_cadastro_pct)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_pctPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Criar Paciente")

  cy.get(cadastro_pctPg.btn_fechar)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Fechar")
    .click()

})

Cypress.Commands.add('paciente_existente', () => {

  cy.get(cadastro_pctPg.btn_cadastro_pct)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(cadastro_pctPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Criar Paciente")

  cy.get(cadastro_pctPg.txt_input)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Nome")

  cy.get(cadastro_pctPg.input_nome)
    .should('exist')
    .should('be.visible')
    .type("GERSON DA COSTA DIAS")

  cy.get(cadastro_pctPg.txt_nasc)
    .should('exist')
    .should('be.visible')
    .should('contains.text', "Nascimento")

  cy.get(cadastro_pctPg.input_dt_nasci)
    .should('exist')
    .should('be.visible')
    .type("14051982")

  cy.get(listaPg.msg_erro)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'A combinação de "Nome" e "Nascimento" já foi utilizada.')

})