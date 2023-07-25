/// <reference types="Cypress" />
require('cypress-plugin-tab')

describe('Introducción a los assert', () =>{

    it("Demo de los Asserts", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(1500)
    
        cy.get('#wsf-1-field-21').type("Richy").tab().
        type('Guevara').tab().
        type('richy@gmail.com')
        
    })

})