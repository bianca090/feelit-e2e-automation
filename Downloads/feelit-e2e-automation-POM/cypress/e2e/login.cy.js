import LoginPage from '../pages/LoginPage';

describe('Validação de login', () => {

  // acessa a página de login antes de cada teste
  beforeEach(() => {
    LoginPage.visit();
  });

  // testa o login com credenciais válidas e verifica a mensagem de sucesso e a URL
  it('login com credenciais válidas', () => {
    LoginPage.fillEmail('pikachu@teste.com');
    LoginPage.fillPassword('Senha123');
    LoginPage.submit();
    LoginPage.successAlert.should('be.visible');
    cy.url().should('eq', `${Cypress.config('baseUrl')}/home`);
  });

  // testa o login com credenciais inválidas e verifica a mensagem de erro
  it('login com credenciais inválidas', () => {
    LoginPage.fillEmail('emailincoreto@gmail.com');
    LoginPage.fillPassword('senhaincorreta123');
    LoginPage.submit();
    LoginPage.errorAlert.should('be.visible');
  });

  // testa o login com email vazio e verifica a mensagem de validação do campo
  it('login com email vazio', () => {
    LoginPage.fillPassword('Senha123');
    LoginPage.submit();
    LoginPage.emailInput.then(($input) => {
      expect($input[0].validationMessage).to.equal('Preencha este campo.');
    });
  });

  // testa o login com senha vazia e verifica a mensagem de validação do campo
  it('login com senha vazia', () => {
    LoginPage.fillEmail('pikachu@teste.com');
    LoginPage.submit();
    LoginPage.passwordInput.then(($input) => {
      expect($input[0].validationMessage).to.equal('Preencha este campo.');
    });
  });

  // testa o login com email e senha vazios e verifica a mensagem de validação do campo
  it('login com email e senha vazios', () => {
    LoginPage.submit();
    LoginPage.emailInput.then(($input) => {
      expect($input[0].validationMessage).to.equal('Preencha este campo.');
    });
  });
});
