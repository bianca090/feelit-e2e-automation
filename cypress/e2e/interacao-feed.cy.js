import HomePage from '../pages/HomePage';

describe('funcionalidade curtir e descurtir postagem', () => {

  // loga o usuário antes de cada teste, usando o comando customizado cy.login()
  beforeEach(() => {
    cy.login('pikachu@teste.com', 'Senha123');
  });

  it('curtir e descurtir validando o contador em tempo real', () => {
    const textoPostagem = 'Teste automação de curtidas';

    HomePage.getLikeButton(textoPostagem).as('btnCurtir');
    HomePage.getLikeCounter(textoPostagem).as('contador');

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
