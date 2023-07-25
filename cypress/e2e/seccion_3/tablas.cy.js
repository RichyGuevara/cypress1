/// <reference types="Cypress" />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')



describe('Elementos de una tabla', () =>{

    it.only("Prueba Asserts", () =>{
        cy.visit('https://testingqarvn.com.es/combobox-dependiente/')
        cy.title().should('eq',"ComboBox Dependiente | TestingQaRvn")
        cy.wait(1500)
    
        cy.get('#wsf-1-field-61').should("be.visible").select("Linux").should("have.value","Linux")
        cy.wait(1500)
    
       
    })

})
