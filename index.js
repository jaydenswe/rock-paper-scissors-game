// Create variable to track human score
// let humanScore = 0;

// // Create variable to track computer score
// let computerScore = 0;

// // Create function named getComputerChoice
// function getComputerChoice() {
//   // Use Math.random() to generate random number
//   let x = Math.random();
//   // Use conditional to return one choice
//   let s = "Rock ";
//   if (x > 0.5) {
//     return s;
//   }
// }
// // Use console.log to see if function works so far
// console.log(getComputerChoice());

// // Create function named getHumanChoice
// function getHumanChoice() {
//   // Prompt user to obtain choice
//   let userInput = prompt("Enter your choice: ");
//   return userInput;
// }
// // Test to see if pop up appears for prompt
// console.log(getHumanChoice());

// Create function named playRound
function playRound(humanChoice) {
  // Make humanChoice case insensitive
  let userInput = humanChoice.toLowerCase();
  return userInput;
}

console.log(playRound("ROCK"));
