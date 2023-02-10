/**
 * @jest-environment jsdom
 */

import {createNewTodo} from './../ts/main';
import { Todo } from "./../ts/models/Todo";

beforeEach (() => {
    document.body.innerHTML="";
});

test ("Should create new todo", () => {           // Test 5 - fungerar inte
    
    // Arrange 
    document.body.innerHTML=`<div id="newTodoForm"></div>`      // Ange källa för DOM
    let textInput:string = "städa";     // Spara i en variabel 
    let myList:Todo[];                  // deklarerar en lista
    myList = [];                        // tilldelar listan ingenting

    // Act 
    createNewTodo(textInput, myList);                       // lägg till uppgift att göra i listan 
    document.body.innerHTML=`<div id="newTodoForm"></div>`  // Ange källa för DOM

    // Assert 
    let ulElement = document.getElementById("todos") as HTMLUListElement;   // Hämta hela ul-listan
    let liElement = ulElement.getElementsByTagName("li")[0];                // Hämta första (li) todo i listan
    //console.log (liElement.textContent);
    expect (liElement.textContent).toBe(textInput);    
    //expect (true).toBe(true);
});  


//fyll på med fler test - testa fler funktioner, även använda spioner

//inte anropa andra funktioner utan bara kontrollera att anropet i sig görs (utan att köra koden i den anropande funktionen).