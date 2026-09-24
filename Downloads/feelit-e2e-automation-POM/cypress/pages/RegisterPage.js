/// <reference types="cypress" />

// Page Object responsável pela tela de Cadastro (register).
class RegisterPage {
  visit() {
    cy.visit('/register');
    return this;
  }

  get firstNameInput() {
    return cy.get('input[placeholder="Ex: Lucas"]');
  }

  get lastNameInput() {
    return cy.get('input[placeholder="Ex: Silva"]');
  }

  get emailInput() {
    return cy.get('input[placeholder="seu@email.com"]');
  }

  get passwordInput() {
    return cy.get('input[placeholder="••••••••"]');
  }

  get submitButton() {
    return cy.contains('button', 'Inscrever-se');
  }

  // Recebe um objeto de usuário (mesmo formato da fixture usuarios.json)
  // e realiza o cadastro completo.
  register(usuario) {
    this.firstNameInput.clear().type(usuario.name);
    this.lastNameInput.clear().type(usuario.lastName);
    this.emailInput.clear().type(usuario.email);
    this.passwordInput.clear().type(usuario.password);
    this.submitButton.click();
    return this;
  }
}

export default new RegisterPage();
