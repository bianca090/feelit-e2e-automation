//importa a massa de dados do arquivo usuarios.json para ser utilizada nos testes de cadastro
import usuarios from "../fixtures/usuarios.json";

//acessa a página de cadastro antes de cada teste
describe('Cadastro de Massa', () => {
  beforeEach(() => {
    cy.visit('https://fell-it-app.onrender.com/register');
  });
  
  //testa o cadastro de usuários utilizando uma massa de dados importada do arquivo usuarios.json
  usuarios.usuarios.forEach(usuario => {
    
    it(`cadastro do usuario ${usuario.name}`, () => {
      cy.get('input[placeholder="Ex: Lucas"]').clear().type(usuario.name);
      cy.get('input[placeholder="Ex: Silva"]').clear().type(usuario.lastName);
      cy.get('input[placeholder="seu@email.com"]').clear().type(usuario.email);
      cy.get('input[placeholder="••••••••"]').clear().type(usuario.password);
       cy.contains('button', 'Inscrever-se').click();
    });

  }); 
});