/// <reference types="cypress" />

describe('Work with basic elements', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Text', () => {
        cy.get('span.facilAchar')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });

    it('Links', () => {
        cy.get('[href="#"]')
            .click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')

        cy.reload()

        cy.get('#resultado')
            .should('have.not.text', 'Voltou!')
        cy.contains('Voltar')
            .click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')
    });

    it('TextFields', () => {
        // Preenchendo campo texto
        cy.get('#formNome')
            .type('Jefferson')
            .should('have.value', 'Jefferson')
        // Preenchendo campo texto
        cy.get('[data-cy="dataSobrenome"]')
            .type('Santos32{backspace}{backspace}') // Apagando caracteres utilizando backspace
            .should('have.value', 'Santos')
        // Preenchendo campo texto
        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')
        // Preenchendo campo texto 
        cy.get('#elementosForm\\:sugestoes')
            .clear() // Limpando campo preenchido com opção 'clear'
            .type('Erro{Selectall}Testando formas de preencher campos texto', { delay: 50 }) // Reescrevendo texto, selecionando texto escrito e escrevendo outra vez com delay
            .should('have.value', 'Testando formas de preencher campos texto')
        
    });

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get('[name=formSexo]')
            .should('have.length', 2)
    });

    it('Checkox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaFrango').should('be.checked')
        cy.get('#formComidaCarne').should('be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
        
    });

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)

        cy.get('[data-test="dataEscolaridade"] option')
            .then($arr => {
                const values = []
                $arr.each(function () {
                    values.push(this.innerHTML)
                })
                console.log(values)
                expect(values).to.include.members([
                    "Superior",
                    "Mestrado",
                    "Doutorado"
                ])
            })
    });

    it('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

        cy.get('[data-testid=dataEsportes]')
            .then($el => {
                expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
                expect($el.val()).to.have.length(3)
            })
        
        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada'])
    });
});
