// Use of confirm:
// The syntax: result = confirm(question);
// The FX confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

let isDeveloper = confirm("Are you a developer?")
document.write(`Answer: ${isDeveloper}`)
document.write(`<br>`);
document.write(`Data type: ${typeof isDeveloper}`)

// Example 2: