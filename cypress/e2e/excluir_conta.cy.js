import 'cypress-xpath';

describe('Abrir navegador por link', () => {
    it('Abrir navegador no link especificado', () => {
        // Acessar a página
        cy.visit('https://seubarriga.wcaquino.me/login'); 

        // Preencher os campos de login
        cy.get('input[id=email]').type('Joao@joao');
        cy.get('input[id=senha]').type('joao123');    
        cy.get('.btn').click();    

        // Validar mensagem de boas-vindas
        cy.get('.alert').should('contain', 'Bem vindo');

        //Validar conta existe
        cy.xpath('//li[@class="dropdown"]').should('be.visible').click();
        cy.xpath('//li[@class="dropdown open"]//a[contains(text(),"Listar")]').click();
        cy.get('table').should('contain', 'Teste Automação 5');
        

        // Excluir a conta selecionada
        cy.xpath('//*[@id="tabelaContas"]/tbody/tr[3]/td[2]/a[2]').click();
        cy.get('.alert').should('contain', 'Conta removida com sucesso!');
        cy.screenshot();

                
    });
});