//getRandomInt from 0 to max.
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
// getComputerChoice of rock, paper or scissors.
function getComputerChoice() {
  //generate a random integer from 0 to 3
  const randomInt = getRandomInt(3);
  //initialize string variable computerChoice.
  let computerChoice = '';
  //if randomInt is 0 set computerChoice to 'rock'.
  if (randomInt === 0) {
    computerChoice = 'rock';
  }
  //if randomInt is 0 set computerChoice to 'paper'.
  else if (randomInt === 1) {
    computerChoice = 'paper';
  }
  //if randomInt is 0 set computerChoice to 'scissors'.
  else {
    computerChoice = 'scissors';
  }
  //return value of computerChoice
  return computerChoice;
}

//getHumanChoice of rock, paper or scissors.
function getHumanChoice() {
  //initialize string variable userChoice.
  let userChoice = '';
  //prompt user for choice.
  userChoice = prompt('Make your choice (rock, paper or scissors)?');
  //set userChoice to lowercase.
  userChoice = userChoice.toLowerCase()
  //check for valid choice(rock, paper or scissors).
  if (userChoice === 'rock' 
  || userChoice === 'paper' 
  || userChoice === 'scissors') {
    //return userChoice if valid
    return userChoice
  } else {
    //retry until userChoice is valid
    alert('Input is wrong please try again. Valid inputs are rock, paper or scissors.')
    return getHumanChoice();
  }
}

//initialize integer variable humanScore set value to 0
let humanScore = 0;
//initialize integer variable computerScore set value to 0
let computerScore = 0;

//playRound play a single round, increment score and log winner.
function playRound() {
  //initialize string constant humanChoice set to getHumanChoice.
  const humanChoice = getHumanChoice();
  //initialize string constant computerChoice set to getComputerChoice.
  const computerChoice = getComputerChoice();
  console.log('human: ' + humanChoice);
  console.log('computer: ' + computerChoice);
  //check for a draw log a draw.
  if (humanChoice === computerChoice) {
    console.log("It's a Draw.")
  }
  //check if human wins increment humanScore and log human win.
  //otherwise increment computerScore and log human loss.
}

playRound();