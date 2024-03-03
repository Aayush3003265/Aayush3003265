// exercise 1: guess the num Game
const prompt = require("prompt-sync")();
let randomNum = Math.floor(Math.random() * 100 + 1);
let guessNum;
let chances = 0;
do {
  guessNum = prompt("Guess the number between 1 to 100 :");
  guessNum = Number.parseInt(guessNum);
  if (guessNum > 100) {
    console.log("please enter a number between 1 to 100");
  } else if (guessNum > randomNum) {
    console.log("you have entered a greater number");
  } else if (guessNum < randomNum) {
    console.log("you have entered a smaller number");
  } else {
    console.log("BOOM ! you have entered correct number");
  }
  chances++;
} while (randomNum != guessNum);
console.log(`you have tried ${chances} time`);
console.log(`you have score ${100 - chances} points`);
// console.log(randomNum);

// const prompt = require("prompt-sync")();
// let randomNum = Math.floor(Math.random() * 100 + 1);
// let guessNum;
// do {
//   guessNum = prompt(
//     "enter the number between 1 to 100 and i will give you your guessed answer :",
//   );
//   guessNum = Number.parseInt(guessNum);
//   if (guessNum > 100) {
//     console.log("please enter a number between 1 to 100");
//   } else if (guessNum > guessNum) {
//     console.log("you have entered a greater number");
//   } else if (guessNum < guessNum) {
//     console.log("you have entered a smaller number");
//   } else {
//     console.log("BOOM ! you have entered correct number");
//   }
// } while (guessNum != guessNum);
// console.log(`your guess is ${guessNum}`);
