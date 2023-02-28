// ! Este código (linea 6) es un manejador de eventos que se ejecuta cuando Cypress detecta una excepción no capturada en la página que
// está probando1.
// El parámetro err es el objeto de error que contiene información sobre la excepción, y el parámetro runnable es el objeto de Mocha que
// representa la prueba actual2. Al devolver false en este manejador, se le dice a Cypress que ignore la excepción y continúe con la
// prueba13. Esto puede ser útil si la excepción no afecta al funcionamiento de su aplicación o si quiere evitar que Cypress falle la
// prueba por errores de terceros4.
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

//La función describe de cypress es un método (tomado de Mocha) para agrupar una o más pruebas relacionadas.
//Cada vez que empieces a escribir un nuevo conjunto de pruebas para una funcionalidad, envuélvelo en un bloque describe12.
//Como puedes ver, toma dos argumentos: una cadena para describir el conjunto de pruebas y una función de devolución de llamada para envolver la prueba real1.

// Se llama “describe” porque sirve para describir el propósito o el comportamiento del conjunto de pruebas que contiene.
describe("Bienvenido al Curso de Cypress sección 1", () => {
  // El método it() de cypress es otro método (tomado de Mocha) para definir una prueba individual dentro de un bloque describe.
  // Cada vez que quieras escribir una prueba para una funcionalidad específica, envuélvela en un bloque it12. Como puedes ver,
  // también toma dos argumentos: una cadena para describir la prueba y una función de devolución de llamada para ejecutar la prueba.

  // Se llama “it” porque sirve para describir el comportamiento esperado del sistema bajo prueba. Por ejemplo, si quieres probar que el registro de usuarios funciona correctamente, podrías escribir algo así:
  it("mi primer test => Hola Mundo", () => {
    cy.log("Hola Mundo");
    cy.wait(1500);
  });

  it("Segundo Test => Campo Name", () => {
    cy.visit("https://demoqa.com/text-box");
    // La función type () de Cypress se usa para escribir texto en un elemento del DOM, como un input o un textarea1.
    // Esta función simula el comportamiento real de un usuario al teclear, y dispara los eventos correspondientes como keydown, keypress,
    // input y change1. También se puede usar para escribir caracteres especiales como Enter, Backspace o Tab1.
    // La función type () acepta un argumento que es el texto que se quiere escribir en el elemento1
    cy.get("#userName").type("Alfonso");
    cy.wait(3000);
  });
}); //  Cierre del describe
