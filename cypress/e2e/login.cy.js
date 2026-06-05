describe('Validação de login', () => {
  
  //acessa o site e a página de login antes de cada teste
  beforeEach(() => {
    cy.visit('https://fell-it-app.onrender.com/login');
  });

  //testa o login com credenciais válidas e verifica se a mensagem de sucesso aparece e se a URL é a correta
  it('login com credenciais válidas', () => {
    cy.get('input[type="email"]').type('pikachu@teste.com');
    cy.get('input[type="password"]').type('Senha123');
    cy.contains('button', 'Entrar no Fluxo').click();
    cy.contains('div.modern-alert.success', 'Conexão estabelecida! Entrando...').should('be.visible');
    cy.url().should('eq', 'https://fell-it-app.onrender.com/home');
  });

  //testa o login com credenciais inválidas e verifica se a mensagem de erro aparece
  it('login com credenciais inválidas', () => {
    cy.get('input[type="email"]').type('emailincoreto@gmail.com');
    cy.get('input[type="password"]').type('senhaincorreta123');
    cy.contains('button', 'Entrar no Fluxo').click();
    cy.contains('div.modern-alert.error', 'Usuário ou senha incorretos.').should('be.visible');
  });

//testa o login com email vazio e verifica se a mensagem de validação do campo aparece
  it('login com email vazio', () => {
    cy.get('input[type="password"]').type('Senha123');
    cy.contains('button', 'Entrar no Fluxo').click();
    cy.get('input[type="email"]').then(($input) => {
      expect($input[0].validationMessage).to.equal('Preencha este campo.');
    });
  });

//testa o login com senha vazia e verifica se a mensagem de validação do campo aparece
  it('login com senha vazia', () => {
    cy.get('input[type="email"]').type('pikachu@teste.com');
    cy.contains('button', 'Entrar no Fluxo').click();
    cy.get('input[type="password"]').then(($input) => {
      expect($input[0].validationMessage).to.equal('Preencha este campo.');
    });

  //testa o login com email e senha vazios e verifica se a mensagem de validação do campo aparece
  });
  it('login com email e senha vazios', () => {
    cy.contains('button', 'Entrar no Fluxo').click();
     cy.get('input[type="email"]').then(($input) => {
      expect($input[0].validationMessage).to.equal('Preencha este campo.');
    });
});
});