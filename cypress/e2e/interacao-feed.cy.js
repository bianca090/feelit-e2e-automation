describe ('funcionalidade curtir e descurtir postagem', () => {
    beforeEach(() => {

        //loga o usuário antes de cada teste para garantir que estamos na página correta
        cy.visit('https://fell-it-app.onrender.com/login');
        cy.get('input[type="email"]').type('pikachu@teste.com');
        cy.get('input[type="password"]').type('Senha123');
        cy.contains('button', 'Entrar no Fluxo').click();
    });
       
    it('curtir e descurtir uma postagem', () => {
       
        cy.contains('.feed-container .feeling-card', 'Teste automação de curtidas').as('postagem');
            cy.get('@postagem').find('button.interaction-btn').eq(0).click();
            cy.get('@postagem').find('button.interaction-btn').eq(0).should('have.class', 'active-like');
            cy.get('@postagem').find('button.interaction-btn').eq(0).click();
            cy.get('@postagem').find('button.interaction-btn').eq(0).should('not.have.class', 'active-like');
      
});

   it('curtir e descurtir validando o contador em tempo real', () => {
  cy.contains('.feed-container .feeling-card', 'Teste automação de curtidas')
    .as('postagem');

  cy.get('@postagem').find('button.interaction-btn').eq(0).as('btnCurtir');
  cy.get('@postagem').find('span').eq(0).as('contador');

  cy.get('@contador').invoke('text').then((textoInicial) => {
    const inicial = Number(textoInicial.trim());

    cy.get('@btnCurtir')
      .click()
      .should('have.class', 'active-like');

    cy.get('@contador')
      .should(($span) => {
        expect(Number($span.text())).to.equal(inicial + 1);
      });

    cy.get('@btnCurtir')
      .click()
      .should('not.have.class', 'active-like');

    cy.get('@contador')
      .should(($span) => {
        expect(Number($span.text())).to.equal(inicial);
      });
  });
});
});