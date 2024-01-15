// 1. Reminder (%) Operator
// n % m is the remainder of integer division of n by m
let number1 = 40;
let number2 = 4;
let number3 = 3;
document.write("<br>"+number1 % 16); 
// Because 40 / 16 Rem is 8


// 2. Exponentiation **
// g ** h g raises to the power of h
document.write("<br>"+number1 ** number2)
document.write("<br>"+40 ** 2) // 1600

// NB1:(Power of 1/2 is the same as square root)
document.write("<br>", 5 ** (1/2))
document.write("<br>", 5 ** 2)

// NB2:(Power of 1/3 is the same as cubic root)
document.write("<br>", 5 ** (1/3))
document.write("<br>", 5 ** 2)


// Assignment = returns a value:??
let f = 68;
let g = 4;
let h = 3;
let hh = 10 - (f = 5 + 3); // 10 - 8
let gg = 30 - (g = h + 5); // 30 - 7
// Here the call (g = ...) writes the value into g
// Then returns it.

// Thats for + and -
let pp = 74 - (h = f + g - h) 
document.write("<hr>", hh)
document.write("<br>", gg)
document.write("<br>", pp) // ??


// Chaining Assignment
// This evaluates from right to left
let j1, ok, ya;
j1 = ok = ya = 4 + 4;

// Evaluate like this from 4 + 4 to ya then ok....
document.write("<br>", j1) // 8
document.write("<br>", ok) // 8
document.write("<br>", ya) // 8

// Modify-in-place
// Here I apply an operator to a variable and store
// the new result in that same value.
let big = 24;

big = big + 3; // 7, big as big = big + 7
document.write("<br>", big) // 27

let small = 14
small += 2; // 16, same as small = small + 2
document.write("<br>", small) // 16

let num5 = 6;
num5 *= 2 + 3; // same as num5 * 5, 6 * 5
document.write("<br>", num5) // 30


