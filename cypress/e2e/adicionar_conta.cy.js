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

        // Aguardar dropdown estar visível antes de clicar
        cy.xpath('//li[@class="dropdown"]').should('be.visible').click();

        // Aguardar menu abrir e clicar no item correto
        cy.xpath('//li[@class="dropdown open"]//a[contains(text(),"Adicionar")]').click();

        // Preencher campo de nome da conta e salvar
        cy.get('input[id=nome]').type('Teste Automação 5');
        cy.get('button[type=submit]').contains('Salvar').click();
        cy.get('.alert').should('contain', 'Conta adicionada com sucesso!');

        //Validar se a conta foi salva
        cy.xpath('//li[@class="dropdown"]').should('be.visible').click();
        cy.xpath('//li[@class="dropdown open"]//a[contains(text(),"Listar")]').click();
        cy.get('table').should('contain', 'Teste Automação');
        cy.screenshot();

        
        
                
    });
});