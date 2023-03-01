/// <reference types="Cypress" />

// ! use npm cypress open to run tests

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Tipos de selectores", () => {
  it("Selector por id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Alfonso");
    cy.get("#userEmail").should("be.visible").type("alfonsodelag1@gmail.com");
  });

  it.only("Selector por Atributo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("[placeholder='Full Name']")
      .should("be.visible")
      .type("Alfonso De La Guardia");
  });

  it.only("Selector por Atributo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("[placeholder='Full Name']")
      .should("be.visible")
      .type("Alfonso De La Guardia");
  });
}); //  Cierre del describe
