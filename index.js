// Create variable to track human score
let humanScore = 0;

// Create variable to track computer score
let computerScore = 0;

// Create function named getComputerChoice
function getComputerChoice() {
  // Use Math.random() to generate random number
  let x = Math.random();
  console.log(x);
// Create variables for all 3 choices  
  let rock = "rock ";
  let paper = "paper ";
  let scissors = "scissors ";
// Use conditional to return choices
  // if x is equal to 0 return scissors
  if (x == 0) {
    return console.log(scissors);
  }
  // Else if x is greater than zero and less than or equal to 0.5 return rock
  else if (x > 0 && x <= 0.5) {
    return console.log(rock);
  }
  // Else return paper
  else {
    return console.log(paper);
  }
}
console.log("1")

// Create function named getHumanChoice
function getHumanChoice() {
  // Prompt user to obtain choice
  let userInput = prompt("Enter your choice: ");
  return console.log(userInput.toLowerCase());
}
console.log("2")

// Create function named playRound
function playRound(humanChoice, computerChoice) {
  // Make humanChoice case insensitive
  let userInput = humanChoice;
  // Create local variable for computerChoice
  let computerInput = computerChoice;
  // Create variables of choices
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  // Create one result scenario if paper beats rock 
  let result1 = `You win! ${userInput} beats ${computerInput}`;
  let result2 = `You lose! ${computerInput} beats ${userInput}`;
  // Create result for tie
  let tie = `No one wins! ${userInput} = ${computerInput}`;
  // Use conditional to see if inputs are the same
  if (userInput === computerInput) {
    // Return tie if same inputs
    return console.log(tie);
  }
  // else if userInput equals paper and computerInput equals rock, return result1
  else if (userInput == paper && computerInput == rock) {
    return console.log(result1);
  }
  // else if userInput equals rock and computerInput equals scissors, return result 1
  else if (userInput == rock && computerInput == scissors) {
    return console.log(result1);
  }  
  // else if userInput equals scissors and computerInput equals paper, return result 1
  else if (userInput == scissors && computerInput == paper) {
    return console.log(result1);
  }
  else {
    return console.log(result2);
  }
}

// Add variables to call choice functions
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// call playRound function to use variables created
playRound(humanSelection, computerSelection);