// ## 💻 Exercises

// ### Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    
//     ```bash
//     Enter your age: 30
//     You are old enough to drive.
    
//     Enter your age:15
//     You are left with 3 years to drive.
    
//     ```
    
// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    
//     ```bash
//     Enter your age: 30
//     You are 5 years older than me.
    
//     ```
    
// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//     - using if else
//     - ternary operator.
    
//     ```jsx
//       let a = 4
//       let b = 3
    
//     ```
    
//     ```bash
//       4 is greater than 3
    
//     ```
    
// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    
//     ```bash
//     Enter a number: 2
//     2 is an even number
    
//     Enter a number: 9
//     9 is is an odd number.
    
//     ```
    

// ### Exercises: Level 2

// 1. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
// 2. Check if the season is Autumn, Winter, Spring or Summer.
// If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```bash
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// ```

// ### Exercises: Level 3

// 1. Write a program which tells the number of days in a month.

// ```bash
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// ```

// 1. Write a program which tells the number of days in a month, now consider leap year.

// ```bash
            // Solution: Path: Soln_Conditionals.js

let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log("You are left with " + (18 - age) + " years to drive.");
}

let myAge = 25; // Example age
let yourAge = prompt("Enter your age:");
yourAge = Number(yourAge);

if (myAge > yourAge) {
    console.log("You are " + (myAge - yourAge) + " years older than me.");
} else if (myAge < yourAge) {
    console.log("You are " + (yourAge - myAge) + " years older than me.");
} else {
    console.log("We are the same age.");
}
let a = 4;
let b = 3;
if (a > b) {
    console.log(a + " is greater than " + b);
} else {
    console.log(a + " is less than " + b);
}
// Using ternary operator
let result = (a > b) ? (a + " is greater than " + b) : (a + " is less than " + b);
console.log(result);
let number = prompt("Enter a number:");
number = Number(number);
if (number % 2 === 0) {
    console.log(number + " is an even number");
} else {
    console.log(number + " is an odd number.");
}
let score = prompt("Enter your score:");
score = Number(score);
let grade;
if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score < 80) {
    grade = "B";
} else if (score >= 60 && score < 70) {
    grade = "C";
} else if (score >= 50 && score < 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Your grade is: " + grade);
let month = prompt("Enter a month:");
month = month.toLowerCase();
let season;
if (month === "september" || month === "october" || month === "november") {
    season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
    season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
    season = "Spring";
} else {
    season = "Summer";
}
console.log("The season is: " + season);
let day = prompt("What is the day today?");
day = day.toLowerCase();
let dayType;
if (day === "saturday" || day === "sunday") {
    dayType = "weekend";
} else {
    dayType = "working day";
}
console.log("Today is a " + dayType + ".");
let monthDays = prompt("Enter a month:");
monthDays = monthDays.toLowerCase();
let days;
switch (monthDays) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        days = 30;
        break;
    case "february":
        days = 28; // Not considering leap year for simplicity
        break;
    default:
        days = 0; // Invalid month
}
if (days > 0) {
    console.log(monthDays.charAt(0).toUpperCase() + monthDays.slice(1) + " has " + days + " days.");
}// ```bash
//   Enter a month: January
//   January has 31 days.
//   Enter a month: JANUARY
//   January has 31 days.
//   Enter a month: February
//   February has 28 days.
//   Enter a month: FEbruary
//   February has 28 days.
// ```
//   Enter a month: February
//   Enter a year: 2020
//   February has 29 days.
let monthLeap = prompt("Enter a month:");
monthLeap = monthLeap.toLowerCase();
let year = prompt("Enter a year:");
year = Number(year);
let daysLeap;
if (monthLeap === "february") {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysLeap = 29;
    } else {
        daysLeap = 28;
    }
} else {
    switch (monthLeap) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            daysLeap = 31;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            daysLeap = 30;
            break;
        default:
            daysLeap = 0; // Invalid month
    }
}
if (daysLeap > 0) {
    console.log(monthLeap.charAt(0).toUpperCase() + monthLeap.slice(1) + " has " + daysLeap + " days.");
}   // ```bash
//   Enter a month: February
//   Enter a year: 2020
//   February has 29 days.
// ```  
// solution end.