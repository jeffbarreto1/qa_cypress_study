/// <reference types="cypress" />

describe('Waits...', () => {

    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome')
            .then($el => {
                cy.wrap($el).type('funciona via cypress')
            })
    });

    it('Its...', () => {
        
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj)
            .should('have.property', 'nome', 'User')
        cy.wrap(obj)
            .its('nome')
            .should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}}
        cy.wrap(obj2)
            .its('endereco.rua')
            .should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title()
            .its('length')
            .should('be.equal', 20)
    });

    it('Invoke...', () => {
        
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({fn: getValue})
            .invoke('fn')
            .should('be.equal', 1)

        cy.wrap({fn: soma})
            .invoke('fn', 2, 5)
            .should('be.equal', 7)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome')
            .invoke('val', 'texto via invoke')
        cy.window()
            .invoke('alert', 'Da para ver?')
        cy.get('#resultado')
            .invoke('html', '<input type="button", value="hacked!"/>')

    });

})
