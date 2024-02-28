// Object with multi-word properties

let student = {
    firstName : "Daniel",
    lastName : "Agger",
    ["enjoys tennis"] : false
};

let student2 = {};
// set
student2["has good vibes"] = true;
// get
document.write(student2["has good vibes"]); //true
// delete
// delete student2["has good vibes"];



// 2. The variable key may be calculated at run-time or depend 
// on the user input. And then we use it to access the property
let player = {
    fullName: "Darwin Nunez",
    score: 40,
    age : 24
};

let key = prompt("Anything you wanna know about player?","fullName");

// Access by variable
document.write("<br>");
document.write(player[key]);
document.write("<br>");


