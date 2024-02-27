// 2. This in combination with arrow function...
let student = {
    names : "Pedro Gomez",
    age : 98,
    fullData : () => this.names+" "+this.age
};
document.write(student.fullData()) // undefined

// If we try to implement an arrow function to it 
// as an object method, we won't be able to access 
// the object through the this keyword::::: undefined.

