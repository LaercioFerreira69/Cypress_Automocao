import 'cypress-xpath';


describe('Abrir navegador por link' , () => {
    it('Abrir navegador no link especificado', () => {

        //Acessar página
        cy.visit('https://seubarriga.wcaquino.me/login');

        //Preencher campos de login
        cy.get('input[id=email]').type('Joao@joao');
        cy.get('input[id=senha]').type('joao123');
        cy.get('.btn').click();
        
        //Validar mensagem de boas-vindas
        cy.get('.alert').should('contain', 'Bem vindo');

        //Validar conta existente
        cy.xpath('//li[@class="dropdown"]').should('be.visible').click();
        cy.xpath('//li[@class="dropdown open"]//a[contains(text(),"Listar")]').click();
        cy.get('table').should('contain', 'Teste Automação 6969');

        //Editar a conta selecionada
        cy.xpath('//*[@id="tabelaContas"]/tbody/tr[3]/td[2]/a[1]').click();
        cy.get('input[id=nome]').clear().type('Teste Automação 666');
        cy.get('button[type=submit]').contains('Salvar').click();
        cy.get('.alert').should('contain', 'Conta alterada com sucesso');
        cy.screenshot();
        
    
    });
});