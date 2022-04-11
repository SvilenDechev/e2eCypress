xit('screen', () => {
  cy.visit('/todo')


  cy.eyesOpen({
    appName: 'demo app',
    testName: 'test grid demo',
});

cy.eyesCheckWindow({
  tag: "Login Window",
  target: 'window',
  fully: true
});
// cy.get('#log-in').click()

// cy.eyesCheckWindow({
//   tag: "Home page and grid",
//   target: 'window',
//   fully: true
// });

cy.eyesClose()
});

it('UI visual test', () => {
  cy.visit('/todo')
  cy.findByPlaceholderText('What needs to be done?').should('be.visible');
  cy.eyesOpen({
    appName:'todoApp',
    tagName: 'test first state of the app, should have two todo '
  });
  cy.eyesCheckWindow({
    tag:'todoHomePage',
    target: 'window',
    fully: true
  });
  cy.eyesClose();
})