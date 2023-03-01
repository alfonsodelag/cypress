/// <reference types="Cypress" />

// ! use npm cypress open to run tests

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("", () => {
  it("", () => {
    cy.visit("");
  });
}); //  Cierre del describe
