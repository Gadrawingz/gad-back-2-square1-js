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
