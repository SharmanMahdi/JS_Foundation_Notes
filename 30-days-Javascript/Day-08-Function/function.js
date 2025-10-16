// function
// function is a block of code that performs a specific task
// function can be called by using function name followed by parenthesis
// function can be divided into two parts
// 1. function declaration
// 2. function expression

// function declaration
// function greet() {
//     console.log("Hello!");
// }

// function expression
// let greet = function() {
//     console.log("Hello!");
// };
// // function call
// greet();

// function parameters
// function greet(name) {
//     console.log(`Hello ${name}!`);
// }----------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------  
// Example 01:
/*
1. write a function named 'makeTea' that takes one parameter 'typeOfTea' and returns a string like '"Making green tea"' when called with '"green tea"'. store the result in a variable named 'teaOrder' and log it to the console.
*/
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

// The backticks `` are used to create template literals in JavaScript. Template literals allow for embedded expressions, which can be used to create strings with dynamic content. In this case, the expression ${typeOfTea} is used to insert the value of the typeOfTea parameter into the string. "Making ${typeOfTea}" will be replaced with "Making green tea" when the function is called with "green tea" as an argument. 
// Example 02:
// Write a function named 'makeCoffee' that takes one parameter 'typeOfCoffee' and returns a string like '"Making espresso"' when called with '"espresso"'. store the result in a variable named 'coffeeOrder' and log it to the console.
function makeCoffee(typeOfCoffee){
    return `Making ${typeOfCoffee}`;
}
let coffeeOrder = makeCoffee("espresso");
console.log(coffeeOrder);

// Example 03:
// Write a function named 'makeJuice' that takes one parameter 'typeOfJuice'. inside the function, create a variable named 'juice' and assign it a string like '"Fresh orange juice"' when called with '"orange"'. return the 'juice' variable. store the result in a variable named 'juiceOrder' and log it to the console.
function makeJuice(typeOfJuice){
    let juice = `Fresh ${typeOfJuice} juice`;
    return juice;
}
let juiceOrder = makeJuice("orange");
console.log(juiceOrder);