// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

let isMale = false;

let gender = isMale ? "male" : "female";

console.log(gender);

// ----------------------------------------------------------------

let gender;

let isMale = true ? (gender = "male") : (gender = "female");

console.log(gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */

// let firstInteger = a;
// let secondInteger = b;
// let sum = firstInteger + secondInteger;
// let substraction = firstInteger - secondInteger

// if (a === 8 || b === 8) {
//     console.log()
// }
// else if (a + b )

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */

let stringOne = "Test";
let stringTwo = "String";
let concatenatedString = stringOne + stringTwo;
console.log(concatenatedString);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

let num1 = 12;
let num2 = 300;
let num3 = 60;

if (num1 >= num2 && num1 >= num3) {
  console.log(num1);
  if (num2 >= num3) {
    console.log(num2);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2);
  if (num1 >= num3) {
    console.log(num1);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num1);
  }
} else {
  console.log(num3);
  if (num1 >= num2) {
    console.log(num1);
    console.log(num2);
  } else {
    console.log(num2);
    console.log(num1);
  }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

let numberA = a;
let numberB = b;

let theAverage = (numberA + numberB) / 2;

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

let string1 = "Hello";
let string2 = "World!";

let StringLongest = string1.length() > string2.length() ? string1 : string2;

console.log(StringLongest);

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

let integerValue = "34";

if (Number.isInteger(integerValue)) {
  console.log("its a number");
} else {
  console.log("Not a number");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

let numberFirst = a;
let percentage = b;
let thepercentageFormula = (a * b) / 100;

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

let numberExample = 8;

if (numberExample % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}
