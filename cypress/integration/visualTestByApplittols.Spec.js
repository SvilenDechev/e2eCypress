  it('astea home screen', () => {
    cy.visit('https://asteasolutions.com/')
    
    cy.eyesOpen({
      appName: 'Astea website ',
      testName: 'Astea home screen',
    });


    cy.eyesCheckWindow({
      tag: "Astea HomeScreen Window",
      target: 'window',
      fully: true
    });
  });

  it('astea contact screen', () => {
    cy.get('#banner-contact ').click();

    cy.eyesOpen({
      appName: 'Astea website ',
      testName: 'Astea contact page',
    });

    cy.eyesCheckWindow({
      tag: "Astea contact Window",
      target: 'window',
      fully: true
    });
  });

  it('cypress kitchen screen', () => {
    cy.visit('https://example.cypress.io/')
    
    cy.eyesOpen({
      appName: 'cypress web',
      testName: 'cypress kitchen screen',
    });
   
    
    cy.eyesCheckWindow({
      tag: "Cypress kitchen screen",
      target: 'window',
      fully: true
    });
  });

  it('cypress utilities screen', () => {
    cy.visit('https://example.cypress.io/')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()

    cy.eyesOpen({
      appName: 'cypress web',
      testName: 'cypress utilities screen',
    });
   
    
    cy.eyesCheckWindow({
      tag: "Cypress utilities screen",
      target: 'window',
      fully: true
    });
  });

  afterEach(() => {
    cy.eyesClose()
   });
