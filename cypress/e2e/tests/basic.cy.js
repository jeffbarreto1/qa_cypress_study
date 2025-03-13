/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        // const title = cy.title()
        // console.log(title)
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')
        
    });

    it('Sould find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });

});
