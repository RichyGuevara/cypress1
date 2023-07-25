/// <reference types="Cypress" />

describe('Introducción a los assert', () =>{

    it("Demo de los Asserts", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(1500)
    
        cy.get('#wsf-1-field-21').should("be.visible").type("Richy")
        cy.wait(1500)
        cy.get('#wsf-1-field-22').should("be.visible").type("Guevara")
        cy.wait(1500)
        cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled").type("richy@gmail.com")
       
    })

})