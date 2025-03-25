// Guess the number from 1-10
let guessNumber = parseInt(prompt("Guess a number between 1 and 10: "));
//see the correct answer
const correctAnswer = 3;

// Check the guess number to see if it's correct
if (guessNumber > correctAnswer) {
  console.log("too high!");
} else if (guessNumber < correctAnswer) {
  console.log("too low!");
} else {
  console.log("Correct!");
}