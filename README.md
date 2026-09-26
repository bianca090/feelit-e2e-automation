# 🚀 Automação de Testes E2E - Plataforma Feel.it

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Andamento-yellow?style=for-the-badge" alt="Status: Em Andamento">
  <img src="https://img.shields.io/badge/Cypress-170B11?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Claude-AI-CC785C?style=for-the-badge" alt="Claude AI">
</p>

## 🎓 Sobre o Projeto

Este projeto de automação de testes de ponta a ponta (E2E) está sendo desenvolvido para fins acadêmicos como parte dos meus estudos na faculdade.

O objetivo principal é validar as principais funcionalidades e fluxos críticos da plataforma **Feel.it**, garantindo a qualidade e a estabilidade da aplicação através de testes automatizados.

Durante a evolução do projeto, também passei a aplicar boas práticas de arquitetura e organização de código, utilizando o **Page Object Model (POM)** e ferramentas de **Inteligência Artificial** como apoio no processo de refatoração.

---

## 🧠 Foco no Aprendizado

Mais do que um requisito acadêmico, este repositório serve como meu **laboratório prático de estudos em QA e automação de testes**.

Neste projeto, estou praticando:

* Domínio da ferramenta **Cypress** para automação E2E.
* JavaScript aplicado à automação de testes.
* Estruturação de uma suíte de testes do zero.
* Criação e organização de cenários de testes.
* Mapeamento de elementos e utilização de seletores.
* Testes de fluxos críticos da aplicação.
* Aplicação do padrão **Page Object Model (POM)**.
* Criação de componentes reutilizáveis.
* Utilização de **Custom Commands** do Cypress.
* Refatoração e aplicação de boas práticas de **Clean Code**.
* Utilização de **IA como apoio ao desenvolvimento e refatoração de testes**.

---

## 🏗️ Arquitetura do Projeto — Page Object Model (POM)

Durante a evolução do projeto, implementei o padrão **Page Object Model (POM)** para melhorar a organização e a manutenção dos testes.

O POM permite separar a lógica de interação com a aplicação da lógica dos cenários de teste.

Dessa forma:

```text
e2e/
├── login.cy.js
├── home.cy.js
├── cadastro-massa.cy.js
└── interacao-feed.cy.js

pages/
├── LoginPage.js
├── HomePage.js
└── RegisterPage.js

support/
├── commands.js
└── e2e.js

fixtures/
└── dados de teste
