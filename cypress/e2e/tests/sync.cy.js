/// <reference types="cypress" />

describe('Waits...', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    it('Should wait for the element to be available', () => {
        cy.get('#novoCampo')
            .should('not.exist')
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona!')
    });

    it('Using find', () => {
        cy.get('#buttonList')
            .click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
    });

    it('Using timeout', () => {
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo', {timeout: 5000})
            .should('exist')
    });

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    });
});
