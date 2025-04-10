/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        // const title = cy.title()
        // console.log(title)
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')

        let syncTitle
        cy.title().then(title => {
            console.log(title)
            cy.get('#formNome')
                .type(title)
            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]')
            .then($el => {
                $el.val(syncTitle)
            })
        
        cy.get('#elementosForm\\:sugestoes')
            .then($el => {
                cy.wrap($el)
                    .type(syncTitle)
            })
    });

    it('Sould find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });

});
