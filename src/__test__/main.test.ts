/**
 * @jest-environment jsdom
 */

import * as main from './../ts/main';
import { Todo } from "./../ts/models/Todo";

beforeEach (() => {
    document.body.innerHTML="";
});

test("should create new todo", () => {

    // Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
  
    const todos: Todo[] = [];
    const todoTxt = "Hello world";
  
    // Act
    main.createNewTodo(todoTxt, todos);
  
    // Assert
    expect(document.querySelector(".todo__text")?.innerHTML).toEqual(
      `${todoTxt}`
    );
});

test("should create html", () => { 

    // Arrange
    let todos: Todo[] = [];
    let todo2 = { text: "todo", done: false };
    let spyOnCreateHtml = jest
      .spyOn(main, "createHtml").mockReturnValue();
  
    // Act
    main.clearTodos(todos);
    main.toggleTodo(todo2);
    main.init();
    document.getElementById("sortTodos")?.click();
  
    // Assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    expect(spyOnCreateHtml).toHaveBeenCalledTimes(3);
    spyOnCreateHtml.mockRestore();
});
    
test("should toggle todo", () => {        
    
    // Arrange
    let todo = { text: "todo", done: false };
    let spyOnToggleTodo = jest.spyOn(main, "toggleTodo").mockReturnValue();  
  
    // Act
    main.toggleTodo(todo);
  
    // Assert
    expect(spyOnToggleTodo).toHaveBeenCalled();
    spyOnToggleTodo.mockRestore();
});

test("should clear todos", () => {   
    
    // Arrange
    let spyOnClearTodos = jest.spyOn(main, "clearTodos").mockReturnValue();
  
    // Act
    main.clearTodos([]);
  
    // Assert
    expect(spyOnClearTodos).toHaveBeenCalled();
    spyOnClearTodos.mockRestore();
});

test("should display error", () => {

    // Arrange
    const error = "testing";
    const show = true;
    document.body.innerHTML = `
    <div id="error" class="error"></div>
    `;
    let errorContainer: HTMLDivElement = document.getElementById("error") as HTMLDivElement;
    
    // Act
    main.displayError(error, show);    

    // Assert
    expect(errorContainer.innerHTML).toBe(error);    
    expect(errorContainer.classList.contains("show")).toBe(true);
});