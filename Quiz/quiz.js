// let score = 0;
// //To calculate the value of the score score/questions.lenght
// const nodeQuestion = document.getElementById("question");
// // function question() {
// //   for (let i = 0; i < questions.length; i++) {
// //     nodeQuestion.innertext = questions[i].question;
// //     if (response == questions[i]) {
// //     }
// //   }

// // for( let i = 0; i<question.length;i++)

// //Show the fisrt question only
// //   nodeQuestion.innertext = questions.findIndex(whatever, index);
// //   return whatever.question;
// //   console.log()
// // }
// // const nodeAnswers = document.querySelectorAll(".answers");
// // console.log(nodeAnswers);
// // nodeAnswers.text;

// const answerDisplay1 = document.getElementById("answer1");
// const answerDisplay2 = document.getElementById("answer2");
// const answerDisplay3 = document.getElementById("answer3");
// const answerDisplay4 = document.getElementById("answer4");
// const submitButton = document.getElementById("submit");
// // const answers

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
/*
window.onload = function () {}
  // HINTS
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // For each question, create a container for wrapping it; then create a radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // with, as options, both the correct answer and the incorrect ones
  // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
  //
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display the first question with the text and the radio buttons
  // when the user selects an answer, pick the next question from the array and replace the old one with it
  // saving the user's choice in a variable


// How to calculate the result? You can do it in 2 ways:
// If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
*/

const nodeAnswers = document.getElementById("answer-container");
const createButtons = function () {
  //if it is true or false only needs to create two buttons
  for (i = 0; i < arrayOfMergedAnswers.length; i++) {
    let allButtons = document.createElement("button");
    nodeAnswers.appendChild(allButtons);
    allButtons.classList.add("answers-buttons");
    allButtons.innerText = arrayOfMergedAnswers[i];
  }
};

//Generating a random number
let randomNumber = Math.floor(Math.random() * questions.lenght);

//Mixing correct and incorrect answers in one array
let arrayOfMergedAnswers = [];
const mergeAnswers = function () {
  for (i = 0; i < incorrect_answers.length; i++) {
    arrayOfMergedAnswers.push(questions.incorrect_answer);
  }
  arrayOfMergedAnswers.push(questions.correct_answers);
};

// Anadir eventListener a cada boton y saber que respondio
//Comparar con if statement
//if {(selectedAnswer === correct_answer)score++} else {console.log("wrong answer")}
const isTheAnswerCorrect = function (event) {
  let selectedAnswer = event.target;
  if (selectedAnswer === )
};
//Aplicar clase a cada boton when selected y quitarla cuando seleccionas otra
//
