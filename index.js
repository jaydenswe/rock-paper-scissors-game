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
    return scissors;
  }
  // Else if x is greater than zero and less than or equal to 0.5 return rock
  else if (x > 0 && x <= 0.5) {
    return rock;
  }
  // Else return paper
  else {
    return paper;
  }
}

// Create function named getHumanChoice
function getHumanChoice() {
  // Prompt user to obtain choice
  let userInput = prompt("Enter your choice: ");
  return console.log(userInput.toLowerCase());
}

// Create function named playRound
function playRound(humanChoice, computerChoice) {
  // Make humanChoice case insensitive
  let userInput = humanChoice.toLowerCase();
  // Create local variable for computerChoice
  let computerInput = computerChoice;
  // Create variables of choices
  let rock = "rock";
  let paper = "paper";
  // Create one result scenario if paper beats rock 
  let result1 = `You win! ${userInput} beats ${computerInput}`
  // Use conditional to see if userInput equals 'paper'
  if (userInput === paper && computerInput === rock) {
    // Return result1 if paper beats rock
    return console.log(result1);
  }
  // Return result string in console
}

// Add variables to call choice functions
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// call playRound function to use variables created
playRound(humanSelection, computerSelection);