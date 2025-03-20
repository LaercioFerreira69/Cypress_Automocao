import 'cypress-xpath';

        //Efetuar login
describe('Login', () => {
    it('deve preencher login com sucesso', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('input[id=email]').type('Joao@joao')
        cy.get('input[id=senha]').type('joao123')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Bem vindo')

        //Acessar a página de movimentação
        cy.xpath('//*[@id="navbar"]/ul/li[4]/a').click();
        cy.xpath('//*[@id="mes"]').should('contain','Março').select('Março');
        cy.xpath('//*[@id="ano"]').should('contain','2025').select('2025');
        cy.get('input[type=submit]').contains('Buscar').click();

        //Validar valores
        cy.get('table').should('contain', '19/03/2025');
        cy.get('table').should('contain', '19/03/2025');
        cy.get('table').should('contain', 'Teste Automação Movimentação');
        cy.get('table').should('contain', 'Pago');

        //Excluir movimentação
        cy.xpath('//*[@id="tabelaExtrato"]/tbody/tr[1]/td[6]/a').click();
        cy.get('.alert').should('contain', 'Movimentação removida com sucesso!');
        cy.screenshot();    
      

    });
});