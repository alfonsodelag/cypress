/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("", () => {
  it("", () => {
    cy.visit("");
  });
}); //  Cierre del describe
