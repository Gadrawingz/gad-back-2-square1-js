
// Interaction:

// 1. Alert:


// 2. Prompt:
// The function prompt accepts two arguments:
// result = prompt(title, [default]);
// It shows a modal window with a (text message), (an input field) for the visitor, 
// and the buttons OK/Cancel.
// > title: The text to show the visitor.
// > default: An optional second parameter, the initial value for the input field. 

let userName = prompt("What is your name?", "Peter")
document.write("Your name is: ",userName)

let userAge = prompt("How old are you? ")
document.write(`<br>You are ${userAge} old!`)

/*
The visitor can type something in the prompt input field and press "OK". 
Then we get that text in the variable. Or they can cancel the input by pressing "Cancel" 
or hitting the Esc key, then we get "null" as the result.

The call to prompt returns the text from the input field 
or null if the input was canceled. For instance:
*/
