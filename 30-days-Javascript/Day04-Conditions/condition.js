// Conditional Statements
/*
Conditional statements are used to perform different actions based on different conditions.
1. The statement should be enclosed in curly braces {}.
2. The condition is evaluated to either true or false.
3. If the condition is true, the code block inside the if statement is executed.
4. If the condition is false, the code block inside the else statement is executed (if provided).
Syntax:
  if (condition) {
    // code to be executed if condition is true
  } else {
    // code to be executed if condition is false
  }
    We can also use else if to check multiple conditions. and switch case for multiple conditions. We can also use ternary operator for conditional statements.
*/
// Check if a number is greater than another number
// Example: 01
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is not greater than num2");
}
// Example: 02 Checking if a string is equal to another string
let username1 = "Hello";
let username2 = "Sharma";
if (username1 == username2) {
  console.log("username1 is equal to username2");
} else {
  console.log("username1 is not equal to username2");
}
// != Can be used for not equal to
// Example: 03 Checking if a number is even or odd
let number = 8;
if (number %2 != 0) {
    console.log("The number is odd");
} else {
    console.log("The number is even");
}
// Not a good code to use != instead of == .

// Example: 04 Checking if a person is eligible to vote

let age = 21;
if (age < 18){
    console.log("Not eligible to vote");
} else{
    console.log("Eligible to vote");
}

//  Checking if a variable is a number or not:
let value = "Yusuf";
if (typeof value === 'number') {
    console.log("The value is a number");
} else {
    console.log("The value is not a number");
}
//  anything with "" is a string. and anything with '' is also a string. and anything without "" or '' is a number. unless it is a boolean value true or false.

// Example: 05 Using else if to check multiple conditions
let marks = 69;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}