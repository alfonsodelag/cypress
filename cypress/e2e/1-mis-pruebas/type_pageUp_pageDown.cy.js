/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Ejemplo de Type pageUp, pageDown", () => {
  it("Type PageUp", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#userName").type("{pageup}");
    cy.wait(1000);
  });

  it.only("Type este se ejecuta porque tiene el Only", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#userName").type("{pagedown}");
    cy.wait(1000);
  });
}); //  Cierre del describe
