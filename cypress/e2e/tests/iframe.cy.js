/// <reference types="cypress" />

describe('Work with iFrames', () => {
    it('Must fill in text field', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
            .type('Funciona?')
            .should('have.value', 'Funciona?')
        })
    });
    
    it('Must test frame directly', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
        })
    })
});
