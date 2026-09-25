/// <reference types="cypress" />

// Page Object responsável por toda a interação com a tela de Login.
// Centraliza os seletores e as ações da página, evitando repetição nos specs.
class LoginPage {
  visit() {
    cy.visit('/login');
    return this;
  }

  get emailInput() {
    return cy.get('input[type="email"]');
  }

  get passwordInput() {
    return cy.get('input[type="password"]');
  }

  get submitButton() {
    return cy.contains('button', 'Entrar no Fluxo');
  }

  get successAlert() {
    return cy.contains('div.modern-alert.success', 'Conexão estabelecida! Entrando...');
  }

  get errorAlert() {
    return cy.contains('div.modern-alert.error', 'Usuário ou senha incorretos.');
  }

  fillEmail(email) {
    if (email) this.emailInput.type(email);
    return this;
  }

  fillPassword(password) {
    if (password) this.passwordInput.type(password);
    return this;
  }

  submit() {
    this.submitButton.click();
    return this;
  }

  // Fluxo completo de login, usado tanto nos testes de login
  // quanto pelo comando customizado cy.login()
  login(email, password) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
    return this;
  }
}

export default new LoginPage();
