/*
Use of confirm
--------------
Example1:
let isOk = confirm("Are you ok?")
document.write(isOk); // true

Example2:
let check = confirm("Do you have permission?")
if(check==true) {
    document.write("You are allowed to visit!")
} else {
    document.write("You are not allowed!")
}



let check = confirm("Do you have permission?")
let b = (check==true) ? "Allowed" : "Not allowed"
document.write(b)

let question = confirm("Are you good?")
document.write(typeof question) // Boolean

*/