//Validar login
describe('Login', () => {
    it('deve preencher login com sucesso', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        
        //cy.contains()
        //cy.get('input[id=email]').type('Joao@joao')
        //cy.get('input[id=senha]').type('joao123')
        //cy.get('.btn').click()
        //cy.get('.alert').should('contain', 'Bem vindo')
   });
   it('deve preencher login com email invalido', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('input[name=email]').type('Joao@jao')
        cy.get('input[id=senha]').type('joao123')
        cy.get('.btn').click()
    cy.get('.alert').should('contain', 'Problemas com o login do usuário')
});
    it('deve preencher login com senha invalida', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('input[name=email]').type('Joao@joao')
        cy.get('input[id=senha]').type('joao1234')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Problemas com o login do usuário')
        
    });
});

// Cenário 1: Login com sucesso
// Dado que o usuário acessa a página de login do sistema
// E preenche os campos de login e senha corretamente
// Quando clica no botão de login
// Então o sistema deve direcionar para a página inicial
// E exibir uma mensagem de boas-vindas

// Cenário 2: Email Invalido
// Dado que o usuário acessa a página de login do sistema
// E preenche os campos de login e senha incorretamente
// Quando clica no botão de login
// Então o sistema deve exibir uma mensagem de erro

// Cenário 2: Senha Invalida
// Dado que o usuário acessa a página de login do sistema
// E preenche os campos de login incorreto e senha corretamente
// Quando clica no botão de login
// Então o sistema deve exibir uma mensagem de erro