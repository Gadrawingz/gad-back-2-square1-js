// 01: Using call() Method
function sum(a, b) {
  return a + b;
}

// Invoking sum() by passing this and 'a', 'b' args 
let result1 = sum.call(this, 5, 3);
document.write(result1+"<br>"); // 8
let result2 = sum.call(this, 12, 4);
document.write(result2+"<br>"); // 16


// 02. With and without using call()
function getProduct(x, y) {
    return x * y;
}

// Without using call()- we can directly invoke getProduct() 
let res1 = getProduct(7, 3);
document.write(`${res1}<br>`);

// Invoking getProduct() using call() method
let res2 = getProduct.call(this, 4, 2); // 8
document.write(`${res2}<hr>`);

// 03. Passing Object as this Value in call() method
// Object definition
const player = {
    firstName: "Sadio",
    lastName: "Mane",
    playerAge: 30,
};

// Function definition
function greet() {
    const str = `My name is ${this.firstName} ${this.lastName}
    . I am ${this.playerAge} years old`;
    document.write(str);
}
// passing object as this value in call() method
greet.call(player);

