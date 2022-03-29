/// <reference types="cypress" />

class ToDoPage {
  navigateToHomeScreen() {
    cy.visit('https://example.cypress.io/todo')
  }

  expectExistingTask(taskCount) {
    cy.get('.todo-list li').should('have.length', taskCount)
  }

  addTodo(todoText) {
    cy.get('[data-test="new-todo"]').type(`${todoText}{enter}`)
  }

  expectTodoText(taskNumber, text) {
    cy.get(`.todo-list  li:nth-child(${taskNumber})`).should('have.text', text)
  }

  clickCheckBox(checkbox){
    cy.get(`:nth-child(${checkbox}) > .view > .toggle`).check()
  }

  expectIsCompleted(todoName){
    cy.contains(todoName).parents('li').should('have.class', 'completed')
  }
}

export default new ToDoPage 
