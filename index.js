// Create variable to track human score
let humanScore = 0;

// Create variable to track computer score
let computerScore = 0;

// Create function named getComputerChoice
function getComputerChoice() {
  // Use Math.random() to generate random number
  let x = Math.random();
// Create variables for all 3 choices  
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
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
  return userInput.toLowerCase();
}

// Create function named playRound
function playRound(humanChoice, computerChoice) {
  // Make humanChoice case insensitive
  const userInput = humanChoice;
  console.log(`User: ${userInput}`);
  // Create local variable for computerChoice
  const computerInput = computerChoice;
  console.log(`Computer: ${computerInput}`);
  // Create variables of choices
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  // Create variables of user and computer
  const user = "user";
  const computer = "computer";
  // Create winner variable and leave unassigned
  let winner;
  // Create result variable to store the final result
  let result = 0;
  // Use conditional to see if inputs are the same
  if (userInput === computerInput) {
    // if winner is not user and winner is not computer move to the next condition
    // Return tie if same inputs
    result = "Draw! No one wins.";
  }
  // else if userInput equals paper and computerInput equals rock, return result1
  else if (userInput == paper && computerInput == rock) {
    // if user wins assign user to winner
    winner = user;
    // if winner equal to user increment user score by 1 and log
    if (winner == user) {
      humanScore++;
    }
    result = `${user} wins! ${userInput} beats ${computerInput}.`;
  }
  // else if userInput equals rock and computerInput equals scissors, return resul1
  else if (userInput == rock && computerInput == scissors) {
    // assign user to winner
    winner = user;
    // if winner equal to user increment user score by 1 and log
    if (winner == user) {
      humanScore++;
    }
    result = `${user} wins! ${userInput} beats ${computerInput}.`;
  }  
  // else if userInput equals scissors and computerInput equals paper, return result 1
  else if (userInput == scissors && computerInput == paper) {
    // assign user to winner
    winner = user;
    // if winner equal to user increment user score by 1 and log
    if (winner == user) {
      humanScore++;
    }
    result = `${user} wins! ${userInput} beats ${computerInput}.`;
  }
  else {
    // assign computer to winner
    winner = computer;
    // if winner equal to computer increment computerscore by and log
    if (winner == computer) {
      computerScore++;
    }
    result = `${user} loses! ${computerInput} beats ${userInput}.`;
  }
  return result;
}

// Obtain elements of ui that will be updated
const btn = document.querySelectorAll("button");
const userPoints = document.getElementById("userValue");
const computerPoints = document.getElementById("computerValue");
const userChoiceText = document.getElementById("user-choice-inner");
const computerChoiceText = document.getElementById("computer-choice-inner"); 
const resultText = document.getElementById("result");
const resultFinalText = document.getElementById("final-result");

// Add functionality to loop through each button
btn.forEach((button) => {
  // Add event listeners for each button being clicked
  button.addEventListener("click", () => {
    // Obtain choices
    const playerChoice = button.value;
    const computerChoice = getComputerChoice();

    // Update choices based on the above
    userChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;

    // Play a round of the game and assign to result
    result = playRound(playerChoice, computerChoice);

    // Update scores based on result
    userPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;

    

    // Add condition to see if game should be ended at 5 points
    let finalWinnerUser = 'Final winner is user. Well done!'
    let finalWinnerComputer = 'Final winner is computer. Better luck next time!'
    if (humanScore === 5) {
      resultText.textContent = result;
      setTimeout(() => resultText.textContent = finalWinnerUser, 1000);
    }
    else if (computerScore === 5) {
      resultText.textContent = result;
      setTimeout(() => resultText.textContent = finalWinnerComputer, 1000);
    }
    else {
      // Add result text
    resultText.textContent = result;
    }
  });
});



