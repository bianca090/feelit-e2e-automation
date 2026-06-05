describe ('funcionalidade curtir e descurtir postagem', () => {
    beforeEach(() => {

        //loga o usuário antes de cada teste para garantir que estamos na página correta
        cy.visit('https://fell-it-app.onrender.com/login');
        cy.get('input[type="email"]').type('pikachu@teste.com');
        cy.get('input[type="password"]').type('Senha123');
        cy.contains('button', 'Entrar no Fluxo').click();
    });

   it('curtir e descurtir validando o contador em tempo real', () => {

      cy.contains('.feed-container .feeling-card', 'Teste automação de curtidas').as('postagem');
      cy.get('@postagem').find('button.interaction-btn').first().as('btnCurtir');
      cy.get('@btnCurtir').find('span').as('contador');
      cy.get('@contador').invoke('text').then((textoInicial) => {

      const inicial = parseInt(textoInicial.trim(), 10);

      cy.log(`Curtidas iniciais: ${inicial}`);
      cy.get('@btnCurtir').click().should('have.class', 'active-like');
      cy.get('@contador').should(($span) => {
          const atual = parseInt($span.text().trim(), 10);
          expect(atual).to.equal(inicial + 1);
      });

      cy.get('@btnCurtir').click().should('not.have.class', 'active-like');

      cy.get('@contador').should(($span) => {
          const final = parseInt($span.text().trim(), 10);
          expect(final).to.equal(inicial);
        });

    });

});
});