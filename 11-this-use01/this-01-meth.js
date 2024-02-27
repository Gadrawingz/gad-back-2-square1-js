// 1. First use case...
let student = {
    fullName : "Jhene Aiko",
    age : 48,
    gender : "Female",

    printDetails() {
        document.write(`<br>Student data is ${this.fullName} ${this.age}<br>`);
    }
};

// Usage
document.write("Gender: "+student.gender);
student.printDetails();