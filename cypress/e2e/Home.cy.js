describe('home page', () => {
  
  //loga o usuário antes de cada teste para garantir que estamos na página correta
  beforeEach(() => {
    cy.visit('https://fell-it-app.onrender.com/login');
     cy.get('input[type="email"]').type('pikachu@teste.com');
    cy.get('input[type="password"]').type('Senha123');
    cy.contains('button', 'Entrar no Fluxo').click();
  });
//verifica se o titulo da pagina aparece na homepage apos o login
  it('verificar se o título da página é "Fell.It"', () => {
     cy.get('.navbar-brand').should('have.text', 'feel.it');
    
  });
  //Verifica se a postagem é exibida corretamente no feed após ser criada
  it('verifica postagem', () => {
    cy.get('.premium-textarea').type('Teste automação de postagem');
    cy.get('.btn-premium-sm').click();
    cy.get('.feed-container .feeling-card')
      .first()
      .should('contain', 'Teste automação de postagem');

  });
});