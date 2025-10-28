    // <script src="Arrays.js"></script>   
// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both files in main.js file
// See Arrays.js for the solution

// First remove all the punctuations and change the string to array and count the number of words in the array 
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(' ')
console.log(words)
console.log(words.length)

//  Exercise: Level 3
// 1. In the following shopping cart add, remove, edit items
    // - add 'Meat' in the beginning of your shopping cart if it has not been already added
    // - add Sugar at the end of you shopping cart if it has not been already added
    // - remove 'Honey' if you are allergic to honey
    // - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] 
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}   

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar')
}

if (shoppingCart.includes('Honey')) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

// 2. In the countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
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
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
}

// 3. In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}
// 4. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: Level 3
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
ages.sort()
console.log('Sorted ages:', ages)
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
console.log('Min age:', minAge)
console.log('Max age:', maxAge)
// - Find the median age (one middle item or two middle items divided by two)
let medianAge
const midIndex = Math.floor(ages.length / 2)
if (ages.length % 2 === 0) {
  medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2
} else {
  medianAge = ages[midIndex]
}
console.log('Median age:', medianAge)
// - Find the average age (sum of all items divided by number of items)
const sumAges = ages.reduce((acc, age) => acc + age, 0)
const averageAge = sumAges / ages.length
console.log('Average age:', averageAge)
// - Find the range of the ages (max minus min)
const ageRange = maxAge - minAge
console.log('Age range:', ageRange)
// - Compare the value of (min - average) and (max - average), use abs() method
const minAvgDiff = Math.abs(minAge - averageAge)
const maxAvgDiff = Math.abs(maxAge - averageAge)
console.log('Min - Average:', minAvgDiff)
console.log('Max - Average:', maxAvgDiff)
// 2. Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10)
console.log('First ten countries:', firstTenCountries)
// 3. Find the middle country(ies) in the countries array
let middleCountries
const countriesMidIndex = Math.floor(countries.length / 2)
if (countries.length % 2 === 0) {
  middleCountries = [
    countries[countriesMidIndex - 1],
    countries[countriesMidIndex]
  ]
} else {
  middleCountries = [countries[countriesMidIndex]]
}
console.log('Middle country(ies):', middleCountries)
// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , add one more country to the first half and divide it into two equal arrays.
let firstHalf, secondHalf
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countriesMidIndex)
  secondHalf = countries.slice(countriesMidIndex)
} else {
  firstHalf = countries.slice(0, countriesMidIndex + 1)
  secondHalf = countries.slice(countriesMidIndex + 1)
}
console.log('First half:', firstHalf)
console.log('Second half:', secondHalf)
// End of Level 3
// See arrays.js for MORE solution