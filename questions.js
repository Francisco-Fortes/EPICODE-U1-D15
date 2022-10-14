// JS EXERCISES
// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John";
let y = "Doe";
console.log(x, " <> ", y);
// 22) Create an object with properties such name, surname, email
const person = {
  name: "",
  surname: "",
  email: "",
};
console.log(person);
// 23) Delete the email property from the previously created object
delete person.email;
console.log(person);
// 24) Create an array with 10 strings in it
const names = [
  "name1",
  "name2",
  "name3",
  "name4",
  "name5",
  "name6",
  "name7",
  "name8",
  "name9",
  "name10",
];
// 25) Print in the console every string from the previous array
console.log(names);
// 26) Create an array with 100 random numbers in it
const randomNumbersArray = Array(100)
  .fill()
  .map(() => Math.floor(Math.random() * 100)); // numbers from 0-50 (exclusive)
console.log(randomNumbersArray);
// 27) Write a function to get the maximum and minimum values from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays as parameters and returns the longest one
// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

// DOM EXERCISES
// 31) Get the element with an id of "container" from the page
const nodeContainer = document.getElementById("container");
// 32) Get every <td> element from the page
const nodeTd = document.querySelectorAll(td);
// 33) Use a loop for printing the text inside of every <td> element in the page
const everyTd = function () {
  for (let i = 0; i < nodeTd.length; i++) {
    console.log();
  }
};
// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// 36) Write a function to add a class of "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a unordered list
// 40) Write a function to empty a list
