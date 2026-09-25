import HomePage from '../pages/HomePage';

describe('home page', () => {

  // loga o usuário antes de cada teste, usando o comando customizado cy.login()
  beforeEach(() => {
    cy.login('pikachu@teste.com', 'Senha123');
    cy.wait(1000); // espera 1 segundo para garantir que a página carregou
  });

  // verifica se o título da página aparece na homepage após o login
  it('verificar se o título da página é "Fell.It"', () => {
    HomePage.navbarBrand.should('have.text', 'feel.it');
  });

  // verifica se a postagem é exibida corretamente no feed após ser criada
  it('verifica postagem', () => {
    const texto = 'Teste automação de postagem';
    HomePage.createPost(texto);
    HomePage.feedCards.first().should('contain', texto);
  });
});
