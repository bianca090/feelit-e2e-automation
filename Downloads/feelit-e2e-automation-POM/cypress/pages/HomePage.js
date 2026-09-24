/// <reference types="cypress" />

// Page Object responsável pela Home e pelas interações com o feed
// (criar postagem, curtir/descurtir).
class HomePage {
  get navbarBrand() {
    return cy.get('.navbar-brand');
  }

  get postTextarea() {
    return cy.get('.premium-textarea');
  }

  get postSubmitButton() {
    return cy.get('.btn-premium-sm');
  }

  get feedCards() {
    return cy.get('.feed-container .feeling-card');
  }

  createPost(text) {
    this.postTextarea.type(text);
    this.postSubmitButton.click();
    return this;
  }

  // Retorna o card de postagem que contém o texto informado
  getPostByText(text) {
    return cy.contains('.feed-container .feeling-card', text);
  }

  // Retorna o botão de curtir (primeiro botão de interação) de uma postagem
  getLikeButton(postText) {
    return this.getPostByText(postText).find('button.interaction-btn').first();
  }

  // Retorna o contador de curtidas dentro do botão de curtir
  getLikeCounter(postText) {
    return this.getLikeButton(postText).find('span');
  }
}

export default new HomePage();
