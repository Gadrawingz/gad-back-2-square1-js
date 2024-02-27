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

    getFullName : function() {
        return this.firstName +" "+this.lastName;
    }
};

