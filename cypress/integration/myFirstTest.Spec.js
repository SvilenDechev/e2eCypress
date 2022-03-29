/// <reference types="cypress" />
import  ToDoPage  from "../page-object.js/todoPage";

describe('My first test --example to-do app', () => {

  beforeEach(() => {
    ToDoPage.navigateToHomeScreen()
  });

  it('should display two todo by default', async () => {
    ToDoPage.expectExistingTask(2)
  });

  it('add todo', () => {
    const TODO_TEXT = ['Pay electric bill', 'Walk the dog', 'cypress']

    ToDoPage.addTodo(TODO_TEXT[2])
    ToDoPage.expectExistingTask(3)

    TODO_TEXT.forEach((index, text) => {
      ToDoPage.expectTodoText(text + 1, index)
    })
  });

  it('check the todo as complete', () => {
    ToDoPage.clickCheckBox(1);
    ToDoPage.expectIsCompleted('Pay electric bill');
  })

  // context('check the item', () => {
  //   beforeEach(() => {
  //     ToDoPage.clickCheckBox(1);
  //   })
  // })

  it('check completed', () => {
    ToDoPage.expectExistingTask(2)
    ToDoPage.clickCheckBox(1);
    cy.contains('Completed').click()
    ToDoPage.expectExistingTask(1)
  })

  it('check active', () => {
    ToDoPage.expectExistingTask(2)
    ToDoPage.clickCheckBox(1);
    cy.contains('Active').click()
    ToDoPage.expectExistingTask(1)
    ToDoPage.expectTodoText(1, 'Walk the dog')
  })

      
     
  
});
