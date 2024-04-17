// chapter 14
// q1

var password = "";
if(password !== ""){
    if (password.length <= 5) {
    alert("Password must b grater than 5");
}
else{
    alert("OK");
}
}

// q2
if (A === 1) {
    if (C === "Max") {
        alert("OK");
    }
}



// q3
if (A === 1 && C === "Max") {
    alert("OK");
}


// q4
// Declare two variables and assign them the same number value
let num1 = 5;
let num2 = 5;

// Test two conditions using nested if statements
if (num1 === num2) {
    if (num1 <= num2) {
        // Display an alert message if both conditions pass
        alert("Both conditions passed!");
    }
}

// Chapter 15 (Array I)
// q1
let emptyArray = [];

// q2
let arrayWithString = ["Hello"];

// q3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // This will display "j" in an alert box

// q4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;
console.log(lengthOfArray); // This will print the total length of the array

// q5
// Declare an array with one element
let myArray = ["firstElement"];

// Add a second element at index 1
myArray[1] = "secondElement";

// Create an alert with the new element
alert(myArray[1]);


// Chapter 16 (Array II)
// q1
// Declare an array with one string element
// let myArray = ["Hello"];

// Add an additional element to the array using push
myArray.push("World");

// Create an alert with the last element
alert(myArray[myArray.length - 1]);

//q2
var Alphabet = ["h", "i", "j", "k"];

// Remove the last element from the array
Alphabet.pop();

// q3

var Alphabet = ["h", "i", "j", "k"];

// Add a new element (a number) to the end of the array
Alphabet.push(5);

// Chapter 16 (Array III)

// q1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Remove the first element from the array
sizes.shift();

// q2

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Add three number elements to the beginning of the array
sizes.unshift(1, 2, 3);


// q3
// Declare an array with one element
// var myArray = ["firstElement2"];

// Add a second element to the beginning of the array
myArray.unshift("newFirstElement");

// Create an alert with the new first element
alert(myArray[0]);

// q4

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Insert "L" into the array between "M" and "XL"
sizes.splice(2, 0, "L");

// q5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Copy the first 3 sizes into a new array called regSizes
var regSizes = sizes.slice(0, 3);

// q6
var pets = ["dog", "cat", "ox", "duck", "frog"];

// Find the index of "dog"
var dogIndex = pets.indexOf("dog");

// Remove "cat", "ox", and "duck" using splice
pets.splice(dogIndex + 1, 3);

// Add two elements after "dog"
pets.splice(dogIndex + 1, 0, "hamster", "parrot");

// q7

var pets = ["dog", "cat", "ox", "duck", "frog"];

// Find the indices of "cat" and "ox"
var catIndex = pets.indexOf("cat");
var oxIndex = pets.indexOf("ox");

// Remove "cat" and "ox" using splice
pets.splice(catIndex, 1);
pets.splice(oxIndex - 1, 1);

// q8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// Find the indices of "duck" and "frog"
var duckIndex = pets.indexOf("duck");
var frogIndex = pets.indexOf("frog");

// Slice the array to keep only "duck" and "frog"
var reducedPets = pets.slice(duckIndex, frogIndex + 1);


// Chapter 17 - 20 (for Loops)

// 1. Loop running 10 times
for (var i = 0; i < 10; i++) {
    // Loop body
}

// 2. First line of a for loop running 12 times
for (var i = 0; i < 12; i++) {
    // Loop body
}

// 3. Missing characters in the code snippet

for (var i = 0; i <= 4; i++)

// 4. For loop with counter name not 'i', running 100 times
for (var j = 0; j < 100; j++) {
    // Loop body
}

// 5. For loop with counter and decrementing
for (var i = 3; i > 0; i--) {
    // Loop body
}

// 6. Assigning the number of elements in an array to a variable
// var count = array.length;

// 7. Setting a variable named "flag" with an initial Boolean value
var flag = true; // or false

// 8. For loop limiting the number of loops by array length
for (var i = 0; i < pets.length; i++) {
    // Loop body
}

// 9. For loop with counter displaying alert on second iteration
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
    }
    break;
}

// 10. For loop checking presence of user name in an array
var userNames = ["name1", "name2", "name3"];
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    } else {
        alert("Please write correct user name");
        break;
    }
}

// 11. Completing code to display an alert if a match isn't found
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }
// if (!matchFound) {
//     alert("Match not found");
// }

// 12. Nested loops and concatenation
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}
// chapter 17-20  ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
var multiArray = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// 3. Write a program to print numeric counting from 1 to 10:
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Write a program to print the multiplication table of any number using a for loop. Table number & length should be taken as input from the user:
var tableNumber = prompt("Enter the number for multiplication table:");
var tableLength = prompt("Enter the length of the multiplication table:");

for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
}

// 5. Write a program to print items of the following array using a for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. Generate the following series in your browser:
// a. Counting: 1 to 15
for (var i = 1; i <= 15; i++) {
    console.log(i);
}
// b. Reverse counting: 10 to 1
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
// c. Even: 0 to 20 (increment by 2)
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}
// d. Odd: 1 to 19 (increment by 2)
for (var i = 1; i <= 19; i += 2) {
    console.log(i);
}
// e. Series: 2k to 20k (increment by 2)
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}

// 7. Write a program to enable "search by user input" in an array:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:");
var found = false;

for (var i = 0; i < A.length; i++) {
    if (userInput === A[i]) {
        found = true;
        break;
    }
}

if (found) {
    alert("Item found in the list.");
} else {
    alert("Item not found in the list.");
}

// 8. Write a program to identify the largest number in the given array:
var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the given array:
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log("The smallest number is: " + smallest);

// 10. Write a program to print multiples of 5 ranging from 1 to 100:
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

