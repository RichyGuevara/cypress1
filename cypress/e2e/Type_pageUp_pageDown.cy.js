/// <reference types="Cypress" />

describe('Ejemplo de type pageUp, pageDown', () =>{

    it("Type pageUp", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq',"DEMOQA")
        cy.wait(1500)
        
        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
        
    })

})