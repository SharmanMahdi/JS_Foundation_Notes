// Data Types in JavaScript
// Primitive Data Types: string, number, boolean, null, undefined, symbol, bigint
// Non-Primitive Data Types: object, array, function

// Example of Primitive Data Types:

let surname = 'John'; // string
console.log(surname);

let age = 30; // Number
console.log(age);

let isStudent = false; // boolean
console.log(age, isStudent);

let address = null; // null
console.log(address);

let phoneNumber; // undefined
console.log(phoneNumber);

let uniqueId = Symbol('id'); // symbol
console.log(uniqueId);

let bigNumber = 9007199254740991n; // bigint
console.log(bigNumber);

// Typeof operator to check data types

// Typeof operator to check data types
console.log(typeof surname);
console.log(typeof  age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phoneNumber);
console.log(typeof uniqueId);
console.log(typeof bigNumber);

// Example of Non-Primitive Data Types:
let person = { Firstname: 'James', age: 30 }; // object
let numbers = [1, 2, 3, 4, 5]; // array
let greet = function() { console.log('Hello!'); }; // function
console.log(person);
console.log(numbers);
greet();