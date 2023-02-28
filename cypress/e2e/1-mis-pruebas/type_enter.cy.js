/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test del Enter", () => {
  it("Type --> ENTER", () => {
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Google");
    cy.get("#L2AGLb").click(); // esto hace clic en el botón de aceptar las cookies
    // cy.wait(1500);

    cy.get("[name= 'q']").type("cypress io {enter}");

    cy.get('[href="https://github.com/cypress-io/cypress"] > .LC20lb').click();
  });
}); //  Cierre del describe
