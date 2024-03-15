/*
This method Object.assign:

Syntax: Object.assign(dest, ...sources)
1.The 1st argument dest is a target object.
2.The 2nd arguments is a list of source objects.

It copies the properties of all source objects into the target dest, and then returns it as the result.
*/

// 01. I add couple of permissions to student object
let student = {
    fullName : "Gad Iradufasha",
    age: 78
};

let permission1 = { canView: true };
let permission2 = { canDelete: false };
let permission3 = { canModify: true };

// copies all properties from permission1, persmission2
// and permission3 into student
Object.assign(student, permission1, permission2, permission3);
console.log(student.fullName); // Gad Iradufasha
console.log(student.age); // 78
console.log(student.canView); // true
console.log(student.canModify); // true
console.log(student.canDelete); // false
console.log(student)
/*
Same as:
{
  fullName: 'Gad Iradufasha',
  age: 78,
  canView: true,
  canDelete: false,
  canModify: true
}
*/

// 02. For copying prop name already exists, it gets overwritten.
Object.assign(student, {fullName: "Harry Mack"})
console.log(student.fullName);
// now person = {fullName: "Harry Mack"} in place of "Gad Ir..."

// 03. I can use Object.assin to perform a simple object cloning.
let supporter = {
    username : "Luis Diaz",
    password : "ynwa24",
    favoriteTeam : "Liverpool"
};

let cloneSupporter = Object.assign({}, supporter);
console.log(cloneSupporter.username); // Luis Diaz
console.log(cloneSupporter.password); // ynwa24

