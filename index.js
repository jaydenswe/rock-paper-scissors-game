// Add function called getComputerChoice
function getComputerChoice() {
  // Use Math.random() to generate random number
  let x = Math.random();
  // Use conditional to return one choice
  let s = "Rock ";
  if (x > 0.5) {
    return s;
  }
}
// Use console.log to see if function works so far
console.log(getComputerChoice());