/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

require("cypress-plugin-tab");

describe("Primer Reto", () => {
  it("", () => {
    cy.visit("https://demoqa.com/webtables");
    cy.title().should("eq", "DEMOQA");

    cy.get("#searchBox").should("be.visible").type("Cierra");
    cy.wait(1000);
    cy.get("#searchBox").should("be.visible").clear();
    cy.get("#addNewRecordButton").should("be.visible").click();
    cy.wait(1000);
    cy.get("#firstName")
      .should("be.visible")
      .type("Alfonso")
      .tab()
      .type("De La Guardia")
      .tab()
      .type("alfonsodelag1@gmail.com")
      .tab()
      .type("34")
      .tab()
      .type("34000")
      .wait(1000)
      .tab()
      .type("sistemas");
    cy.get("#submit").should("be.visible").click();
    cy.wait(1500);

    cy.get("#edit-record-2").should("be.visible").click();
    cy.wait(1000);
    cy.get("#age").should("be.visible").clear().type("99");
    cy.wait(1500);
    cy.get("#salary").should("be.visible").clear().type("500000");
    cy.get("#submit").should("be.visible").click();

    // borrando el campo
    cy.wait(2000);
    cy.get("#delete-record-2").should("be.visible").click();
  });
}); //  Cierre del describe
