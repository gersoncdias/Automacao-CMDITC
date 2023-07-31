# CMDI TCFront-End

Este é o projeto do (novo) frontend para o CMDI TC.


## Estrutura de diretórios

- [cypress](cypress) - Projeto de automação;

## Projeto de automação

### Instalação e Pré-Requisitos

#### Pré-requisitos:
- NodeJS.
- Editor de Texto (Vscode, Atom, Notepad++, Sublime, etc...)
- NPM
- git
- Instalar as dependencias do projeto: npm i

### Execução dos testes

O projeto de testes do CMDI TC tem a finalidade de validar as principais funções e telas do sistema, afim de garantir a maior qualidade possível do produto os testes validam acesso as paginas, presença de botões e elementos principais das telas bem como suas principais funcionalidades mais basicas.

Prontp de comando:
Navegar até a pasta do projeto ex:'`cd Automacao-CMDITC' e executar um dos comando abaixo:

`npx cypress open` ou `npm run open`: Abrir a IDE do Cypress e apartir de lá executar os testes

`npx cypress run --reporter null` : executar os testes em headless
`npx cypress run --reporter null --spec cypress/integration/exemplo.spec.js` : executar os testes de arquivo específico em headless

`clean_reports`: "rm -rf cypress/reports && rm -rf results.json",

`clean_screenshots`: "rm -rf cypress/screenshots",