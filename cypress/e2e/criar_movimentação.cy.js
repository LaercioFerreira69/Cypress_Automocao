//import { should } from 'chai';
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
        cy.xpath('//*[@id="navbar"]/ul/li[3]/a').click();
        cy.xpath('//*[@id="tipo"]').should('contain','Receita').select('Receita');
        cy.get('input[id=data_transacao]').type('19/03/2025');
        cy.get('input[id=data_pagamento]').type('19/03/2025');
        cy.get('input[id=descricao]').type('Teste Automação Movimentação Excluir');
        cy.get('input[id=interessado]').type('Automatizador');
        cy.get('input[id=valor]').type('666');
        cy.xpath('//*[@id="conta"]').should('contain','Teste Automação 666').select('Teste Automação 666');
        cy.get('[type="radio"]').first().check();
        cy.get('button[type=submit]').contains('Salvar').click();
        cy.get('.alert').should('contain', 'Movimentação adicionada com sucesso!');
        cy.screenshot();





   });
});