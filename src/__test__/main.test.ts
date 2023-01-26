/**
 * @jest-environment jsdom
 */

import {createNewTodo} from './../ts/main';

beforeEach (() => {
    document.body.innerHTML="";
});

test ("Should add text to div", () => {
    
// Arrange - Skapa förutsättningar för att kunna anropa funktionen
let textInput = " ",     // Spara i en variabel?      
document.body.innerHTML=`<div id="container"></div>`  // Ange källa för DOM

// Act - Anropa funktionen som ska testas
 createNewTodo(textInput);    

// Assert - Kontroll av förändrade värden
let result: string = document.getElementById("container").innerHTML;    
expect (result).toBe(textInput);    

});