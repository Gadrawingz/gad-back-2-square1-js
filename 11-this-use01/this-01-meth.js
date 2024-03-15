// 1. First use case...
let student = {
    fullName : "Yuen Biao",
    age : 48,
    gender : "Female",

    // Code inside student.printDetails() 
    // may need the name of the student
    printDetails() {
        document.write(`<br>Student data is ${this.fullName} ${this.age}<br>`);
    }
};

// Usage
document.write("Gender: "+student.gender);
student.printDetails();


// 2nd way with function:
const prisoner = {
    firstName : "Jackie",
    lastName: "Chan",
    prisonerId : 4344,

    // this can be used to access other 
    // properties & methods from the same object.
    showFullName : function() {
        return this.firstName +" "+this.lastName;
    }
};

// In action...
document.write("<br>");
document.write(prisoner.showFullName());


// 3. I can call this in a function
function testThisInFunction() {
    document.write('This in func: ', this);
}
testThisInFunction();

/*
Here, the code inside person8.sendMessage() may need the name of the person8.
To access the object, a method can use the this keyword.
The value of this is the object “before dot”, the one used to call the method.
*/
document.write("<hr>");
// 2. This in method 2;
let person8 = {
    username : "Pac",
    password : "abc123",
    age : 78,

    // Method
    sendMessage() {
        document.write("Welcome, "+this.username);
    }
};
person8.sendMessage(); // Welcome, Pac.
document.write("<br>");

/* 
3. USE OF SAME FUNCTION IN 2 OBJECTS;

The value of this is evaluated during the run-time, depending on the context.
For instance, here the same function is assigned to two different objects and 
has different “this” in the calls:
*/

let user100 = { username: "Dwayne", age: 26 };
let admin10 = { username: "Jeanne", age: 98 };

function callSomeone() {
    document.write(this.username+" is "+this.age+" years old<br>");
}

// Using the same functions in two objects
user100.func = callSomeone;
admin10.func = callSomeone;

// Calling 'em:
user100.func(); // (this == user100)
admin10.func(); // (this == admin10)


