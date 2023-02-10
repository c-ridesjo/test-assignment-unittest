/**
 * @jest-environment jsdom
 */

import {addTodo, changeTodo, removeAllTodos} from './../ts/functions';
import { Todo } from "./../ts/models/Todo";

beforeEach (() => {
    document.body.innerHTML="";
});

test ("Should add a todo to the list", () => {        
    
    // Arrange 
    let todos: Todo[] = [];
    let todoText: string = "Klippa gräset";
    let length = todos.length;

    //Act
    addTodo(todoText, todos);
    
    // Assert 
    expect (todos.length).toBe(length +1);    
    expect (todos[todos.length-1].text).toBe("Klippa gräset");
});

test ("Should not add a todo to the list", () => {       
    
    // Arrange 
    let todos: Todo[] = [];
    let todoText: string = " ";
    let length = todos.length;

    //Act
    addTodo(todoText, todos);
    
    // Assert 
    expect (todos.length).toBe(length);    
});

test ("Should display error message if less than three letters", () => {

    //Arrange
    const todos: Todo[] = [];
    const todo: string = "fs";

    //Act
    const { success, error } = addTodo (todo, todos);           

    //Assert
    expect(success).toBe(false);   
    expect(error).toEqual("Du måste ange minst tre bokstäver"); 
}); 

test ("Should toggle if true", () => {
    //Arrange
    const todo = new Todo ("string", false);

    //Act
    changeTodo(todo);

    //Assert
    expect(todo.done).toBeTruthy();
});

test ("Should not toggle if false", () => {
    //Arrange
    const todo = new Todo ("string", true);

    //Act
    changeTodo(todo);

    //Assert
    expect(todo.done).toBeFalsy();
});

test ("Should remove all todos", () => {

    //Arrange
    const todos: Todo[] = [             //skapar en lista med todos
        new Todo ("städa", false),
        new Todo ("handla", false),
        new Todo ("gå ut med hunden", false),
        new Todo ("tvätta", false),
    ];

    //Act
    removeAllTodos(todos);           

    //Assert
    expect(todos.length).toEqual(0);    
}); 