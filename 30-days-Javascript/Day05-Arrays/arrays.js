// Challenge - Arrays in JavaScript
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.
// Each item in an array is called an element, and each element is accessed by its numerical index.
// Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
// Arrays can hold items of different data types, including numbers, strings, objects, and even other arrays.
// Arrays are dynamic in size, meaning they can grow or shrink as needed.
// Arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on.
// Arrays can be created using array literals or the Array constructor.
// Arrays have built-in methods for common operations, such as adding or removing elements, sorting, and searching.
// Arrays are widely used in JavaScript for various purposes, such as storing lists of data, managing collections of items, and implementing data structures like stacks and queues.

// Example of an array:

/*

## Declare an array named 'Teaflavors' That contains the strings 'Green Tea', 'Black Tea', 'Oolong Tea', and 'Herbal Tea'.
## Perform the following operations on the array:
1. Log the entire array to the console.
2. Access and log the second element in the array.
3. Add a new flavor 'Chai Tea' to the array Using 'push()'.
4. Remove the first flavor from the array Using 'shift()' or 'splice()' 
// Using pop() to remove the last flavor from the array 'pop()'.
5. Change the second flavor from the array to 'White Tea'.
6. softcopy the array to a new array named 'softTeaFlavors' and log it to the console.
7. Find the index of 'Oolong Tea' in the array and log it to the console.
8. hardcopy the array to a new array named 'hardTeaFlavors' and log it to the console.
9. Log the length of the array to the console.
10. merge the array with another array ['Matcha', 'Earl Grey'] and log the result to the console.


*/
 let Teaflavors = "Green Tea, Black Tea, Oolong Tea, Herbal Tea".split(", ");
//1. console.log(Teaflavors);
//2. console.log(Teaflavors[1]);
//3. Teaflavors.push("Chai Tea"); // Using push() to add a new flavor 'Chai Tea' to the array.
// console.log(Teaflavors);
//4. Teaflavors.shift(); // Using shift() to remove the first flavor from the array.
// console.log(Teaflavors);
//5. Teaflavors[1] = "White Tea"; // Changing the second flavor from the array.
// console.log(Teaflavors);
//6. let softTeaFlavors = Teaflavors.slice(); // softcopy the array to a new array named 'softTeaFlavors'
// console.log(softTeaFlavors); 

//7. console.log(Teaflavors.indexOf("Oolong Tea")); // Find the index of 'Oolong Tea' in the array and log it to the console.

//8 let hardTeaFlavors = [...Teaflavors]; // hardcopy the array to a new array named 'hardTeaFlavors'
// console.log(hardTeaFlavors);

//9. console.log(Teaflavors.length); // Log the length of the array to the console.

//10.
 let moreTeaFlavors = ["Matcha", "Earl Grey"];
 let allTeaFlavors = Teaflavors.concat(moreTeaFlavors); // merge the array with another array ['Matcha', 'Earl Grey'] and log the result to the console.
console.log(allTeaFlavors);
// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
            // The spread operator (...) can also be used to merge arrays.
// Example: Using spread operator to merge arrays
let allTeaFlavors2 = [...Teaflavors, ...moreTeaFlavors];
console.log(allTeaFlavors2);



// Note: The spread operator (...) is used to expand the elements of an array. It can be used to create a shallow copy of an array or to merge multiple arrays into one.



// End of Challenge

// Example 02:
// You have an array named 'cityBucketList' containing '"New York', 'Tokyo', 'Edmonton', 'London"'.
// Check if 'London' is in the array and store the result in a variable named 'isLondonInList'. Log the variable to the console.
let cityBucketList = ["new york", "tokyo", "edmonton", "London"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList); // true
// The includes() method is used to check if an array contains a specific element. It returns true if the element is found, and false otherwise.

// Example 03:
/* Create an array on your name "Sharma mahdi" and perform the following operations: 
1. create space between each letter of your name in one line,
2. give number each later,
3. Reverse it and log it to the console.

*/
let myName = "Sharma mahdi";
let nameArray = myName.split(""); // split() method is used to split a string into an array of substrings.
console.log(nameArray); // ['S', 'h', 'a', 'r', 'm', 'a', ' ', 'm', 'a', 'h', 'd', 'i']
let nameWithSpaces = nameArray.join(" "); // join() method is used to join all elements of an array into a string.
console.log(nameWithSpaces); // S h a r m a   m a h d i
let nameWithNumbers = nameArray.map((letter, index) => `${index + 1}:${letter}`); // map() method is used to create a new array by calling a function on every element of the array.
console.log(nameWithNumbers);
