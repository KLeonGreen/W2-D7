/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/*There 5 main data types in JavaScript :
    1.Numbers(any type of number, from integers to decimals) */

let integerExample = 200;
let decimalExample = 2.5;

// 2.Strings(any type of data represented in double quotes)

let stringExample = "Hello";
let anotherString = "Welcome to the year 2028";

// 3.Booleans(its a true or false type of variable)

let booleansExample = true;
let anotherBooleans = false;

// 4.Undefined (its an undetermined variable)

let undefinedExample;

// 4.Null (its a variable with nothing inside)

let undefinedExample = null;

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

("A variable is like container that stores Data. The data can be changed later hence the name 'variable'");

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

let sum = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

let substraction = 12 - x;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = "john";
let name2 = "John";

let nameEquality = name1 === name2;

if ((name2 = "john")) {
  nameEquality = name1 === name2;
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

let X = 5 ? "five" : null;

console.log(X);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

let ternaryTest = "Leon" ? "Welcome Leon" : "You are not Leon";

console.log(ternaryTest);
