import "cypress-real-events/support";
import '@testing-library/cypress/add-commands'
import '@applitools/eyes-cypress/commands'

Cypress.Commands.add('expectExistingTaskCyCommand', (taskCount) => {
  cy.get('.todo-list li').should('have.length', taskCount);
    cy.log('>>>>>>>this is cypress command<<<<<<<<<');
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
