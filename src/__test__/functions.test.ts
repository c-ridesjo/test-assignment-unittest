/**
 * @jest-environment jsdom
 */

import {addTodo, changeTodo, removeAllTodos} from './../ts/functions';
import { Todo } from "./../ts/models/Todo";

beforeEach (() => {
    document.body.innerHTML="";
});

test ("Should add text to div", () => {         // Test 1
    
    // Arrange - Skapa förutsättningar för att kunna anropa funktionen
    let textInput:string = "städa";     // Spara i en variabel 
    let myList:Todo[];                  // deklarerar variabeln
    myList = [];                        // tilldelar variabeln en tom lista
 
    // Act - Anropa funktionen som ska testas
    let result = addTodo(textInput, myList);   // anropar functionen addTodo
    
    // Assert - Kontroll av förändrade värden
    expect (result.success).toBe(true);    
    expect (result.error).toBe("");
});

test ("Should not add text to div", () => {       // Test 2

    // Arrange
    let textInput:string = "st";     // Spara i en variabel 
    let myList:Todo[];              // deklarerar variabeln
    myList = [];                    // tilldelar variabeln en tom lista

    // Act
    let result = addTodo(textInput, myList);   // anropar functionen addTodo

    // Assert 
    expect (result.success).toBeFalsy;    
    expect (result.error).toBe("Du måste ange minst tre bokstäver");
});

test ("Should mark as done", () => {                // Test 3
    
    // Arrange 
    let textInput:string = "städa";     // Spara i en variabel 
    let myList:Todo[];                  // deklarerar en lista
    myList = [];                        // tilldelar listan ingenting
    let result = addTodo(textInput, myList);   // lägg till uppgift att göra i listan
    
    // Act 
    if (result.success = true) {    // Om det gick bra att lägga till en uppgift i listan
        changeTodo(myList[0]);      // Klar med uppgiften
    }
    else {
        console.log("no object in list was created");   
    }
    
    // Assert 
    expect (myList[0].done).toBe(true);     // Kontrollerar att första uppgiften är markerad som klar 
 });
 
 test ("Should remove all todos", () => {                // Test 4
    
    // Arrange
    let textInput:string = "städa";     // Spara i en variabel 
    let myList:Todo[];                  // deklarerar en lista
    myList = [];                        // tilldelar listan ingenting
    let result = addTodo(textInput, myList);   // lägg till uppgift att göra i listan
    
    // Act 
    if (result.success = true) {     // Om det gick bra att lägga till en uppgift i listan
        removeAllTodos(myList);      // Klar med uppgiften
    }
    else {
        console.log("no object in list was created");   
    }

    // Assert 
    expect (myList.length).toBe(0);     // Kontrollerar att listan är tom
});