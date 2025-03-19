//Validar login
describe('Login', () => {
    it('deve preencher login com sucesso', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('input[id=email]').type('Joao@joao')
        cy.get('input[id=senha]').type('joao123')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Bem vindo')
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