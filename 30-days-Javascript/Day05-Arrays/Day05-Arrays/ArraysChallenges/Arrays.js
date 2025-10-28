// Exercise: Level 01
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
/*
1. Declare an *empty* array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using *console.log()*
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is *not found*
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using *sort()* method
16. Reverse the array using *reverse()* method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies

*/
// 1
const arr = Array()
console.log(arr);

// 2
const numbers = [0, 4, 8, 12, 16, 20] // array of numbers
console.log('Numbers:', numbers);
 
const names = ['joe', 'doe', 'lil', 'merry', 'ali', 'sham'] // array of names
console.log('Numbers:', names);

// 3 Finding the length of an array:
console.log(names.length);

// 4. Finding first name,middle name and the last name:
console.log(names.indexOf('joe')); //first name
console.log(names[Math.floor(names.length / 2)]); //middle name
console.log(names.lastIndexOf(names[names.length - 1])); //last name

// 5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, 'ali', 'kenya', 14, 'I love school', 'Tomato']
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using *console.log()*
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0]); // first company
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // middle company
console.log(itCompanies[itCompanies.length - 1]); // last company
// 10. Print out each company
itCompanies.forEach(company => {
  console.log(company);
});
// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
  console.log(company.toUpperCase());
});
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(', ')} are big IT companies.`);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is *not found*
const companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company is not found');
}
// 14. Filter out companies which have more than one 'o' without the filter method
const companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  if ((itCompanies[i].match(/o/g) || []).length > 1) {
    companiesWithMoreThanOneO.push(itCompanies[i]);
  }
}
console.log(companiesWithMoreThanOneO);     
// 15. Sort the array using *sort()* method
console.log(itCompanies.sort());
// 16. Reverse the array using *reverse()* method
console.log(itCompanies.reverse());
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));
// 19. Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 1) {
  console.log(itCompanies[middleIndex]);
} else {
  console.log(itCompanies.slice(middleIndex - 1, middleIndex + 1));
}
// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);   
// 21. Remove the middle IT company or companies from the array
const midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 1) {
  itCompanies.splice(midIndex, 1);
} else {
  itCompanies.splice(midIndex - 1, 2);
}
console.log(itCompanies);   
// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
// End of Arrays.js
// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both files in main.js file

// See js_challenge2.js and web_techs.js for the solution

//   <>
//   <script src="countries.js"></script>
//   <script src="web_techs.js"></script>
//  </>

// End of Level 2
// First remove all the punctuations and change the string to array and count the number of words in the array