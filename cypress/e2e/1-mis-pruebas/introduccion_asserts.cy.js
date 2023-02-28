/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Introducción a los Asserts", () => {
  it("Demo de los asserts", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    // ! El propósito de usar el “be.visible” es verificar si el elemento es visible para el usuario y si se puede interactuar con él,
    // incluso si hay que desplazarse hasta él1. Esto puede ayudar a evitar errores cuando el elemento existe en el DOM pero está oculto
    // por algún motivo. También puede personalizar el tiempo de espera para que Cypress intente verificar la visibilidad del elemento
    cy.get("#firstName").should("be.visible").type("Alfonso"); // assert: expected <input#firstName..mr-sm-2.form-control> to be visible (it worked!)
    cy.get("#lastName").should("be.visible").type("De La Guardia"); // assert: expected <input#lastName..mr-sm-2.form-control> to be visible (it worked!)
    cy.get("#email")
      .should("be.visible")
      .should("be.enabled")
      .type("alfonsodelag1@gmail.com");
  });
}); //  Cierre del describe
