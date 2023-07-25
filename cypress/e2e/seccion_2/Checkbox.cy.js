/// <reference types="Cypress" />

describe('Checkbox', () =>{

    it("Checkbox uno", () =>{
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
        cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)
    
        cy.get('#wsf-1-label-36-row-3').click()
        cy.wait(1500)
    
       
    })

})