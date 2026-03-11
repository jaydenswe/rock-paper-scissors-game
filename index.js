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
  // Use conditional to see if inputs are the same
  if (userInput === computerInput) {
    // if winner is not user and winner is not computer move to the next condition
    if (winner != user && winner != computer) {
      return;
    }
    // Return tie if same inputs
    return console.log("Draw! No one wins.")
  }
  // else if userInput equals paper and computerInput equals rock, return result1
  else if (userInput == paper && computerInput == rock) {
    // if user wins assign user to winner
    winner = user;
    // if winner equal to user increment user score by 1 and log
    if (winner == user) {
      humanScore++;
      console.log(`Score: user ${humanScore}`);
    }
    return console.log(`${user} wins! ${userInput} beats ${computerInput}.`);
  }
  // else if userInput equals rock and computerInput equals scissors, return resul1
  else if (userInput == rock && computerInput == scissors) {
    // assign user to winner
    winner = user;
    // if winner equal to user increment user score by 1 and log
    if (winner == user) {
      humanScore++;
      console.log(`Score: user ${humanScore}`);
    }
    return console.log(`${user} wins! ${userInput} beats ${computerInput}.`);
  }  
  // else if userInput equals scissors and computerInput equals paper, return result 1
  else if (userInput == scissors && computerInput == paper) {
    // assign user to winner
    winner = user;
    // if winner equal to user increment user score by 1 and log
    if (winner == user) {
      humanScore++;
      console.log(`Score: user ${humanScore}`);
    }
    return console.log(`${user} win! ${userInput} beats ${computerInput}.`);
  }
  else {
    // assign computer to winner
    winner = computer;
    // if winner equal to computer increment computerscore by and log
    if (winner == computer) {
      computerScore++;
      console.log(`Score: computer ${computerScore}`);
    }
    return console.log(`${user} loses! ${computerInput} beats ${userInput}.`);
  }
}

// Create function named playGame
function playGame(times) {
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
    // Use conditional to see if inputs are the same
    if (userInput === computerInput) {
      // if winner is not user and winner is not computer move to the next condition
      if (winner != user && winner != computer) {
        console.log("Draw! No one wins")
        return;
      }
      // Return tie if same inputs
      return console.log("Draw! No one wins.")
    }
    // else if userInput equals paper and computerInput equals rock, return result1
    else if (userInput == paper && computerInput == rock) {
      // if user wins assign user to winner
      winner = user;
      // if winner equal to user increment user score by 1 and log
      if (winner == user) {
        humanScore++;
        console.log(`Score: user ${humanScore}`);
      }
      return console.log(`${user} wins! ${userInput} beats ${computerInput}.`);
    }
    // else if userInput equals rock and computerInput equals scissors, return resul1
    else if (userInput == rock && computerInput == scissors) {
      // assign user to winner
      winner = user;
      // if winner equal to user increment user score by 1 and log
      if (winner == user) {
        humanScore++;
        console.log(`Score: user ${humanScore}`);
      }
      return console.log(`${user} wins! ${userInput} beats ${computerInput}.`);
    }  
    // else if userInput equals scissors and computerInput equals paper, return result 1
    else if (userInput == scissors && computerInput == paper) {
      // assign user to winner
      winner = user;
      // if winner equal to user increment user score by 1 and log
      if (winner == user) {
        humanScore++;
        console.log(`Score: user ${humanScore}`);
      }
      return console.log(`${user} win! ${userInput} beats ${computerInput}.`);
    }
    else {
      // assign computer to winner
      winner = computer;
      // if winner equal to computer increment computerscore by and log
      if (winner == computer) {
        computerScore++;
        console.log(`Score: computer ${computerScore}`);
      }
      return console.log(`${user} loses! ${computerInput} beats ${userInput}.`);
    }
  }
  // Loop playRound 5 times
  for (i = 0; i < times; i++) {
      // Add variables to call choice functions
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

  // call playRound function to use variables created
  playRound(humanSelection, computerSelection);
  }
}
playGame(5);