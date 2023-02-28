/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

require("cypress-plugin-tab");

describe("Opciones de Click", () => {
  it("Click Sencillo", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("[name='username']")
      .type("Admin")
      .tab()
      .type("admin123")
      .tab()
      .click();

    cy.get(":nth-child(1) > .oxd-main-menu-item").should("be.visible").click();
  });

  it("Click Forzado", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("[name='username']")
      .type("Admin")
      .tab()
      .type("admin123")
      .tab()
      .click();

    cy.get(":nth-child(1) > .oxd-main-menu-item").should("be.visible").click();
    // La diferencia entre click y force click es que el primero verifica si el elemento es accionable (es decir, si se puede hacer clic
    // en él) y el segundo lo ignora y dispara los eventos de clic automáticamente1. El force click puede ser útil cuando el elemento
    // está visible pero no accionable por algún motivo, como estar cubierto por otro elemento. Sin embargo, se recomienda usar el click
    // normal siempre que sea posible, ya que simula mejor el comportamiento del usuario real1. También puede crear un comando
    //  personalizado para hacer force click si lo necesita con frecuencia
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click({ force: true });
  });

  it.only("Click por coordenadas (x, y)", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("[name='username']")
      .type("Admin")
      .tab()
      .type("admin123")
      .tab()
      .click();

    cy.get(":nth-child(1) > .oxd-main-menu-item").should("be.visible").click();
    cy.wait(1500);
    cy.get(".oxd-topbar-header-breadcrumb-module")
      .should("be.visible")
      .click(50, 5, { force: true });
    cy.get(".oxd-topbar-header-breadcrumb-module")
      .should("be.visible")
      .click(500, -10, { force: true });
  });
}); //  Cierre del describe
