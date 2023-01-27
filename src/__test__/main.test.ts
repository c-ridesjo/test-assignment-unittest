/**
 * @jest-environment jsdom
 */

import {createNewTodo} from './../ts/main';
import { Todo } from "./../ts/models/Todo";

beforeEach (() => {
    document.body.innerHTML="";
});

test ("Should create new todo", () => {
    
    // Arrange - Skapa förutsättningar för att kunna anropa funktionen
  
    document.body.innerHTML=`<div id="newTodoForm"></div>`  // Ange källa för DOM
    let textInput:string = "städa";     // Spara i en variabel 
    let myList:Todo[]; // deklarerar en lista
    myList = [];  // tilldelar listan ingenting

    // Act - Anropa funktionen som ska testas
    createNewTodo(textInput, myList);   // lägg till uppgift att göra i listan 
    document.body.innerHTML=`<div id="newTodoForm"></div>`  // Ange källa för DOM
    // Assert - Kontroll av förändrade värden
    let ulElement = document.getElementById("todos") as HTMLUListElement;   // Hämta hela ul-listan
  
    let liElement = ulElement.getElementsByTagName("li")[0];   // Hämta första (li) todo i listan

    // let textfield = document.getElementById("newTodoText")?.innerHTML;
    //console.log (liElement.textContent);
    expect (liElement.textContent).toBe(textInput);    
    //expect (true).toBe(true);

});  
