/// <reference types="Cypress" />


describe('Seccion 1 validando el título', () =>{

    it("Test Validar el título", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')

        cy.log("OK la funcion title funciono bien")
    })

})