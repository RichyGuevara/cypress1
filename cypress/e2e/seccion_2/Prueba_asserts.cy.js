/// <reference types="Cypress" />

describe('Asserts', () =>{

    it("Prueba Asserts", () =>{
        cy.visit('https://testingqarvn.com.es/combobox-dependiente/')
        cy.title().should('eq',"ComboBox Dependiente | TestingQaRvn")
        cy.wait(1500)
    
        cy.get('#wsf-1-field-61').should("be.visible").select("Linux").should("have.value","Linux")
        cy.wait(1500)
    
       
    })

})
