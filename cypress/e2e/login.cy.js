//Validar login
describe('Login', () => {
    it('deve preencher login com sucesso', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('input[name=email]').type('  ')
        cy.get('input[name=123456]').type('  ')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Bem vindo')
    
});
    it('deve preencher login com email invalido', () => {
    
});
    it('deve preencher login com senha invalida', () => {
        
    });

// Cenário 1: Login com sucesso
// Dado que o usuário acessa a página de login do sistema
// E preenche os campos de login e senha corretamente
// Quando clica no botão de login
// Então o sistema deve direcionar para a página inicial
// E exibir uma mensagem de boas-vindas
        