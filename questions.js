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
  .map(() => Math.floor(Math.random() * 100));
console.log(randomNumbersArray);
//Another way to do it
// const randomNumbersArray = [];
// for (let i = 1; i<100; i++) {
//     randomNumbersArray.push(Math.floor(Math.random() * 100))
// }
// console.log(randomNumbersArray)
// 27) Write a function to get the maximum and minimum values from the previously created array
// cons maxMin

// 28) Create an array of arrays, in which every array has 10 random numbers
// WIP: Can I use to i's? the second for() is inside the first one
let arrayOfArrays = [];
for (let i = 0; i < 4; i++) {
  let secondaryArray = [];
  for (let i = 0; i < 10; i++) {
    secondaryArray.push(Math.floor(Math.random() * 10));
  }
  arrayOfArrays.push(secondaryArray);
}
console.log(arrayOfArrays);
// 29) Create a function that gets 2 arrays as parameters and returns the longest one
//WIP
const longestOne = function (array1, array2) {};
// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
//WIP
const highestSum = function (array1, array2) {};

// DOM EXERCISES
// 31) Get the element with an id of "container" from the page
const nodeContainer = document.getElementById("container");
// 32) Get every <td> element from the page
const nodeTd = document.querySelectorAll("td");
console.log(nodeTd);
// 33) Use a loop for printing the text inside of every <td> element in the page
const everyTd = function (input) {
  for (let i = 0; i < nodeTd.length; i++) {
    nodeTd[i].innerText = input;
  }
};
// 34) Write a function to change the heading of the page
const nodeH1 = document.querySelector(".h1");
// WIP: I could not make it work using only ("h1") and querySelectorAll 
const changeHeading = function (input) {
  nodeH1.innerText = input;
};
// 35) Write a function to add an extra row to the table
const nodeTable = document.querySelectorAll("#table");
// WIP: I could not make it work using only ("table") and querySelectorAll
const extraRow = function () {
  const row = document.createElement("tr");
  nodeTable.appendChild(row);
};
// 36) Write a function to add a class of "test" to each row in the table
const nodeTr = document.querySelectorAll("tr")
const addTestClass = function() {
    for (let i =1; i<nodeTr.length; i++) {
        nodeTr[i].classList.add("test")
    }
}
// 37) Write a function to add a red background to every link in the page
const nodeLinks = querySelectorAll("a")
const redBcLink = function () {
for (i = 0; i < nodeLinks.Length; i++) {
    nodeLinks[i].style.backgroundColor = red; 

  }
}
// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function() {
    console.log("Page loaded")
} 
// 39) Write a function to add new items to a unordered list
const nodeUl = document.getElementById("ul1");
      const newLi = function () {
        const nodeLi = document.createElement("li");
        nodeUl.appendChild(nodeLi);
        nodeLi.innerText = newLi;
    
// 40) Write a function to empty a list
//WIP: 
// const allLis = document.querySelectorAll("li")
// const removeAllLis = function () {
//     for ( let i = 1; i< allLis.length; i++) {
//         allLis.shift()
//     }
const nodeLists = document.querySelector(".lists");
const removeAllLis = function () {
    for (i = 0; i < nodeLists.Length; i++) {
      nodeLists.removeChild(nodeLists[i]);
    }
  }
