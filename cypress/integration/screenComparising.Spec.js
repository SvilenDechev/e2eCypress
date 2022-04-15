describe('applitools test', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'AsteaSolutions ',
      testName: 'Astea Web',
    });
  });
  it('screen', () => {
    cy.visit('https://abv.bg/')

    cy.eyesCheckWindow({
      tag: "Home Window",
      target: 'window',
      fully: true
    });

    // cy.get('#log-in').click()

    // cy.eyesCheckWindow({
    //   tag: "Home page and grid",
    //   target: 'window',
    //   fully: true
    // });
  });
  afterEach(() => {
    cy.eyesClose()
  });
});



