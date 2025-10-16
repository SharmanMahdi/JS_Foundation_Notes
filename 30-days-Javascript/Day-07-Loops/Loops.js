//  Loops in javascript are used to repeat a block of code until a specified condition is met.
// There are several types of loops in JavaScript:

// - For Loop : used for iterating a specific number of times
// - While Loop: used for iterating as long as a condition is true > 1 Condition is met
// - Do While Loop: similar to while loop, but executes at least once before checking the condition
// - For...in Loop: used for iterating over object properties 
// - For...of Loop: used for iterating over iterable objects like arrays

// 1. For Loop
for (let i = 0; i < 5; i++) {
    // console.log(`For Loop iteration: ${i}`);
}
// Output:
// For Loop iteration: 0
// For Loop iteration: 1
// For Loop iteration: 2
// For Loop iteration: 3
// For Loop iteration: 4

// 2. While Loop
let j = 0;
while (j < 5) {
    // console.log(`While Loop iteration: ${j}`);
    j++;
}
// Output:
// While Loop iteration: 0
// While Loop iteration: 1
// While Loop iteration: 2
// While Loop iteration: 3
// While Loop iteration: 4

// 3. Do While Loop
let k = 0;
do {
    // console.log(`Do While Loop iteration: ${k}`);
    k++;
} while (k < 5);    
// 4. For...in Loop (used for iterating over object properties)
const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
    // console.log(`For...in Loop: ${key} = ${person[key]}`);
}
// Output:
// For...in Loop: name = John
// For...in Loop: age = 30
// For...in Loop: city = New York

// 5. For...of Loop (used for iterating over iterable objects like arrays)
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    // console.log(`For...of Loop: ${color}`);
}
// Output:
// For...of Loop: red
// For...of Loop: green
// For...of Loop: blue

// These loops help in reducing code redundancy and make it easier to manage repetitive tasks in JavaScript.

//  Loop Challenge: 
// 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'
let sum = 0
let i = 1

while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

//  2. Write a 'for' loop that iterates through an array of numbers and prints each number to the console.
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    // console.log(`For Loop: ${numbers[i]}`);
}