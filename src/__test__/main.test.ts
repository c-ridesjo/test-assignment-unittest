/**
 * @jest-environment jsdom
 */

import * as main from './../ts/main';
//import * as functions from './../ts/functions';
import { Todo } from "./../ts/models/Todo";

beforeEach (() => {
    document.body.innerHTML="";
});

test ("Should create new todo list", () => {          
    
    // Arrange 
    const todoText = "Laga mat"
    const todos: Todo[] = [];

    const spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();
    document.body.innerHTML = `<ul id = "todos" class = "todo"></ul>`;           

    // Act 
    main.createNewTodo(todoText, todos); 

    // Assert 
    expect(todos.length).toBe(1);
    expect(spyOnCreateHtml).toHaveBeenCalled();
    spyOnCreateHtml.mockRestore();    
});  

test ("should create HTML", () => {
    
    // Arrange
    const todoText = "halloj";
    let todos: Todo[] = [];
    let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();
    // Act
    main.createNewTodo(todoText, todos);
    // Assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    expect(spyOnCreateHtml).toBeCalledTimes(1);
    spyOnCreateHtml.mockRestore();
});

test("should display error", () => {
    const error = "testing";
    const show = true;
    document.body.innerHTML = `
    <div id="error" class="error"></div>
    `;
    let errorContainer: HTMLDivElement = document.getElementById("error") as HTMLDivElement;
    
    main.displayError(error, show);
    
    expect(errorContainer.innerHTML).toBe(error);
    
    expect(errorContainer.classList.contains("show")).toBe(true);
});
      
// test("toggle todo")

// test("clear todos")


//fyll på med fler test - testa fler funktioner, även använda spioner

//inte anropa andra funktioner utan bara kontrollera att anropet i sig görs (utan att köra koden i den anropande funktionen).


