// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: "element"}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: "optional"}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/** Opens link from header */
function openHeaderLink(name: string) {
  cy.get("nav").contains("a", name).click();
}

function some(subject: JQuery) {
  cy.log("Some")
}

Cypress.Commands.add("openHeaderLink", openHeaderLink);
Cypress.Commands.add("some", { prevSubject: true }, some)

declare namespace Cypress {
  interface Chainable {
    openHeaderLink: typeof openHeaderLink;
    some: () => Chainable<JQuery>
  }
}
