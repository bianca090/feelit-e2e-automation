import usuarios from '../fixtures/usuarios.json';
import RegisterPage from '../pages/RegisterPage';

describe('Cadastro de Massa', () => {

  // acessa a página de cadastro antes de cada teste
  beforeEach(() => {
    RegisterPage.visit();
  });

  // testa o cadastro de usuários utilizando a massa de dados de usuarios.json
  usuarios.usuarios.forEach((usuario) => {
    it(`cadastro do usuario ${usuario.name}`, () => {
      RegisterPage.register(usuario);
    });
  });
});
