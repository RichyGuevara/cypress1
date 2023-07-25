describe('Bienvenido al curso de Cypress sección 1', () =>{

it("Mi primer Test -> Hola mundo", () =>{
    cy.log("Hola mundo")
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.get("#wsf-1-field-21").type("Richy")
    cy.wait(1000)
    cy.get("#wsf-1-field-22").type("Guevara")
    cy.wait(1000)
    cy.get("#wsf-1-field-23").type("richardgue9@gmail.com")
    cy.wait(1000)
    cy.get("#wsf-1-field-24").type("3128269086")
    cy.wait(1000)
    cy.get("#wsf-1-field-28").type("mz 29 casa 8")
    cy.wait(1000)
    cy.get("#wsf-1-field-27").click()
    cy.wait(4000)

})



})