// Variable creation

// 1. Declare variable first and then assign it
let variable1;
variable1 = "Var 1";
document.writeln(variable1);


// 2. I can also declare multiple variables in one line:
let num1 = 3, num2 = 40, person = "Peter";
document.write("<br>");
document.writeln(num1);
document.writeln(num2);
document.writeln(person);


// Defining multiple variables in this multiline style:
let bool1 = true,
bool2 = false,
bool3 = true;
document.writeln(bool1)

// Or even in the “comma-first” style:
let str1 = "Ok"
    ,str2 = "Okay"
    ,str3 = "Great"
document.writeln("<br>")
document.write(str1, str2, str3)

// Declaration of 2 variables and copy data from one into the other.
bigTeam = "Liverpool";
favTeam = bigTeam;
// copy 'Liverpool' from bigTeam into favTeam
document.writeln("<br>")
document.write(bigTeam," ",favTeam)

// NB: Creation of variable using Symbols:
let $ = 50, $$ = 500, _$ = 30;
document.writeln("<br>")
document.write($," ", $$, " ",_$)

// DATA TYPE::
// The eight basic data types in JavaScript.
// 1. Number: This type represents both integer and floating point numbers.
let anyNumber = 435;
anyNumber = 26.720;
document.writeln("<br>")
document.write(anyNumber)

// Besides regular numbers, there are so-called “special numeric values” 
// which also belong to this data type: Infinity, -Infinity and NaN.
document.writeln("<br>")
document.write(1 / 0);
document.write(Infinity);
document.write("Not a Num" / 4); // NaN


// 2. BigInt: represents both integer and floating point numbers.aScript, the “number” 
// type cannot safely represent integer values larger than (2^53-1 =9007199254740991), 
// or less than -(253-1) for negatives.
let largeNumber = 9007199254740991;
document.writeln("<br>");
document.write(largeNumber + 1); // 9007199254740992
document.writeln("<br>");
document.write(largeNumber + 3); // 9007199254740992

// Note: BigInt type was recently added to JS to represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer
let larger = 9007199254740990005n;
document.writeln("<br>");
document.write(typeof(larger)); // 9007199254740992
document.writeln("<hr>");

// 3. String: Sequence of Chars surrounded by quotes.
// In JavaScript, there are 3 types of quotes.
// 3.1: Double quotes: "Rwanda".
let country = "Rwanda";
// 3.2: Single quotes: "Nyagatare".
let city = 'NGARAMA';
// 3.3: Double quotes: "Hello".
let village = 'Kiyovu';

// GAD INFO: String can contain another string
let phrase = `I live in ${city} - ${village}`
document.write(phrase);

// FORGOTTEN: UPPERCASE CONSTANT:
const COLOR_GREEN = "#00FF00";
const COLOR_ORANGE = "#FF7F00";
document.writeln("<br>");
document.write(COLOR_GREEN, " ", COLOR_ORANGE);

// COLOR_ORANGE is much easier to remember than "#FF7F00"
let orange = COLOR_ORANGE;

// Embed a variable or expression
document.write(`<br>Favorite color is ${orange}`)
document.write(`<br>Simple expression goes like  ${5 + 5 + 14}`)
document.writeln("<br>");

// 4. Boolean (logical type)
// The boolean type has only two values: true and false.
// Commonly used to store yes(correct) /no values(incorrect”)

let ageFieldChecked = true;
let isPasswordCorrect = false;
let isSalaryGreater = 40000 > 20000
document.write(`${isSalaryGreater}<br>`)


// 5. The “null” value
// The special null value does not belong to any of the types described above.
// It represents “nothing”, “empty” or “value unknown”.
let bookNumber = null;
document.write(`${bookNumber}<br>`)

// 6. The “undefined” value: 
// The special value undefined also stands apart. It means that “value is not assigned”.
let bookName = undefined;
document.write(`${bookName}<br>`) 

// typeof: typeof operator returns the type of the operand.
document.write(`${bookName}<br>`);