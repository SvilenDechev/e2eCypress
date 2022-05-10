/// <reference types="cypress" />

class ToDoPage {
  openTheTestApp() {
    cy.visit('https://example.cypress.io/todo')
  }

  checkbox(checkboxNum){
    return cy.get(`.todo-list li:nth-child(${checkboxNum}) input`);
  }
  
  clickCheckBox(checkboxNum){
    this.checkbox(checkboxNum).check()
  }

  uncheckCheckbox(checkboxNum){
    this.checkbox(checkboxNum).uncheck()
  }

  expectExistingTask(taskCount) {
    cy.get('.todo-list li').should('have.length', taskCount);
    cy.log('>>>>>this is method<<<<<<')
  }

  addTask(todoText) {
    //cypress way
    cy.get('[data-test="new-todo"]').type(`${todoText}{enter}`);
    //Testing Library
    //cy.findByPlaceholderText('What needs to be done?').type(`${todoText}{enter}`);
  }

  expectTaskText(taskNumber, text) {
    cy.get(`.todo-list  li:nth-child(${taskNumber})`).should('have.text', text)
  }

  expectTaskIsCompleted(todoName){
    cy.contains(todoName).parents('li').should('have.class', 'completed').and('be.visible');
  }
}

export default new ToDoPage 
