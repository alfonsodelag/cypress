/// <reference types="Cypress" />

describe("Seccion 1 validando el título", () => {
  it("Test validar el título", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");

    cy.log("Ok. La función title funciona correctamente");
  });
}); //  Cierre del describe
