describe('My first test --example to-do app', () => {

  beforeEach(() => {
    cy.visit('https://universe.xyz/')
  });
  it('should display two todo by default', () => {
    cy.pause();
  });
});