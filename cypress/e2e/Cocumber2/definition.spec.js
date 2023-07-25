import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { when } from "cypress/types/jquery";

Given('Abrir el navegador principal',()=>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')

})

when('Cargando el nombre',()=>{
    cy.get('#wsf-1-field-21').should('be.visible').type('Richy')
    cy.wait(1000)

})

when('Cargando el email',()=>{
    cy.get('#wsf-1-field-23').should('be.visible').type('richy@gmail.com')
    cy.wait(1000)

})

And('Cargando la Dirección',()=>{
    cy.get('#wsf-1-field-28').should('be.visible').type('Dirección Uno')
    cy.wait(1000)

})

Then('Validar el nombre de la página',()=>{
    cy.title().should('eq',"Datos Personales | TestingQaRvn")
    cy.wait(1000)

})