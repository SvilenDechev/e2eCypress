/// <reference types="cypress" />
import todoPage from "../page-object.js/todoPage";
import ToDoPage from "../page-object.js/todoPage";
import example from "../fixtures/example.json";

describe('My first test --example to-do app', () => {

  beforeEach(() => {
    cy.visit('/todo')
  });
  it('should display two todo by default', async () => {
    //Testing Library
    cy.findByPlaceholderText('What needs to be done?').type(`${example.addTodoText}{enter}`)
    //added as cypress global command
    cy.expectExistingTaskCyCommand(3);
    //added as custom method
    ToDoPage.expectExistingTask(3);
    //chaining command 
    cy.get('.todo-list li').should('have.length', 3).last().should('have.text', example.addTodoText);
  });

  it('add todo', () => {
    const TODO_TEXT = ['Pay electric bill', 'Walk the dog', 'learning cypress']
    const newTodo = TODO_TEXT[2];

    ToDoPage.addTodo(newTodo);
    ToDoPage.expectExistingTask(3)

    TODO_TEXT.forEach((index, text) => {
      ToDoPage.expectTodoText(text + 1, index)
    })
  });

  it('check the todo as complete', () => {
    ToDoPage.clickCheckBox(1);
    ToDoPage.expectIsCompleted(example.firstTodoText);
  });

  context('with checkbox state', () => {
    beforeEach(() => {
      ToDoPage.expectExistingTask(2)
      ToDoPage.clickCheckBox(1);
    })


    it('check completed', () => {
      cy.contains('Completed').click()
      ToDoPage.expectExistingTask(1)
    })

    it('check active', () => {
      cy.contains('Active').click();
      ToDoPage.expectExistingTask(1);
      ToDoPage.expectTodoText(1, example.secondTodoText);
      //cypress way
      cy.get('.todo-list li').should('have.length', 1).and('have.text', 'Walk the dog').and('be.visible')//.and('not.be.visible');
    })

    it('uncheck checked checkbox', () => {
      todoPage.expectIsCompleted('Pay electric bill');
      todoPage.uncheckCheckbox(1);
      todoPage.checkbox(1).should('not.have.class', 'completed');
    });

    it('delete the item', () => {
      cy.get('.todo-list li:nth-child(1) button').as('firstTodoDeleteButton');
      //cy.get('.todo-list li:nth-child(1) button').should('be.visible');
      cy.get('@firstTodoDeleteButton').click({force:true});
      todoPage.expectExistingTask(1)
      cy.get('@firstTodoDeleteButton').click({force:true});
      todoPage.expectExistingTask(0)
    });
  })
});
