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

let res1 = getProduct(7, 3);
document.write(`${res1}<br>`);
let res2 = getProduct(4, 2); // 8
document.write(`${res2}<br>`);