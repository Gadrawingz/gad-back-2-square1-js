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