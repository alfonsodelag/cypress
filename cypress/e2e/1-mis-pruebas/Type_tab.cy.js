/// <reference types="Cypress" />

require("cypress-plugin-tab");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("", () => {
  it("Type con Tab", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#firstName")
      .type("Alfonso")
      .tab()
      .type("De La Guardia")
      .tab()
      .type("alfonsodelag1@gmail.com");
  });
}); //  Cierre del describe
